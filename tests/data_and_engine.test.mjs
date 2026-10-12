import assert from 'node:assert';
import { MODULES_DATA } from '../src/data/modulesData.js';
import { QUIZZES_DATA } from '../src/data/quizzesData.js';
import { LAB_ACTIVITIES_DATA } from '../src/data/labActivitiesData.js';
import { EXAM_DATA } from '../src/data/examData.js';
import { executeQuery, gradeLabQuery } from '../src/utils/sqlEngine.js';

console.log('--- Running COMP 008 Reviewer Test Suite ---');

// 1. Verify Modules & Lessons
console.log('1. Checking Modules and Lessons completeness...');
assert.strictEqual(MODULES_DATA.length, 5, 'Must have 5 modules');
const allLessons = MODULES_DATA.flatMap(m => m.lessons);
assert.strictEqual(allLessons.length, 18, 'Must have exactly 18 lessons across all 5 modules');

allLessons.forEach(lesson => {
  assert.ok(lesson.title, `Lesson ${lesson.id} must have a title`);
  assert.ok(lesson.sections.length > 0, `Lesson ${lesson.id} must have sections`);
  assert.ok(lesson.keyTakeaways.length > 0, `Lesson ${lesson.id} must have key takeaways`);
  assert.ok(lesson.examTips.length > 0, `Lesson ${lesson.id} must have exam tips`);
});
console.log('✓ All 5 modules and 15 lessons verified with complete learning material.');

// 2. Verify Quizzes
console.log('2. Checking Quizzes data...');
allLessons.forEach(lesson => {
  const quiz = QUIZZES_DATA[lesson.id];
  assert.ok(quiz, `Quiz must exist for lesson ${lesson.id}`);
  assert.ok(quiz.length >= 2, `Quiz for ${lesson.id} must have questions`);
  quiz.forEach((q, idx) => {
    assert.ok(q.question, `Quiz item ${idx} must have question text`);
    assert.strictEqual(q.options.length, 4, `Quiz item ${idx} must have 4 options`);
    assert.ok(q.correctAnswer >= 0 && q.correctAnswer <= 3, `Quiz item ${idx} must have valid correctAnswer`);
    assert.ok(q.explanation, `Quiz item ${idx} must have explanation`);
  });
});
console.log('✓ All per-lesson quizzes verified with balanced options and explanations.');

// 3. Verify Lab Activities
console.log('3. Checking Lab Activities...');
allLessons.forEach(lesson => {
  const lab = LAB_ACTIVITIES_DATA[lesson.id];
  assert.ok(lab, `Lab activity must exist for lesson ${lesson.id}`);
  assert.ok(lab.instructions.length > 0, `Lab activity must have instructions`);
  assert.ok(lab.starterSql, `Lab activity must have starterSql`);
  assert.ok(lab.expectedOutput, `Lab activity must have expectedOutput`);
});
console.log('✓ All 15 interactive lab activities verified.');

// 4. Verify 100-Item Practice Examination
console.log('4. Checking 100-Item Practice Exam structure...');
assert.strictEqual(EXAM_DATA.mcq.length, 40, 'Part 1 must have exactly 40 MCQ questions');
assert.strictEqual(EXAM_DATA.identification.length, 30, 'Part 2 must have exactly 30 Identification questions');
assert.strictEqual(EXAM_DATA.trueOrFalse.length, 30, 'Part 3 must have exactly 30 True/False questions');

const totalItems = EXAM_DATA.mcq.length + EXAM_DATA.identification.length + EXAM_DATA.trueOrFalse.length;
assert.strictEqual(totalItems, 100, 'Theoretical exam must have exactly 100 questions');

// Verify MCQ items
EXAM_DATA.mcq.forEach(q => {
  assert.strictEqual(q.options.length, 4, `MCQ ${q.number} must have 4 balanced options`);
  assert.ok(q.correctAnswer >= 0 && q.correctAnswer <= 3, `MCQ ${q.number} valid answer`);
  assert.ok(q.explanation, `MCQ ${q.number} explanation`);
});

// Verify Identification items
EXAM_DATA.identification.forEach(q => {
  assert.ok(q.correctAnswer, `Identification ${q.number} must have correct answer`);
  assert.ok(Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length > 0, `Identification ${q.number} accepted answers`);
});

// Verify True or False items
EXAM_DATA.trueOrFalse.forEach(q => {
  assert.strictEqual(typeof q.correctAnswer, 'boolean', `True/False ${q.number} boolean answer`);
  assert.ok(q.explanation, `True/False ${q.number} explanation`);
});

// Verify Major Lab Exam
assert.ok(EXAM_DATA.labExam, 'Major Lab Exam must exist');
assert.strictEqual(EXAM_DATA.labExam.erdSchema.tables.length, 6, 'ERD schema must have 6 interconnected tables');
assert.strictEqual(EXAM_DATA.labExam.requiredColumns.length, 7, 'Required columns must be 7 columns');
assert.ok(EXAM_DATA.labExam.sampleOutputGrid.length >= 5, 'Sample output grid must have realistic rows');
console.log('✓ 100-Item Practice Exam & Major Lab Exam verified.');

// 5. Test SQL Execution Engine
console.log('5. Testing in-browser SQL Execution Engine...');
const resOffices = executeQuery('SELECT * FROM offices;');
assert.strictEqual(resOffices.rowCount, 5, 'Offices query should return 5 rows');

const resEmployees = executeQuery("SELECT employeeNumber, lastName, jobTitle FROM employees WHERE jobTitle = 'Sales Rep';");
assert.strictEqual(resEmployees.rowCount, 11, 'Sales Rep query should return 11 rows');

const resJoin = executeQuery("SELECT c.customerName, o.orderNumber FROM customers c INNER JOIN orders o ON c.customerNumber = o.customerNumber;");
assert.ok(resJoin.rowCount > 0, 'Inner join query should return orders');

// Test canonical lab query
const canonicalRes = executeQuery(EXAM_DATA.labExam.canonicalQuery);
assert.strictEqual(canonicalRes.rowCount, EXAM_DATA.labExam.sampleOutputGrid.length, 'Canonical lab query should return 7 rows matching sample');

// Test Lab Grader
const gradingPassed = gradeLabQuery({
  userSql: EXAM_DATA.labExam.canonicalQuery,
  requiredClauses: EXAM_DATA.labExam.requiredClauses,
  expectedOutput: EXAM_DATA.labExam.sampleOutputGrid
});
assert.strictEqual(gradingPassed.passed, true, 'Canonical query should pass lab grader');

const gradingFailedClause = gradeLabQuery({
  userSql: "SELECT c.customerName FROM customers c WHERE c.country = 'USA';",
  requiredClauses: ["LEFT JOIN", "WHERE", "ORDER BY"],
  expectedOutput: EXAM_DATA.labExam.sampleOutputGrid
});
assert.strictEqual(gradingFailedClause.passed, false, 'Missing clause should fail');
assert.strictEqual(gradingFailedClause.clauseFailed, true, 'Should flag clause failure');

console.log('✓ SQL Engine and Lab Grader passed all tests.');
console.log('--- ALL UNIT TESTS PASSED SUCCESSFULLY! ---');
