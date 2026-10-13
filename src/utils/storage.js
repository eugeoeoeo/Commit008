// Device-Specific Local Storage Persistence for PUP COMP 008 Reviewer

const STORAGE_KEY = 'pup_comp008_device_profile_v1';

const defaultState = {
  profile: {
    studentName: 'Student',
    studentNumber: '',
    deviceId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'dev-' + Date.now(),
    createdDate: new Date().toISOString()
  },
  completedLessons: {}, // { [lessonId]: boolean }
  quizScores: {},       // { [lessonId]: { score: number, total: number, percentage: number, date: string } }
  labCompleted: {},     // { [lessonId]: boolean }
  examAttempts: [],     // array of { date, mcqScore, idScore, tfScore, totalScore, passed, timeSpentSec }
  bookmarks: [],        // array of question IDs or lesson IDs
  lastActiveTab: 'home',
  lastActiveLesson: 'm1-l1'
};

export function loadUserProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveUserProgress(defaultState);
      return defaultState;
    }
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      profile: { ...defaultState.profile, ...(parsed.profile || {}) }
    };
  } catch (err) {
    console.warn('Could not read user progress from device local storage', err);
    return defaultState;
  }
}

export function saveUserProgress(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('Could not save user progress to device local storage', err);
  }
}

export function updateStudentProfile(profileData) {
  const current = loadUserProgress();
  current.profile = { ...current.profile, ...profileData };
  saveUserProgress(current);
  return current;
}

export function markLessonComplete(lessonId) {
  const current = loadUserProgress();
  current.completedLessons[lessonId] = true;
  saveUserProgress(current);
  return current;
}

export function saveQuizResult(lessonId, score, total) {
  const current = loadUserProgress();
  const percentage = Math.round((score / total) * 100);
  current.quizScores[lessonId] = {
    score,
    total,
    percentage,
    date: new Date().toISOString()
  };
  if (percentage >= 75) {
    current.completedLessons[lessonId] = true;
  }
  saveUserProgress(current);
  return current;
}

export function markLabComplete(lessonId) {
  const current = loadUserProgress();
  current.labCompleted[lessonId] = true;
  saveUserProgress(current);
  return current;
}

export function saveExamAttempt(attempt) {
  const current = loadUserProgress();
  current.examAttempts.unshift({
    ...attempt,
    date: new Date().toISOString()
  });
  saveUserProgress(current);
  return current;
}

export function toggleBookmark(id) {
  const current = loadUserProgress();
  const index = current.bookmarks.indexOf(id);
  if (index >= 0) {
    current.bookmarks.splice(index, 1);
  } else {
    current.bookmarks.push(id);
  }
  saveUserProgress(current);
  return current;
}

export function exportProgressJSON() {
  const data = loadUserProgress();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `comp008_reviewer_${data.profile.studentName.replace(/\s+/g, '_')}_backup.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function importProgressJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed && (parsed.completedLessons || parsed.quizScores)) {
      saveUserProgress(parsed);
      return { success: true, state: parsed };
    }
    return { success: false, error: 'Invalid reviewer backup format.' };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export function resetAllProgress() {
  localStorage.removeItem(STORAGE_KEY);
  return defaultState;
}

// Active Practice Exam Session Persistence
const ACTIVE_EXAM_STORAGE_KEY = 'pup_comp008_active_exam_session_v2';

export function loadActiveExamSession() {
  try {
    const raw = localStorage.getItem(ACTIVE_EXAM_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Could not read active exam session from storage', err);
    return null;
  }
}

export function saveActiveExamSession(sessionState) {
  try {
    localStorage.setItem(ACTIVE_EXAM_STORAGE_KEY, JSON.stringify(sessionState));
  } catch (err) {
    console.warn('Could not save active exam session to storage', err);
  }
}

export function clearActiveExamSession() {
  try {
    localStorage.removeItem(ACTIVE_EXAM_STORAGE_KEY);
  } catch (err) {
    console.warn('Could not clear active exam session from storage', err);
  }
}
