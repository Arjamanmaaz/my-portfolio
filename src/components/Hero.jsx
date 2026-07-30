import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Hero({ darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const photoURL = 'https://lh3.googleusercontent.com/pw/AP1GczOHNBQMTtHf0lbFoyui_EFlzQueaPqPa7zejWwexte_60PU4BisOvR1nwLSFyVviCvgv8wqzOCQF_ZdmY_hoUdhIiSKyO8qMdmgiUA-H_o65I7-3UP6=w2400';

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) setScrolled(aboutSection.getBoundingClientRect().top <= 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" style={{
      background: darkMode ? 'linear-gradient(135deg, #0a0a1a 0%, #0f0f24 100%)' : 'linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)',
      color: darkMode ? '#e2e8f0' : '#0f172a', textAlign: 'center', position: 'relative', overflow: 'hidden',
      minHeight: '100vh', paddingTop: '90px', transition: 'all 0.5s ease'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            width: 'min(300px, 70vw)', height: 'auto', borderRadius: '16px', overflow: 'hidden',
            border: '4px solid rgba(99,102,241,0.3)', boxShadow: '0 10px 40px rgba(99,102,241,0.15)', transition: 'all 0.3s ease'
          }}>
            <img src={photoURL} alt="Arjaman Maaz" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <div style={{ opacity: scrolled ? 0 : 1, transition: 'all 0.5s ease' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem', fontWeight: '700' }}>Arjaman Maaz</h1>
          <h2 style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', marginBottom: '0.8rem', fontWeight: '400', color: darkMode ? '#94a3b8' : '#475569' }}>
            Data Analyst • Software Developer • Operations Lead
          </h2>
          <p style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem', padding: '0 15px', color: darkMode ? '#94a3b8' : '#475569' }}>
            Transforming data into insights, building scalable applications, and driving operational excellence
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '1.5rem', opacity: scrolled ? 0 : 1, transition: 'all 0.5s ease 0.1s' }}>
          {[{icon:<FaGithub/>,link:"https://github.com/Arjamanmaaz"},{icon:<FaLinkedin/>,link:"https://www.linkedin.com/maazarjaman84"},{icon:<FaEnvelope/>,link:"mailto:maazarjaman84@gmail.com"},{icon:<FaPhone/>,link:"tel:+919504868913"}].map((s,i)=>(
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" style={{ color: darkMode ? '#94a3b8' : '#475569', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#6366f1'} onMouseLeave={(e) => e.target.style.color = darkMode ? '#94a3b8' : '#475569'}>{s.icon}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', opacity: scrolled ? 0 : 1, transition: 'all 0.5s ease 0.2s' }}>
          <a href="#contact" className="btn">Get In Touch</a>
          <a href="#projects" style={{ display: 'inline-block', padding: '12px 28px', border: '2px solid #6366f1', color: darkMode ? '#e2e8f0' : '#6366f1', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.3s', fontSize: '0.95rem' }}>View Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;