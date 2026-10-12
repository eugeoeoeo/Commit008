# Database Administration (COMP 008) Reviewer Web Application - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, interactive, modern, and student-friendly Reviewer Web App for the Polytechnic University of the Philippines (PUP) Database Administration course (COMP 008 by Florencio V. Contreras Jr.), featuring verbatim lesson content, key takeaways, exam tips, per-lesson 10–20 item quizzes and lab activities, a 100-item practice exam (MCQ, Identification, True/False), and an interactive 5–6 table SQL ERD laboratory exam with real in-browser query execution and verification.

**Architecture:** A high-performance single-page application built with React and Vite. Includes a bottom navigation bar optimized for webapp/mobile usage, a desktop-responsive layout, a modular state store for learning progress/quiz history in localStorage, and an integrated in-browser SQL query execution engine (AlaSQL / custom relational evaluator) capable of evaluating MySQL `SELECT`, `JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `WHERE`, `AND`, `OR`, `ORDER BY`, and `GROUP BY` queries against sample relational datasets with interactive visual ERD diagrams.

**Tech Stack:** React 18/19, Vite, Vanilla CSS (custom design system with modern dark/cyber-slate aesthetic, PUP accents, glassmorphism), AlaSQL / SQL engine, Lucide React icons, and Vitest for unit testing.

**Spec:** The learning material from *COMPUTER PROGRAMMING 008: DATABASE ADMINISTRATION* by Florencio V. Contreras Jr., CCIS, Polytechnic University of the Philippines.

---

## Global Constraints
- **Verbatim Accuracy**: Theoretical questions, quiz items, and identification questions must strictly adhere to the exact wording and definitions of Florencio V. Contreras Jr.'s instructional material without unauthorized paraphrasing.
- **Distractor Balance**: Multiple Choice options must be balanced in length, grammatical form, and plausibility so the correct answer never stands out artificially.
- **Gradual & Open Progression**: Lessons can be studied sequentially with progress tracking, while remaining 100% accessible at any time for student autonomy.
- **Laboratory Examination Realism**: The lab exam must present a 5–6 table ERD diagram with relationship lines and column definitions, specify a 6–8 column target output, declare required query clauses (e.g., LEFT JOIN, RIGHT JOIN, ORDER BY, WHERE) without giving hints, and evaluate actual query execution results against the expected dataset.
- **Web App / Mobile First Navigation**: Bottom navigation bar for mobile/webapp viewports, seamless responsive layout for tablets and desktops, offline progress persistence in localStorage.

---

## Review Focus
1. **Verbatim Fidelity & Answer Keys**: Ensure all quiz and exam questions match the module's exact definitions (e.g., Donald D. Chamberlin & Raymond F. Boyce, Edgar Frank Codd, 1970s IBM, 5 DBMS key functions, 8 DBMS advantages, table elements, 3 database categories).
2. **SQL Query Engine Joins**: Ensure MySQL JOIN operations (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and table aliases) evaluate accurately in-browser and return matching column names, row counts, and sorted orders.
3. **Lab Exam Grading Logic**: Ensure query validation verifies both the output dataset (columns and rows) and the structural presence of required clauses (e.g. `LEFT JOIN`, `ORDER BY`) without failing on whitespace or case differences.
4. **State Persistence**: Progress, quiz scores, and exam attempts must survive page reloads and browser restarts via localStorage.
5. **Responsive Bottom Bar Ergonomics**: Ensure bottom navigation bar does not obstruct content or input elements, especially on mobile devices and virtual keyboards.

---

## Task Breakdown

### Task 1: Project Scaffolding & Design System Foundations
**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`
- Create: `src/main.jsx`, `src/App.jsx`
- Create: `src/index.css` (design system tokens, typography, dark mode, mobile bottom nav styles)
- Test: `tests/setup.test.js`

**Interfaces:**
- Produces: Base running Vite application with responsive shell layout and bottom navigation bar.

- [ ] **Step 1: Write setup test**
- [ ] **Step 2: Scaffold Vite project and dependencies (react, lucide-react, alasql)**
- [ ] **Step 3: Implement core CSS design system with bottom navigation bar, modern cyber-academic aesthetic**
- [ ] **Step 4: Verify test runs and passes**
- [ ] **Step 5: Verify build succeeds**

---

### Task 2: Verbatim Curriculum Data Layer (Modules 1 to 5)
**Files:**
- Create: `src/data/modulesData.js`
- Create: `src/data/quizzesData.js`
- Create: `src/data/labActivitiesData.js`
- Test: `tests/curriculumData.test.js`

**Interfaces:**
- Produces:
  - `modulesData`: All 5 modules, 15 lessons complete with verbatim text, key takeaways, and exam tips.
  - `quizzesData`: 10–20 verbatim quiz items per lesson with balanced distractors.
  - `labActivitiesData`: Interactive coding lab specifications per lesson.

- [ ] **Step 1: Write validation test for curriculum data completeness and question counts**
- [ ] **Step 2: Implement verbatim Module 1 (DBMS fundamentals, table elements, 3 categories, key functions, DBMS types, 8 advantages)**
- [ ] **Step 3: Implement verbatim Module 2 (SQL basics, Chamberlin & Boyce, non-procedural nature, all data types, null values, monitor commands)**
- [ ] **Step 4: Implement verbatim Module 3 (CRUD statements, Access vs raw SQL, DDL/DQL/DML/DCL/TCL commands)**
- [ ] **Step 5: Implement verbatim Module 4 (MySQL SELECT, ORDER BY ASC/DESC, WHERE, operators, short-circuit, AND/OR precedence)**
- [ ] **Step 6: Implement verbatim Module 5 (INNER JOIN, LEFT JOIN, RIGHT JOIN, USING clause, Venn logic, finding unmatched rows)**
- [ ] **Step 7: Run verification tests to ensure 100% data integrity**

