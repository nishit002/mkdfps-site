/* ===== APP SHELL: Nav + Footer + Router ===== */

function Nav({ page, go }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "var(--nav-h)",
      display: "flex", alignItems: "center", transition: "all .3s",
      background: scrolled ? "oklch(0.99 0.012 95 / 0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      boxShadow: scrolled ? "0 6px 24px -18px oklch(0.3 0.05 275 / .5)" : "none" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo onClick={() => go("home")} />
          {SITE.brand.sample && (
            <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: ".05em", color: "var(--ink-soft)",
              background: "var(--sun-t)", padding: "3px 8px", borderRadius: 999, textTransform: "uppercase",
              alignSelf: "flex-start", marginTop: 6 }}>sample name</span>
          )}
        </div>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {SITE.nav.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} style={{
              background: "none", border: "none", padding: "9px 14px", borderRadius: 999,
              fontFamily: "Fredoka", fontWeight: 500, fontSize: 16, transition: "all .2s",
              color: page === n.id ? "var(--coral-d)" : "var(--ink)",
              position: "relative" }}>
              {n.label}
              {page === n.id && <span style={{ position: "absolute", bottom: 3, left: "50%", transform: "translateX(-50%)",
                width: 6, height: 6, borderRadius: "50%", background: "var(--coral)" }} />}
            </button>
          ))}
          <button className="btn btn-primary" onClick={() => go("contact")} style={{ marginLeft: 8, padding: "11px 20px", fontSize: 15.5 }}>
            Admissions Open
          </button>
        </div>

        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu" style={{
          display: "none", background: "none", border: "none", flexDirection: "column", gap: 5, padding: 8 }}>
          <span style={{ width: 26, height: 3, borderRadius: 3, background: "var(--ink)" }} />
          <span style={{ width: 26, height: 3, borderRadius: 3, background: "var(--ink)" }} />
          <span style={{ width: 26, height: 3, borderRadius: 3, background: "var(--ink)" }} />
        </button>
      </div>

      {/* mobile sheet */}
      {open && (
        <div className="mobile-sheet" style={{ position: "fixed", top: "var(--nav-h)", left: 0, right: 0,
          background: "var(--card)", padding: 18, boxShadow: "var(--shadow)", display: "none", flexDirection: "column", gap: 4 }}>
          {SITE.nav.map((n) => (
            <button key={n.id} onClick={() => { go(n.id); setOpen(false); }} style={{
              background: page === n.id ? "var(--coral-t)" : "none", border: "none", padding: "13px 16px",
              borderRadius: 12, fontFamily: "Fredoka", fontWeight: 500, fontSize: 18, textAlign: "left",
              color: page === n.id ? "var(--coral-d)" : "var(--ink)" }}>{n.label}</button>
          ))}
          <button className="btn btn-primary" onClick={() => { go("contact"); setOpen(false); }}
            style={{ marginTop: 8, justifyContent: "center" }}>Admissions Open</button>
        </div>
      )}
    </nav>
  );
}

/* ===== Social + contact icon row (footer) ===== */
function SocialRow() {
  const s = SITE.social || {};
  const ic = (paths) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">{paths}</svg>
  );
  const items = [
    s.facebook && { href: s.facebook, label: "Facebook", bg: "#1877F2",
      svg: ic(<path fill="#fff" d="M15.12 8.5h1.63V5.6c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.43-3.96 4.06v2.32H7.5v3.24h2.95V23h3.62v-7.8h2.83l.45-3.24h-3.28V9.86c0-.94.26-1.36 1.05-1.36z"/>) },
    s.instagram && { href: s.instagram, label: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
      svg: ic(<g fill="none" stroke="#fff" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.4" cy="7.6" r="1" fill="#fff" stroke="none"/></g>) },
    s.youtube && { href: s.youtube, label: "YouTube", bg: "#FF0000",
      svg: ic(<path fill="#fff" d="M10 8.5v7l6-3.5z"/>) },
    s.whatsapp && { href: s.whatsapp, label: "WhatsApp", bg: "#25D366",
      svg: ic(<path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zm-7.01 15.19a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>) },
    s.phone && { href: s.phone, label: "Call", bg: "var(--coral)",
      svg: ic(<path fill="#fff" d="M6.6 10.8a13.6 13.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.2 2.2z"/>) },
    s.email && { href: s.email, label: "Email", bg: "var(--sun-d)",
      svg: ic(<g fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/></g>) },
  ].filter(Boolean);

  return (
    <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
      {items.map((it, i) => (
        <a key={i} href={it.href} aria-label={it.label} title={it.label}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
          style={{ width: 40, height: 40, borderRadius: 12, background: it.bg,
            display: "grid", placeItems: "center", flexShrink: 0,
            boxShadow: "0 8px 16px -10px rgba(0,0,0,.6)", transition: "transform .18s" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
          {it.svg}
        </a>
      ))}
    </div>
  );
}

function Footer({ go }) {
  const b = SITE.brand, c = SITE.contact;
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,.85)" }}>
      {/* wavy navy top edge over the cream page above */}
      <Wave color="var(--ink)" />
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40, paddingTop: 18, paddingBottom: 40 }}>
        <div>
          <Logo light onClick={() => go("home")} />
          <p style={{ marginTop: 18, maxWidth: 320, color: "rgba(255,255,255,.7)", fontSize: 15.5 }}>
            Govt.-recognised English-medium school in {b.area}. Playgroup to Class 8. Established 2004.
          </p>
          <SocialRow />
        </div>
        <div>
          <h4 style={{ fontSize: 17, color: "#fff", marginBottom: 16 }}>Explore</h4>
          <div style={{ display: "grid", gap: 11 }}>
            {SITE.nav.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} style={{ background: "none", border: "none", color: "rgba(255,255,255,.78)",
                fontFamily: "Nunito", fontSize: 15.5, textAlign: "left", padding: 0, cursor: "pointer" }}>{n.label}</button>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: 17, color: "#fff", marginBottom: 16 }}>Reach us</h4>
          <div style={{ display: "grid", gap: 11, fontSize: 15.5, color: "rgba(255,255,255,.78)" }}>
            <span>{c.address}</span>
            <span>{c.phone}</span>
            <span>{c.email}</span>
            <span>{c.web}</span>
            <span>{c.hours}</span>
          </div>
          <button className="btn btn-sun" onClick={() => go("contact")} style={{ marginTop: 18, padding: "10px 18px", fontSize: 15 }}>
            Enquire Now
          </button>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)", padding: "20px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
          fontSize: 13.5, color: "rgba(255,255,255,.55)" }}>
          <span>© 2026 {b.name} {b.sub} · {SITE.contact.web}</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

const PAGES = { home: Home, about: About, programs: Programs, facilities: Facilities, gallery: Gallery, testimonials: Testimonials, contact: Contact };

function App() {
  const [page, setPage] = useState("home");
  const [anim, setAnim] = useState(false);
  const go = (id) => {
    if (id === page) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    setAnim(true);
    setTimeout(() => {
      setPage(id);
      window.scrollTo({ top: 0 });
      requestAnimationFrame(() => setAnim(false));
    }, 220);
  };
  const Current = PAGES[page] || Home;
  return (
    <div>
      <Nav page={page} go={go} />
      <main style={{ opacity: anim ? 0 : 1, transform: anim ? "translateY(12px)" : "none",
        transition: "opacity .22s ease, transform .22s ease" }}>
        <Current go={go} />
      </main>
      <Footer go={go} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
