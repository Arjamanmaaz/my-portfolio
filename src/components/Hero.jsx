import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Hero({ darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const photoURL = 'https://lh3.googleusercontent.com/pw/AP1GczOHNBQMTtHf0lbFoyui_EFlzQueaPqPa7zejWwexte_60PU4BisOvR1nwLSFyVviCvgv8wqzOCQF_ZdmY_hoUdhIiSKyO8qMdmgiUA-H_o65I7-3UP6=w2400';

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        if (aboutTop <= 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" style={{
      background: darkMode ? 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      paddingTop: '100px',
      transition: 'background 0.5s ease'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.4
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Profile Photo - Stays same size always */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: 'min(450px, 90vw)',
            height: 'auto',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '5px solid rgba(255,255,255,0.4)',
            boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
            <img 
              src={photoURL}
              alt="Arjaman Maaz"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>

        {/* Text Content - fades when scrolled past About */}
        <div style={{ 
          marginBottom: '2rem',
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? 'translateY(-20px)' : 'translateY(0)',
          transition: 'all 0.5s ease'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}>
            Arjaman Maaz
          </h1>
          <h2 style={{ 
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', 
            marginBottom: '1rem',
            fontWeight: '300',
            opacity: 0.95
          }}>
            Data Analyst • Software Developer • Operations Lead
          </h2>
          <p style={{ 
            fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', 
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto 2rem',
            padding: '0 20px'
          }}>
            Transforming data into insights, building scalable applications, and driving operational excellence
          </p>
        </div>

        {/* Social Icons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginBottom: '2rem',
          fontSize: '1.8rem',
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? 'translateY(-20px)' : 'translateY(0)',
          transition: 'all 0.5s ease 0.1s'
        }}>
          <a href="https://github.com/Arjamanmaaz" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/maazarjaman84" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FaLinkedin />
          </a>
          <a href="mailto:maazarjaman84@gmail.com" style={iconStyle}>
            <FaEnvelope />
          </a>
          <a href="tel:+919504868913" style={iconStyle}>
            <FaPhone />
          </a>
        </div>

        {/* Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? 'translateY(-20px)' : 'translateY(0)',
          transition: 'all 0.5s ease 0.2s'
        }}>
          <a href="#contact" className="btn">Get In Touch</a>
          <a href="#projects" style={{
            display: 'inline-block',
            padding: '12px 30px',
            border: '2px solid white',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'all 0.3s',
            fontSize: '1rem'
          }}>View Projects</a>
        </div>
      </div>
    </section>
  );
}

const iconStyle = {
  color: 'white',
  transition: 'transform 0.3s',
  cursor: 'pointer'
};

export default Hero;