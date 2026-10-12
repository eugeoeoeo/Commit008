import { executeQuery } from '../src/utils/sqlEngine.js';
import { EXAM_DATA } from '../src/data/examData.js';

const res = executeQuery(EXAM_DATA.labExam.canonicalQuery);
console.log(JSON.stringify(res.rows, null, 2));
