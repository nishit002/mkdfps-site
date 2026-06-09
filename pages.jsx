/* ===== ABOUT · PROGRAMS · FACILITIES pages ===== */

function PageHero({ kicker, title, sub, color = "coral" }) {
  const cc = C[color];
  return (
    <div style={{ position: "relative", overflow: "hidden",
      background: `linear-gradient(180deg, ${cc.t}, var(--bg))`,
      paddingTop: "calc(var(--nav-h) + 56px)", paddingBottom: 56 }}>
      <div className="blob" style={{ width: 240, height: 240, background: cc.a, top: -50, right: "12%", opacity: .18 }} />
      <div className="wrap rel" style={{ textAlign: "center", maxWidth: 780 }}>
        <span className="kicker" style={{ color: cc.d, background: "#fff" }}>
          <span className="dot" style={{ background: cc.a }} />{kicker}
        </span>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", margin: "16px 0 14px" }}>{title}</h1>
        {sub && <p style={{ fontSize: 19.5, color: "var(--ink-soft)", maxWidth: 600, margin: "0 auto" }}>{sub}</p>}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About({ go }) {
  const a = SITE.about;
  return (
    <div>
      <PageHero kicker={a.kicker} title={a.title} color="sky"
        sub="A play-to-Class-8 school in Shahdara, Delhi — with a big heart for our youngest learners." />
      <section className="section-sm">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>
          <Reveal>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -12, background: "var(--sun)", borderRadius: 34, transform: "rotate(3deg)", opacity: .3 }} />
              <Ph label="Our classroom photo" color="sky" rounded="28px" src={a.img} style={{ aspectRatio: "1/1", boxShadow: "var(--shadow)" }} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              {a.body.map((p, i) => (
                <p key={i} style={{ fontSize: 18, color: i === 0 ? "var(--ink)" : "var(--ink-soft)", marginBottom: 18 }}>{p}</p>
              ))}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
                {a.values.map((v, i) => (
                  <span key={i} className="pill" style={{ background: C[v.color].t, color: C[v.color].d, fontWeight: 600, fontSize: 15 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: C[v.color].a }} />{v.t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-sm">
        <div className="wrap">
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {a.points.map((pt, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card" style={{ height: "100%" }}>
                  <Badge color={pt.color} shape={["circle", "ring", "square", "diamond"][i]} size={46} />
                  <h3 style={{ fontSize: 18.5, margin: "16px 0 7px" }}>{pt.t}</h3>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>{pt.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <AdmissionBand go={go} />
    </div>
  );
}

/* ---------------- PROGRAMS ---------------- */
function Programs({ go }) {
  const p = SITE.programs;
  return (
    <div>
      <PageHero kicker={p.kicker} title={p.title} sub={p.sub} color="coral" />
      <section className="section-sm">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
            <span style={{ width: 30, height: 30, borderRadius: 9, background: "var(--coral)" }} />
            <h2 style={{ fontSize: 30 }}>Early Years — our specialty</h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {p.featured.map((f, i) => (
              <Reveal key={i} delay={i * 120}><ProgramCard f={f} go={go} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
            <span style={{ width: 30, height: 30, borderRadius: 9, background: "var(--sky)" }} />
            <h2 style={{ fontSize: 30 }}>Growing up at MKD Field — to Class 8</h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {p.ladder.map((l, i) => {
              const cc = C[l.color];
              return (
                <Reveal key={i} delay={i * 90}>
                  <div className="card" style={{ height: "100%", borderTop: `6px solid ${cc.a}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <h3 style={{ fontSize: 23, color: cc.d }}>{l.name}</h3>
                      <span style={{ fontFamily: "Fredoka", fontWeight: 500, fontSize: 14.5, color: "var(--ink-soft)" }}>{l.age}</span>
                    </div>
                    <p style={{ fontSize: 15.5, color: "var(--ink-soft)", marginTop: 10 }}>{l.text}</p>
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

/* ---------------- FACILITIES ---------------- */
function Facilities({ go }) {
  const f = SITE.facilities;
  return (
    <div>
      <PageHero kicker={f.kicker} title={f.title} sub={f.sub} color="grass" />
      <section className="section-sm">
        <div className="wrap">
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {f.items.map((it, i) => {
              const cc = C[it.color];
              return (
                <Reveal key={i} delay={(i % 3) * 90}>
                  <div className="card" style={{ height: "100%", display: "flex", gap: 16 }}>
                    <Badge color={it.color} shape={["circle", "ring", "square", "diamond", "circle", "ring"][i]} size={50} />
                    <div>
                      <h3 style={{ fontSize: 19, marginBottom: 6 }}>{it.t}</h3>
                      <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>{it.d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      {/* safety promise strip */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal>
            <div className="card" style={{ background: "var(--ink)", color: "#fff", display: "grid",
              gridTemplateColumns: "1.2fr 1fr", gap: 36, alignItems: "center", padding: 0, overflow: "hidden" }}>
              <div style={{ padding: "44px 44px" }}>
                <span className="pill" style={{ background: "rgba(255,255,255,.16)", color: "#fff", marginBottom: 14 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--grass)" }} />Our safety promise
                </span>
                <h2 style={{ fontSize: 30, color: "#fff", marginBottom: 12 }}>You can watch over your child, anytime</h2>
                <p style={{ color: "rgba(255,255,255,.82)", fontSize: 16.5, marginBottom: 22 }}>
                  Every classroom and play area is under live CCTV. Ask about parent camera access and our daily safety checklist when you visit.
                </p>
                <button className="btn btn-sun" onClick={() => go("contact")}>Book a safety walkthrough</button>
              </div>
              <Ph label="CCTV / safety photo" color="grass" rounded="0" src={f.img} style={{ height: "100%", minHeight: 240 }} />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { About, Programs, Facilities, PageHero });
