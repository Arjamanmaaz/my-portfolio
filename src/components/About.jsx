import React, { useState } from 'react';
import { FaChartBar, FaCode, FaCogs } from 'react-icons/fa';

function About({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      icon: <FaChartBar size={50} />,
      title: "Data Analytics",
      description: "Expert in SQL, Python, Power BI, and Advanced Excel. Skilled in EDA, dashboard development, and KPI reporting for data-driven decision making."
    },
    {
      icon: <FaCode size={50} />,
      title: "Software Development",
      description: "Full-stack developer proficient in React.js, FastAPI, and PostgreSQL. Experienced in building scalable web applications with secure authentication."
    },
    {
      icon: <FaCogs size={50} />,
      title: "Operations Management",
      description: "Proven leader in stakeholder coordination, event management, and process optimization. Track record of driving operational efficiency in fast-paced environments."
    }
  ];

  return (
    <section id="about" className={darkMode ? 'dark-section-alt' : 'light-section-alt'}>
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>About Me</h2>
        
        <p style={{ 
          fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem',
          lineHeight: '1.8', width: '100%', maxWidth: '900px',
          margin: '0 auto 3rem', padding: '0 20px'
        }} className={darkMode ? 'dark-text' : 'light-text'}>
          Recent MCA Graduate with a unique blend of expertise in{' '}
          <span className="highlight">Data Analytics</span>,{' '}
          <span className="highlight">Software Development</span>, and{' '}
          <span className="highlight">Operations Management</span>.
        </p>

        {/* Three cards horizontally aligned */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '25px',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '1 1 300px',
                minWidth: '280px',
                maxWidth: '380px',
                background: hoveredCard === index 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : (darkMode ? '#0f3460' : 'white'),
                borderRadius: '15px',
                padding: '40px 30px',
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
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{
                marginBottom: '1.2rem',
                transition: 'transform 0.4s ease',
                transform: hoveredCard === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
                color: hoveredCard === index ? '#ffffff' : '#667eea'
              }}>
                {card.icon}
              </div>
              <h3 style={{ 
                color: hoveredCard === index ? '#ffffff' : (darkMode ? '#ffffff' : '#2c3e50'), 
                fontSize: '1.3rem', 
                marginBottom: '0.8rem',
                fontWeight: '600',
                transition: 'color 0.3s ease'
              }}>
                {card.title}
              </h3>
              <p style={{ 
                color: hoveredCard === index ? '#f0f0f0' : (darkMode ? '#b0b0b0' : '#555'), 
                lineHeight: '1.6',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease'
              }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;