import React, { useState } from 'react';
import { FaChartBar, FaCode, FaCogs } from 'react-icons/fa';

function About({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cards = [
    { icon: <FaChartBar size={40} />, title: "Data Analytics", description: "Expert in SQL, Python, Power BI, and Advanced Excel. Skilled in EDA, dashboard development, and KPI reporting." },
    { icon: <FaCode size={40} />, title: "Software Development", description: "Full-stack developer in React.js, FastAPI, and PostgreSQL. Building scalable web applications." },
    { icon: <FaCogs size={40} />, title: "Operations Management", description: "Leader in stakeholder coordination, event management, and process optimization." }
  ];

  return (
    <section id="about" className={darkMode ? 'dark-section-alt' : 'light-section-alt'}>
      <div style={{ width: '100%', padding: '0 15px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>About Me</h2>
        <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '2.5rem', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto 2.5rem', padding: '0 10px' }} className={darkMode ? 'dark-text' : 'light-text'}>
          Recent MCA Graduate with expertise in <span className="highlight">Data Analytics</span>, <span className="highlight">Software Development</span>, and <span className="highlight">Operations Management</span>.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          {cards.map((card, index) => (
            <div key={index} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '1 1 280px', maxWidth: '320px',
                background: hoveredCard === index ? 'linear-gradient(135deg, #6366f1, #06b6d4)' : (darkMode ? '#1a1a3e' : 'white'),
                borderRadius: '12px', padding: '30px 20px', textAlign: 'center', transition: 'all 0.3s ease',
                transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)', cursor: 'pointer',
                boxShadow: hoveredCard === index ? '0 10px 35px rgba(99,102,241,0.4)' : '0 2px 10px rgba(0,0,0,0.06)',
                border: hoveredCard === index ? '2px solid #6366f1' : '2px solid transparent'
              }}>
              <div style={{ marginBottom: '1rem', color: hoveredCard === index ? 'white' : '#6366f1', transition: 'all 0.3s ease' }}>{card.icon}</div>
              <h3 style={{ color: hoveredCard === index ? 'white' : (darkMode ? '#e2e8f0' : '#0f172a'), fontSize: '1.1rem', marginBottom: '0.5rem', transition: 'color 0.3s ease' }}>{card.title}</h3>
              <p style={{ color: hoveredCard === index ? '#f0f0f0' : (darkMode ? '#94a3b8' : '#475569'), fontSize: '0.9rem', lineHeight: '1.5', transition: 'color 0.3s ease' }}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;