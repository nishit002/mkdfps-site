/* ===== Shared atoms — exported to window for other scripts ===== */
const { useState, useEffect, useRef } = React;

const C = {
  coral: { a: "var(--coral)", d: "var(--coral-d)", t: "var(--coral-t)" },
  sun:   { a: "var(--sun)",   d: "var(--sun-d)",   t: "var(--sun-t)" },
  grass: { a: "var(--grass)", d: "var(--grass-d)", t: "var(--grass-t)" },
  sky:   { a: "var(--sky)",   d: "var(--sky-d)",   t: "var(--sky-t)" },
  grape: { a: "var(--grape)", d: "var(--grape-d)", t: "var(--grape-t)" },
};

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {} }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`}
         style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

/* Striped image placeholder with monospace label — or a real photo when `src` is given */
function Ph({ label, color, src, className = "", style = {}, rounded = "var(--radius)" }) {
  const tint = color ? C[color].t : null;
  if (src) {
    return (
      <div className={`ph ${className}`} style={{ borderRadius: rounded, background: tint || "var(--bg-soft)", ...style }}>
        <img src={src} alt={label} loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  return (
    <div className={`ph ${className}`} style={{
      borderRadius: rounded,
      ...(tint ? { background:
        `repeating-linear-gradient(135deg, ${tint} 0 14px, color-mix(in oklch, ${tint}, white 55%) 14px 28px)` } : {}),
      ...style,
    }}>
      <span className="ph-label">{label}</span>
    </div>
  );
}

/* Brand logo lockup */
function Logo({ light = false, onClick }) {
  const b = SITE.brand;
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 12, background: "none",
      border: "none", padding: 0, cursor: "pointer",
    }}>
      <span style={{ position: "relative", display: "grid", placeItems: "center",
        width: 46, height: 46, borderRadius: 14, background: "var(--coral)",
        boxShadow: "0 8px 16px -8px var(--coral)", flexShrink: 0 }}>
        <span style={{ position: "absolute", width: 14, height: 14, borderRadius: "50%",
          background: "var(--sun)", top: 8, right: 8 }} />
        <span style={{ width: 20, height: 20, borderRadius: "50%",
          background: "#fff" }} />
      </span>
      <span style={{ textAlign: "left", lineHeight: 1 }}>
        <span style={{ display: "flex", alignItems: "baseline", gap: 6, whiteSpace: "nowrap" }}>
          <span style={{ fontFamily: "Fredoka", fontWeight: 600, fontSize: 22,
            color: light ? "#fff" : "var(--ink)" }}>{b.name}</span>
          <span style={{ fontFamily: "Fredoka", fontWeight: 500, fontSize: 22,
            color: "var(--coral)" }}>{b.sub}</span>
        </span>
        <span style={{ display: "block", fontSize: 11.5, fontWeight: 700, letterSpacing: ".06em",
          textTransform: "uppercase", color: light ? "rgba(255,255,255,.8)" : "var(--ink-soft)",
          marginTop: 3 }}>{b.tagline}</span>
      </span>
    </button>
  );
}

/* Section heading block */
function Head({ kicker, title, sub, center, color = "coral", dark = false }) {
  const cc = C[color];
  return (
    <div className={`head ${center ? "center" : ""}`}>
      {kicker && (
        <span className="kicker" style={{ color: cc.d, background: cc.t }}>
          <span className="dot" style={{ background: cc.a }} />{kicker}
        </span>
      )}
      <h2 style={dark ? { color: "#fff" } : {}}>{title}</h2>
      {sub && <p style={dark ? { color: "rgba(255,255,255,.82)" } : {}}>{sub}</p>}
    </div>
  );
}

/* Simple shape glyph inside a colored badge (kept minimal) */
function Badge({ color, shape = "circle", size = 54 }) {
  const cc = C[color];
  const inner = size * 0.42;
  let el;
  if (shape === "circle") el = <div style={{ width: inner, height: inner, borderRadius: "50%", background: "#fff" }} />;
  else if (shape === "ring") el = <div style={{ width: inner, height: inner, borderRadius: "50%", border: "5px solid #fff" }} />;
  else if (shape === "square") el = <div style={{ width: inner, height: inner, borderRadius: 6, background: "#fff" }} />;
  else if (shape === "diamond") el = <div style={{ width: inner * 0.8, height: inner * 0.8, background: "#fff", transform: "rotate(45deg)", borderRadius: 4 }} />;
  else el = <div style={{ width: inner, height: inner, borderRadius: "50%", background: "#fff" }} />;
  return (
    <div style={{ width: size, height: size, borderRadius: 16, background: cc.a,
      display: "grid", placeItems: "center", flexShrink: 0,
      boxShadow: `0 10px 18px -10px ${cc.a}` }}>{el}</div>
  );
}

/* Wave divider */
function Wave({ color = "var(--bg)", flip = false }) {
  return (
    <svg className="wave" viewBox="0 0 1440 70" preserveAspectRatio="none"
         style={{ transform: flip ? "rotate(180deg)" : "none" }}>
      <path fill={color} d="M0,40 C240,75 480,75 720,45 C960,15 1200,15 1440,40 L1440,70 L0,70 Z" />
    </svg>
  );
}

Object.assign(window, { C, Reveal, Ph, Logo, Head, Badge, Wave, useState, useEffect, useRef });
