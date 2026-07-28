import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer({ darkMode }) {
  return (
    <footer style={{
      background: darkMode ? '#0f0f1a' : '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '2rem 1.5rem',
      transition: 'background 0.3s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '0.5rem',
          letterSpacing: '2px',
          fontWeight: 'bold'
        }}>
          Arjaman Maaz
        </h3>
        
        <p style={{ 
          marginBottom: '0.8rem', 
          opacity: 0.9,
          fontSize: '0.95rem',
          fontWeight: '500'
        }}>
          Data Analyst • Software Developer • Operations Lead
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          marginBottom: '0.8rem',
          fontSize: '1.3rem'
        }}>
          <a href="https://github.com/Arjamanmaaz" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.85, transition: 'opacity 0.3s' }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/maazarjaman84" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.85, transition: 'opacity 0.3s' }}>
            <FaLinkedin />
          </a>
          <a href="mailto:maazarjaman84@gmail.com" style={{ color: 'white', opacity: 0.85, transition: 'opacity 0.3s' }}>
            <FaEnvelope />
          </a>
          <a href="tel:+919504868913" style={{ color: 'white', opacity: 0.85, transition: 'opacity 0.3s' }}>
            <FaPhone />
          </a>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          flexWrap: 'wrap',
          marginBottom: '0.8rem',
          fontSize: '0.85rem',
          opacity: 0.85
        }}>
          <a href="mailto:maazarjaman84@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
            maazarjaman84@gmail.com
          </a>
          <span>|</span>
          <a href="tel:+919504868913" style={{ color: 'white', textDecoration: 'none' }}>
            +91 9504868913
          </a>
          <span>|</span>
          <span>Bengaluru, Karnataka, India</span>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.15)', 
          paddingTop: '0.8rem',
          fontSize: '0.8rem',
          opacity: 0.7
        }}>
          <p>© 2026 Arjaman Maaz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;