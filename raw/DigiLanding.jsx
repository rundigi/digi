"use client";
// ─────────────────────────────────────────────────────────────────────────────
// digi — Landing Page  (single-file React component)
// Drop into app/page.jsx or pages/index.jsx in a Next.js project.
// Fonts are loaded via a <style> tag injected at runtime (no next/head needed).
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  blue:        "#3A7DFF",
  blueDark:    "#2e6de0",
  blueGlow:    "rgba(58,125,255,0.30)",
  blueGlowLg:  "rgba(58,125,255,0.40)",
  blueSubtle:  "rgba(58,125,255,0.10)",
  blueBorder:  "rgba(58,125,255,0.25)",
  charcoal:    "#1E1E23",
  surface:     "#27272a",
  surface2:    "#18181b",
  code:        "#1e1f24",
  codeChrome:  "#27282e",
  slate:       "#5A5D67",
  white:       "#F4F4F6",
  whiteDim:    "rgba(244,244,246,0.55)",
  whiteSubtle: "rgba(244,244,246,0.08)",
  border:      "rgba(255,255,255,0.07)",
  borderMed:   "rgba(255,255,255,0.10)",
  green:       "#22c55e",
  red:         "#ef4444",
  amber:       "#f59e0b",
  // syntax
  synKw:       "#a78bfa",
  synStr:      "#22c55e",
  synNum:      "#f59e0b",
  synFn:       "#60a5fa",
  synComment:  "#3f3f46",
  synPlain:    "#a1a1aa",
};

// ─── Global styles (fonts + keyframes) injected once ─────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: ${T.charcoal};
    color: ${T.white};
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  @keyframes digi-fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes digi-blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  .digi-fade-1 { opacity:0; animation: digi-fadeUp 0.6s 0.05s ease forwards; }
  .digi-fade-2 { opacity:0; animation: digi-fadeUp 0.7s 0.20s ease forwards; }
  .digi-fade-3 { opacity:0; animation: digi-fadeUp 0.7s 0.35s ease forwards; }
  .digi-fade-4 { opacity:0; animation: digi-fadeUp 0.7s 0.50s ease forwards; }
  .digi-fade-5 { opacity:0; animation: digi-fadeUp 0.8s 0.70s ease forwards; }

  .digi-cursor {
    display: inline-block;
    width: 7px; height: 14px;
    background: ${T.blue};
    border-radius: 1px;
    vertical-align: middle;
    margin-left: 3px;
    animation: digi-blink 1s step-end infinite;
  }

  /* Nav link hover */
  .digi-nav-link { color: ${T.whiteDim}; text-decoration: none; font-size: 0.875rem; transition: color 0.2s; }
  .digi-nav-link:hover { color: ${T.white}; }

  /* Logo items */
  .digi-logo-item {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    color: rgba(255,255,255,0.18);
    letter-spacing: -0.01em;
    transition: color 0.2s;
    cursor: default;
  }
  .digi-logo-item:hover { color: rgba(255,255,255,0.45); }

  /* Feature card hover */
  .digi-feature-card {
    background: ${T.charcoal};
    padding: 2rem 2rem 2.25rem;
    position: relative;
    overflow: hidden;
    transition: background 0.25s;
    cursor: default;
  }
  .digi-feature-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(58,125,255,0), transparent);
    transition: background 0.3s;
  }
  .digi-feature-card:hover { background: rgba(32,33,40,0.95); }
  .digi-feature-card:hover::before {
    background: linear-gradient(90deg, transparent, rgba(58,125,255,0.5), transparent);
  }

  /* Footer links */
  .digi-footer-link { color: ${T.slate}; font-size: 0.85rem; text-decoration: none; transition: color 0.2s; }
  .digi-footer-link:hover { color: ${T.whiteDim}; }

  /* Noise overlay */
  .digi-noise {
    position: fixed; inset: 0; pointer-events: none; z-index: 9999;
    opacity: 0.35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  }

  /* Copy btn hover */
  .digi-copy-btn:hover { background: rgba(255,255,255,0.09) !important; color: ${T.white} !important; }

  /* Code row hover */
  .digi-code-row:hover td { background: rgba(255,255,255,0.02); }

  /* Scroll to section offset */
  [id] { scroll-margin-top: 72px; }

  @media (max-width: 768px) {
    .digi-nav-links  { display: none !important; }
    .digi-deploy-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
    .digi-metrics-grid { grid-template-columns: repeat(2,1fr) !important; }
    .digi-pricing-grid { grid-template-columns: 1fr !important; }
  }
