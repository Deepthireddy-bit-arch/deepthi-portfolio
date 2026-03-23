
"use client";

import { useEffect } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../contact/data";
import { useContactAnimations } from "../contact/animations";
import ContactForm from "../contact/ContactForm";


const PAGE_CSS = `
  * { box-sizing: border-box; }

  .con-page {
    min-height: 100vh;
    background: #FFFFFF;
    position: relative;
  }

  /* Blobs */
  .con-blob {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .con-blob-1 {
    top: -220px; right: -180px;
    width: 580px; height: 580px;
    background: radial-gradient(circle, rgba(240,90,26,.09) 0%, transparent 65%);
  }
  .con-blob-2 {
    bottom: -180px; left: -130px;
    width: 440px; height: 440px;
    background: radial-gradient(circle, rgba(255,179,128,.07) 0%, transparent 65%);
  }
  .con-blob-3 {
    top: 40%; left: 40%;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(240,90,26,.04) 0%, transparent 65%);
  }

  /* Wrap */
  .con-wrap {
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* Header */
  .con-header { margin-bottom: 52px; }

  .con-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }
  .con-eyebrow-line {
    width: 28px; height: 2px;
    background: #F05A1A; flex-shrink: 0;
  }
  .con-eyebrow-text {
    font-size: 11px; font-weight: 700;
    letter-spacing: .28em; text-transform: uppercase;
    color: #F05A1A;
  }

  .con-title {
    font-size: clamp(44px, 7.5vw, 74px);
    font-weight: 800;
    line-height: .95;
    color: #0C0C0A;
    margin: 0 0 20px;
  }
  .con-title-accent {
    position: relative;
    display: inline-block;
    color: #F05A1A;
  }
  .con-title-accent::before {
    content: '';
    position: absolute;
    bottom: 6px; left: -4px; right: -4px;
    height: 10px;
    background: linear-gradient(90deg,#F05A1A,#FF8040);
    opacity: .13;
    border-radius: 3px;
    z-index: -1;
  }

  .con-desc {
    font-size: 15.5px;
    color: #6B6866;
    max-width: 500px;
    line-height: 1.75;
    margin: 0;
  }

  /* Two-column layout */
  .con-layout {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 28px;
    align-items: start;
  }

  /* Left column */
  .con-left { display: flex; flex-direction: column; gap: 16px; }

  /* Info cards */
  .con-info-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 20px;
    background: #fff;
    border: 1px solid #ECEAE6;
    border-radius: 16px;
    cursor: default;
    box-shadow: 0 1px 4px rgba(0,0,0,.04);
    transition: border-color .25s, box-shadow .25s, transform .25s;
    text-decoration: none;
  }
  .con-info-card:hover {
    border-color: rgba(240,90,26,.3);
    box-shadow: 0 6px 24px rgba(240,90,26,.08);
    transform: translateX(4px);
  }
  .con-info-icon {
    width: 42px; height: 42px;
    border-radius: 12px;
    background: #FFF5EF;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .con-info-label {
    font-size: 10.5px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    color: #B0ABA6; margin-bottom: 3px;
  }
  .con-info-value {
    font-size: 14px; font-weight: 600;
    color: #0C0C0A; margin: 0;
  }

  /* Availability badge */
  .con-avail-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 18px;
    border-radius: 100px;
    background: linear-gradient(135deg,#F05A1A,#FF8040);
    color: #fff;
    font-size: 13px; font-weight: 700;
    box-shadow: 0 4px 18px rgba(240,90,26,.28);
    width: fit-content;
  }
  .con-avail-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.75);
    animation: con-pulse 1.8s ease-in-out infinite;
  }

  /* Social links */
  .con-social-section { margin-top: 4px; }
  .con-social-label {
    font-size: 10.5px; font-weight: 700;
    letter-spacing: .16em; text-transform: uppercase;
    color: #B0ABA6; margin-bottom: 12px;
  }
  .con-social-row { display: flex; gap: 10px; flex-wrap: wrap; }

  .con-social-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 16px;
    border-radius: 100px;
    border: 1.5px solid #ECEAE6;
    background: #fff;
    color: #555;
    font-size: 13px; font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all .22s;
    box-shadow: 0 1px 4px rgba(0,0,0,.04);
  }
  .con-social-btn:hover {
    border-color: #F05A1A;
    color: #F05A1A;
    background: #FFF5EF;
    box-shadow: 0 4px 16px rgba(240,90,26,.12);
    transform: translateY(-2px);
  }

  /* Download CV card */
  .con-cv-card {
    padding: 20px;
    background: linear-gradient(135deg, rgba(240,90,26,.06), rgba(255,128,64,.04));
    border: 1.5px dashed rgba(240,90,26,.3);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .con-cv-card p {
    font-size: 13px; color: #6B6866; margin: 0 0 4px;
  }
  .con-cv-card strong {
    font-size: 15px; color: #0C0C0A; font-weight: 700;
  }
  .con-cv-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 18px;
    border-radius: 100px;
    border: 1.5px solid #F05A1A;
    background: transparent;
    color: #F05A1A;
    font-size: 13px; font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: all .22s;
    flex-shrink: 0;
  }
  .con-cv-btn:hover {
    background: #F05A1A;
    color: #fff;
    box-shadow: 0 4px 16px rgba(240,90,26,.3);
  }

  /* Keyframes */
  @keyframes con-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: .5; transform: scale(1.3); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ═══════════════════════════════════════════════════════════════
     RESPONSIVE — MOBILE ONLY
     Web styles above are completely untouched.
  ═══════════════════════════════════════════════════════════════ */

  @media (max-width: 900px) {
    .con-layout {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .con-cv-card {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 768px) {
    /* hide blobs on small screens — they waste paint */
    .con-blob-1 { width: 300px; height: 300px; top: -100px; right: -100px; }
    .con-blob-2 { width: 220px; height: 220px; bottom: -80px; left: -60px; }
    .con-blob-3 { display: none; }

    /* wrap padding */
    .con-wrap { padding: 32px 18px 60px; }

    /* header */
    .con-header { margin-bottom: 32px; }

    /* layout — single column, form comes AFTER info on mobile */
    .con-layout {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    /* availability badge — full width pill */
    .con-avail-badge {
      width: 100%;
      justify-content: center;
      font-size: 12px;
      padding: 11px 16px;
    }

    /* info cards — slightly tighter on mobile */
    .con-info-card {
      padding: 14px 16px;
      border-radius: 14px;
      /* disable translateX hover on touch */
      transform: none !important;
    }
    .con-info-icon {
      width: 38px; height: 38px;
      border-radius: 10px;
      font-size: 16px;
    }
    .con-info-label { font-size: 10px; }
    .con-info-value {
      font-size: 13px;
      /* long emails don't overflow */
      word-break: break-all;
    }

    /* social row — wrap nicely, equal sizing */
    .con-social-row { gap: 8px; }
    .con-social-btn {
      padding: 8px 14px;
      font-size: 12px;
      flex: 1 1 auto;
      justify-content: center;
      min-width: 90px;
    }

    /* CV card */
    .con-cv-card {
      flex-direction: column;
      align-items: flex-start;
      padding: 16px;
      border-radius: 14px;
      gap: 12px;
    }
    .con-cv-btn {
      width: 100%;
      justify-content: center;
      padding: 11px 18px;
    }
  }

  @media (max-width: 480px) {
    .con-wrap { padding: 24px 14px 52px; }

    /* info card value — smaller on very small screens */
    .con-info-value { font-size: 12px; }

    /* social buttons — 2-per-row grid */
    .con-social-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .con-social-btn {
      min-width: unset;
      width: 100%;
    }
  }
`;

