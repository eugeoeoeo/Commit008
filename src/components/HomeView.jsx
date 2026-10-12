import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Terminal,
  Award,
  ChevronRight,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Play
} from 'lucide-react';
import { MODULES_DATA, COURSE_INFO } from '../data/modulesData.js';

export default function HomeView({
  setActiveTab,
  onSelectLesson,
  userProgress
}) {
  const completedLessonsCount = Object.keys(userProgress?.completedLessons || {}).length;
  const totalLessons = 18;
  const progressPct = Math.round((completedLessonsCount / totalLessons) * 100);

  // Resume lesson (last active or first uncompleted)
  const allLessons = MODULES_DATA.flatMap((m) => m.lessons);
  const nextUnfinishedLesson = allLessons.find((l) => !userProgress?.completedLessons?.[l.id]) || allLessons[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Hero Banner */}
      <div className="glass-card" style={{
        padding: '24px 20px',
        background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(15, 23, 42, 0.9) 70%)',
        border: '1px solid rgba(225, 29, 72, 0.3)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <span className="badge badge-crimson" style={{ fontSize: '0.7rem', padding: '3px 8px' }}>
              PUP CCIS
            </span>
            <span className="badge badge-gold" style={{ fontSize: '0.7rem', padding: '3px 8px' }}>
              BSIT
            </span>
            <span className="badge badge-cyan" style={{ fontSize: '0.7rem', padding: '3px 8px' }}>
              COMP 008
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.25rem, 4.5vw, 1.95rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            wordBreak: 'break-word'
          }}>
            Database Administration Midterm Reviewer
          </h1>

          <p style={{
            fontSize: '0.88rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            marginBottom: '16px'
          }}>
            Complete instructional material by <strong>Prof. Florencio V. Contreras Jr.</strong> with bite-sized proportional lessons, unedited verbatim terminology, balanced multiple-choice distractors, per-lesson interactive SQL labs, and a 100-item practice exam.
          </p>

          {/* Quick Resume Learning Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            padding: '10px 14px',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '480px',
            boxSizing: 'border-box'
          }}
          onClick={() => {
            onSelectLesson(nextUnfinishedLesson.id);
            setActiveTab('lessons');
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--pup-crimson)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(225, 29, 72, 0.4)',
              flexShrink: 0
            }}>
              <Play size={15} fill="#fff" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                {completedLessonsCount > 0 ? 'Resume Studying' : 'Start Reviewer'}
              </div>
              <div style={{
                fontSize: '0.86rem',
                fontWeight: 700,
                color: '#fff',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {nextUnfinishedLesson.title}
              </div>
            </div>
            <ChevronRight size={18} color="var(--text-dim)" style={{ flexShrink: 0 }} />
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="glass-card" style={{ padding: '18px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award size={20} color="var(--pup-gold)" />
            <div>
              <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>
                Curriculum Mastery Progress
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
                {completedLessonsCount} of {totalLessons} lessons completed ({progressPct}%)
              </span>
            </div>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
            {progressPct}% Finished
          </span>
        </div>

        <div style={{
          width: '100%',
          height: '8px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progressPct}%`,
            height: '100%',
            background: 'linear-gradient(90deg, var(--pup-crimson), var(--accent-cyan))',
            borderRadius: '4px',
            transition: 'width 0.4s ease'
          }} />
        </div>
      </div>

      {/* Course Modules Grid */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={20} color="var(--pup-crimson)" /> All 5 Course Modules
          </h2>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Click any lesson below to start learning
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '14px' }}>
          {MODULES_DATA.map((module) => {
            const completedInMod = module.lessons.filter((l) => userProgress?.completedLessons?.[l.id]).length;

            return (
              <div
                key={module.id}
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span className="badge badge-crimson">
                      Module {module.moduleNumber}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                      {completedInMod}/{module.lessons.length} Completed
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                    {module.title}
                  </h3>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.5 }}>
                    {module.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {module.lessons.map((lesson) => {
                    const isDone = userProgress?.completedLessons?.[lesson.id];
                    return (
                      <div
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          setActiveTab('lessons');
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid ${isDone ? 'rgba(16, 185, 129, 0.25)' : 'var(--border-subtle)'}`,
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          color: '#e2e8f0',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: '8px' }}>
                          L{lesson.lessonNumber}. {lesson.title}
                        </span>
                        {isDone ? (
                          <CheckCircle2 size={14} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                        ) : (
                          <ChevronRight size={14} color="var(--text-dim)" style={{ flexShrink: 0 }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