`;

function InjectGlobalStyles() {
  useEffect(() => {
    if (document.getElementById("digi-global")) return;
    const s = document.createElement("style");
    s.id = "digi-global";
    s.textContent = GLOBAL_CSS;
    document.head.appendChild(s);
  }, []);
  return null;
}

// ─── SVG Icon ─────────────────────────────────────────────────────────────────
function DigiIcon({ size = 30, muted = false }) {
  const fill = muted ? T.slate : "white";
  const stroke = muted ? T.slate : "white";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="10" cy="34" r="3" fill={fill} />
      <rect x="18" y="24" width="6" height="13" rx="2" fill={fill} />
      <rect x="28" y="16" width="6" height="21" rx="2" fill={fill} />
      <path d="M7 34 Q28 28 40 16" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="16" r="3.5" fill={fill} />
    </svg>
  );
}

// ─── Buttons ──────────────────────────────────────────────────────────────────
function BtnPrimary({ children, large = false, style: sx = {} }) {
  const [hov, setHov] = useState(false);
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    background: hov ? T.blueDark : T.blue,
    color: "#fff", border: "none", cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: large ? "0.95rem" : "0.875rem",
    fontWeight: 500,
    padding: large ? "0.75rem 1.75rem" : "0.45rem 1rem",
    borderRadius: large ? 8 : 6,
    textDecoration: "none",
    transition: "all 0.2s",
    boxShadow: large ? (hov ? `0 4px 40px ${T.blueGlowLg}` : `0 0 30px ${T.blueGlow}`) : "none",
    transform: hov && large ? "translateY(-2px)" : hov ? "translateY(-1px)" : "none",
    letterSpacing: "0.01em",
    whiteSpace: "nowrap",
    ...sx,
  };
  return (
    <a href="#" style={base} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  );
}

function BtnOutline({ children, large = false, block = false, style: sx = {} }) {
  const [hov, setHov] = useState(false);
  const base = {
    display: block ? "flex" : "inline-flex",
    alignItems: "center", justifyContent: "center",
    background: hov ? "rgba(255,255,255,0.10)" : T.whiteSubtle,
    color: hov ? T.white : T.whiteDim,
    border: `1px solid ${hov ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)"}`,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: large ? "0.95rem" : "0.875rem",
    padding: large ? "0.75rem 1.75rem" : "0.45rem 1rem",
    borderRadius: large ? 8 : 6,
    textDecoration: "none",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
    width: block ? "100%" : undefined,
    ...sx,
  };
  return (
    <a href="#" style={base} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  );
}

