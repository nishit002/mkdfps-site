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

function Footer({ go }) {
  const b = SITE.brand, c = SITE.contact;
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,.85)", paddingTop: 60 }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40, paddingBottom: 40 }}>
        <div>
          <Logo light onClick={() => go("home")} />
          <p style={{ marginTop: 18, maxWidth: 320, color: "rgba(255,255,255,.7)", fontSize: 15.5 }}>
            Govt.-recognised English-medium school in {b.area}. Playgroup to Class 8. Established 2004.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {["coral", "sun", "grass", "sky", "grape"].map((col, i) => (
              <span key={i} style={{ width: 38, height: 38, borderRadius: 12, background: C[col].a,
                display: "grid", placeItems: "center", cursor: "pointer" }}>
                <span style={{ width: 13, height: 13, borderRadius: i % 2 ? "50%" : 4, background: "#fff" }} />
              </span>
            ))}
          </div>
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
