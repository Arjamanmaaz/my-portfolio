import React, { useState } from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

function Experience({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "PaulTech Software Services Pvt. Ltd.",
      period: "Sep 2025 – Nov 2025",
      points: [
        "Processed and managed structured business data using Python and SQL to support operational reporting",
        "Designed interactive Power BI dashboards using DAX measures to visualize sales, product, and customer metrics",
        "Performed data cleaning, validation, and testing on application-related datasets ensuring data accuracy",
        "Developed optimized SQL queries to extract, transform, and load (ETL) data for analysis and dashboard reporting"
      ]
    },
    {
      title: "Web Development Intern",
      company: "TMG IT Solutions",
      period: "Oct 2023 – Dec 2023",
      points: [
        "Developed responsive web interfaces using HTML5, CSS3, and core frontend development principles",
        "Built user-friendly, mobile-optimized layouts to improve usability and accessibility across devices",
        "Collaborated with cross-functional teams to integrate UI components into application workflows"
      ]
    }
  ];

  return (
    <section id="experience" className={darkMode ? 'dark-section' : 'light-section'}>
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Professional Experience</h2>
        
        {/* Timeline-style layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '1 1 450px',
                minWidth: '320px',
                maxWidth: '550px',
                background: hoveredCard === index 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : (darkMode ? '#0f3460' : 'white'),
                borderRadius: '15px',
                padding: '40px 35px',
                boxShadow: hoveredCard === index 
                  ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
                  : '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                cursor: 'pointer',
                border: hoveredCard === index ? '2px solid #667eea' : '2px solid transparent',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative top bar */}
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

              {/* Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1.2rem', 
                marginBottom: '1.2rem',
                marginTop: '10px'
              }}>
                <div style={{
                  transition: 'transform 0.4s ease',
                  transform: hoveredCard === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
                  flexShrink: 0
                }}>
                  <FaBriefcase 
                    color={hoveredCard === index ? '#ffffff' : '#667eea'} 
                    size={32}
                    style={{ transition: 'color 0.3s ease' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    color: hoveredCard === index ? '#ffffff' : (darkMode ? '#ffffff' : '#2c3e50'), 
                    marginBottom: '0.3rem',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{ 
                    color: hoveredCard === index ? '#f0f0f0' : '#667eea', 
                    fontWeight: '500',
                    fontSize: '1.05rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {exp.company}
                  </p>
                </div>
              </div>
              
              {/* Period Badge */}
              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                background: hoveredCard === index ? 'rgba(255,255,255,0.2)' : (darkMode ? '#1a1a2e' : '#e8eaf6'),
                padding: '8px 16px',
                borderRadius: '25px',
                transition: 'all 0.3s ease'
              }}>
                <FaCalendar 
                  size={14} 
                  color={hoveredCard === index ? '#ffffff' : (darkMode ? '#b0b0b0' : '#666')}
                  style={{ transition: 'color 0.3s ease' }}
                />
                <span style={{ 
                  fontSize: '0.9rem',
                  color: hoveredCard === index ? '#ffffff' : (darkMode ? '#e0e0e0' : '#555'),
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  {exp.period}
                </span>
              </div>
              
              {/* Bullet Points */}
              <ul style={{ 
                paddingLeft: '1.2rem',
                listStyle: 'none'
              }}>
                {exp.points.map((point, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.7rem',
                    fontSize: '0.95rem',
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
    </section>
  );
}

export default Experience;