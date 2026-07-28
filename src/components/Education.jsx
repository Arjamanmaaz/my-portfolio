import React, { useState } from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

function Education({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const education = [
    {
      title: "Master of Computer Application (MCA)",
      school: "Netaji Subhas University, Jamshedpur",
      period: "2024 – 2026",
      percentage: "75.34%",
      icon: <FaGraduationCap size={28} />
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      school: "Netaji Subhas University, Jamshedpur",
      period: "2021 – 2024",
      percentage: "74.14%",
      icon: <FaGraduationCap size={28} />
    },
    {
      title: "Class XII (Science Stream)",
      school: "Kerala Public School, Kadma",
      period: "2020 – 2021",
      percentage: "79.8%",
      icon: <FaSchool size={28} />
    },
    {
      title: "Class X",
      school: "Kerala Public School, Mango",
      period: "2018 – 2019",
      percentage: "79.8%",
      icon: <FaSchool size={28} />
    }
  ];

  return (
    <section id="education" className={darkMode ? 'dark-section' : 'light-section'}>
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Education</h2>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          padding: '20px 0'
        }}>
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '100%',
            background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '2px',
            top: 0
          }} className="timeline-line" />

          {education.map((edu, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: index < education.length - 1 ? '40px' : '0',
                position: 'relative',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
              className="timeline-item"
            >
              <div
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  flex: '1 1 45%',
                  background: hoveredCard === index 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : (darkMode ? '#0f3460' : 'white'),
                  borderRadius: '15px',
                  padding: '30px 28px',
                  boxShadow: hoveredCard === index 
                    ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
                    : '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  cursor: 'pointer',
                  border: hoveredCard === index ? '2px solid #667eea' : '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
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
                  marginBottom: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginTop: '8px'
                }}>
                  <div style={{ 
                    transition: 'transform 0.4s ease',
                    transform: hoveredCard === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
                    color: hoveredCard === index ? '#ffffff' : '#667eea'
                  }}>
                    {edu.icon}
                  </div>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: hoveredCard === index ? 'rgba(255,255,255,0.9)' : '#667eea',
                    transition: 'color 0.3s ease'
                  }}>
                    {edu.period}
                  </span>
                </div>

                <h3 style={{ 
                  color: hoveredCard === index ? '#ffffff' : (darkMode ? '#ffffff' : '#2c3e50'), 
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  transition: 'color 0.3s ease'
                }}>
                  {edu.title}
                </h3>
                
                <p style={{ 
                  color: hoveredCard === index ? '#f0f0f0' : '#667eea', 
                  fontWeight: '500',
                  marginBottom: '0.8rem',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>
                  {edu.school}
                </p>
                
                <div style={{
                  display: 'inline-block',
                  background: hoveredCard === index ? 'rgba(255,255,255,0.2)' : (darkMode ? '#1a1a2e' : '#e8eaf6'),
                  borderRadius: '20px',
                  padding: '8px 20px',
                  transition: 'background 0.3s ease'
                }}>
                  <p style={{ 
                    color: hoveredCard === index ? '#ffffff' : (darkMode ? '#e0e0e0' : '#555'),
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}>
                    Percentage: <span style={{ 
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      color: hoveredCard === index ? '#ffffff' : '#667eea',
                      transition: 'color 0.3s ease'
                    }}>
                      {edu.percentage}
                    </span>
                  </p>
                </div>
              </div>

              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: hoveredCard === index 
                  ? '#764ba2' 
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: hoveredCard === index ? '3px solid white' : '3px solid #667eea',
                zIndex: 2,
                transition: 'all 0.4s ease',
                flexShrink: 0,
                boxShadow: hoveredCard === index ? '0 0 20px rgba(102, 126, 234, 0.6)' : 'none'
              }}
              className="timeline-dot" />

              <div style={{ flex: '1 1 45%' }} className="timeline-spacer" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-item {
            flex-direction: row !important;
            padding-left: 50px !important;
          }
          .timeline-spacer {
            display: none !important;
          }
          .timeline-dot {
            position: absolute !important;
            left: 12px !important;
          }
          .timeline-item > div:first-child {
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;