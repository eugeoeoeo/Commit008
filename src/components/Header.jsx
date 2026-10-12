import React from 'react';
import {
  Database,
  Award,
  BookOpen,
  GraduationCap,
  Terminal,
  BarChart2,
  Home,
  HardDrive
} from 'lucide-react';

export default function Header({
  activeTab,
  setActiveTab,
  completedCount = 0,
  totalLessons = 18,
  studentName = 'Student'
}) {
  const percentage = Math.round((completedCount / totalLessons) * 100);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lessons', label: 'Lessons', icon: BookOpen },
    { id: 'exam', label: '100-Item Exam', icon: GraduationCap, badge: 'Midterms' },
    { id: 'lab', label: 'SQL Lab', icon: Terminal },
    { id: 'progress', label: 'Analytics', icon: BarChart2 }
  ];

  return (
    <header className="desktop-header">
      <div className="header-inner">
        {/* Brand */}
        <div className="brand-wrapper" onClick={() => setActiveTab('home')}>
          <div className="pup-logo-badge">
            PUP CCIS
          </div>
          <div className="brand-info">
            <h1 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Database Administration</span>
              <span className="badge badge-crimson" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                COMP 008
              </span>
            </h1>
            <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Prof. Florencio V. Contreras Jr.</span>
              <span>•</span>
              <span style={{ color: 'var(--pup-gold)' }}>BSIT Midterm Reviewer</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs (Visible on screens > 768px, avoids duplicate buttons) */}
        <nav className="desktop-nav-links" aria-label="Desktop Navigation">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`desktop-nav-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`desktop-nav-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge && !isActive && (
                  <span style={{
                    fontSize: '0.62rem',
                    background: 'rgba(225, 29, 72, 0.2)',
                    color: '#fda4af',
                    padding: '1px 5px',
                    borderRadius: '4px',
                    fontWeight: 700
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Info: Device Local Storage & Progress Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            title="Your progress is automatically saved exclusively in this device's browser local storage."
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              color: 'var(--text-dim)',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '5px 10px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <HardDrive size={13} color="var(--accent-cyan)" />
            <span style={{ display: 'none' }} className="hide-on-mobile-inline">Device Saved</span>
          </div>

          <div
            onClick={() => setActiveTab('progress')}
            title="View detailed progress analytics"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Award size={16} color="var(--pup-gold)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff' }}>
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