function BtnGhost({ children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#"
      style={{
        background: hov ? T.whiteSubtle : "none",
        border: "none", cursor: "pointer",
        color: hov ? T.white : T.whiteDim,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.875rem",
        padding: "0.4rem 0.75rem",
        borderRadius: 6,
        transition: "all 0.2s",
        textDecoration: "none",
        display: "inline-block",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2rem",
      height: 60,
      background: scrolled ? "rgba(28,28,33,0.85)" : "rgba(30,30,35,0.72)",
      backdropFilter: "blur(14px)",
      borderBottom: `1px solid rgba(255,255,255,${scrolled ? "0.08" : "0.06"})`,
      transition: "background 0.3s, border-color 0.3s",
    }}>
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill={T.charcoal} />
          <circle cx="10" cy="34" r="3" fill="white" />
          <rect x="18" y="24" width="6" height="13" rx="2" fill="white" />
          <rect x="28" y="16" width="6" height="21" rx="2" fill="white" />
          <path d="M7 34 Q28 28 40 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="40" cy="16" r="3.5" fill="white" />
        </svg>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.25rem", fontWeight: 600, color: T.white, letterSpacing: "-0.01em" }}>
          digi
        </span>
      </a>

      {/* Nav links */}
      <ul className="digi-nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none" }}>
        {[["#features","Features"],["#deploy","Deploy"],["#pricing","Pricing"],["#","Docs"],["#","Blog"]].map(([href, label]) => (
          <li key={label}><a href={href} className="digi-nav-link">{label}</a></li>
        ))}
      </ul>

      {/* CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <BtnGhost>Sign in</BtnGhost>
        <BtnPrimary>Get started →</BtnPrimary>
      </div>
    </nav>
  );
}

// ─── Terminal ─────────────────────────────────────────────────────────────────
const TERMINAL_LINES = [
  { type: "cmd",     bin: "digi", rest: " init my-api" },
  { type: "success", bold: "Project created", dim: " — my-api/" },
  { type: "cmd",     bin: "digi", rest: " service add postgres redis" },
  { type: "success", bold: "postgres", dim: " provisioned in 1.2s" },
  { type: "success", bold: "redis",    dim: " provisioned in 0.8s" },
  { type: "cmd",     bin: "digi", rest: " deploy" },
  { type: "success", bold: "Deployed to ", url: "my-api.digi.run", dim: " — 3.4s", cursor: true },
];

function Terminal({ animated = false }) {
  const [count, setCount] = useState(animated ? 0 : TERMINAL_LINES.length);

  useEffect(() => {
    if (!animated) return;
    let i = 0;
    const tick = () => { i++; setCount(i); if (i < TERMINAL_LINES.length) setTimeout(tick, 360); };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [animated]);

  const visible = TERMINAL_LINES.slice(0, count);

  return (
    <div style={{
      background: T.code,
      border: `1px solid ${T.borderMed}`,
      borderRadius: 14,
      overflow: "hidden",
      fontFamily: "'DM Mono', 'JetBrains Mono', monospace",
      fontSize: 13.5,
      boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
    }}>
      {/* Traffic lights */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "13px 18px",
        background: T.codeChrome,
        borderBottom: `1px solid rgba(255,255,255,0.07)`,
      }}>
        {[T.red, T.amber, T.green].map(c => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />
        ))}
      </div>

      {/* Body */}
      <div style={{ padding: "18px 22px", lineHeight: 2.0 }}>
        {visible.map((line, i) => {
          const isLast = i === visible.length - 1;
          if (line.type === "cmd") return (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
              <span style={{ color: T.slate, userSelect: "none" }}>$</span>
              <span><span style={{ color: T.blue }}>{line.bin}</span><span style={{ color: T.white }}>{line.rest}</span></span>
              {isLast && animated && count <= TERMINAL_LINES.length && <span className="digi-cursor" />}
            </div>
          );
          return (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
              <span style={{ color: T.green, flexShrink: 0 }}>✓</span>
              <span>
                <span style={{ color: T.white, fontWeight: 700 }}>{line.bold}</span>
                {line.url && <span style={{ color: T.blue }}>{line.url}</span>}
                <span style={{ color: T.slate }}>{line.dim}</span>
              </span>
              {isLast && (animated ? count > TERMINAL_LINES.length - 1 : true) && <span className="digi-cursor" />}
            </div>
          );
        })}
        {animated && count < TERMINAL_LINES.length && (
          <div style={{ minHeight: "2em", display: "flex", alignItems: "baseline" }}>
            <span className="digi-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center",
      padding: "8rem 1.5rem 5rem",
      position: "relative",
    }}>
      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "22%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, rgba(58,125,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Badge */}
      <div className="digi-fade-1" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: T.blueSubtle,
        border: `1px solid ${T.blueBorder}`,
        color: "#93b4ff",
        fontSize: "0.72rem", fontWeight: 500,
        padding: "0.3rem 0.9rem",
        borderRadius: 99,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        marginBottom: "2rem",
      }}>
        <span style={{ width: 6, height: 6, background: T.blue, borderRadius: "50%", display: "inline-block" }} />
        Now in public beta
      </div>

      {/* Headline */}
      <h1 className="digi-fade-2" style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
        lineHeight: 1.06,
        letterSpacing: "-0.03em",
        maxWidth: 800,
      }}>
        Microservice infra<br />
        <span style={{ color: T.blue }}>without the overhead.</span>
      </h1>

      {/* Sub */}
      <p className="digi-fade-3" style={{
        marginTop: "1.5rem",
        fontSize: "clamp(1rem, 2vw, 1.2rem)",
        color: T.whiteDim,
        fontWeight: 300,
        maxWidth: 520,
        lineHeight: 1.7,
      }}>
        Deploy, scale, and connect services in seconds. digi handles the infrastructure so you ship features, not YAML.
      </p>

      {/* Actions */}
      <div className="digi-fade-4" style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <BtnPrimary large>Start for free</BtnPrimary>
        <BtnOutline large>Read the docs</BtnOutline>
      </div>

      {/* Terminal */}
      <div className="digi-fade-5" style={{ marginTop: "4rem", width: "100%", maxWidth: 620, textAlign: "left" }}>
        <Terminal animated />
      </div>
    </section>
  );
}

