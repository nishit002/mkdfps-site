/* ===== HOME (landing) ===== */

function Hero({ go }) {
  const h = SITE.hero;
  const [mount, setMount] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMount(true), 60); return () => clearTimeout(t); }, []);

  return (
    <header style={{ position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, var(--sun-t), var(--bg) 70%)",
      paddingTop: "calc(var(--nav-h) + 28px)" }}>
      {/* floating blobs */}
      <div className="blob" style={{ width: 320, height: 320, background: "var(--coral)", top: -60, left: -80, opacity: .22 }} />
      <div className="blob" style={{ width: 240, height: 240, background: "var(--sky)", top: 120, right: -60, opacity: .20 }} />
      <div className="blob" style={{ width: 180, height: 180, background: "var(--grass)", bottom: 40, left: "40%", opacity: .16 }} />

      {/* Real campus banner — shows the actual school building */}
      <div className="wrap rel" style={{ paddingBottom: 28 }}>
        <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden",
          boxShadow: "var(--shadow)", border: "4px solid #fff", aspectRatio: "851 / 315",
          transition: "transform .6s cubic-bezier(.22,1,.36,1)",
          transform: mount ? "none" : "translateY(20px) scale(.98)",
          opacity: mount ? 1 : 0 }}>
          <img src={SITE.brand.campusPhoto} alt="Modern KD Public School campus, Panchsheel Garden, Naveen Shahdara"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="eager" />
          <div style={{ position: "absolute", left: 18, top: 18,
            background: "rgba(255,255,255,.92)", color: "var(--ink)", padding: "8px 14px",
            borderRadius: 999, fontFamily: "Fredoka", fontWeight: 600, fontSize: 13.5,
            display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "var(--shadow-soft)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--grass)" }} />
            Our Campus · Panchsheel Garden, Naveen Shahdara
          </div>
          <div style={{ position: "absolute", right: 18, bottom: 18,
            background: "var(--coral)", color: "#fff", padding: "8px 14px",
            borderRadius: 999, fontFamily: "Fredoka", fontWeight: 600, fontSize: 13.5,
            boxShadow: "0 10px 22px -10px var(--coral)" }}>
            ESTD. 2004 · Govt. Recognised
          </div>
        </div>
      </div>

      <div className="wrap rel" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr",
        gap: 50, alignItems: "center", paddingBottom: 70, minHeight: "52vh" }}>
        {/* left */}
        <div>
          <span className="kicker" style={{
            transition: "all .6s", opacity: mount ? 1 : 0, transform: mount ? "none" : "translateY(14px)" }}>
            <span className="dot" style={{ animation: "pulse 1.6s infinite" }} />{h.badge}
          </span>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 74px)", margin: "18px 0 20px" }}>
            {h.title.map((line, i) => (
              <span key={i} style={{ display: "block",
                transition: "all .7s cubic-bezier(.22,1,.36,1)", transitionDelay: `${120 + i * 110}ms`,
                opacity: mount ? 1 : 0, transform: mount ? "none" : "translateY(22px)" }}>
                {i === h.accentWord
                  ? <span style={{ position: "relative", color: "var(--coral)" }}>
                      {line}
                      <svg viewBox="0 0 300 18" preserveAspectRatio="none"
                        style={{ position: "absolute", left: 0, bottom: -6, width: "100%", height: 14 }}>
                        <path d="M3,13 C80,4 220,4 297,11" fill="none" stroke="var(--sun)" strokeWidth="7" strokeLinecap="round"
                          style={{ strokeDasharray: 320, strokeDashoffset: mount ? 0 : 320, transition: "stroke-dashoffset 1s .7s" }} />
                      </svg>
                    </span>
                  : line}
              </span>
            ))}
          </h1>
          <p style={{ fontSize: 20, color: "var(--ink-soft)", maxWidth: 480, marginBottom: 30,
            transition: "all .7s", transitionDelay: "440ms", opacity: mount ? 1 : 0, transform: mount ? "none" : "translateY(16px)" }}>
            {h.sub}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap",
            transition: "all .7s", transitionDelay: "560ms", opacity: mount ? 1 : 0, transform: mount ? "none" : "translateY(16px)" }}>
            <button className="btn btn-primary" onClick={() => go("contact")}>{h.primary}</button>
            <button className="btn btn-ghost" onClick={() => go("programs")}>{h.secondary}</button>
          </div>
          <div style={{ display: "flex", gap: 30, marginTop: 40, flexWrap: "wrap",
            transition: "all .7s", transitionDelay: "680ms", opacity: mount ? 1 : 0 }}>
            {h.stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "Fredoka", fontWeight: 600, fontSize: 30, color: "var(--coral)" }}>{s.n}</div>
                <div style={{ fontSize: 14.5, color: "var(--ink-soft)", fontWeight: 700 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right — hero image + floating cards */}
        <div style={{ position: "relative",
          transition: "all .9s cubic-bezier(.22,1,.36,1)", transitionDelay: "220ms",
          opacity: mount ? 1 : 0, transform: mount ? "none" : "scale(.94) translateY(20px)" }}>
          <div style={{ position: "absolute", inset: -14, background: "var(--sky)", borderRadius: 40,
            transform: "rotate(-4deg)", opacity: .25 }} />
          <Ph label="Happy kids photo" color="coral" rounded="36px" src={SITE.hero.img}
            style={{ aspectRatio: "4/5", boxShadow: "var(--shadow)" }} />
          {/* floating card 1 */}
          <div style={{ position: "absolute", left: -26, top: 40, background: "#fff", borderRadius: 18,
            padding: "12px 16px", boxShadow: "var(--shadow)", display: "flex", alignItems: "center", gap: 11,
            animation: "float1 4s ease-in-out infinite" }}>
            <span style={{ width: 34, height: 34, borderRadius: 10, background: "var(--grass)", display: "grid", placeItems: "center" }}>
              <span style={{ width: 13, height: 13, background: "#fff", borderRadius: "50%" }} />
            </span>
            <div style={{ lineHeight: 1.15, whiteSpace: "nowrap" }}>
              <div style={{ fontFamily: "Fredoka", fontWeight: 600, fontSize: 15 }}>CCTV Secured</div>
              <div style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 700 }}>Every room</div>
            </div>
          </div>
          {/* floating card 2 */}
          <div style={{ position: "absolute", right: -22, bottom: 60, background: "#fff", borderRadius: 18,
            padding: "12px 16px", boxShadow: "var(--shadow)", display: "flex", alignItems: "center", gap: 11,
            animation: "float2 4.6s ease-in-out infinite" }}>
            <span style={{ width: 34, height: 34, borderRadius: 10, background: "var(--grape)", display: "grid", placeItems: "center" }}>
              <span style={{ width: 13, height: 13, background: "#fff", borderRadius: 4 }} />
            </span>
            <div style={{ lineHeight: 1.15, whiteSpace: "nowrap" }}>
              <div style={{ fontFamily: "Fredoka", fontWeight: 600, fontSize: 15 }}>Play & Nursery</div>
              <div style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 700 }}>Now enrolling</div>
            </div>
          </div>
        </div>
      </div>
      <Wave color="var(--bg)" />
    </header>
  );
}

