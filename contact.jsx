/* ===== CONTACT (admission steps + validated form + map) ===== */

function Contact() {
  const ad = SITE.admissions;
  const c = SITE.contact;

  const blank = { child: "", parent: "", phone: "", email: "", klass: "", msg: "" };
  const [f, setF] = useState(blank);
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); setErr({ ...err, [k]: "" }); };

  const validate = () => {
    const e = {};
    if (!f.child.trim()) e.child = "Please enter your child's name";
    if (!f.parent.trim()) e.parent = "Please enter your name";
    if (!/^[+]?[\d\s-]{10,14}$/.test(f.phone.trim())) e.phone = "Enter a valid phone number";
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email (or leave blank)";
    if (!f.klass) e.klass = "Please choose a class";
    return e;
  };
  const submit = (e) => {
    e.preventDefault();
    const v = validate();
    setErr(v);
    if (Object.keys(v).length === 0) setSent(true);
  };

  return (
    <div>
      <PageHero kicker={ad.kicker} title={ad.title} sub={ad.sub} color="coral" />

      {/* admission steps */}
      <section className="section-sm" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {ad.steps.map((s, i) => {
              const cc = C[s.color];
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="card" style={{ height: "100%", textAlign: "center", position: "relative" }}>
                    <span style={{ width: 48, height: 48, borderRadius: "50%", background: cc.a, color: "#fff",
                      display: "grid", placeItems: "center", margin: "0 auto 14px", fontFamily: "Fredoka",
                      fontSize: 22, fontWeight: 600 }}>{s.n}</span>
                    <h3 style={{ fontSize: 19, marginBottom: 6 }}>{s.t}</h3>
                    <p style={{ fontSize: 14.5, color: "var(--ink-soft)" }}>{s.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* form + contact info */}
      <section className="section-sm">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 36, alignItems: "start" }}>
          {/* FORM */}
          <Reveal>
            <div className="card" style={{ padding: 34 }}>
              {!sent ? (
                <form onSubmit={submit} noValidate>
                  <h3 style={{ fontSize: 26, marginBottom: 6 }}>Admission Enquiry</h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: 15.5, marginBottom: 22 }}>
                    Fill this in and our team will call you back. <span style={{ color: "var(--coral-d)", fontWeight: 700 }}>* required</span>
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="Child's name *" err={err.child}>
                      <input value={f.child} onChange={set("child")} placeholder="Little one's name"
                        style={inp(err.child)} />
                    </Field>
                    <Field label="Your name *" err={err.parent}>
                      <input value={f.parent} onChange={set("parent")} placeholder="Parent / guardian"
                        style={inp(err.parent)} />
                    </Field>
                    <Field label="Phone number *" err={err.phone}>
                      <input value={f.phone} onChange={set("phone")} placeholder="+91 ..." inputMode="tel"
                        style={inp(err.phone)} />
                    </Field>
                    <Field label="Email (optional)" err={err.email}>
                      <input value={f.email} onChange={set("email")} placeholder="you@email.com"
                        style={inp(err.email)} />
                    </Field>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Field label="Applying for *" err={err.klass}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                        {ad.classes.map((k) => (
                          <button type="button" key={k} onClick={() => { setF({ ...f, klass: k }); setErr({ ...err, klass: "" }); }}
                            style={{ padding: "9px 16px", borderRadius: 999, fontFamily: "Fredoka", fontWeight: 500, fontSize: 14.5,
                              border: "none", transition: "all .15s",
                              background: f.klass === k ? "var(--coral)" : "var(--coral-t)",
                              color: f.klass === k ? "#fff" : "var(--coral-d)" }}>{k}</button>
                        ))}
                      </div>
                    </Field>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Field label="Message (optional)">
                      <textarea value={f.msg} onChange={set("msg")} rows={3} placeholder="Anything you'd like us to know?"
                        style={{ ...inp(), resize: "vertical" }} />
                    </Field>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: 22, width: "100%", justifyContent: "center" }}>
                    Send Enquiry
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "30px 10px" }}>
                  <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--grass-t)",
                    display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                    <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--grass)" }} />
                  </div>
                  <h3 style={{ fontSize: 27, marginBottom: 10 }}>Thank you, {f.parent.split(" ")[0]}.</h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: 17, maxWidth: 380, margin: "0 auto 22px" }}>
                    Your enquiry for <b style={{ color: "var(--coral-d)" }}>{f.child}</b> ({f.klass}) has been received.
                    Our admissions team will call you on <b>{f.phone}</b> within one working day.
                  </p>
                  <button className="btn btn-ghost" onClick={() => { setF(blank); setSent(false); }}>Send another</button>
                </div>
              )}
            </div>
          </Reveal>

          {/* CONTACT INFO + MAP */}
          <Reveal delay={120}>
            <div style={{ display: "grid", gap: 18 }}>
              <ContactRow color="coral" shape="circle" label="Visit us" value={c.address} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <ContactRow color="sky" shape="ring" label="Call" value={c.phone} compact />
                <ContactRow color="grass" shape="square" label="WhatsApp" value={c.whatsapp} compact />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <ContactRow color="grape" shape="diamond" label="Email" value={c.email} compact />
                <ContactRow color="sun" shape="circle" label="Open hours" value={c.hours} compact />
              </div>
              <MapBlock />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function inp(error) {
  return {
    width: "100%", padding: "13px 15px", borderRadius: 14, fontFamily: "Nunito", fontSize: 16,
    border: `2px solid ${error ? "var(--coral)" : "var(--line)"}`, background: "var(--bg)", color: "var(--ink)",
    outline: "none",
  };
}
function Field({ label, err, children }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontFamily: "Fredoka", fontWeight: 500, fontSize: 14.5, marginBottom: 7 }}>{label}</span>
      {children}
      {err && <span style={{ display: "block", color: "var(--coral-d)", fontSize: 13, fontWeight: 700, marginTop: 5 }}>{err}</span>}
    </label>
  );
}
function ContactRow({ color, shape, label, value, compact }) {
  return (
    <div className="card" style={{ padding: 18, display: "flex", gap: 14, alignItems: "center" }}>
      <Badge color={color} shape={shape} size={44} />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "Fredoka", fontWeight: 500, fontSize: 13.5, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: ".04em" }}>{label}</div>
        <div style={{ fontSize: compact ? 15 : 16.5, fontWeight: 700, lineHeight: 1.35, wordBreak: "break-word" }}>{value}</div>
      </div>
    </div>
  );
}