// ─── Logos bar ────────────────────────────────────────────────────────────────
function LogosBar() {
  const companies = ["Acme Corp", "Northstar", "Vertex Labs", "Relay HQ", "Mesh.io", "Strata"];
  return (
    <div style={{
      padding: "3rem 1.5rem",
      textAlign: "center",
      borderTop: `1px solid rgba(255,255,255,0.05)`,
      borderBottom: `1px solid rgba(255,255,255,0.05)`,
    }}>
      <p style={{ fontSize: "0.72rem", color: T.slate, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem" }}>
        Trusted by engineering teams at
      </p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "2.5rem 3.5rem" }}>
        {companies.map(c => <span key={c} className="digi-logo-item">{c}</span>)}
      </div>
    </div>
  );
}

// ─── Section header helper ────────────────────────────────────────────────────
function SectionHeader({ label, title, desc, center = false }) {
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: T.blue, marginBottom: "0.75rem" }}>
        {label}
      </p>
      <h2 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
        letterSpacing: "-0.025em",
        lineHeight: 1.15,
        marginBottom: "1rem",
      }}>
        {title}
      </h2>
      {desc && (
        <p style={{ color: T.whiteDim, fontSize: "1.05rem", fontWeight: 300, maxWidth: 520, lineHeight: 1.75, margin: center ? "0 auto" : undefined }}>
          {desc}
        </p>
      )}
    </div>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "⚡", title: "Instant provisioning",  desc: "Databases, queues, caches — provisioned in under two seconds. No tickets, no waiting, no toil." },
  { icon: "🔗", title: "Service mesh built-in", desc: "Automatic mTLS, service discovery, and load balancing. Your services find each other without DNS hacks." },
  { icon: "📦", title: "Deploy from anywhere",  desc: "Push from Git, a Dockerfile, or a container registry. digi builds and deploys without a CI pipeline." },
  { icon: "📈", title: "Auto-scaling",           desc: "Scale to zero overnight, handle traffic spikes at 9am. Pay for what you use — down to the second." },
  { icon: "🔒", title: "Secrets & config",       desc: "Inject secrets at runtime. Env vars, vault-backed secrets, and per-environment configs out of the box." },
  { icon: "🌍", title: "Global edge",            desc: "Deploy to 30+ regions with a flag. Latency-aware routing keeps users close to their data." },
];

