import React, { useState } from 'react';
import { FaUsers, FaCalendar } from 'react-icons/fa';

function Leadership({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const leadershipRoles = [
    {
      title: "Student Placement Coordinator",
      organization: "Netaji Subhas University",
      period: "Aug 2025 – Mar 2026",
      points: [
        "Coordinated communication between recruiters, students, and faculty for placement operations",
        "Organized placement drives, interview scheduling, and student registrations ensuring smooth multi-stakeholder coordination"
      ]
    },
    {
      title: "Operations Lead",
      organization: "E-Cell, Netaji Subhas University",
      period: "May 2025 – Nov 2025",
      points: [
        "Managed operational planning and execution of entrepreneurship programs and events",
        "Tracked and maintained program budgets, monitoring expenses against allocations",
        "Drove process improvement initiatives that enhanced event delivery and operational efficiency"
      ]
    },
    {
      title: "Club Advisor (Operations)",
      organization: "Code Busters N Coding Club",
      period: "May 2025 – Nov 2025",
      points: [
        "Oversaw club operations, activity planning, and member engagement",
        "Coordinated organizing teams for successful event execution"
      ]
    },
    {
      title: "Sergeant at Arms",
      organization: "Rotaract Club of Social Crew",
      period: "Jul 2025 – Nov 2025",
      points: [
        "Coordinated meeting management, member logistics, and community engagement initiatives across social programs"
      ]
    }
  ];

  return (
    <section id="leadership" className={darkMode ? 'dark-section-alt' : 'light-section-alt'}>
      <div style={{ width: '100%', padding: '0 15px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Leadership & Activities</h2>
        
        <div className="leadership-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {leadershipRoles.map((role, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === index 
                  ? 'linear-gradient(135deg, #6366f1, #06b6d4)' 
                  : (darkMode ? '#1a1a3e' : 'white'),
                borderRadius: '12px',
                padding: '28px 22px',
                boxShadow: hoveredCard === index ? '0 10px 35px rgba(99,102,241,0.4)' : '0 2px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)',
                cursor: 'pointer',
                border: hoveredCard === index ? '2px solid #6366f1' : '2px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: hoveredCard === index ? 'rgba(255,255,255,0.5)' : 'linear-gradient(135deg, #6366f1, #06b6d4)',
                transition: 'all 0.3s ease'
              }}></div>

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '0.8rem', marginTop: '8px' }}>
                <div style={{
                  transition: 'transform 0.3s ease', flexShrink: 0,
                  transform: hoveredCard === index ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)'
                }}>
                  <FaUsers color={hoveredCard === index ? '#ffffff' : '#6366f1'} size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: hoveredCard === index ? '#ffffff' : (darkMode ? '#e2e8f0' : '#0f172a'), 
                    marginBottom: '0.2rem', fontSize: '1.05rem', fontWeight: '600',
                    transition: 'color 0.3s ease', lineHeight: '1.3'
                  }}>
                    {role.title}
                  </h3>
                  <p style={{ 
                    color: hoveredCard === index ? '#f0f0f0' : '#6366f1', fontWeight: '500',
                    fontSize: '0.85rem', transition: 'color 0.3s ease'
                  }}>
                    {role.organization}
                  </p>
                </div>
              </div>
              
              {/* Period Badge */}
              <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem',
                background: hoveredCard === index ? 'rgba(255,255,255,0.2)' : (darkMode ? '#1e1e40' : '#eef2ff'),
                padding: '5px 12px', borderRadius: '15px', transition: 'background 0.3s ease',
                alignSelf: 'flex-start'
              }}>
                <FaCalendar size={12} color={hoveredCard === index ? '#ffffff' : (darkMode ? '#94a3b8' : '#6366f1')} />
                <span style={{ fontSize: '0.75rem', color: hoveredCard === index ? '#ffffff' : (darkMode ? '#cbd5e1' : '#475569'), fontWeight: '500', transition: 'color 0.3s ease' }}>
                  {role.period}
                </span>
              </div>
              
              {/* Bullet Points */}
              <ul style={{ paddingLeft: '0', listStyle: 'none', flex: 1 }}>
                {role.points.map((point, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.5rem', fontSize: '0.85rem', lineHeight: '1.5',
                    color: hoveredCard === index ? '#f0f0f0' : (darkMode ? '#94a3b8' : '#475569'),
                    transition: 'color 0.3s ease', display: 'flex', gap: '0.4rem', alignItems: 'flex-start'
                  }}>
                    <span style={{ color: hoveredCard === index ? '#ffffff' : '#6366f1', fontWeight: 'bold', flexShrink: 0 }}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: 1 column */}
      <style>{`
        @media (max-width: 768px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Leadership;