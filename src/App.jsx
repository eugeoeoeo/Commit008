import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import BottomNav from './components/BottomNav.jsx';
import HomeView from './components/HomeView.jsx';
import LessonViewer from './components/LessonViewer.jsx';
import ExamEngine from './components/ExamEngine.jsx';
import LabPlayground from './components/LabPlayground.jsx';
import ProgressDashboard from './components/ProgressDashboard.jsx';
import { loadUserProgress, saveUserProgress } from './utils/storage.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLessonId, setSelectedLessonId] = useState('m1-l1');
  const [userProgress, setUserProgress] = useState(loadUserProgress());

  useEffect(() => {
    // Sync active tab to storage if desired
    const current = loadUserProgress();
    setUserProgress(current);
  }, []);

  const handleUpdateProgress = (newProgress) => {
    setUserProgress({ ...newProgress });
  };

  const handleSelectLesson = (lessonId) => {
    setSelectedLessonId(lessonId);
    setActiveTab('lessons');
  };

  const completedCount = Object.keys(userProgress?.completedLessons || {}).length;

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedCount={completedCount}
        totalLessons={18}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectLesson={handleSelectLesson}
            userProgress={userProgress}
          />
        )}

        {activeTab === 'lessons' && (
          <LessonViewer
            selectedLessonId={selectedLessonId}
            onSelectLesson={setSelectedLessonId}
            userProgress={userProgress}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {activeTab === 'exam' && (
          <ExamEngine
            onExamComplete={(summary) => {
              setUserProgress(loadUserProgress());
            }}
          />
        )}

        {activeTab === 'lab' && (
          <LabPlayground />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            userProgress={userProgress}
            onResetProgress={setUserProgress}
            onSelectLesson={handleSelectLesson}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Ergonomic Bottom Navigation Bar (WebApp / Mobile Optimized) */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completionPercentage={Math.round((completedCount / 18) * 100)}
      />
    </div>
  );
}