export default function ContactPage() {
  const { gsapReady, initAnimations } = useContactAnimations();

  useEffect(() => { if (gsapReady) initAnimations(); }, [gsapReady, initAnimations]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <main className="con-page">
        <div className="con-blob con-blob-1" />
        <div className="con-blob con-blob-2" />
        <div className="con-blob con-blob-3" />

        <div className="con-wrap">

          <div className="con-layout">

            <div className="con-left">


              <div className="con-avail-badge">
                <span className="con-avail-dot" />
                Available for Opportunities
              </div>


              <a href="mailto:doddipallideepthi@gmail.com" className="con-info-card">
                <div className="con-info-icon">✉️</div>
                <div>
                  <div className="con-info-label">Email</div>
                  <p className="con-info-value">doddipallideepthi111@gmail.com</p>
                </div>
              </a>


              <a href="tel:+91XXXXXXXXXX" className="con-info-card">
                <div className="con-info-icon">📞</div>
                <div>
                  <div className="con-info-label">Phone</div>
                  <p className="con-info-value">+91 93468 78045</p>
                </div>
              </a>


              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #ECEAE6", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                <div style={{ padding: "14px 18px", background: "#fff", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #ECEAE6" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#FFF5EF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#B0ABA6" }}>Location</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0C0C0A" }}>Bengaluru, Karnataka, India</div>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.911062716787!2d77.62295787484027!3d12.913437487396545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f2185235a1%3A0xcdb94ef44219f22c!2sKrimson%20Square%2C%20Aayee%20Matha%20Temple%20Rd%2C%20Vinayaka%20Nagar%2C%20Muneswara%20Nagar%2C%20Sector%206%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1774006910972!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>


              <div className="con-social-section">
                <p className="con-social-label">Find me on</p>
                <div className="con-social-row">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="con-social-btn"
                    >
                      <span
                        style={{ display: "flex", alignItems: "center" }}
                        dangerouslySetInnerHTML={{ __html: s.icon }}
                      />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

            </div>


            <ContactForm />

          </div>
        </div>
      </main>
    </>
  );
}