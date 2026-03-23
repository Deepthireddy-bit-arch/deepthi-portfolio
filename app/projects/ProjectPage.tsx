

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PROJECTS, FILTER_OPTIONS, STATS } from "../projects/data";
import type { FilterType } from "../projects/types";
import { useProjectAnimations } from "../projects/animations";
import ProjectCard from "../projects/ProjectCard";

const PAGE_CSS = `


  .proj-page {
    min-height: 100vh;
    background: #FFFFFF;
   margin-bottom:50px;
    
    position: relative;
  }
  .proj-wrap {
    
    margin: 0 auto;
    
    position: relative;
    z-index: 1;
  }

  /* Blobs */
  .proj-blob {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .proj-blob-1 {
    top: -260px; right: -200px;
    width: 640px; height: 640px;
    background: radial-gradient(circle, rgba(240,90,26,.08) 0%, transparent 65%);
  }
  .proj-blob-2 {
    bottom: -200px; left: -150px;
    width: 480px; height: 480px;
    background: radial-gradient(circle, rgba(255,179,128,.07) 0%, transparent 65%);
  }

  /* Header */
  .proj-header { margin-bottom: 48px; }

  .proj-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }
  .proj-eyebrow-line {
    width: 28px; height: 2px;
    background: #F05A1A;
    flex-shrink: 0;
  }
  .proj-eyebrow-text {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .28em;
    text-transform: uppercase;
    color: #F05A1A;
  }

  .proj-title {
  
    font-size: clamp(46px, 8vw, 78px);
    font-weight: 800;
    line-height: .95;
    color: #0C0C0A;
    margin: 0 0 20px;
  }
  .proj-title-accent {
    position: relative;
    display: inline-block;
    color: #F05A1A;
  }
  .proj-title-accent::before {
    content: '';
    position: absolute;
    bottom: 6px; left: -4px; right: -4px;
    height: 10px;
    background: linear-gradient(90deg,#F05A1A,#FF8040);
    opacity: .13;
    border-radius: 3px;
    z-index: -1;
  }

  .proj-desc {
    font-size: 15.5px;
    color: #6B6866;
    max-width: 540px;
    line-height: 1.75;
    margin: 0;
  }

  /* Stats */
  .proj-stats {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 12px;
    margin-bottom: 36px;
  }
  .proj-stat {
    padding: 18px 14px;
    border: 1px solid #ECEAE6;
    border-radius: 16px;
    background: #fff;
    text-align: center;
    cursor: default;
    box-shadow: 0 1px 4px rgba(0,0,0,.05);
    transition: border-color .25s, box-shadow .25s, transform .25s;
  }
  .proj-stat:hover {
    border-color: #FFB380;
    box-shadow: 0 4px 24px rgba(240,90,26,.1);
    transform: translateY(-3px);
  }
  .proj-stat-value {
    display: block;
    
    font-size: 30px;
    font-weight: 800;
    color: #F05A1A;
    margin-bottom: 4px;
  }
  .proj-stat-label {
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: #B0ABA6;
  }

  /* Filters */
  .proj-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 36px;
  }
  .proj-filter-label {
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: #B0ABA6;
    margin-right: 4px;
  }
  .proj-filter-btn {
    padding: 7px 18px;
    border-radius: 100px;
    font-size: 12.5px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #ECEAE6;
    background: #fff;
    color: #B0ABA6;
    transition: all .22s;
   
    outline: none;
  }
  .proj-filter-btn:hover {
    border-color: #F05A1A;
    color: #F05A1A;
  }
  .proj-filter-btn.active {
    background: linear-gradient(135deg,#F05A1A,#FF8040);
    color: #fff;
    border-color: transparent;
    box-shadow: 0 4px 18px rgba(240,90,26,.32);
  }
  .proj-filter-count {
    opacity: .65;
    font-size: 11px;
    margin-left: 3px;
  }

  /* Grid */
  .proj-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px,1fr));
    gap: 22px;
    padding-bottom: 56px;
  }

  /* Footer CTA */
  .proj-footer {
    border: 1px solid #ECEAE6;
    border-radius: 22px;
    background: #fff;
    padding: 32px 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    box-shadow: 0 1px 4px rgba(0,0,0,.05);
  }
  .proj-footer-heading {
 
    font-size: 24px;
    font-weight: 800;
    color: #0C0C0A;
    margin: 0 0 4px;
  }
  .proj-footer-sub {
    font-size: 14px;
    color: #6B6866;
    margin: 0;
  }
  .proj-footer-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: 14px;
    background: linear-gradient(135deg,#F05A1A,#FF8040);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    
    text-decoration: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(240,90,26,.3);
    transition: transform .25s, box-shadow .25s;
    white-space: nowrap;
  }
  .proj-footer-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 32px rgba(240,90,26,.45);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .proj-stats { grid-template-columns: 1fr 1fr; }
    .proj-footer { flex-direction: column; text-align: center; }
  }
  @media (max-width: 480px) {
    .proj-wrap  { padding: 36px 16px 56px; }
    .proj-grid  { grid-template-columns: 1fr; }
  }
`;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const { gsapReady, initAnimations, reanimateCards } = useProjectAnimations();



  const filtered = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "professional") return p.type === "professional";
    if (filter === "personal") return p.type === "personal";
    if (filter === "individual") return p.team === "individual";
    if (filter === "team") return p.team === "team";
    return true;
  });

  useEffect(() => { if (gsapReady) initAnimations(); }, [gsapReady, initAnimations]);
  useEffect(() => { if (gsapReady) reanimateCards(); }, [filter, gsapReady, reanimateCards]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <main className="proj-page">
        <div className="proj-blob proj-blob-1" />
        <div className="proj-blob proj-blob-2" />

        <div className="proj-wrap">


          <div className="proj-filters">
            <span className="proj-filter-label">Filter:</span>
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`proj-filter-btn${filter === opt.value ? " active" : ""}`}
                onClick={() => setFilter(opt.value)}
              >
                {opt.label}
                <span className="proj-filter-count">{opt.count}</span>
              </button>
            ))}
          </div>

          <div className="proj-grid">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>


          <div className="proj-footer" id="proj-footer">
            <div>
              <h2 className="proj-footer-heading">Have a project in mind?</h2>
              <p className="proj-footer-sub">Open to freelance, full-time &amp; collaboration opportunities.</p>
            </div>
            <a href="/contact" className="proj-footer-btn">
              Let&apos;s Talk →
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
