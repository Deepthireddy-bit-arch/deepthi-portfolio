
"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "../projects/types";


export default function ProjectCard({
  project,

}: {
  project: Project;

}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}

      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "rgba(240,90,26,0.35)" : "#ECEAE6"}`,
        borderRadius: 22,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        boxShadow: hovered ? "0 28px 64px rgba(0,0,0,0.12)" : "0 1px 6px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.45s cubic-bezier(.34,1.56,.64,1), box-shadow 0.4s, border-color 0.3s",
      }}
    >

      <div style={{ position: "relative", height: 210, overflow: "hidden", background: "#111", flexShrink: 0 }}>

        <div style={{ position: "relative", width: "100%", height: "250px" }}>
          <Image
            src={project.img || "/placeholder.jpg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            quality={75}
            priority={false}
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              filter: hovered
                ? "brightness(0.7) saturate(1.15)"
                : "brightness(0.85) saturate(1.05)",
              transition: "transform 0.65s ease, filter 0.65s ease",
            }}
          />
        </div>

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
        }} />


        <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
          {project.isFinal ? (
            <span style={{
              padding: "4px 11px", borderRadius: 100, fontSize: 10, fontWeight: 700,
              letterSpacing: ".06em", textTransform: "uppercase", color: "#fff",
              background: "linear-gradient(135deg,#F05A1A,#FF8040)",
            }}>✦ B.Tech Final</span>
          ) : project.type === "professional" ? (
            <span style={{
              padding: "4px 11px", borderRadius: 100, fontSize: 10, fontWeight: 700,
              letterSpacing: ".06em", textTransform: "uppercase", color: "#fff",
              background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
            }}>Professional</span>
          ) : (
            <span style={{
              padding: "4px 11px", borderRadius: 100, fontSize: 10, fontWeight: 700,
              letterSpacing: ".06em", textTransform: "uppercase", color: "#fff",
              background: "rgba(240,90,26,0.88)",
            }}>Personal</span>
          )}
        </div>


        <span style={{
          position: "absolute", top: 12, right: 12, zIndex: 2,
          padding: "4px 10px", borderRadius: 100, fontSize: 10, fontWeight: 700,
          fontFamily: "monospace", color: "#fff", letterSpacing: ".04em",
          background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)",
        }}>{project.year}</span>


        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, padding: "16px 18px 14px" }}>
          <h3 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 19, fontWeight: 800,
            color: "#fff", lineHeight: 1.1, margin: 0,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}>{project.title}</h3>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", fontWeight: 500, margin: "3px 0 0" }}>
            {project.subtitle}
          </p>
        </div>
      </div>


      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "16px 18px 12px", flex: 1 }}>


        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span style={{
            padding: "3px 10px", borderRadius: 100, fontSize: 10, fontWeight: 700,
            letterSpacing: ".07em", textTransform: "uppercase",
            background: project.team === "team" ? "#FFF8EA" : "#EAF3FF",
            color: project.team === "team" ? "#A07010" : "#1860A8",
          }}>
            {project.team === "team" ? "👥 Team" : "👤 Individual"}
          </span>
          {project.isFinal && (
            <span style={{
              padding: "3px 10px", borderRadius: 100, fontSize: 10, fontWeight: 700,
              letterSpacing: ".07em", textTransform: "uppercase", color: "#fff",
              background: "linear-gradient(135deg,#F05A1A,#FF8040)",
            }}>B.Tech Project</span>
          )}
        </div>


        <p style={{
          fontSize: 13.5, color: "#6B6866", lineHeight: 1.65, margin: 0,
          display: "-webkit-box", WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{project.desc}</p>


        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 8px" }}>
          {project.highlights.map((h) => (
            <div key={h} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#555" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: project.color, flexShrink: 0 }} />
              {h}
            </div>
          ))}
        </div>


        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 4 }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              padding: "4px 10px", fontSize: 10, fontWeight: 600,
              letterSpacing: ".06em", textTransform: "uppercase",
              border: "1px solid #EDD8CC", color: "#F05A1A",
              borderRadius: 100, background: "#FFF5EF",
            }}>{t}</span>
          ))}
        </div>
      </div>

    </div>
  );
}
