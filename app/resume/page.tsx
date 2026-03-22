// // app/resume/page.tsx  (or pages/resume.tsx)
// // No download — display only

// import React from "react";

// export default function ResumePage() {
//   return (
//     <main className="resume-root">
//       <style>{`


//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .resume-root {
//           min-height: 100vh;
//           background: #f0ede8;
//           display: flex;
//           align-items: flex-start;
//           justify-content: center;
//           padding: 48px 16px;
       
//         }

//         .resume-card {
//           background: #fff;
//           width: 100%;
//           max-width: 960px;
//           box-shadow: 0 8px 60px rgba(0,0,0,0.10);
//           display: grid;
//           grid-template-columns: 300px 1fr;
//           min-height: 1000px;
//         }

//         /* ── LEFT SIDEBAR ── */
//         .sidebar {
//           background: #1a1a2e;
//           color: #e8e4dc;
//           padding: 40px 28px;
//           display: flex;
//           flex-direction: column;
//           gap: 36px;
//         }

//         .sidebar-name {
//           border-bottom: 1px solid rgba(255,255,255,0.12);
//           padding-bottom: 24px;
//         }

//         .sidebar-name h1 {
       
//           font-size: 26px;
//           font-weight: 700;
//           color: #fff;
//           line-height: 1.2;
//           margin-bottom: 6px;
//         }

//         .sidebar-name p {
//           font-size: 12px;
//           font-weight: 300;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: #c8b98a;
//         }

//         .sidebar-section h3 {
//           font-size: 10px;
//           letter-spacing: 2.5px;
//           text-transform: uppercase;
//           color: #c8b98a;
//           margin-bottom: 14px;
//           font-weight: 500;
//         }

//         .contact-item {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 10px;
//         }

//         .contact-label {
//           font-size: 10px;
//           color: #888;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           margin-bottom: 2px;
//         }

//         .contact-value {
//           font-size: 13px;
//           color: #e8e4dc;
//           word-break: break-all;
//         }

//         .skill-group {
//           margin-bottom: 14px;
//         }

//         .skill-group-label {
//           font-size: 11px;
//           color: #c8b98a;
//           margin-bottom: 6px;
//         }

//         .skill-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//         }

//         .skill-tag {
//           background: rgba(200, 185, 138, 0.12);
//           border: 1px solid rgba(200, 185, 138, 0.25);
//           color: #e8e4dc;
//           font-size: 11px;
//           padding: 3px 9px;
//           border-radius: 2px;
//         }

