import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhotoInNav, setShowPhotoInNav] = useState(false);
  const photoURL = 'https://lh3.googleusercontent.com/pw/AP1GczOHNBQMTtHf0lbFoyui_EFlzQueaPqPa7zejWwexte_60PU4BisOvR1nwLSFyVviCvgv8wqzOCQF_ZdmY_hoUdhIiSKyO8qMdmgiUA-H_o65I7-3UP6=w2400';

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) setShowPhotoInNav(aboutSection.getBoundingClientRect().top <= 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ['Home','About','Skills','Experience','Projects','Education','Leadership','Achievements','Contact'];

  return (
    <nav style={{
      background: darkMode ? 'rgba(10,10,26,0.95)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      padding: '0', position: 'fixed', width: '100%', top: 0, left: 0, right: 0, zIndex: 1000,
      borderBottom: darkMode ? '1px solid rgba(99,102,241,0.2)' : '1px solid rgba(99,102,241,0.1)',
      transition: 'all 0.4s ease'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#home" onClick={closeMenu} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', height: '45px', width: '45px', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '2px',
              opacity: showPhotoInNav ? 0 : 1, transform: showPhotoInNav ? 'scale(0.5) rotate(90deg)' : 'scale(1) rotate(0deg)',
              transition: 'all 0.5s ease', position: 'absolute'
            }}>AM</span>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #6366f1',
              opacity: showPhotoInNav ? 1 : 0, transform: showPhotoInNav ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-90deg)',
              transition: 'all 0.5s ease', position: 'absolute'
            }}>
              <img src={photoURL} alt="AM" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="nav-links" style={{ display: 'flex', gap: '1.8rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} style={{
                color: darkMode ? '#cbd5e1' : '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500',
                transition: 'all 0.3s', cursor: 'pointer', whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6366f1'}
              onMouseLeave={(e) => e.target.style.color = darkMode ? '#cbd5e1' : '#475569'}
              >{item}</a>
            ))}
          </div>
          <button onClick={toggleDarkMode} style={{
            background: darkMode ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.1)', border: 'none', borderRadius: '50%',
            width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.3s ease', flexShrink: 0, color: '#6366f1'
          }}>
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>
        
        <div onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer' }} className="mobile-menu-icon">
          {isOpen ? <FaTimes color={darkMode ? '#e2e8f0' : '#0f172a'} size={24} /> : <FaBars color={darkMode ? '#e2e8f0' : '#0f172a'} size={24} />}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-icon { display: block !important; }
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'} !important; flex-direction: column;
            position: absolute; top: 60px; left: 0; right: 0;
            background: ${darkMode ? 'rgba(10,10,26,0.98)' : 'rgba(255,255,255,0.98)'};
            backdrop-filter: blur(20px); padding: 20px; gap: 15px !important; width: 100%;
          }
          .nav-links a { width: 100%; padding: 10px 0; border-bottom: 1px solid rgba(99,102,241,0.1); font-size: 1rem !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;