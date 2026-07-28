import React, { useState } from 'react';

function Skills({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: "Programming & Databases",
      icon: "💻",
      skills: ["Python", "Java", "JavaScript", "C", "SQL", "PostgreSQL", "MongoDB", "SQLite"]
    },
    {
      title: "Data Analytics & BI",
      icon: "📊",
      skills: ["Power BI", "DAX", "Power Query", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Advanced Excel"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React.js", "FastAPI", "HTML5", "CSS3", "REST APIs", "JWT Authentication", "Responsive Design"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Workspace", "MS Office Suite"]
    },
    {
      title: "Operations & Management",
      icon: "📋",
      skills: ["Operations Management", "Stakeholder Coordination", "Event Management", "Team Leadership", "Strategic Planning", "Budget Tracking"]
    },
    {
      title: "Core Competencies",
      icon: "🎯",
      skills: ["Data Analysis", "OOP", "SDLC", "Agile Methodology", "Problem Solving", "Data-Driven Decision Making"]
    }
  ];

  return (
    <section id="skills" className={darkMode ? 'dark-section' : 'light-section'}>
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Skills & Expertise</h2>
        
        {/* Grid of cards - 3 per row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === index 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : (darkMode ? '#0f3460' : 'white'),
                borderRadius: '15px',
                padding: '35px 25px',
                boxShadow: hoveredCard === index 
                  ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
                  : '0 5px 20px rgba(0,0,0,0.08)',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                transform: hoveredCard === index ? 'translateY(-10px) scale(1.03)' : 'translateY(0) scale(1)',
                cursor: 'pointer',
                border: hoveredCard === index ? '2px solid #667eea' : '2px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                transition: 'transform 0.4s ease',
                transform: hoveredCard === index ? 'scale(1.2) rotate(15deg)' : 'scale(1) rotate(0deg)'
              }}>
                {category.icon}
              </div>
              
              <h3 style={{ 
                marginBottom: '1rem', 
                color: hoveredCard === index ? '#ffffff' : (darkMode ? '#ffffff' : '#2c3e50'),
                fontSize: '1.2rem',
                fontWeight: '600',
                transition: 'color 0.3s ease'
              }}>
                {category.title}
              </h3>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                justifyContent: 'center'
              }}>
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    style={{
                      display: 'inline-block',
                      padding: '7px 14px',
                      background: hoveredCard === index ? 'rgba(255,255,255,0.25)' : (darkMode ? '#1a1a2e' : '#e8eaf6'),
                      color: hoveredCard === index ? '#ffffff' : (darkMode ? '#e0e0e0' : '#5c6bc0'),
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.3s ease',
                      border: hoveredCard === index ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
                      fontWeight: hoveredCard === index ? '500' : '400'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;