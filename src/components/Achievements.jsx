import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

function Achievements({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      icon: <FaTrophy size={45} />,
      title: "Rank 7",
      subtitle: "Smart India Hackathon",
      description: "Internal SIH 2025",
      color: "#FFD700",
      bgLight: "#FFF9E6",
      bgDark: "#2a2010"
    },
    {
      icon: <FaMedal size={45} />,
      title: "Rank 187",
      subtitle: "National Entrepreneurship Challenge",
      description: "IIT Bombay 2025",
      color: "#C0C0C0",
      bgLight: "#F5F5F5",
      bgDark: "#1a1a1a"
    },
    {
      icon: <FaAward size={45} />,
      title: "Bronze Medallist",
      subtitle: "CISCE National Boxing",
      description: "Championship 2019",
      color: "#CD7F32",
      bgLight: "#FFF5EC",
      bgDark: "#2a1a10"
    }
  ];

  return (
    <section id="achievements" className={darkMode ? 'dark-section' : 'light-section'}>
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Achievements</h2>
        
        {/* Cards Container */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '1 1 280px',
                minWidth: '260px',
                maxWidth: '330px',
                background: darkMode ? '#0f3460' : 'white',
                borderRadius: '20px',
                padding: '40px 25px 30px',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)',
                cursor: 'pointer',
                boxShadow: hoveredCard === index 
                  ? `0 20px 50px ${achievement.color}40` 
                  : '0 5px 20px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'visible',
                border: hoveredCard === index 
                  ? `2px solid ${achievement.color}` 
                  : '2px solid transparent'
              }}
            >
              {/* Ribbon Badge */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: achievement.color,
                color: '#fff',
                padding: '8px 25px',
                borderRadius: '25px',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: `0 5px 15px ${achievement.color}40`,
                whiteSpace: 'nowrap',
                transition: 'all 0.4s ease',
                zIndex: 2
              }}>
                {achievement.title}
              </div>

              {/* Icon Container */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: hoveredCard === index 
                  ? achievement.color 
                  : (darkMode ? achievement.bgDark : achievement.bgLight),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px auto 20px',
                transition: 'all 0.4s ease',
                transform: hoveredCard === index ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)',
                boxShadow: hoveredCard === index 
                  ? `0 10px 30px ${achievement.color}50` 
                  : '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <div style={{ 
                  color: hoveredCard === index ? '#fff' : achievement.color,
                  transition: 'color 0.3s ease',
                  display: 'flex'
                }}>
                  {achievement.icon}
                </div>
              </div>

              {/* Subtitle */}
              <h3 style={{
                color: hoveredCard === index ? achievement.color : (darkMode ? '#ffffff' : '#2c3e50'),
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                transition: 'color 0.3s ease',
                lineHeight: '1.3'
              }}>
                {achievement.subtitle}
              </h3>

              {/* Description */}
              <p style={{
                color: darkMode ? '#b0b0b0' : '#666',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                marginBottom: '0.5rem'
              }}>
                {achievement.description}
              </p>

              {/* Decorative Stars */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '5px',
                marginTop: '10px',
                opacity: hoveredCard === index ? 1 : 0.4,
                transition: 'opacity 0.4s ease'
              }}>
                {[...Array(3)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    size={14} 
                    color={achievement.color}
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: hoveredCard === index ? `scale(1.3) rotate(${i * 30}deg)` : 'scale(1)'
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;