//         .sidebar-list {
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .sidebar-list li {
//           font-size: 13px;
//           color: #e8e4dc;
//           padding-left: 12px;
//           position: relative;
//         }

//         .sidebar-list li::before {
//           content: '–';
//           position: absolute;
//           left: 0;
//           color: #c8b98a;
//         }

//         /* ── RIGHT MAIN ── */
//         .main-content {
//           padding: 40px 36px;
//           display: flex;
//           flex-direction: column;
//           gap: 32px;
//         }

//         .section-title {
       
//           font-size: 18px;
//           font-weight: 700;
//           color: #1a1a2e;
//           border-bottom: 2px solid #1a1a2e;
//           padding-bottom: 6px;
//           margin-bottom: 16px;
//           letter-spacing: 0.3px;
//         }

//         /* Education table */
//         .edu-table {
//           width: 100%;
//           border-collapse: collapse;
//           font-size: 13px;
//         }

//         .edu-table thead tr {
//           background: #1a1a2e;
//           color: #c8b98a;
//         }

//         .edu-table thead th {
//           padding: 8px 12px;
//           text-align: left;
//           font-size: 11px;
//           font-weight: 500;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//         }

//         .edu-table tbody tr:nth-child(odd) {
//           background: #f7f5f1;
//         }

//         .edu-table tbody td {
//           padding: 10px 12px;
//           color: #333;
//           vertical-align: top;
//         }

//         .edu-table tbody td:first-child {
//           font-weight: 500;
//           color: #1a1a2e;
//           white-space: nowrap;
//         }

//         .edu-score {
//           color: #c8b98a;
//           font-weight: 600;
//           white-space: nowrap;
//         }

//         /* Internship / Project cards */
//         .entry {
//           margin-bottom: 20px;
//           padding-left: 14px;
//           border-left: 3px solid #c8b98a;
//         }

//         .entry:last-child { margin-bottom: 0; }

//         .entry-title {
//           font-weight: 500;
//           font-size: 14px;
//           color: #1a1a2e;
//           margin-bottom: 2px;
//         }

//         .entry-meta {
//           font-size: 11px;
//           color: #888;
//           margin-bottom: 8px;
//           letter-spacing: 0.3px;
//         }

//         .entry-bullets {
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//         }

//         .entry-bullets li {
//           font-size: 12.5px;
//           color: #444;
//           padding-left: 14px;
//           position: relative;
//           line-height: 1.5;
//         }

//         .entry-bullets li::before {
//           content: '▸';
//           position: absolute;
//           left: 0;
//           color: #c8b98a;
//           font-size: 11px;
//           top: 2px;
//         }

//         /* Certifications */
//         .cert-list {
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .cert-list li {
//           font-size: 13px;
//           color: #333;
//           padding-left: 18px;
//           position: relative;
//           line-height: 1.5;
//         }

//         .cert-list li::before {
//           content: '✦';
//           position: absolute;
//           left: 0;
//           color: #c8b98a;
//           font-size: 10px;
//           top: 3px;
//         }

//         /* Responsive */
//         @media (max-width: 640px) {
//           .resume-card {
//             grid-template-columns: 1fr;
//           }

//           .sidebar {
//             padding: 32px 24px;
//           }

//           .main-content {
//             padding: 32px 24px;
//           }
//         }
//       `}</style>

//       <div className="resume-card">
//         {/* ── SIDEBAR ── */}
//         <aside className="sidebar">
//           <div className="sidebar-name">
//             <h1>Doddipalli Deepthi</h1>
//             <p>Java Full Stack Developer</p>
//           </div>

//           {/* Contact */}
//           <div className="sidebar-section">
//             <h3>Contact</h3>
//             <div className="contact-item">
//               <span className="contact-label">Email</span>
//               <span className="contact-value">doddipallideepthi111@gmail.com</span>
//             </div>
//             <div className="contact-item">
//               <span className="contact-label">Phone</span>
//               <span className="contact-value">+91-9346878045</span>
//             </div>
//           </div>

//           {/* Skills */}
//       <div className="sidebar-section">
//   <h3>Skills</h3>

//   <div className="skill-group">
//     <p className="skill-group-label">Languages</p>
//     <div className="skill-tags">
//       <span className="skill-tag">JavaScript</span>
//       <span className="skill-tag">TypeScript</span>
//       <span className="skill-tag">Java</span>
//     </div>
//   </div>

//   <div className="skill-group">
//     <p className="skill-group-label">Frontend</p>
//     <div className="skill-tags">
//       <span className="skill-tag">React</span>
//       <span className="skill-tag">Next.js</span>
//       <span className="skill-tag">Redux</span>
//     </div>
//   </div>

//   <div className="skill-group">
//     <p className="skill-group-label">Web Technologies</p>
//     <div className="skill-tags">
//       <span className="skill-tag">HTML</span>
//       <span className="skill-tag">CSS</span>
//     </div>
//   </div>

//   <div className="skill-group">
//     <p className="skill-group-label">Styling</p>
//     <div className="skill-tags">
//       <span className="skill-tag">Bootstrap</span>
//     </div>
//   </div>
// </div>

//           {/* Languages Known */}
//           <div className="sidebar-section">
//             <h3>Languages</h3>
//             <ul className="sidebar-list">
//               <li>Telugu</li>
//               <li>Hindi</li>
//                 <li>Tamil</li>
//               <li>English</li>
//             </ul>
//           </div>

//           {/* Hobbies */}
//           <div className="sidebar-section">
//             <h3>Hobbies</h3>
//             <ul className="sidebar-list">
//               <li>Learning Languages</li>
//               <li>Listening to Music</li>
//             </ul>
//           </div>
//         </aside>

//         {/* ── MAIN CONTENT ── */}
//         <div className="main-content">

//           {/* Education */}
//           <section>
//             <h2 className="section-title">Education</h2>
//             <table className="edu-table">
//               <thead>
//                 <tr>
//                   <th>Degree</th>
//                   <th>Institution</th>
//                   <th>Score</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>B.Tech (CSE)</td>
//                   <td>Vemu Institute of Technology, P Kothakota</td>
//                   <td className="edu-score">80.17% (2024)</td>
//                 </tr>
//                 <tr>
//                   <td>Intermediate (MPC)</td>
//                   <td>S.P.W Junior College, Tirupati</td>
//                   <td className="edu-score">92.5% (2020)</td>
//                 </tr>
//                 <tr>
//                   <td>Secondary (High School)</td>
//                   <td>Sri Chaitanya Children&#39;s Academy, Tirupathi</td>
//                   <td className="edu-score">9.7 CGPA (2018)</td>
//                 </tr>
//               </tbody>
//             </table>
//           </section>

//           {/* Internships */}
//           <section>
//             <h2 className="section-title">Internships</h2>

//             <div className="entry">
//               <p className="entry-title">Web Application Development & Designing — Intern</p>
//               <p className="entry-meta">May 2023 – July 2023 · Konig Tronics Pvt. Ltd., Bangalore</p>
//               <ul className="entry-bullets">
//                 <li>Developed a project called <strong>College Fest</strong> — a website to manage multiple college events using frontend tools.</li>
//               </ul>
//             </div>

//             <div className="entry">
//               <p className="entry-title">Full Stack Developer — Intern</p>
//               <p className="entry-meta">
//                 Jan 2024 – May 2024 · International Institute of Digital Technologies &amp; Blackbuck Engineers,
//                 in association with APSCHE
//               </p>
//               <ul className="entry-bullets">
//                 <li>Developed a <strong>Netflix Clone</strong> — replicating the design and functionality of the Netflix homepage.</li>
//               </ul>
//             </div>
//           </section>

//           {/* Projects */}
//           <section>
//             <h2 className="section-title">Projects</h2>
//             <div className="entry">
//               <p className="entry-title">Smart Systems for Dementia Identification using Machine Learning</p>
//               <ul className="entry-bullets">
//                 <li>Explored machine learning techniques for early detection of dementia.</li>
//                 <li>Leveraged a dataset comprising clinical, neuroimaging, and genetic information.</li>
//                 <li>Employed state-of-the-art ML algorithms to develop a predictive model for identifying early signs of dementia.</li>
//               </ul>
//             </div>
//           </section>

//           {/* Experience */}
//        <section>
//   <h2 className="section-title">Experience</h2>

//   <div className="entry">
//     <h3 className="entry-title">Frontend Developer</h3>
//     <p className="entry-subtitle">Aim Window Infotech | 1 Year</p>

//     <ul className="entry-bullets">
//       <li>Developed responsive and user-friendly web interfaces using React and modern frontend technologies.</li>
//       <li>Worked with HTML, CSS, JavaScript, and Bootstrap to build clean and consistent UI components.</li>
//       <li>Collaborated with team members to implement features and improve user experience.</li>
//       <li>Optimized performance and ensured cross-browser compatibility.</li>
//     </ul>
//   </div>
// </section>

//           {/* Certifications */}
//           <section>
//             <h2 className="section-title">Certifications</h2>
//             <ul className="cert-list">
//               <li>Completed <strong>Java Full Stack</strong> course at Besant Technologies.</li>
//               <li>Completed an online course on <strong>HTML</strong> at Great Learning.</li>
//             </ul>
//           </section>

//         </div>
//       </div>
//     </main>
//   );
// }
// app/resume/page.tsx  (or pages/resume.tsx)
// No download — display only

import React from "react";

export default function ResumePage() {
  return (
    <main className="resume-root">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .resume-root {
          min-height: 100vh;
          background: #f0ede8;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 48px 16px;
        }

        .resume-card {
          background: #fff;
          width: 100%;
          max-width: 960px;
          box-shadow: 0 8px 60px rgba(0,0,0,0.10);
          display: grid;
          grid-template-columns: 300px 1fr;
          min-height: 1000px;
        }

        /* ── LEFT SIDEBAR ── */
        .sidebar {
          background: #1a1a2e;
          color: #e8e4dc;
          padding: 40px 28px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .sidebar-name {
          border-bottom: 1px solid rgba(255,255,255,0.12);
          padding-bottom: 24px;
        }

        .sidebar-name h1 {
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .sidebar-name p {
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #c8b98a;
        }

        .sidebar-section h3 {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #c8b98a;
          margin-bottom: 14px;
          font-weight: 500;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
        }

        .contact-label {
          font-size: 10px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 2px;
        }

        .contact-value {
          font-size: 13px;
          color: #e8e4dc;
          word-break: break-all;
        }

        .skill-group {
          margin-bottom: 14px;
        }

        .skill-group-label {
          font-size: 11px;
          color: #c8b98a;
          margin-bottom: 6px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .skill-tag {
          background: rgba(200,185,138,0.12);
          border: 1px solid rgba(200,185,138,0.25);
          color: #e8e4dc;
          font-size: 11px;
          padding: 3px 9px;
          border-radius: 2px;
        }

        .sidebar-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-list li {
          font-size: 13px;
          color: #e8e4dc;
          padding-left: 12px;
          position: relative;
        }

        .sidebar-list li::before {
          content: '–';
          position: absolute;
          left: 0;
          color: #c8b98a;
        }

        /* ── RIGHT MAIN ── */
        .main-content {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a2e;
          border-bottom: 2px solid #1a1a2e;
          padding-bottom: 6px;
          margin-bottom: 16px;
          letter-spacing: 0.3px;
        }

        /* Education table */
        .edu-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .edu-table thead tr {
          background: #1a1a2e;
          color: #c8b98a;
        }

        .edu-table thead th {
          padding: 8px 12px;
          text-align: left;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .edu-table tbody tr:nth-child(odd) {
          background: #f7f5f1;
        }

        .edu-table tbody td {
          padding: 10px 12px;
          color: #333;
          vertical-align: top;
        }

        .edu-table tbody td:first-child {
          font-weight: 500;
          color: #1a1a2e;
          white-space: nowrap;
        }

        .edu-score {
          color: #c8b98a;
          font-weight: 600;
          white-space: nowrap;
        }

        /* Internship / Project cards */
        .entry {
          margin-bottom: 20px;
          padding-left: 14px;
          border-left: 3px solid #c8b98a;
        }

        .entry:last-child { margin-bottom: 0; }

        .entry-title {
          font-weight: 500;
          font-size: 14px;
          color: #1a1a2e;
          margin-bottom: 2px;
        }

        .entry-meta {
          font-size: 11px;
          color: #888;
          margin-bottom: 8px;
          letter-spacing: 0.3px;
        }

        .entry-subtitle {
          font-size: 12px;
          color: #888;
          margin-bottom: 8px;
          font-style: italic;
        }

        .entry-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .entry-bullets li {
          font-size: 12.5px;
          color: #444;
          padding-left: 14px;
          position: relative;
          line-height: 1.5;
        }

        .entry-bullets li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #c8b98a;
          font-size: 11px;
          top: 2px;
        }

        /* Certifications */
        .cert-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cert-list li {
          font-size: 13px;
          color: #333;
          padding-left: 18px;
          position: relative;
          line-height: 1.5;
        }

        .cert-list li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: #c8b98a;
          font-size: 10px;
          top: 3px;
        }

        /* ═══════════════════════════════════════════════════════════
           RESPONSIVE — MOBILE ONLY
           Web styles above are completely untouched.
        ═══════════════════════════════════════════════════════════ */

        @media (max-width: 768px) {
          /* page wrapper — less padding */
          .resume-root {
            padding: 0;
            align-items: stretch;
          }

          /* card stacks vertically: sidebar on top, main below */
          .resume-card {
            grid-template-columns: 1fr;
            min-height: unset;
            box-shadow: none;
            border-radius: 0;
          }

          /* sidebar — horizontal info layout */
          .sidebar {
            padding: 28px 20px;
            gap: 24px;
          }

          .sidebar-name h1 {
            font-size: 22px;
          }

          .sidebar-name p {
            font-size: 11px;
            letter-spacing: 1.5px;
          }

          /* contact items side by side */
          .sidebar-section .contact-item {
            margin-bottom: 8px;
          }

          .contact-value {
            font-size: 12px;
          }

          /* skill tags smaller on mobile */
          .skill-tag {
            font-size: 10px;
            padding: 3px 8px;
          }

          /* main content */
          .main-content {
            padding: 24px 20px;
            gap: 24px;
          }

          .section-title {
            font-size: 15px;
          }

          /* education table — scrollable on mobile */
          .edu-table-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .edu-table {
            min-width: 420px;
            font-size: 12px;
          }

          .edu-table thead th {
            padding: 7px 10px;
            font-size: 10px;
          }

          .edu-table tbody td {
            padding: 8px 10px;
            font-size: 12px;
          }

          /* strip white-space:nowrap on mobile so degree col wraps */
          .edu-table tbody td:first-child {
            white-space: normal;
          }

          /* entries */
          .entry {
            padding-left: 12px;
            margin-bottom: 16px;
          }

          .entry-title {
            font-size: 13px;
          }

          .entry-meta,
          .entry-subtitle {
            font-size: 11px;
          }

          .entry-bullets li {
            font-size: 12px;
          }

          /* certs */
          .cert-list li {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .sidebar { padding: 24px 16px; gap: 20px; }
          .main-content { padding: 20px 16px; gap: 20px; }

          .sidebar-name h1 { font-size: 20px; }

          .section-title { font-size: 14px; }

          .entry-title { font-size: 12.5px; }
          .entry-bullets li { font-size: 11.5px; }
        }
      `}</style>

      <div className="resume-card">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div className="sidebar-name">
            <h1>Doddipalli Deepthi</h1>
            <p>Java Full Stack Developer</p>
          </div>

          {/* Contact */}
          <div className="sidebar-section">
            <h3>Contact</h3>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">doddipallideepthi111@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+91-9346878045</span>
            </div>
          </div>

          {/* Skills */}
          <div className="sidebar-section">
            <h3>Skills</h3>

            <div className="skill-group">
              <p className="skill-group-label">Languages</p>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Java</span>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-group-label">Frontend</p>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Redux</span>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-group-label">Web Technologies</p>
              <div className="skill-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-group-label">Styling</p>
              <div className="skill-tags">
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Languages Known */}
          <div className="sidebar-section">
            <h3>Languages</h3>
            <ul className="sidebar-list">
              <li>Telugu</li>
              <li>Hindi</li>
              <li>Tamil</li>
              <li>English</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="sidebar-section">
            <h3>Hobbies</h3>
            <ul className="sidebar-list">
              <li>Learning Languages</li>
              <li>Listening to Music</li>
            </ul>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div className="main-content">

          {/* Education */}
          <section>
            <h2 className="section-title">Education</h2>
            {/* Wrapped in a div for horizontal scroll on mobile */}
            <div className="edu-table-wrap">
              <table className="edu-table">
                <thead>
                  <tr>
                    <th>Degree</th>
                    <th>Institution</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B.Tech (CSE)</td>
                    <td>Vemu Institute of Technology, P Kothakota</td>
                    <td className="edu-score">80.17% (2024)</td>
                  </tr>
                  <tr>
                    <td>Intermediate (MPC)</td>
                    <td>S.P.W Junior College, Tirupati</td>
                    <td className="edu-score">92.5% (2020)</td>
                  </tr>
                  <tr>
                    <td>Secondary (High School)</td>
                    <td>Sri Chaitanya Children&#39;s Academy, Tirupathi</td>
                    <td className="edu-score">9.7 CGPA (2018)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Internships */}
          <section>
            <h2 className="section-title">Internships</h2>

            <div className="entry">
              <p className="entry-title">Web Application Development & Designing — Intern</p>
              <p className="entry-meta">May 2023 – July 2023 · Konig Tronics Pvt. Ltd., Bangalore</p>
              <ul className="entry-bullets">
                <li>Developed a project called <strong>College Fest</strong> — a website to manage multiple college events using frontend tools.</li>
              </ul>
            </div>

            <div className="entry">
              <p className="entry-title">Full Stack Developer — Intern</p>
              <p className="entry-meta">
                Jan 2024 – May 2024 · International Institute of Digital Technologies &amp; Blackbuck Engineers,
                in association with APSCHE
              </p>
              <ul className="entry-bullets">
                <li>Developed a <strong>Netflix Clone</strong> — replicating the design and functionality of the Netflix homepage.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <p className="entry-title">Smart Systems for Dementia Identification using Machine Learning</p>
              <ul className="entry-bullets">
                <li>Explored machine learning techniques for early detection of dementia.</li>
                <li>Leveraged a dataset comprising clinical, neuroimaging, and genetic information.</li>
                <li>Employed state-of-the-art ML algorithms to develop a predictive model for identifying early signs of dementia.</li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="section-title">Experience</h2>
            <div className="entry">
              <h3 className="entry-title">Frontend Developer</h3>
              <p className="entry-subtitle">Aim Window Infotech | 1 Year</p>
              <ul className="entry-bullets">
                <li>Developed responsive and user-friendly web interfaces using React and modern frontend technologies.</li>
                <li>Worked with HTML, CSS, JavaScript, and Bootstrap to build clean and consistent UI components.</li>
                <li>Collaborated with team members to implement features and improve user experience.</li>
                <li>Optimized performance and ensured cross-browser compatibility.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="section-title">Certifications</h2>
            <ul className="cert-list">
              <li>Completed <strong>Java Full Stack</strong> course at Besant Technologies.</li>
              <li>Completed an online course on <strong>HTML</strong> at Great Learning.</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}