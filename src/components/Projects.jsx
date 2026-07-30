import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

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
      github: "https://github.com/Arjamanmaaz/gymexora"
    },
    {
      title: "Sales & Customer Analytics Dashboard",
      tech: "SQL, Power BI, DAX, Power Query",
      description: [
        "Analyzed retail sales and customer transaction data using SQL to identify revenue trends",
        "Developed 3 interconnected Power BI dashboards (Sales, Customer, Product Analytics) with DAX measures",
        "Applied Power Query for data transformation and ETL to support business performance monitoring"
      ],
      github: "https://github.com/Arjamanmaaz/PowerBi-Sales-Dashboard"
    },
    {
      title: "FixBuddy – Service Provider Web Application",
      tech: "React.js, JavaScript, HTML5, CSS3",
      description: [
        "Designed and developed responsive frontend interfaces for a service-based web application",
        "Built reusable React.js components for Landing Pages, Authentication, and Service Request modules",
        "Implemented responsive UI design ensuring cross-device compatibility"
      ],
      github: "#"
    },
    {
      title: "Netflix Titles Data Analysis",
      tech: "Python, Pandas, Matplotlib, Seaborn",
      description: [
        "Performed exploratory data analysis (EDA) on Netflix Movies & TV Shows dataset",
        "Analyzed genre popularity, content distribution, release trends, and platform growth indicators",
        "Generated analytical visualizations and insight reports from large-scale entertainment data"
      ],
      github: "https://github.com/Arjamanmaaz/netflix-titles-analysis"
    }
  ];

  return (
    <section id="projects" className={darkMode ? 'dark-section-alt' : 'light-section-alt'}>
      <div style={{ width: '100%', padding: '0 15px' }}>
        <h2 className={`section-title ${darkMode ? 'dark-title' : 'light-title'}`}>Projects</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto'
        }} className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === index 
                  ? 'linear-gradient(135deg, #6366f1, #06b6d4)' 
                  : (darkMode ? '#1a1a3e' : 'white'),
                borderRadius: '12px',
                padding: '25px',
                boxShadow: hoveredCard === index ? '0 10px 35px rgba(99,102,241,0.4)' : '0 2px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)',
                cursor: 'pointer',
                border: hoveredCard === index ? '2px solid #6366f1' : '2px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: hoveredCard === index ? 'rgba(255,255,255,0.5)' : 'linear-gradient(135deg, #6366f1, #06b6d4)',
                transition: 'all 0.3s ease'
              }}></div>

              <h3 style={{ 
                color: hoveredCard === index ? '#ffffff' : (darkMode ? '#e2e8f0' : '#0f172a'), 
                marginBottom: '0.5rem', marginTop: '8px', fontSize: '1.1rem', fontWeight: '600',
                transition: 'color 0.3s ease'
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                color: hoveredCard === index ? 'rgba(255,255,255,0.9)' : '#6366f1', fontWeight: '500', 
                marginBottom: '1rem', fontSize: '0.8rem', paddingBottom: '0.8rem',
                borderBottom: hoveredCard === index ? '1px solid rgba(255,255,255,0.3)' : '1px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}>
                {project.tech}
              </p>
              
              <ul style={{ paddingLeft: '1rem', marginBottom: '1.5rem', flex: 1, listStyle: 'none' }}>
                {project.description.map((desc, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '0.5rem', fontSize: '0.85rem', lineHeight: '1.5',
                    color: hoveredCard === index ? '#f0f0f0' : (darkMode ? '#94a3b8' : '#475569'),
                    display: 'flex', gap: '0.4rem', alignItems: 'flex-start',
                    transition: 'color 0.3s ease'
                  }}>
                    <span style={{ color: hoveredCard === index ? '#ffffff' : '#6366f1', fontWeight: 'bold' }}>▹</span>
                    {desc}
                  </li>
                ))}
              </ul>
              
              <div style={{ borderTop: hoveredCard === index ? '1px solid rgba(255,255,255,0.3)' : '1px solid #e2e8f0', paddingTop: '0.8rem' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: hoveredCard === index ? '#ffffff' : '#6366f1',
                  textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500',
                  padding: '6px 14px', borderRadius: '6px',
                  background: hoveredCard === index ? 'rgba(255,255,255,0.2)' : (darkMode ? '#1e1e40' : '#eef2ff'),
                  transition: 'all 0.3s ease'
                }}><FaGithub /> View on GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;