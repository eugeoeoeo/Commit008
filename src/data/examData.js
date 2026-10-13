// COMP 008 Examination Master Module
// Provides the master pool of 205 questions and dynamic sampler for 100-item practice exams.

import { EXAM_POOL } from './examPool.js';
import { generateExamSession, seededShuffle } from '../utils/examSampler.js';

export { EXAM_POOL } from './examPool.js';
export { generateExamSession } from '../utils/examSampler.js';

// Canonical 100-item exam with evenly balanced option distribution
export const EXAM_DATA = generateExamSession(true);