function MapBlock() {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ position: "relative", height: 200, background:
        "repeating-linear-gradient(0deg, oklch(0.94 0.02 230) 0 22px, oklch(0.96 0.015 230) 22px 24px), repeating-linear-gradient(90deg, oklch(0.94 0.02 230) 0 30px, transparent 30px 32px)" }}>
        {/* fake roads */}
        <div style={{ position: "absolute", top: "55%", left: 0, right: 0, height: 14, background: "#fff", opacity: .9 }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "38%", width: 12, background: "#fff", opacity: .9 }} />
        <div style={{ position: "absolute", top: "20%", left: "10%", right: "30%", height: 9, background: "#fff", opacity: .7, transform: "rotate(-8deg)" }} />
        {/* pin */}
        <div style={{ position: "absolute", top: "40%", left: "44%", transform: "translate(-50%,-100%)", animation: "float1 3s ease-in-out infinite" }}>
          <div style={{ width: 34, height: 34, borderRadius: "50% 50% 50% 0", background: "var(--coral)",
            transform: "rotate(-45deg)", boxShadow: "var(--shadow)", display: "grid", placeItems: "center" }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", transform: "rotate(45deg)" }} />
          </div>
        </div>
        <span style={{ position: "absolute", bottom: 10, left: 12, fontFamily: "Nunito", fontSize: 11.5,
          fontWeight: 700, background: "rgba(255,255,255,.85)", padding: "5px 10px", borderRadius: 999, color: "var(--ink-soft)" }}>
          MAP PLACEHOLDER — embed Google Maps here
        </span>
      </div>
      <div style={{ padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 14.5, color: "var(--ink-soft)", fontWeight: 700 }}>Panchsheel Garden, Naveen Shahdara</span>
        <button className="btn" style={{ background: "var(--sky)", color: "#fff", padding: "10px 18px", fontSize: 15 }}>Get Directions</button>
      </div>
    </div>
  );
}

Object.assign(window, { Contact });
