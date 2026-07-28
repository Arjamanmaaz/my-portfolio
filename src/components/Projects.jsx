import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects({ darkMode }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      title: "Gymexora – AI-Powered Fitness Management Platform",
      tech: "React.js, FastAPI, PostgreSQL, JWT, Groq AI",
      description: [
        "Engineered a full-stack fitness management platform connecting gym owners, trainers, and members",
        "Implemented secure JWT-based authentication and role-based access control (RBAC)",
        "Designed 4 analytical dashboards tracking Members, Revenue, Trainer Performance, and User Engagement KPIs",
        "Built data tracking modules (Diet, Workout, Progress, Achievements) integrated with Groq AI"
      ],
      github: "https://github.com/Arjamanmaaz/gymexora",
      live: "https://github.com/Arjamanmaaz/gymexora"
    },
    {
      title: "Sales & Customer Analytics Dashboard",
      tech: "SQL, Power BI, DAX, Power Query",
      description: [
        "Analyzed retail sales and customer transaction data using SQL to identify revenue trends",
        "Developed 3 interconnected Power BI dashboards (Sales, Customer, Product Analytics) with DAX measures",
        "Applied Power Query for data transformation and ETL to support business performance monitoring"
      ],
      github: "https://github.com/Arjamanmaaz/PowerBi-Sales-Dashboard",
      live: "https://github.com/Arjamanmaaz/PowerBi-Sales-Dashboard"
    },
    {
      title: "FixBuddy – Service Provider Web Application",
      tech: "React.js, JavaScript, HTML5, CSS3",
      description: [
        "Designed and developed responsive frontend interfaces for a service-based web application",
        "Built reusable React.js components for Landing Pages, Authentication, and Service Request modules",
        "Implemented responsive UI design ensuring cross-device compatibility"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Netflix Titles Data Analysis",
      tech: "Python, Pandas, Matplotlib, Seaborn",
      description: [
        "Performed exploratory data analysis (EDA) on Netflix Movies & TV Shows dataset",
        "Analyzed genre popularity, content distribution, release trends, and platform growth indicators",
        "Generated analytical visualizations and insight reports from large-scale entertainment data"
      ],
      github: "https://github.com/Arjamanmaaz/netflix-titles-analysis",
      live: "https://github.com/Arjamanmaaz/netflix-titles-analysis"
    }
  ];

  return (
    <section id="projects" className={darkMode ? 'dark-section-alt' : 'light-section-alt'}>
      <div style={{ width: '100%', padding: '0 30px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Projects</h2>
        
        {/* 2x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '25px',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === index 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : (darkMode ? '#0f3460' : 'white'),
                borderRadius: '15px',
                padding: '35px 30px',
                boxShadow: hoveredCard === index 
                  ? '0 15px 40px rgba(102, 126, 234, 0.4)' 
                  : '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                cursor: 'pointer',
                border: hoveredCard === index ? '2px solid #667eea' : '2px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: hoveredCard === index 
                  ? 'rgba(255,255,255,0.5)' 
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                transition: 'all 0.4s ease'
              }}></div>

              {/* Title */}
              <h3 style={{ 
                color: hoveredCard === index ? '#ffffff' : (darkMode ? '#ffffff' : '#2c3e50'), 
                marginBottom: '0.6rem',
                marginTop: '10px',
                fontSize: '1.2rem',
                fontWeight: '600',
                transition: 'color 0.3s ease',
                lineHeight: '1.4'
              }}>
                {project.title}
              </h3>
              
              {/* Tech Stack */}
              <p style={{ 
                color: hoveredCard === index ? '#f0f0f0' : '#667eea', 
                fontWeight: '500', 
                marginBottom: '1.2rem', 
                fontSize: '0.85rem',
                transition: 'color 0.3s ease',
                paddingBottom: '1rem',
                borderBottom: hoveredCard === index ? '2px solid rgba(255,255,255,0.3)' : '2px solid #e8eaf6'
              }}>
                {project.tech}
              </p>
              
              {/* Description */}
              <ul style={{ 
                paddingLeft: '1rem',
                marginBottom: '1.5rem',
                flex: 1,
                listStyle: 'none'
              }}>
                {project.description.map((desc, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.6rem', 
                    color: hoveredCard === index ? '#f0f0f0' : (darkMode ? '#b0b0b0' : '#555'),
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{
                      color: hoveredCard === index ? '#ffffff' : '#667eea',
                      fontWeight: 'bold',
                      flexShrink: 0,
                      transition: 'color 0.3s ease'
                    }}>▹</span>
                    {desc}
                  </li>
                ))}
              </ul>
              
              {/* Links */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem',
                borderTop: hoveredCard === index ? '2px solid rgba(255,255,255,0.3)' : '2px solid #e8eaf6',
                paddingTop: '1rem',
                flexWrap: 'wrap'
              }}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: hoveredCard === index ? '#ffffff' : '#667eea',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: hoveredCard === index ? 'rgba(255,255,255,0.2)' : (darkMode ? '#1a1a2e' : '#e8eaf6')
                  }}
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: hoveredCard === index ? '#ffffff' : '#667eea',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: hoveredCard === index ? 'rgba(255,255,255,0.2)' : (darkMode ? '#1a1a2e' : '#e8eaf6')
                  }}
                >
                  <FaExternalLinkAlt /> View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive: Stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #projects > div > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;