---

### Task 3: 100-Item Practice Examination & Verbatim Bank
**Files:**
- Create: `src/data/examData.js`
- Test: `tests/examData.test.js`

**Interfaces:**
- Produces:
  - Part 1: Multiple Choice Questions (40 items) - balanced options, verbatim definitions
  - Part 2: Identification Questions (30 items) - verbatim text descriptions, flexible matching
  - Part 3: True or False Questions (30 items) - verbatim core statements
  - Part 4: Major Laboratory Exam (5–6 tables schema, ERD definitions, target results)

- [ ] **Step 1: Write test verifying exact 100 items structure, question types, and key answers**
- [ ] **Step 2: Construct 40 MCQ questions with balanced distractors**
- [ ] **Step 3: Construct 30 Identification questions with primary and accepted answers**
- [ ] **Step 4: Construct 30 True or False questions based on syllabus facts**
- [ ] **Step 5: Verify all 100 theoretical items and run test to ensure validity**

---

### Task 4: In-Browser SQL Execution Engine & Lab Simulator
**Files:**
- Create: `src/utils/sqlEngine.js`
- Create: `src/data/databaseSchemas.js`
- Test: `tests/sqlEngine.test.js`

**Interfaces:**
- Produces:
  - `executeUserQuery(sql, schemaName)`: Executes SQL query against in-memory dataset, returns result set or error.
  - `gradeLabSubmission(userSql, userResult, expectedResult, requiredClauses)`: Evaluates query accuracy and required SQL constructs without hints.
  - Multi-table database schema with 5–6 interconnected tables: `customers`, `employees`, `offices`, `orders`, `orderdetails`, `products`, `productlines`.

- [ ] **Step 1: Write unit tests for SQL execution (SELECT, WHERE, ORDER BY, INNER JOIN, LEFT JOIN, RIGHT JOIN)**
- [ ] **Step 2: Implement SQL engine utility wrapping AlaSQL with custom MySQL compatibility shims**
- [ ] **Step 3: Create full relational seed tables (5–6 tables with realistic foreign key relationships)**
- [ ] **Step 4: Implement strict query validator checking required clauses without revealing solutions**
- [ ] **Step 5: Verify all unit tests pass**

---

### Task 5: Interactive UI Components
**Files:**
- Create: `src/components/BottomNav.jsx`
- Create: `src/components/Header.jsx`
- Create: `src/components/LessonViewer.jsx`
- Create: `src/components/QuizModal.jsx`
- Create: `src/components/LabConsole.jsx`
- Create: `src/components/ErdViewer.jsx` (interactive SVG ERD with table boxes, keys, and connection lines)
- Create: `src/components/ExamEngine.jsx`
- Create: `src/components/ProgressDashboard.jsx`

**Interfaces:**
- Produces: Polished interactive components conforming to Frontend Design principles, responsive webapp bottom navigation bar, and state management.

- [ ] **Step 1: Build responsive layout with bottom navigation bar and mobile view adjustments**
- [ ] **Step 2: Build LessonViewer with tabbed Lesson Content, Key Takeaways, Tips, Quiz launcher, and Lab launcher**
- [ ] **Step 3: Build QuizModal with instant feedback, explanations, and score tracking**
- [ ] **Step 4: Build ErdViewer SVG component displaying 5–6 tables with clear primary/foreign key connections**
- [ ] **Step 5: Build LabConsole with code editor, run button, live results table, target comparison, and feedback**
- [ ] **Step 6: Build ExamEngine with timer, question navigator, 100-item flow, lab section, and comprehensive results breakdown**

---

### Task 6: Progress Tracking & Persistence Layer
**Files:**
- Create: `src/utils/storage.js`
- Modify: `src/App.jsx`
- Test: `tests/storage.test.js`

**Interfaces:**
- Produces:
  - LocalStorage tracking for completed lessons, quiz scores, exam attempts, bookmarks, and lab solutions.
  - Reset and export/import progress capabilities.

- [ ] **Step 1: Write storage utility tests**
- [ ] **Step 2: Implement reactive state and persistence hooks**
- [ ] **Step 3: Connect dashboard statistics (completion percentage, accuracy, exam readiness index)**
- [ ] **Step 4: Verify persistence across simulated reloads**

---

### Task 7: End-to-End Browser Verification & Playwright Testing
**Files:**
- Test with native `browser_subagent` and Playwright scripts
- Verify: Full lesson flow, quiz completion, lab exercise execution, 100-item exam completion, ERD rendering, bottom nav interactivity.

- [ ] **Step 1: Launch dev server on local port**
- [ ] **Step 2: Run end-to-end browser subagent to interactively verify the application**
- [ ] **Step 3: Verify all quizzes, exams, and lab grader functions**
- [ ] **Step 4: Verify mobile web app responsiveness and bottom navigation ergonomics**
- [ ] **Step 5: Generate and review test report artifacts**
