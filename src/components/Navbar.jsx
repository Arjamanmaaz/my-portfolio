import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhotoInNav, setShowPhotoInNav] = useState(false);
  const photoURL = 'https://lh3.googleusercontent.com/pw/AP1GczOHNBQMTtHf0lbFoyui_EFlzQueaPqPa7zejWwexte_60PU4BisOvR1nwLSFyVviCvgv8wqzOCQF_ZdmY_hoUdhIiSKyO8qMdmgiUA-H_o65I7-3UP6=w2400';

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        if (aboutTop <= 100) {
          setShowPhotoInNav(true);
        } else {
          setShowPhotoInNav(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={{
      background: darkMode ? '#0f0f1a' : '#2c3e50',
      padding: '0',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'background 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <a href="#home" onClick={closeMenu} style={{
          textDecoration: 'none',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          height: '50px',
          width: '50px',
          justifyContent: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              color: 'white',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              opacity: showPhotoInNav ? 0 : 1,
              transform: showPhotoInNav ? 'scale(0.5) rotate(90deg)' : 'scale(1) rotate(0deg)',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              position: 'absolute'
            }}>
              AM
            </span>
            
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid white',
              opacity: showPhotoInNav ? 1 : 0,
              transform: showPhotoInNav ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-90deg)',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              position: 'absolute'
            }}>
              <img 
                src={photoURL}
                alt="AM"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="nav-links" style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-end'
          }}>
            <a href="#home" onClick={closeMenu} style={linkStyle}>Home</a>
            <a href="#about" onClick={closeMenu} style={linkStyle}>About</a>
            <a href="#skills" onClick={closeMenu} style={linkStyle}>Skills</a>
            <a href="#experience" onClick={closeMenu} style={linkStyle}>Experience</a>
            <a href="#projects" onClick={closeMenu} style={linkStyle}>Projects</a>
            <a href="#education" onClick={closeMenu} style={linkStyle}>Education</a>
            <a href="#leadership" onClick={closeMenu} style={linkStyle}>Leadership</a>
            <a href="#achievements" onClick={closeMenu} style={linkStyle}>Achievements</a>
            <a href="#contact" onClick={closeMenu} style={linkStyle}>Contact</a>
          </div>

          {/* Dark Mode Toggle Button */}
          <button 
            onClick={toggleDarkMode}
            style={{
              background: darkMode ? '#ffd700' : '#667eea',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0,
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) rotate(15deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            {darkMode ? (
              <FaSun color="#1a1a2e" size={18} />
            ) : (
              <FaMoon color="white" size={18} />
            )}
          </button>
        </div>
        
        <div onClick={toggleMenu} style={{ 
          display: 'none', 
          cursor: 'pointer'
        }} className="mobile-menu-icon">
          {isOpen ? <FaTimes color="white" size={28} /> : <FaBars color="white" size={28} />}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-icon {
            display: block !important;
          }
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 65px;
            left: 0;
            right: 0;
            background: ${darkMode ? '#0f0f1a' : '#2c3e50'};
            padding: 20px;
            gap: 15px !important;
            width: 100%;
            transition: background 0.3s ease;
          }
          .nav-links a {
            width: 100%;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.15rem',
  fontWeight: '500',
  transition: 'color 0.3s',
  cursor: 'pointer',
  whiteSpace: 'nowrap'
};

export default Navbar;