// Utility for dynamic sampling and option shuffling from the 205+ item EXAM_POOL.
// Strictly guarantees 100 total theoretical items (40 MCQ, 30 Identification, 30 True/False)
// and eliminates any positional answer bias (e.g., 'always B') via Fisher-Yates shuffling.

import { EXAM_POOL } from '../data/examPool.js';

// Standard Fisher-Yates shuffle
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Pseudo-random seeded shuffle for reproducible canonical datasets
export function seededShuffle(array, seed = 42) {
  const arr = [...array];
  let s = seed;
  const nextRandom = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Draws a fresh 100-item practice exam from the 205-question EXAM_POOL.
 * - 40 MCQs from pool of 95 (with options A, B, C, D dynamically shuffled)
 * - 30 Identification from pool of 55
 * - 30 True or False from pool of 55
 * - Part 4 Major Lab Exam attached
 * @param {boolean} seeded - whether to use deterministic seed (for test consistency)
 */
export function generateExamSession(seeded = false) {
  const shuffler = seeded ? (arr) => seededShuffle(arr, 12345) : shuffleArray;

  // 1. Sample 40 MCQs
  const sampledMcqRaw = shuffler(EXAM_POOL.mcq).slice(0, 40);
  const sampledMcq = sampledMcqRaw.map((q, idx) => {
    const correctText = q.options[q.correctAnswer];
    const shuffledOptions = shuffler(q.options);
    const newCorrectAnswer = shuffledOptions.indexOf(correctText);

    return {
      ...q,
      number: idx + 1,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    };
  });

  // 2. Sample 30 Identification items
  const sampledIdRaw = shuffler(EXAM_POOL.identification).slice(0, 30);
  const sampledId = sampledIdRaw.map((q, idx) => ({
    ...q,
    number: 41 + idx
  }));

  // 3. Sample 30 True/False items
  const sampledTfRaw = shuffler(EXAM_POOL.trueOrFalse).slice(0, 30);
  const sampledTf = sampledTfRaw.map((q, idx) => ({
    ...q,
    number: 71 + idx
  }));

  return {
    sessionId: 'session-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
    mcq: sampledMcq,
    identification: sampledId,
    trueOrFalse: sampledTf,
    labExam: EXAM_POOL.labExam
  };
}
