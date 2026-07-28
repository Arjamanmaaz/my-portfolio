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
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Leadership & Activities</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '25px',
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
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : (darkMode ? '#0f3460' : 'white'),
                borderRadius: '15px',
                padding: '35px 30px',
                boxShadow: hoveredCard === index 
                  ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
                  : '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                cursor: 'pointer',
                border: hoveredCard === index ? '2px solid #667eea' : '2px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: hoveredCard === index 
                  ? 'rgba(255,255,255,0.5)' 
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                transition: 'all 0.4s ease'
              }}></div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem', 
                marginBottom: '1rem',
                marginTop: '10px'
              }}>
                <div style={{
                  transition: 'transform 0.4s ease',
                  transform: hoveredCard === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
                  flexShrink: 0
                }}>
                  <FaUsers 
                    color={hoveredCard === index ? '#ffffff' : '#667eea'} 
                    size={28}
                    style={{ transition: 'color 0.3s ease' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: hoveredCard === index ? '#ffffff' : (darkMode ? '#ffffff' : '#2c3e50'), 
                    marginBottom: '0.3rem',
                    fontSize: '1.15rem',
                    fontWeight: '600',
                    transition: 'color 0.3s ease',
                    lineHeight: '1.3'
                  }}>
                    {role.title}
                  </h3>
                  <p style={{ 
                    color: hoveredCard === index ? '#f0f0f0' : '#667eea', 
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {role.organization}
                  </p>
                </div>
              </div>
              
              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.2rem',
                background: hoveredCard === index ? 'rgba(255,255,255,0.2)' : (darkMode ? '#1a1a2e' : '#e8eaf6'),
                padding: '6px 14px',
                borderRadius: '20px',
                transition: 'background 0.3s ease',
                alignSelf: 'flex-start'
              }}>
                <FaCalendar 
                  size={13} 
                  color={hoveredCard === index ? '#ffffff' : (darkMode ? '#b0b0b0' : '#666')}
                  style={{ transition: 'color 0.3s ease' }}
                />
                <span style={{ 
                  fontSize: '0.8rem',
                  color: hoveredCard === index ? '#ffffff' : (darkMode ? '#e0e0e0' : '#555'),
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  {role.period}
                </span>
              </div>
              
              <ul style={{ 
                paddingLeft: '0',
                listStyle: 'none',
                flex: 1
              }}>
                {role.points.map((point, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.6rem',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    color: hoveredCard === index ? '#f0f0f0' : (darkMode ? '#b0b0b0' : '#555'),
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{
                      color: hoveredCard === index ? '#ffffff' : '#667eea',
                      fontWeight: 'bold',
                      flexShrink: 0,
                      transition: 'color 0.3s ease'
                    }}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #leadership > div > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Leadership;