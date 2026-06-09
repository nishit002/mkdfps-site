/* ===== GALLERY · TESTIMONIALS · CONTACT ===== */

/* ---------------- GALLERY + LIGHTBOX ---------------- */
function Gallery({ go }) {
  const g = SITE.gallery;
  const [open, setOpen] = useState(null);
  const items = g.items;

  useEffect(() => {
    const onKey = (e) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <div>
      <PageHero kicker={g.kicker} title={g.title} sub={g.sub} color="grape" />
      <section className="section-sm">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "200px", gap: 18 }}>
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 4) * 70}
                style={{
                  gridColumn: it.span === "wide" ? "span 2" : "span 1",
                  gridRow: it.span === "tall" ? "span 2" : "span 1",
                }}>
                <button onClick={() => setOpen(i)} style={{
                  border: "none", padding: 0, width: "100%", height: "100%", cursor: "pointer",
                  borderRadius: "var(--radius)", overflow: "hidden", position: "relative", display: "block",
                  transition: "transform .25s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(.98)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
                  <Ph label={it.label} color={it.color} rounded="0" src={it.img} style={{ width: "100%", height: "100%" }} />
                  <span style={{ position: "absolute", inset: 0, background: "transparent" }} />
                </button>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 26, color: "var(--ink-soft)", fontSize: 15 }}>
            Tap any tile to enlarge. Sample photos shown — actual campus photos will be added soon.
          </p>
        </div>
      </section>

      {open !== null && (
        <div onClick={() => setOpen(null)} style={{ position: "fixed", inset: 0, zIndex: 200,
          background: "oklch(0.25 0.04 275 / 0.78)", backdropFilter: "blur(6px)",
          display: "grid", placeItems: "center", padding: 28, animation: "fade .25s" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(820px, 92vw)" }}>
            <Ph label={items[open].label} color={items[open].color} rounded="24px" src={items[open].img}
              style={{ aspectRatio: "16/10", boxShadow: "0 30px 60px -20px rgba(0,0,0,.5)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
              <span style={{ color: "#fff", fontFamily: "Fredoka", fontSize: 17 }}>{items[open].label} · {open + 1}/{items.length}</span>
              <div style={{ display: "flex", gap: 10 }}>
                <NavBtn dir="‹" onClick={() => setOpen((o) => (o - 1 + items.length) % items.length)} />
                <NavBtn dir="›" onClick={() => setOpen((o) => (o + 1) % items.length)} />
              </div>
            </div>
            <button onClick={() => setOpen(null)} style={{ position: "absolute", top: -14, right: -14,
              width: 40, height: 40, borderRadius: "50%", border: "none", background: "#fff", color: "var(--ink)",
              fontSize: 20, boxShadow: "var(--shadow)" }}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

function NavBtn({ dir, onClick }) {
  return (
    <button onClick={onClick} style={{ width: 44, height: 44, borderRadius: "50%", border: "none",
      background: "#fff", color: "var(--ink)", fontSize: 24, lineHeight: 1, fontFamily: "Fredoka",
      boxShadow: "var(--shadow)" }}>{dir}</button>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function TestimonialStrip({ go }) {
  return (
    <section className="section" style={{ background: "var(--sky-t)", overflow: "hidden", position: "relative" }}>
      <div className="wrap">
        <Head center kicker="What parents say" title="Feedback from our parents"
          sub="A few comments from parents of children currently studying with us." />
        <TestimonialSlider />
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <button className="btn btn-ghost" onClick={() => go("testimonials")}>Read more stories</button>
        </div>
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const items = SITE.testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const t = items[i];
  const cc = C[t.color];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{ maxWidth: 760, margin: "0 auto" }}>
      <div className="card" style={{ textAlign: "center", padding: "44px 46px", position: "relative" }}>
        <div style={{ fontFamily: "Fredoka", fontSize: 70, lineHeight: 0.6, color: cc.a, height: 30 }}>“</div>
        <p key={i} style={{ fontSize: 21, lineHeight: 1.55, color: "var(--ink)", margin: "14px 0 24px",
          animation: "fadeUp .5s" }}>{t.quote}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 13 }}>
          <span style={{ width: 50, height: 50, borderRadius: "50%", background: cc.a, display: "grid",
            placeItems: "center", color: "#fff", fontFamily: "Fredoka", fontSize: 20, fontWeight: 600 }}>
            {t.name[0]}
          </span>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "Fredoka", fontWeight: 600, fontSize: 17 }}>{t.name}</div>
            <div style={{ fontSize: 14, color: "var(--ink-soft)", fontWeight: 700 }}>{t.role}</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 9, marginTop: 22 }}>
        {items.map((_, x) => (
          <button key={x} onClick={() => setI(x)} aria-label={`Story ${x + 1}`} style={{
            width: x === i ? 30 : 11, height: 11, borderRadius: 999, border: "none",
            background: x === i ? cc.a : "var(--line)", transition: "all .3s" }} />
        ))}
      </div>
    </div>
  );
}

function Testimonials({ go }) {
  return (
    <div>
      <PageHero kicker="Parent feedback" title="What parents say about us"
        sub="Comments from parents of children in Playgroup, Nursery and Primary." color="sky" />
      <section className="section-sm">
        <div className="wrap">
          <TestimonialSlider />
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginTop: 44 }}>
            {SITE.testimonials.map((t, i) => {
              const cc = C[t.color];
              return (
                <Reveal key={i} delay={(i % 2) * 100}>
                  <div className="card" style={{ height: "100%", borderLeft: `6px solid ${cc.a}` }}>
                    <p style={{ fontSize: 16.5, color: "var(--ink)", marginBottom: 18 }}>“{t.quote}”</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 42, height: 42, borderRadius: "50%", background: cc.a, display: "grid",
                        placeItems: "center", color: "#fff", fontFamily: "Fredoka", fontWeight: 600 }}>{t.name[0]}</span>
                      <div>
                        <div style={{ fontFamily: "Fredoka", fontWeight: 600 }}>{t.name}</div>
                        <div style={{ fontSize: 13.5, color: "var(--ink-soft)", fontWeight: 700 }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <AdmissionBand go={go} />
    </div>
  );
}

Object.assign(window, { Gallery, Testimonials, TestimonialStrip, TestimonialSlider });
