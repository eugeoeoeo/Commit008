import React from 'react';
import { Home, BookOpen, GraduationCap, Terminal, BarChart2 } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, completionPercentage = 0 }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lessons', label: 'Lessons', icon: BookOpen },
    { id: 'exam', label: 'Exam', icon: GraduationCap, badge: '100Q' },
    { id: 'lab', label: 'SQL Lab', icon: Terminal },
    { id: 'progress', label: 'Analytics', icon: BarChart2 }
  ];

  return (
    <nav className="bottom-nav" aria-label="Main Navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            onClick={() => {
              setActiveTab(item.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <div className="nav-icon-wrapper" style={{ position: 'relative' }}>
              <Icon size={19} strokeWidth={isActive ? 2.5 : 1.8} />
              {item.badge && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-6px',
                  background: 'var(--pup-crimson)',
                  color: '#fff',
                  fontSize: '0.54rem',
                  padding: '1px 3px',
                  borderRadius: '4px',
                  fontWeight: 800,
                  letterSpacing: '0.01em',
                  boxShadow: '0 0 6px rgba(225,29,72,0.8)',
                  pointerEvents: 'none'
                }}>
                  {item.badge}
                </span>
              )}
            </div>
            <span style={{ fontSize: '0.68rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
