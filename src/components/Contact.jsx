import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Contact({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const topRow = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "maazarjaman84@gmail.com",
      link: "mailto:maazarjaman84@gmail.com",
      buttonText: "Send Email"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/maazarjaman84",
      link: "https://www.linkedin.com/maazarjaman84",
      buttonText: "Connect"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Arjamanmaaz",
      link: "https://github.com/Arjamanmaaz",
      buttonText: "View Profile"
    }
  ];

  const bottomRow = [
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+91 9504868913",
      link: "https://wa.me/919504868913",
      buttonText: "Start Chat"
    },
    {
      icon: <FaPhone />,
      label: "Call",
      value: "+91 9504868913",
      link: "tel:+919504868913",
      buttonText: "Call Now"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      link: "https://maps.google.com/?q=Bengaluru+Karnataka+India",
      buttonText: "View on Map"
    }
  ];

  // Same hover color for all cards
  const hoverColor = '#667eea';

  const renderCard = (info, index, row) => (
    <a
      key={index}
      href={info.link}
      target={info.link.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredCard(`${row}-${index}`)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        background: hoveredCard === `${row}-${index}`
          ? `linear-gradient(135deg, ${hoverColor} 0%, #764ba2 100%)` 
          : (darkMode ? '#0f3460' : 'white'),
        borderRadius: '15px',
        padding: '28px 20px',
        textDecoration: 'none',
        transition: 'all 0.4s ease',
        transform: hoveredCard === `${row}-${index}` ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hoveredCard === `${row}-${index}`
          ? `0 15px 40px ${hoverColor}40` 
          : '0 5px 20px rgba(0,0,0,0.08)',
        border: hoveredCard === `${row}-${index}` ? `2px solid ${hoverColor}` : '2px solid transparent',
        textAlign: 'center',
        width: '100%',
        maxWidth: '280px'
      }}
    >
      <div style={{
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        background: hoveredCard === `${row}-${index}` ? 'rgba(255,255,255,0.2)' : `${hoverColor}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.6rem',
        color: hoveredCard === `${row}-${index}` ? 'white' : hoverColor,
        transition: 'all 0.4s ease',
        transform: hoveredCard === `${row}-${index}` ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)'
      }}>
        {info.icon}
      </div>

      <p style={{
        fontSize: '0.75rem',
        color: hoveredCard === `${row}-${index}` ? 'rgba(255,255,255,0.8)' : '#999',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        margin: 0,
        transition: 'color 0.3s ease'
      }}>
        {info.label}
      </p>

      <p style={{
        fontSize: '0.9rem',
        color: hoveredCard === `${row}-${index}` ? 'white' : (darkMode ? '#e0e0e0' : '#333'),
        fontWeight: '600',
        margin: 0,
        transition: 'color 0.3s ease',
        wordBreak: 'break-all'
      }}>
        {info.value}
      </p>

      <span style={{
        display: 'inline-block',
        padding: '7px 18px',
        background: hoveredCard === `${row}-${index}` ? 'rgba(255,255,255,0.25)' : (darkMode ? '#1a1a2e' : '#e8eaf6'),
        color: hoveredCard === `${row}-${index}` ? 'white' : hoverColor,
        borderRadius: '25px',
        fontSize: '0.8rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        marginTop: '3px'
      }}>
        {info.buttonText} →
      </span>
    </a>
  );

  return (
    <section id="contact" className={darkMode ? 'dark-section-alt' : 'light-section-alt'}>
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Get In Touch</h2>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '2.5rem',
          color: darkMode ? '#b0b0b0' : '#666',
          maxWidth: '600px',
          margin: '0 auto 2.5rem'
        }}>
          Feel free to reach out through any of these platforms. I'm always open to new opportunities!
        </p>

        {/* Top Row - 3 Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          flexWrap: 'wrap',
          marginBottom: '25px'
        }}>
          {topRow.map((info, index) => renderCard(info, index, 'top'))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          flexWrap: 'wrap'
        }}>
          {bottomRow.map((info, index) => renderCard(info, index, 'bottom'))}
        </div>
      </div>
    </section>
  );
}

export default Contact;