function Marquee() {
  const items = SITE.marquee;
  const row = [...items, ...items];
  return (
    <div style={{ background: "var(--ink)", padding: "16px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 0, width: "max-content", animation: "scrollx 22s linear infinite" }}>
        {row.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 22, padding: "0 22px",
            fontFamily: "Fredoka", fontWeight: 500, fontSize: 19, color: "#fff", whiteSpace: "nowrap" }}>
            {t}
            <span style={{ width: 8, height: 8, borderRadius: "50%",
              background: ["var(--coral)", "var(--sun)", "var(--grass)", "var(--sky)", "var(--grape)"][i % 5] }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <section className="section">
      <div className="wrap">
        <Head center kicker="Why parents love us" title="A school that feels like a warm hug"
          sub="Everything we do is built around two things — keeping your child safe, and keeping them smiling." />
        <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {SITE.highlights.map((h, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="card" style={{ height: "100%", textAlign: "center" }}>
                <div style={{ margin: "0 auto 18px", width: "fit-content" }}>
                  <Badge color={h.color} shape={["circle", "ring", "diamond", "square"][i % 4]} />
                </div>
                <h3 style={{ fontSize: 21, marginBottom: 8 }}>{h.title}</h3>
                <p style={{ fontSize: 15.5, color: "var(--ink-soft)" }}>{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Featured programs teaser (Play + Nursery) */
function ProgramsTeaser({ go }) {
  const p = SITE.programs;
  return (
    <section className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <Head kicker={p.kicker} title="The heart of Modern KD: Play & Nursery"
            sub="Our littlest learners get the gentlest, most joyful start." />
          <button className="btn btn-ghost" onClick={() => go("programs")} style={{ marginBottom: 44 }}>See all programs</button>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {p.featured.map((f, i) => (
            <Reveal key={i} delay={i * 120}>
              <ProgramCard f={f} go={go} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ f, go }) {
  const cc = C[f.color];
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative" }}>
        <Ph label={f.name + " photo"} color={f.color} rounded="0" src={f.img}
          style={{ aspectRatio: "16/9" }} />
        <span className="pill" style={{ position: "absolute", top: 16, left: 16, background: cc.a, color: "#fff" }}>{f.tag}</span>
      </div>
      <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
          <h3 style={{ fontSize: 28, color: cc.d }}>{f.name}</h3>
          <span style={{ fontFamily: "Fredoka", fontWeight: 500, fontSize: 15, color: "var(--ink-soft)" }}>{f.age}</span>
        </div>
        <p style={{ color: "var(--ink-soft)", margin: "12px 0 18px", fontSize: 16 }}>{f.text}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
          {f.bullets.map((b, i) => (
            <span key={i} className="pill" style={{ background: cc.t, color: cc.d, fontWeight: 600 }}>{b}</span>
          ))}
        </div>
        <button className="btn" onClick={() => go("contact")} style={{ marginTop: 22, background: cc.a, color: "#fff", alignSelf: "flex-start" }}>
          Enquire about {f.name}
        </button>
      </div>
    </div>
  );
}

/* Admissions CTA band */
function AdmissionBand({ go }) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-lg)",
            background: "linear-gradient(120deg, var(--coral), var(--grape))", color: "#fff",
            padding: "56px 50px", textAlign: "center", boxShadow: "var(--shadow)" }}>
            <div className="blob" style={{ width: 220, height: 220, background: "#fff", top: -70, left: -40, opacity: .14 }} />
            <div className="blob" style={{ width: 180, height: 180, background: "#fff", bottom: -70, right: -30, opacity: .12 }} />
            <div className="rel">
              <span className="pill" style={{ background: "rgba(255,255,255,.22)", color: "#fff", marginBottom: 16 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sun)" }} />
                Limited seats · 2026–27
              </span>
              <h2 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", marginBottom: 12 }}>Admissions are open!</h2>
              <p style={{ fontSize: 19, maxWidth: 560, margin: "0 auto 28px", color: "rgba(255,255,255,.9)" }}>
                Give your little one the brightest start. Book a school visit or send a quick enquiry today.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <button className="btn btn-white" onClick={() => go("contact")}>Enquire Now</button>
                <button className="btn" onClick={() => go("facilities")}
                  style={{ background: "rgba(255,255,255,.18)", color: "#fff", boxShadow: "inset 0 0 0 2px rgba(255,255,255,.5)" }}>
                  See our safety
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===== KIDZ CHILL STREET — the flagship screen-free play street ===== */
function KidzChillStreet({ go }) {
  const k = SITE.kidzStreet;
  const neonGlow = "0 0 18px currentColor, 0 0 36px currentColor";
  return (
    <section id="kidz" style={{ position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse at 20% 20%, oklch(0.28 0.10 280), oklch(0.16 0.06 275) 60%)",
      color: "#fff", padding: "96px 0", scrollMarginTop: "calc(var(--nav-h) + 12px)" }}>
      {/* neon blobs */}
      <div className="blob" style={{ width: 260, height: 260, background: "var(--coral)", top: -60, right: "8%", opacity: .35 }} />
      <div className="blob" style={{ width: 220, height: 220, background: "var(--sky)", bottom: -60, left: "6%", opacity: .35 }} />
      <div className="blob" style={{ width: 180, height: 180, background: "var(--sun)", top: "40%", left: "45%", opacity: .25 }} />

      <div className="wrap rel">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 50px" }}>
            <span className="kicker" style={{ color: "var(--sun)", background: "rgba(255,255,255,.08)" }}>
              <span className="dot" style={{ background: "var(--sun)", animation: "pulse 1.6s infinite" }} />{k.kicker}
            </span>
            <h2 style={{ fontSize: "clamp(36px, 6vw, 64px)", margin: "16px 0 14px", color: "#fff",
              textShadow: neonGlow, letterSpacing: "0.01em" }}>
              <span style={{ color: "var(--coral)" }}>Kidz</span>{" "}
              <span style={{ color: "var(--sky)" }}>Chill</span>{" "}
              <span style={{ color: "var(--sun)" }}>Street</span>
            </h2>
            <p style={{ fontSize: 20, color: "rgba(255,255,255,.9)", marginBottom: 6 }}>{k.subEn}</p>
            <p style={{ fontFamily: "Fredoka", fontSize: 18, color: "var(--sun)" }}>{k.subHi}</p>
            <p style={{ fontSize: 15.5, color: "rgba(255,255,255,.72)", marginTop: 18, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
              {k.note}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 22 }}>
              <span className="pill" style={{ background: "rgba(255,255,255,.10)", color: "#fff", fontWeight: 700 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--grass)" }} />
                {k.opening}
              </span>
              <span className="pill" style={{ background: "rgba(255,255,255,.10)", color: "#fff", fontWeight: 700 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sky)" }} />
                {k.hours}
              </span>
              <span className="pill" style={{ background: "rgba(255,255,255,.10)", color: "#fff", fontWeight: 700 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--coral)" }} />
                100% No Mobile Zone
              </span>
            </div>
          </div>
        </Reveal>

        {/* attractions grid */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {k.attractions.map((it, i) => {
            const cc = C[it.color];
            return (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div style={{ background: "rgba(255,255,255,.06)", borderRadius: "var(--radius)",
                  padding: 26, height: "100%", border: `1px solid rgba(255,255,255,.10)`,
                  backdropFilter: "blur(4px)", transition: "transform .2s" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: cc.a,
                    display: "grid", placeItems: "center",
                    boxShadow: `0 0 18px ${cc.a}, 0 0 36px ${cc.a}` }}>
                    <span style={{ width: 16, height: 16, borderRadius: i % 2 ? "50%" : 4, background: "#fff" }} />
                  </div>
                  <h3 style={{ fontSize: 19, marginTop: 16, marginBottom: 8, color: "#fff" }}>{it.t}</h3>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.78)" }}>{it.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* launch offer band */}
        <Reveal delay={120}>
          <div style={{ marginTop: 44, borderRadius: "var(--radius-lg)", padding: "30px 28px",
            background: "linear-gradient(120deg, var(--coral), var(--sun))", color: oklchOnWarm(),
            textAlign: "center", boxShadow: "0 30px 60px -20px rgba(0,0,0,.5)" }}>
            <div style={{ fontFamily: "Fredoka", fontWeight: 600, fontSize: "clamp(26px, 4vw, 40px)", color: "#fff",
              textShadow: "0 2px 0 rgba(0,0,0,.18)" }}>
              {k.offer}
            </div>
            <p style={{ marginTop: 8, color: "rgba(255,255,255,.92)", fontSize: 16, fontWeight: 700 }}>{k.offerSub}</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 18 }}>
              <button className="btn btn-white" onClick={() => go("contact")}>Book a Day Pass</button>
              <button className="btn" onClick={() => go("contact")}
                style={{ background: "rgba(0,0,0,.22)", color: "#fff", boxShadow: "inset 0 0 0 2px rgba(255,255,255,.55)" }}>
                Monthly Subscription
              </button>
            </div>
            <p style={{ marginTop: 16, fontSize: 13.5, color: "rgba(255,255,255,.92)", fontWeight: 700 }}>
              📸 {k.photo}
            </p>
          </div>
        </Reveal>

        {/* future expansions */}
        <Reveal delay={180}>
          <div style={{ marginTop: 44 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22, justifyContent: "center" }}>
              <span style={{ width: 26, height: 26, borderRadius: 8, background: "var(--grape)",
                boxShadow: "0 0 18px var(--grape)" }} />
              <h3 style={{ fontSize: 24, color: "#fff" }}>Coming next to Kidz Chill Street</h3>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {k.future.map((it, i) => {
                const cc = C[it.color];
                return (
                  <div key={i} style={{ background: "rgba(255,255,255,.04)", borderRadius: "var(--radius)",
                    padding: 22, border: `1px dashed rgba(255,255,255,.18)` }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: cc.a,
                        boxShadow: `0 0 12px ${cc.a}` }} />
                      <span style={{ fontFamily: "Fredoka", fontSize: 14, color: cc.a, fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: ".05em" }}>Coming soon</span>
                    </div>
                    <h4 style={{ fontSize: 17, color: "#fff", marginBottom: 6 }}>{it.t}</h4>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,.72)" }}>{it.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function oklchOnWarm() { return "oklch(0.30 0.07 50)"; }

function Home({ go }) {
  return (
    <div>
      <Hero go={go} />
      <Marquee />
      <Highlights />
      <ProgramsTeaser go={go} />
      <KidzChillStreet go={go} />
      <TestimonialStrip go={go} />
      <AdmissionBand go={go} />
    </div>
  );
}

Object.assign(window, { Home, ProgramCard, Marquee, KidzChillStreet });