function Features() {
  return (
    <section id="features" style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          label="Platform"
          title="Everything your services need."
          desc="From a single API to hundreds of microservices — digi gives you the primitives to build without limits."
        />
        {/* Grid wrapper — thin grid lines via background on outer + gap */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25px",
          marginTop: "4rem",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14,
          overflow: "hidden",
        }}>
          {FEATURES.map(f => (
            <div key={f.title} className="digi-feature-card">
              <div style={{
                width: 40, height: 40,
                background: T.blueSubtle,
                border: `1px solid rgba(58,125,255,0.20)`,
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
                fontSize: "1.1rem",
              }}>
                {f.icon}
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "1.05rem", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
                {f.title}
              </p>
              <p style={{ color: T.whiteDim, fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Code block (TOML) ────────────────────────────────────────────────────────
const TOML_LINES = [
  [{ k:"comment", t:"# digi.toml — full stack in 20 lines" }],
  [],
  [{ k:"plain",t:"[" },{ k:"fn",t:"project" },{ k:"plain",t:"]" }],
  [{ k:"kw",t:"name" },   { k:"plain",t:"   = " },{ k:"str",t:'"my-api"' }],
  [{ k:"kw",t:"region" }, { k:"plain",t:" = " }, { k:"str",t:'"auto"' }],
  [],
  [{ k:"plain",t:"[" },{ k:"fn",t:"services" },{ k:"plain",t:"." },{ k:"fn",t:"api" },{ k:"plain",t:"]" }],
  [{ k:"kw",t:"image" },{ k:"plain",t:" = " },{ k:"str",t:'"./api"' }],
  [{ k:"kw",t:"port" }, { k:"plain",t:"  = " },{ k:"num",t:"3000" }],
  [{ k:"kw",t:"scale" },{ k:"plain",t:" = { min = " },{ k:"num",t:"1" },{ k:"plain",t:", max = " },{ k:"num",t:"20" },{ k:"plain",t:" }" }],
  [{ k:"kw",t:"links" },{ k:"plain",t:" = [" },{ k:"str",t:'"db"' },{ k:"plain",t:", " },{ k:"str",t:'"cache"' },{ k:"plain",t:"]" }],
  [],
  [{ k:"plain",t:"[" },{ k:"fn",t:"services" },{ k:"plain",t:"." },{ k:"fn",t:"workers" },{ k:"plain",t:"]" }],
  [{ k:"kw",t:"image" },{ k:"plain",t:" = " },{ k:"str",t:'"./workers"' }],
  [{ k:"kw",t:"scale" },{ k:"plain",t:" = { min = " },{ k:"num",t:"0" },{ k:"plain",t:", max = " },{ k:"num",t:"50" },{ k:"plain",t:" }" }],
  [],
  [{ k:"plain",t:"[" },{ k:"fn",t:"databases" },{ k:"plain",t:"." },{ k:"fn",t:"db" },{ k:"plain",t:"]" }],
  [{ k:"kw",t:"type" },   { k:"plain",t:"    = " },{ k:"str",t:'"postgres"' }],
  [{ k:"kw",t:"version" },{ k:"plain",t:" = " }, { k:"str",t:'"16"' }],
  [],
  [{ k:"plain",t:"[" },{ k:"fn",t:"caches" },{ k:"plain",t:"." },{ k:"fn",t:"cache" },{ k:"plain",t:"]" }],
  [{ k:"kw",t:"type" },{ k:"plain",t:" = " },{ k:"str",t:'"redis"' }],
];

const SYN = { kw: T.synKw, str: T.synStr, num: T.synNum, fn: T.synFn, comment: T.synComment, plain: T.synPlain };

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="digi-copy-btn"
      style={{
        display: "flex", alignItems: "center", gap: 5,
        padding: "3px 10px", borderRadius: 6,
        fontSize: 11, fontWeight: 500, fontFamily: "inherit",
        border: `1px solid ${T.border}`, cursor: "pointer",
        transition: "all 0.18s",
        background: copied ? "rgba(34,197,94,0.10)" : "rgba(255,255,255,0.04)",
        color: copied ? T.green : T.slate,
        borderColor: copied ? "rgba(34,197,94,0.25)" : T.border,
      }}
    >
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}

function TomlBlock() {
  const rawCode = TOML_LINES.map(l => l.map(t => t.t).join("")).join("\n");
  return (
    <div style={{
      background: T.code,
      border: `1px solid ${T.border}`,
      borderRadius: 12,
      overflow: "hidden",
      fontFamily: "'DM Mono', monospace",
      fontSize: 12.5,
      boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
    }}>
      <div style={{
        padding: "9px 16px",
        background: T.codeChrome,
        borderBottom: `1px solid rgba(255,255,255,0.07)`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ color: T.synPlain, fontSize: 12 }}>digi.toml</span>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "rgba(58,125,255,0.65)", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>TOML</span>
          <CopyButton text={rawCode} />
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {TOML_LINES.map((line, li) => (
              <tr key={li} className="digi-code-row">
                <td style={{ padding: "0 0 0 20px", lineHeight: 2, verticalAlign: "top", paddingRight: 24 }}>
                  {line.length === 0
                    ? <span>&nbsp;</span>
                    : line.map((tok, ti) => <span key={ti} style={{ color: SYN[tok.k] || T.synPlain }}>{tok.t}</span>)
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Deploy / Config section ──────────────────────────────────────────────────
const CONFIG_CHECKS = [
  "Git-tracked infrastructure",
  "Per-branch preview environments",
  "Zero-downtime rollouts",
  "Instant rollback with one command",
];

function DeploySection() {
  return (
    <section id="deploy" style={{
      padding: "6rem 1.5rem",
      background: T.surface2,
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="digi-deploy-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <SectionHeader
              label="Configuration"
              title="One file. Infinite services."
              desc={null}
            />
            <p style={{ color: T.whiteDim, fontSize: "1.05rem", fontWeight: 300, maxWidth: 520, lineHeight: 1.75, marginBottom: "2rem" }}>
              Describe your entire infrastructure in a single{" "}
              <code style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.9em", color: "#93b4ff" }}>digi.toml</code>.
              {" "}Services, databases, queues, and routing — all versioned alongside your code.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {CONFIG_CHECKS.map(c => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: T.whiteDim, fontSize: "0.9rem", fontWeight: 300 }}>
                  <span style={{ color: T.blue, fontSize: "0.8rem", flexShrink: 0 }}>✓</span>
                  {c}
                </div>
              ))}
            </div>
          </div>
          <TomlBlock />
        </div>
      </div>
    </section>
  );
}

// ─── Metrics ──────────────────────────────────────────────────────────────────
const METRICS = [
  { value: "1.2", suffix: "s",    label: "Avg. provision time" },
  { value: "99",  suffix: ".99%", label: "Uptime SLA" },
  { value: "30",  suffix: "+",    label: "Global regions" },
  { value: "0",   suffix: "s",    label: "Cold starts (cached)" },
];

function MetricsSection() {
  return (
    <section style={{ padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader center label="By the numbers" title="Built for scale from day one." />
        <div className="digi-metrics-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          marginTop: "4rem",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {METRICS.map(m => (
            <div key={m.label} style={{ background: T.charcoal, padding: "2.5rem 2rem", textAlign: "center" }}>
              <div style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 700,
                fontSize: "2.8rem",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: T.white,
              }}>
                {m.value}<span style={{ color: T.blue }}>{m.suffix}</span>
              </div>
              <div style={{ color: T.whiteDim, fontSize: "0.85rem", fontWeight: 300, marginTop: "0.5rem" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Hobby",
    desc: "Perfect for side projects and experiments.",
    price: "$0",
    per: "/ mo",
    features: ["3 services","512 MB RAM each","Shared databases","Community support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    desc: "For teams shipping production workloads.",
    price: "$20",
    per: "/ mo + usage",
    features: ["Unlimited services","Auto-scaling","Dedicated databases","Preview environments","Priority support"],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Custom contracts, compliance, and SLAs.",
    price: "Custom",
    per: null,
    features: ["Private clusters","SOC 2 Type II","SSO / SAML","Dedicated SRE","Custom MSA"],
    cta: "Contact sales",
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" style={{
      padding: "6rem 1.5rem",
      background: T.surface2,
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader
          center
          label="Pricing"
          title="Pay for what you run."
          desc="No seat licenses. No hidden fees. Usage-based pricing that scales with you."
        />
        <div className="digi-pricing-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25px",
          marginTop: "3.5rem",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {PLANS.map(p => (
            <div key={p.name} style={{
              background: p.featured
                ? "linear-gradient(160deg, rgba(58,125,255,0.08), rgba(58,125,255,0.02))"
                : T.charcoal,
              padding: "2.5rem 2rem",
              textAlign: "left",
            }}>
              {p.featured && (
                <div style={{
                  display: "inline-block",
                  background: T.blue, color: "#fff",
                  fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em",
                  textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: 4,
                  marginBottom: "1.5rem",
                }}>Most popular</div>
              )}
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "-0.01em", marginBottom: "0.25rem" }}>{p.name}</div>
              <div style={{ color: T.whiteDim, fontSize: "0.85rem", fontWeight: 300, marginBottom: "2rem" }}>{p.desc}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "2.75rem", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {p.price}
                {p.per && <span style={{ fontSize: "0.9rem", color: T.whiteDim, fontWeight: 300 }}> {p.per}</span>}
              </div>
              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: T.whiteDim }}>
                    <span style={{ color: T.blue, fontSize: "0.8rem", flexShrink: 0 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                {p.featured
                  ? <BtnPrimary large block style={{ display: "flex", width: "100%", padding: "0.7rem" }}>{p.cta}</BtnPrimary>
                  : <BtnOutline large block style={{ padding: "0.7rem" }}>{p.cta}</BtnOutline>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ padding: "7rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(58,125,255,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <h2 style={{
        fontFamily: "'DM Sans',sans-serif",
        fontWeight: 700,
        fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        maxWidth: 600, margin: "0 auto 1.5rem",
      }}>
        Ship your first service in<br />
        <span style={{ color: T.blue }}>under five minutes.</span>
      </h2>
      <p style={{ color: T.whiteDim, fontSize: "1rem", fontWeight: 300, marginBottom: "2.5rem" }}>
        No credit card required. Cancel anytime.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        <BtnPrimary large>Start building for free</BtnPrimary>
        <BtnOutline large>Talk to us</BtnOutline>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_LINKS = ["Docs","Status","Blog","Changelog","Privacy","Terms"];

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3rem 1.5rem" }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1.5rem",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <DigiIcon size={22} muted />
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.1rem", color: T.whiteDim }}>digi</span>
        </a>
        <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
          {FOOTER_LINKS.map(l => <a key={l} href="#" className="digi-footer-link">{l}</a>)}
        </div>
        <span style={{ color: T.slate, fontSize: "0.8rem" }}>© 2026 digi. All rights reserved.</span>
      </div>
    </footer>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function DigiLanding() {
  return (
    <>
      <InjectGlobalStyles />
      <div className="digi-noise" />
      <Navbar />
      <main>
        <Hero />
        <LogosBar />
        <Features />
        <DeploySection />
        <MetricsSection />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
