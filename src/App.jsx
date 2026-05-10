import { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════
//  QUOTES
// ══════════════════════════════════════════════
const QUOTES = [
  { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
  { text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", author: "Mark Twain" },
  { text: "Humility is not thinking less of yourself, it's thinking of yourself less.", author: "C.S. Lewis" },
  { text: "The real power of a person is in the size of the smile of those sitting next to them.", author: "Radhanath Swami" },
  { text: "The greatness of a person is not measured by the wealth they accumulate, but by the integrity and their ability to affect those around them positively.", author: "Radhanath Swami" },
  { text: "The humble soul sees every person as their teacher. The arrogant soul sees every person as their competitor.", author: "Radhanath Swami" },
  { text: "Real happiness comes from being the servant, not the enjoyer.", author: "Srila Prabhupada" },
  { text: "We are not this body. We are the spirit soul within. When we understand this, all problems are solved.", author: "Srila Prabhupada" },
  { text: "The goal of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived.", author: "Ralph Waldo Emerson" },
  { text: "What you seek is seeking you.", author: "Rumi" },
  { text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi" },
  { text: "The wound is the place where the light enters you.", author: "Rumi" },
  { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
  { text: "You have power over your mind, not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "Arise, awake, and stop not until the goal is reached.", author: "Swami Vivekananda" },
  { text: "In a day, when you don't come across any problems, you can be sure that you are travelling in a wrong path.", author: "Swami Vivekananda" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "The best time to plant a tree was twenty years ago. The second best time is now.", author: "Lao Tzu" },
  { text: "He who knows others is wise; he who knows himself is enlightened.", author: "Lao Tzu" },
  { text: "Between stimulus and response there is a space. In that space is our freedom and power to choose our response.", author: "Viktor Frankl" },
  { text: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.", author: "Dalai Lama" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "It is not the strongest that survives, but the one most responsive to change.", author: "Charles Darwin" },
  { text: "Kindness is a language which the deaf can hear and the blind can see.", author: "Mark Twain" },
  { text: "The meaning of life is to find your gift. The purpose of life is to give it away.", author: "Pablo Picasso" },
  { text: "A man's true wealth is the good he does in this world.", author: "Kahlil Gibran" },
  { text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.", author: "Rumi" },
  { text: "Real compassion is when you can feel another person's pain in your heart, and you are moved to help relieve it.", author: "Radhanath Swami" },
];

// ══════════════════════════════════════════════
//  EXPERIENCE
// ══════════════════════════════════════════════
const EXPERIENCE = [
  {
    num: "01", role: "Software Engineer", company: "ServiceNow", location: "Hyderabad",
    period: "Nov 2025 – Present", tag: "SaaS, Enterprise platform",
    bullets: [
      "Building application security and vulnerability data integrations — CVE, CVD, NVD pipelines processing data across sources like EUVD and JVN on the ServiceNow platform.",
      "Developing platform features involving complex reference field behaviors, scripting, and internal developer tooling for enterprise security modules.",
      "Collaborating across security engineering teams to ship production-grade vulnerability management integrations.",
    ],
  },
  {
    num: "02", role: "Software Engineer – Test", company: "PhonePe", location: "Pune",
    period: "Mar – Nov 2025", tag: "Fintech",
    bullets: [
      "Owned QE for Billpay & Credit Card supporting 20M+ DAUs and ₹500M+ daily transactions — backend, frontend, regression, and mock testing.",
      "Built a multi-layer automation framework (Java, TestNG, RestAssured) with reusable patterns enabling 95%+ Jenkins success rates.",
      "Prevented a critical production bug that could have caused ₹100M+ loss — honored with the BEAT Rockstar Award.",
    ],
  },
  {
    num: "03", role: "Test Automation Engineer II", company: "Acuity Knowledge Partners", location: "Bangalore",
    period: "Feb 2022 – Feb 2025", tag: "B2B, SaaS",
    bullets: [
      "Led UI automation (Selenium, xUnit, C#) and API testing (Postman, RestSharp) across 10+ projects — reduced manual effort by 40%, bugs by 35%.",
      "Refactored core framework error handling and retry logic, cutting execution time by 20-25%.",
      "Handled E2E QA for SustainabilityPulse (ESG tool) and CreditPulse (LLM credit underwriting).",
    ],
  },
];

// ══════════════════════════════════════════════
//  SKILLS — categorized with primary/secondary
// ══════════════════════════════════════════════
const SKILLS_MATRIX = [
  { cat: "Languages", primary: ["Java", "C#", "JavaScript"], secondary: ["Python", "C++"] },
  { cat: "Testing & QE", primary: ["Selenium", "RestAssured", "Postman"], secondary: ["JMeter", "WireMock", "TestNG", "xUnit", "BDD/TDD"] },
  { cat: "DevOps & Cloud", primary: ["Jenkins", "Docker"], secondary: ["CI/CD", "AWS", "Maven"] },
  { cat: "Platform", primary: ["ServiceNow"], secondary: ["Scripting", "Integrations", "Security Modules"] },
  { cat: "Other", primary: ["Git", "SQL"], secondary: ["HTML/CSS", "Power BI", "DSA"] },
];

// ══════════════════════════════════════════════
//  CURRENTLY
// ══════════════════════════════════════════════
const CURRENTLY = [
  { label: "Working on", text: "Application security & vulnerability data pipelines at ServiceNow. CVE/CVD/NVD integrations, mostly." },
  { label: "Reading", text: "Bhagavad Gita commentaries. Marcus Aurelius. Anything that asks better questions than it answers." },
  { label: "Learning", text: "System design, distributed systems, and the slow art of being more present." },
  { label: "Off-screen", text: "Walks without a destination. Dumb Charades with family. The occasional Antakshari." },
];

// ══════════════════════════════════════════════
//  FAMILY GAMES
// ══════════════════════════════════════════════
const FAMILY_GAMES = [
  { name: "Dumb Charades", players: "4+", needs: "Nothing", emoji: "🎭", how: "Split into teams. Act out a movie/song title without speaking. Team guesses within the time limit. Most correct guesses wins!", tip: "Show the number of words with fingers first — saves chaos." },
  { name: "20 Questions", players: "2+", needs: "Nothing", emoji: "❓", how: "One person thinks of something. Others ask up to 20 yes-or-no questions to guess it. That's all you get.", tip: "Start broad: 'Is it alive?' narrows things fast." },
  { name: "Antakshari", players: "4+", needs: "Nothing", emoji: "🎵", how: "Teams sing songs in turns. Next team starts with the last consonant of the previous song. 30 seconds to start or you're out!", tip: "Keep songs ready for tricky letters — lifesavers." },
  { name: "Mafia", players: "6+", needs: "Cards or chits", emoji: "🕵️", how: "Assign roles: Mafia kills at night, Doctor saves, Detective investigates, Villagers vote. Narrator runs day/night cycles. Eliminate all mafia to win.", tip: "The narrator makes it — go dramatic, add backstory." },
  { name: "Pictionary", players: "4+", needs: "Paper & pen", emoji: "🎨", how: "Draw a word while your team guesses. No letters, numbers, or gestures. 60 seconds per round.", tip: "Draw the easiest visual clue, not the most literal one." },
  { name: "Two Truths & a Lie", players: "3+", needs: "Nothing", emoji: "🤥", how: "Say three statements — two true, one false. Everyone guesses the lie. You'll learn wild things about people you thought you knew.", tip: "Make truths unbelievable and the lie boring." },
  { name: "Name Place Animal Thing", players: "2+", needs: "Paper & pen", emoji: "📝", how: "Pick a letter. Race to write a Name, Place, Animal, Thing starting with it. First to finish says Stop. Unique = 10pts, shared = 5.", tip: "Letters like X and Q create the best chaos." },
  { name: "Story Chain", players: "3+", needs: "Nothing", emoji: "📖", how: "Each person adds one sentence to a story. It gets absurd. No vetoing — every twist stays.", tip: "Introduce a completely unrelated character for maximum laughs." },
];

const TYPING_PARAGRAPHS = [
  "The quick brown fox jumps over the lazy dog near the riverbank. Sunlight filters through the leaves as birds sing their morning songs across the meadow.",
  "Every programmer knows the feeling of finally fixing a bug that took hours to find. The satisfaction of green tests after a long debug session is unmatched.",
  "Mumbai never sleeps. The local trains carry millions of dreams every day. From street food in Juhu to the Worli skyline, this city pulses with quiet resilience.",
];

// ══════════════════════════════════════════════
//  HOOKS
// ══════════════════════════════════════════════
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useTimeOnPage() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handle = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return progress;
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setActive(true);
    let raf;
    const handler = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", handler);
    return () => { window.removeEventListener("mousemove", handler); cancelAnimationFrame(raf); };
  }, []);
  if (!active) return null;
  return (
    <div style={{
      position: "fixed", left: pos.x - 250, top: pos.y - 250,
      width: 500, height: 500, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(200,168,80,0.04) 0%, transparent 60%)",
      pointerEvents: "none", zIndex: 1, mixBlendMode: "screen",
    }} />
  );
}

function Konami(callback) {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  const pos = useRef(0);
  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode === code[pos.current]) {
        pos.current++;
        if (pos.current === code.length) { callback(); pos.current = 0; }
      } else { pos.current = 0; }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
}

function Grain() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none", opacity: 0.028,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat", backgroundSize: "180px",
    }} />
  );
}

function Reveal({ children, delay = 0, direction = "up" }) {
  const [ref, visible] = useInView(0.1);
  const transforms = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", none: "translateY(0)" };
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0,0)" : transforms[direction],
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

// ══════════════════════════════════════════════
//  QUOTE BLOCK
// ══════════════════════════════════════════════
function QuoteBlock() {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [fade, setFade] = useState(true);
  const q = QUOTES[idx];
  const next = () => {
    setFade(false);
    setTimeout(() => { setIdx((i) => (i + 1) % QUOTES.length); setFade(true); }, 400);
  };
  return (
    <div onClick={next} style={{
      cursor: "pointer", userSelect: "none", opacity: fade ? 1 : 0,
      transition: "opacity 0.4s ease", maxWidth: 620, margin: "0 auto", textAlign: "center", padding: "0 20px",
    }}>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px, 2.8vw, 24px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.7, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
        "{q.text}"
      </div>
      <div style={{ marginTop: 16, fontSize: 13, fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: 1, textTransform: "uppercase" }}>
        — {q.author}
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: "var(--text-muted)" }}>tap for another thought</div>
    </div>
  );
}

// ══════════════════════════════════════════════
//  SKILL MATRIX — editorial CV style
// ══════════════════════════════════════════════
function SkillMatrix() {
  return (
    <div style={{ maxWidth: 700 }}>
      {SKILLS_MATRIX.map((row, i) => (
        <Reveal key={row.cat} delay={i * 0.08}>
          <div className="matrix-row" style={{
            padding: "20px 0",
            borderBottom: i < SKILLS_MATRIX.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)",
              textTransform: "uppercase", letterSpacing: 2,
            }}>
              {row.cat}
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7, letterSpacing: "-0.005em" }}>
              {row.primary.map((s, j) => (
                <span key={s}>
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>{s}</span>
                  {(j < row.primary.length - 1 || row.secondary.length > 0) && (
                    <span style={{ color: "var(--text-muted)", margin: "0 8px" }}>·</span>
                  )}
                </span>
              ))}
              {row.secondary.map((s, j) => (
                <span key={s} style={{ color: "var(--text-secondary)" }}>
                  {s}
                  {j < row.secondary.length - 1 && <span style={{ color: "var(--text-muted)", margin: "0 8px" }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
      <div style={{
        marginTop: 16, fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)",
        letterSpacing: 0.5,
      }}>
        <span style={{ color: "var(--accent)" }}>●</span> primary &nbsp; · &nbsp; comfortable
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
//  CURRENTLY BLOCK
// ══════════════════════════════════════════════
function CurrentlyBlock() {
  return (
    <div style={{ maxWidth: 700 }}>
      {CURRENTLY.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.08}>
          <div className="matrix-row" style={{
            padding: "18px 0",
            borderBottom: i < CURRENTLY.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)",
              textTransform: "uppercase", letterSpacing: 2,
            }}>
              {item.label}
            </div>
            <div style={{
              fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7,
              color: "var(--text-primary)", letterSpacing: "-0.005em",
            }}>
              {item.text}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════
//  GAMES
// ══════════════════════════════════════════════
function BugSquasher() {
  const [bugs, setBugs] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [playing, setPlaying] = useState(false);
  const [best, setBest] = useState(0);
  const gridSize = 12;

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setTimeLeft((v) => { if (v <= 1) { setPlaying(false); return 0; } return v - 1; }), 1000);
    return () => clearInterval(t);
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      const id = Date.now() + Math.random();
      setBugs((b) => [...b, { id, pos: Math.floor(Math.random() * gridSize) }]);
      setTimeout(() => setBugs((b) => b.filter((x) => x.id !== id)), 1100 + Math.random() * 700);
    }, 550);
    return () => clearInterval(t);
  }, [playing]);

  const squash = (id) => { setBugs((b) => b.filter((x) => x.id !== id)); setScore((s) => s + 1); };
  const start = () => { if (score > best) setBest(score); setScore(0); setTimeLeft(30); setBugs([]); setPlaying(true); };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 18, fontFamily: "var(--font-mono)", fontSize: 14 }}>
        <span style={{ color: "var(--accent)" }}>Score {score}</span>
        <span style={{ color: timeLeft <= 5 ? "#e74c3c" : "var(--text-secondary)" }}>⏱ {timeLeft}s</span>
        <span style={{ color: "var(--text-muted)" }}>Best {best}</span>
      </div>
      {playing ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, maxWidth: 300, margin: "0 auto" }}>
          {Array.from({ length: gridSize }).map((_, i) => {
            const bug = bugs.find((b) => b.pos === i);
            return (
              <div key={i} onClick={() => bug && squash(bug.id)} style={{
                aspectRatio: "1", borderRadius: 10,
                background: bug ? "var(--accent-dim)" : "var(--card-bg)",
                border: `1px solid ${bug ? "var(--accent-border)" : "var(--border)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, cursor: bug ? "pointer" : "default", transition: "all 0.12s",
              }}>{bug && <span style={{ animation: "pop .25s ease-out" }}>🐛</span>}</div>
            );
          })}
        </div>
      ) : (
        <div>
          {timeLeft === 0 && <p style={{ color: "var(--accent)", fontSize: 18, marginBottom: 14, fontFamily: "var(--font-serif)" }}>You squashed {score} bugs!</p>}
          <button onClick={start} className="btn-primary">{timeLeft === 0 ? "Again" : "Start"}</button>
        </div>
      )}
    </div>
  );
}

function NumberGuesser() {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(100);
  const [guess, setGuess] = useState(50);
  const [attempts, setAttempts] = useState(0);
  const [done, setDone] = useState(false);

  const respond = (dir) => {
    if (dir === "correct") { setDone(true); return; }
    setAttempts((a) => a + 1);
    let nl = low, nh = high;
    if (dir === "higher") nl = guess + 1; else nh = guess - 1;
    setLow(nl); setHigh(nh); setGuess(Math.floor((nl + nh) / 2));
  };
  const reset = () => { setLow(1); setHigh(100); setGuess(50); setAttempts(0); setDone(false); };

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: "var(--text-muted)", marginBottom: 14, fontSize: 14 }}>Think of a number (1–100). I use binary search.</p>
      {!done ? (
        <>
          <div style={{ fontSize: 52, fontWeight: 700, color: "var(--accent)", fontFamily: "var(--font-serif)", margin: "12px 0" }}>{guess}</div>
          <div style={{ height: 4, background: "var(--border)", borderRadius: 2, maxWidth: 260, margin: "10px auto 18px" }}>
            <div style={{ height: "100%", width: `${((100 - (high - low)) / 100) * 100}%`, background: "var(--accent)", borderRadius: 2, transition: "width 0.4s" }} />
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: 12, fontFamily: "var(--font-mono)", marginBottom: 16 }}>{low}–{high} · attempt {attempts + 1}</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button onClick={() => respond("higher")} className="btn-outline">Higher ↑</button>
            <button onClick={() => respond("correct")} className="btn-primary">Correct ✓</button>
            <button onClick={() => respond("lower")} className="btn-outline">Lower ↓</button>
          </div>
        </>
      ) : (
        <div>
          <div style={{ fontSize: 44, margin: "10px 0" }}>🎯</div>
          <p style={{ color: "var(--accent)", fontSize: 20, fontFamily: "var(--font-serif)" }}>{attempts + 1} attempts — your number was {guess}</p>
          <button onClick={reset} className="btn-primary" style={{ marginTop: 14 }}>Again</button>
        </div>
      )}
    </div>
  );
}

function JsonPrettifier() {
  const [input, setInput] = useState('{"name":"Shivam","role":"SWE","company":"ServiceNow","skills":["Java","C#","JS"]}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const format = () => {
    try { setOutput(JSON.stringify(JSON.parse(input), null, 2)); setError(""); }
    catch (e) { setError(e.message); setOutput(""); }
  };
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1400); };
  useEffect(() => { format(); }, []);
  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste JSON..." style={{
        width: "100%", minHeight: 80, background: "var(--card-bg)", color: "var(--text-primary)",
        border: `1px solid ${error ? "#e74c3c" : "var(--border)"}`, borderRadius: 8, padding: 14,
        fontFamily: "var(--font-mono)", fontSize: 13, resize: "vertical", outline: "none",
      }} />
      <div style={{ display: "flex", gap: 10, margin: "12px 0" }}>
        <button onClick={format} className="btn-primary">Format</button>
        {output && <button onClick={copy} className="btn-outline">{copied ? "Copied ✓" : "Copy"}</button>}
      </div>
      {error && <div style={{ color: "#e74c3c", fontSize: 13, padding: 12, background: "rgba(231,76,60,0.06)", borderRadius: 8, fontFamily: "var(--font-mono)" }}>⚠ {error}</div>}
      {output && <pre style={{
        background: "var(--card-bg)", color: "var(--accent)", padding: 16, borderRadius: 8,
        fontSize: 13, fontFamily: "var(--font-mono)", overflowX: "auto", border: "1px solid var(--accent-border)",
        maxHeight: 200, margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word",
      }}>{output}</pre>}
    </div>
  );
}

function TypingTest() {
  const [text] = useState(() => TYPING_PARAGRAPHS[Math.floor(Math.random() * TYPING_PARAGRAPHS.length)]);
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [done, setDone] = useState(false);
  const ref = useRef();

  const handle = (e) => {
    const v = e.target.value;
    if (!startTime) setStartTime(Date.now());
    setTyped(v);
    let correct = 0;
    for (let i = 0; i < v.length; i++) if (v[i] === text[i]) correct++;
    setAccuracy(v.length > 0 ? Math.round((correct / v.length) * 100) : 100);
    const elapsed = (Date.now() - (startTime || Date.now())) / 60000;
    if (elapsed > 0) setWpm(Math.round(v.split(" ").length / elapsed));
    if (v.length >= text.length) setDone(true);
  };
  const reset = () => { setTyped(""); setStartTime(null); setWpm(0); setAccuracy(100); setDone(false); ref.current?.focus(); };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 16, fontFamily: "var(--font-mono)", fontSize: 13 }}>
        <span style={{ color: "var(--accent)" }}>{wpm} WPM</span>
        <span style={{ color: accuracy >= 90 ? "#27ae60" : "#e74c3c" }}>{accuracy}%</span>
        <span style={{ color: "var(--text-muted)" }}>{typed.length}/{text.length}</span>
      </div>
      <div style={{
        background: "var(--card-bg)", borderRadius: 10, padding: 16, marginBottom: 12,
        fontFamily: "var(--font-mono)", fontSize: 14, lineHeight: 1.9, border: "1px solid var(--border)", minHeight: 70,
      }}>
        {text.split("").map((c, i) => {
          let color = "var(--text-muted)";
          if (i < typed.length) color = typed[i] === c ? "#27ae60" : "#e74c3c";
          else if (i === typed.length) color = "var(--accent)";
          return <span key={i} style={{ color, background: i === typed.length ? "var(--accent-dim)" : "transparent", borderRadius: 2, padding: i === typed.length ? "1px 0" : 0 }}>{c}</span>;
        })}
      </div>
      {!done ? (
        <textarea ref={ref} value={typed} onChange={handle} placeholder="Start typing..." style={{
          width: "100%", minHeight: 50, background: "rgba(255,255,255,0.02)", color: "var(--text-primary)",
          border: "1px solid var(--accent-border)", borderRadius: 8, padding: 12,
          fontFamily: "var(--font-mono)", fontSize: 13, outline: "none", resize: "none",
        }} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--accent)", fontSize: 17, fontFamily: "var(--font-serif)" }}>{wpm} WPM · {accuracy}% accuracy</p>
          <button onClick={reset} className="btn-primary" style={{ marginTop: 10 }}>Again</button>
        </div>
      )}
    </div>
  );
}

function ApiDashboard() {
  const names = ["Auth Service", "Payment Gateway", "User API", "Notification Hub", "Search Engine", "CDN Edge"];
  const [statuses, setStatuses] = useState(() => names.map((n) => ({ n, s: "green", l: ~~(Math.random() * 80) + 20 })));
  useEffect(() => {
    const t = setInterval(() => setStatuses((p) => p.map((x) => {
      const r = Math.random();
      const s = r > 0.88 ? "red" : r > 0.75 ? "yellow" : "green";
      return { ...x, s, l: s === "red" ? ~~(Math.random() * 500) + 500 : s === "yellow" ? ~~(Math.random() * 200) + 150 : ~~(Math.random() * 80) + 20 };
    })), 2200);
    return () => clearInterval(t);
  }, []);
  const sc = { green: "#27ae60", yellow: "#f39c12", red: "#e74c3c" };
  const sl = { green: "Operational", yellow: "Degraded", red: "Down" };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
        <span>Live simulation · ~2s refresh</span>
        <span style={{ color: "#27ae60", display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#27ae60", animation: "pulse 2s infinite" }} />Monitoring
        </span>
      </div>
      {statuses.map((x) => (
        <div key={x.n} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "11px 14px", borderRadius: 8, marginBottom: 6,
          background: "var(--card-bg)", border: "1px solid var(--border)", transition: "all 0.35s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: sc[x.s], transition: "background 0.35s" }} />
            <span style={{ color: "var(--text-primary)", fontSize: 14 }}>{x.n}</span>
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 12, fontFamily: "var(--font-mono)", alignItems: "center" }}>
            <span style={{ color: "var(--text-muted)" }}>{x.l}ms</span>
            <span style={{ color: sc[x.s], padding: "2px 10px", borderRadius: 4, background: sc[x.s] + "14", minWidth: 85, textAlign: "center" }}>{sl[x.s]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function FamilyGames() {
  const [sel, setSel] = useState(null);
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? FAMILY_GAMES : filter === "zero" ? FAMILY_GAMES.filter((g) => g.needs === "Nothing") : FAMILY_GAMES.filter((g) => g.needs !== "Nothing");

  return (
    <div>
      <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 14, textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
        Put the screens down. Pick a game. Laugh until it hurts.
      </p>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16, flexWrap: "wrap" }}>
        {[["all", "All"], ["zero", "No Props"], ["props", "Needs Stuff"]].map(([k, l]) => (
          <button key={k} onClick={() => { setFilter(k); setSel(null); }} style={{
            padding: "5px 14px", borderRadius: 100, fontSize: 12, cursor: "pointer", fontFamily: "var(--font-mono)",
            background: filter === k ? "var(--accent-dim)" : "transparent",
            color: filter === k ? "var(--accent)" : "var(--text-muted)",
            border: `1px solid ${filter === k ? "var(--accent-border)" : "var(--border)"}`,
          }}>{l}</button>
        ))}
      </div>
      {sel === null ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 10 }}>
          {list.map((g, i) => (
            <div key={g.name} onClick={() => setSel(i)} style={{
              padding: "16px 12px", borderRadius: 12, cursor: "pointer", textAlign: "center",
              background: "var(--card-bg)", border: "1px solid var(--border)", transition: "all 0.25s",
            }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>{g.emoji}</div>
              <div style={{ color: "var(--text-primary)", fontSize: 13, fontWeight: 600 }}>{g.name}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 3 }}>{g.players} · {g.needs}</div>
            </div>
          ))}
        </div>
      ) : (() => {
        const g = list[sel];
        if (!g) { setSel(null); return null; }
        return (
          <div style={{ animation: "fadeUp .35s ease" }}>
            <button onClick={() => setSel(null)} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontSize: 13, marginBottom: 12, padding: 0, fontFamily: "var(--font-mono)" }}>← back</button>
            <div style={{ background: "var(--card-bg)", borderRadius: 14, border: "1px solid var(--border)", padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, fontSize: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--accent-dim)" }}>{g.emoji}</div>
                <div>
                  <div style={{ color: "var(--text-primary)", fontSize: 17, fontWeight: 700, fontFamily: "var(--font-serif)" }}>{g.name}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: 12 }}>{g.players} players · {g.needs}</div>
                </div>
              </div>
              <div style={{ color: "var(--accent)", fontSize: 11, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>How to play</div>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>{g.how}</p>
              <div style={{ background: "rgba(243,156,18,0.06)", borderRadius: 10, padding: "11px 15px", borderLeft: "3px solid #f39c12" }}>
                <div style={{ color: "#f39c12", fontSize: 11, fontWeight: 700, fontFamily: "var(--font-mono)", marginBottom: 3 }}>PRO TIP</div>
                <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{g.tip}</p>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

const PROJECTS = [
  { id: "bugs", title: "Bug Squasher", emoji: "🐛", desc: "Whack-a-mole meets QA — squash bugs in 30 seconds.", component: BugSquasher },
  { id: "guess", title: "Number Guesser", emoji: "🔢", desc: "Think of a number. Binary search finds it.", component: NumberGuesser },
  { id: "json", title: "JSON Prettifier", emoji: "{ }", desc: "Paste messy JSON → formatted, validated, copied.", component: JsonPrettifier },
  { id: "typing", title: "Typing Speed", emoji: "⌨️", desc: "Real-time WPM and accuracy tracking.", component: TypingTest },
  { id: "api", title: "API Status", emoji: "📡", desc: "Mock dashboard — watch services flicker live.", component: ApiDashboard },
  { id: "family", title: "Family Games", emoji: "🎲", desc: "Screen-free games for family & friends.", component: FamilyGames },
];

function SectionHeader({ num, title, meta }) {
  return (
    <Reveal>
      <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 40, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>{num}</span>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>{title}</span>
        <div style={{ flex: 1, height: 1, background: "var(--border)", marginLeft: 14, minWidth: 40 }} />
        {meta && <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: 1, textTransform: "uppercase" }}>{meta}</span>}
      </div>
    </Reveal>
  );
}

// ══════════════════════════════════════════════
//  MAIN
// ══════════════════════════════════════════════
export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const scrollProgress = useScrollProgress();
  const timeOnPage = useTimeOnPage();
  const NAV = ["about", "currently", "experience", "skills", "projects", "thoughts", "contact"];

  Konami(() => setEasterEgg(true));

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const copyEmail = () => {
    const email = "shivaansahu@gmail.com";
    const success = () => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    };
    const fallback = () => {
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.setAttribute("readonly", "");
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        success();
      } catch {
        success(); // Email is visible on the button — user can copy manually
      }
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(success).catch(fallback);
    } else {
      fallback();
    }
  };

  const Comp = PROJECTS[activeProject]?.component;

  return (
    <div className="portfolio-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Libre+Franklin:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --font-serif: 'Cormorant Garamond', Georgia, serif;
          --font-sans: 'Libre Franklin', 'Segoe UI', system-ui, sans-serif;
          --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
          --bg: #0c0e12;
          --card-bg: #16181d;
          --text-primary: #e8e4de;
          --text-secondary: #a09a90;
          --text-muted: #8a8478;
          --accent: #c8a850;
          --accent-dim: rgba(200,168,80,0.1);
          --accent-border: rgba(200,168,80,0.25);
          --border: rgba(255,255,255,0.06);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); }

        .portfolio-root {
          background: var(--bg); color: var(--text-primary);
          font-family: var(--font-sans); min-height: 100vh; position: relative;
        }

        @keyframes blink { 50% { opacity: 0; } }
        @keyframes pop { from { transform: scale(0) rotate(-15deg); } to { transform: scale(1) rotate(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

        .btn-primary {
          padding: 10px 26px; border-radius: 6px; cursor: pointer; font-size: 14px;
          font-family: var(--font-mono); font-weight: 500; letter-spacing: 0.5px;
          background: var(--accent-dim); color: var(--accent);
          border: 1px solid var(--accent-border); transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
        }
        .btn-primary:hover { background: rgba(200,168,80,0.2); transform: translateY(-1px); }

        .btn-outline {
          padding: 8px 20px; border-radius: 6px; cursor: pointer; font-size: 13px;
          font-family: var(--font-mono); background: transparent; color: var(--text-secondary);
          border: 1px solid var(--border); transition: all 0.25s; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .btn-outline:hover { border-color: var(--accent-border); color: var(--accent); }

        .nav-link {
          background: none; border: none; cursor: pointer; padding: 6px 10px;
          font-size: 11px; font-family: var(--font-mono); color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 1.5px; transition: color 0.25s;
        }
        .nav-link:hover { color: var(--accent); }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--accent-border); border-radius: 3px; }

        textarea:focus, input:focus { border-color: var(--accent-border) !important; outline: none; }

        .exp-card { transition: border-color 0.3s ease; }
        .exp-card:hover { border-color: var(--accent-border) !important; }

        .project-tab { transition: all 0.2s; }
        .project-tab:hover { border-color: var(--accent-border) !important; color: var(--accent) !important; }

        .matrix-row {
          display: grid;
          grid-template-columns: minmax(140px, 180px) 1fr;
          gap: 24px;
          align-items: baseline;
        }

        @media (max-width: 600px) {
          .matrix-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }

        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .hero-grid { flex-direction: column !important; text-align: center !important; gap: 32px !important; }
          .hero-aside { display: none !important; }
        }
      `}</style>

      <Grain />
      <CursorGlow />

      {/* SCROLL PROGRESS */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 2, zIndex: 200,
        width: `${scrollProgress}%`, background: "var(--accent)", transition: "width 0.1s linear",
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 2, left: 0, right: 0, zIndex: 100,
        background: "rgba(12,14,18,0.88)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 52 }}>
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20, color: "var(--accent)", letterSpacing: "-0.02em" }}>S.</span>
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {NAV.map((n) => (
              <button key={n} className="nav-link" onClick={() => scrollTo(n)}>{n}</button>
            ))}
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: 0.5 }}>{timeOnPage}</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 28px 80px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{ display: "flex", gap: 60, alignItems: "center", width: "100%" }}>
          <div style={{ flex: "1 1 55%" }}>
            <Reveal>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>
                Shivam Sahu · Software Engineer
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={{
                fontFamily: "var(--font-serif)", fontWeight: 700,
                fontSize: "clamp(40px, 6vw, 70px)", lineHeight: 1.1,
                letterSpacing: "-0.03em", marginBottom: 20, color: "var(--text-primary)",
              }}>
                I used to break<br />software for a living.<br />
                <span style={{ color: "var(--accent)" }}>Now I build it.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: 480, marginBottom: 32 }}>
                Four years across quality engineering and platform development. Currently shipping security integrations at ServiceNow. Still hunting bugs — just from the other side now.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <button className="btn-primary" onClick={() => scrollTo("projects")}>See my work ↓</button>
                <button className="btn-outline" onClick={() => scrollTo("contact")}>Say hello →</button>
              </div>
            </Reveal>
          </div>
          <div className="hero-aside" style={{ flex: "1 1 35%", display: "flex", flexDirection: "column", gap: 14 }}>
            <Reveal delay={0.4} direction="right">
              <div style={{
                background: "var(--card-bg)", borderRadius: 12, padding: "18px 22px",
                border: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: 13,
                lineHeight: 1.9, color: "var(--text-muted)",
              }}>
                <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
                  {["#e74c3c", "#f39c12", "#27ae60"].map((c) => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                </div>
                <div style={{ color: "var(--accent)" }}>$ whoami</div>
                <div>shivam — swe @ servicenow</div>
                <div style={{ color: "var(--accent)", marginTop: 6 }}>$ cat path.log</div>
                <div>SDET → Automation → SWE (IC-2)</div>
                <div style={{ color: "var(--accent)", marginTop: 6 }}>$ uptime</div>
                <div>~4 years and counting</div>
              </div>
            </Reveal>
            <Reveal delay={0.5} direction="right">
              <div style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 16px",
                borderRadius: 8, background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)" }}>Building at ServiceNow, Hyderabad</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 2 }}>
        <div style={{ height: 1, background: "var(--border)" }} />
      </div>

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 28px", position: "relative", zIndex: 2 }}>
        <SectionHeader num="01" title="About" />
        <Reveal delay={0.1}>
          <div style={{ maxWidth: 640, fontSize: 18, lineHeight: 1.9, color: "var(--text-secondary)" }}>
            <p>
              I started as an SDET — writing automation frameworks, untangling flaky tests, learning how software really breaks. Three years of that gives you an instinct for reliability that's hard to get any other way.
            </p>
            <p style={{ marginTop: 18 }}>
              That instinct now drives my work as an engineer at ServiceNow, where I build platform features for application security and vulnerability management. The code I write gets depended on by other engineers — and I write it knowing exactly how it'll be tested and where it'll fail first.
            </p>
            <p style={{ marginTop: 18, color: "var(--text-secondary)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18 }}>
              When I'm not writing code, I'm probably thinking about philosophy, exploring spirituality, or convincing someone to play Dumb Charades.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CURRENTLY */}
      <section id="currently" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 28px 80px", position: "relative", zIndex: 2 }}>
        <SectionHeader num="02" title="Currently" meta="updated may 2026" />
        <Reveal delay={0.05}>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 28, fontFamily: "var(--font-serif)", fontStyle: "italic", maxWidth: 560 }}>
            Inspired by Derek Sivers' /now page — a snapshot of where I am, not where I've been.
          </p>
        </Reveal>
        <CurrentlyBlock />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 28px 80px", position: "relative", zIndex: 2 }}>
        <SectionHeader num="03" title="Experience" />
        <div style={{ maxWidth: 700 }}>
          {EXPERIENCE.map((job, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="exp-card" style={{
                marginBottom: 36, padding: "28px 30px", borderRadius: 14,
                background: "var(--card-bg)", border: "1px solid var(--border)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 20, right: 24,
                  fontFamily: "var(--font-serif)", fontSize: 56, fontWeight: 700,
                  color: "var(--accent)", opacity: 0.06, lineHeight: 1,
                }}>{job.num}</div>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em", margin: 0 }}>{job.role}</h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{job.period}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
                  <span style={{ color: "var(--accent)", fontSize: 15, fontWeight: 600 }}>{job.company}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>· {job.location}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, padding: "2px 10px",
                    borderRadius: 4, background: "var(--accent-dim)", color: "var(--accent)",
                    border: "1px solid var(--accent-border)",
                  }}>{job.tag}</span>
                </div>
                {job.bullets.map((b, j) => (
                  <div key={j} style={{
                    display: "flex", gap: 12, marginBottom: j < 2 ? 10 : 0,
                    fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)",
                  }}>
                    <span style={{ color: "var(--accent)", marginTop: 7, fontSize: 6 }}>●</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* EDUCATION */}
        <Reveal delay={0.1}>
          <div style={{ maxWidth: 700, display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
            <div style={{ flex: "1 1 280px", padding: "18px 22px", borderRadius: 12, background: "var(--card-bg)", border: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>B.Tech</div>
              <div style={{ color: "var(--text-primary)", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-serif)" }}>MITS, Madhya Pradesh</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>2018–2022 · 8.07 CGPA</div>
            </div>
            <div style={{ flex: "1 1 220px", padding: "18px 22px", borderRadius: 12, background: "var(--card-bg)", border: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Intermediate</div>
              <div style={{ color: "var(--text-primary)", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-serif)" }}>Gayatri Hr. Sec., Gwalior</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>2016–2017 · 85.8%</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 28px 80px", position: "relative", zIndex: 2 }}>
        <SectionHeader num="04" title="Skills" />
        <SkillMatrix />

        {/* Achievements strip */}
        <Reveal delay={0.2}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14, maxWidth: 700, marginTop: 48 }}>
            {[
              { icon: "🛡️", text: "Prevented ₹100M+ production bug at PhonePe" },
              { icon: "🏆", text: "BEAT Rockstar Award — QA, automation & risk" },
              { icon: "🌐", text: "Fintech, B2B SaaS, and enterprise platforms" },
            ].map((a, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 14, padding: "16px 20px",
                borderRadius: 12, background: "var(--card-bg)", border: "1px solid var(--border)",
                fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5,
              }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{a.icon}</span>
                <span>{a.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 28px 80px", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>05</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>Projects</span>
            <div style={{ flex: 1, height: 1, background: "var(--border)", marginLeft: 14 }} />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, marginBottom: 28, fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            Small, interactive things — built right into this page. Pick one and play.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
              {PROJECTS.map((p, i) => (
                <button key={p.id} className="project-tab" onClick={() => setActiveProject(i)} style={{
                  padding: "7px 16px", borderRadius: 6, fontSize: 13,
                  fontFamily: "var(--font-mono)", cursor: "pointer",
                  background: activeProject === i ? "var(--accent-dim)" : "transparent",
                  color: activeProject === i ? "var(--accent)" : "var(--text-muted)",
                  border: `1px solid ${activeProject === i ? "var(--accent-border)" : "var(--border)"}`,
                  fontWeight: activeProject === i ? 600 : 400,
                }}>{p.emoji} {p.title}</button>
              ))}
            </div>
            <div key={activeProject} style={{
              background: "var(--card-bg)", borderRadius: 14, padding: "26px 24px",
              border: "1px solid var(--border)", animation: "fadeUp 0.3s ease", minHeight: 280,
            }}>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
                  {PROJECTS[activeProject].emoji} {PROJECTS[activeProject].title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: 13 }}>{PROJECTS[activeProject].desc}</p>
              </div>
              <Comp />
            </div>
          </div>
        </Reveal>
      </section>

      {/* QUOTES */}
      <section id="thoughts" style={{ padding: "80px 28px", position: "relative", zIndex: 2 }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse at center, rgba(200,168,80,0.03) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", marginBottom: 48 }}>
              <div style={{ width: 40, height: 1, background: "var(--accent-border)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 2 }}>A Thought</span>
              <div style={{ width: 40, height: 1, background: "var(--accent-border)" }} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <QuoteBlock />
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 28px", position: "relative", zIndex: 2 }}>
        <SectionHeader num="06" title="Say Hello" />
        <Reveal delay={0.1}>
          <div style={{ maxWidth: 540 }}>
            <p style={{ color: "var(--text-secondary)", fontSize: 18, lineHeight: 1.8, marginBottom: 28 }}>
              Open to conversations about engineering, testing, philosophy, or anything genuinely interesting. I reply to every message.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <button onClick={copyEmail} className="btn-primary">
                {emailCopied ? "✓ Email copied" : "✉ shivaansahu@gmail.com"}
              </button>
              <a href="https://www.linkedin.com/in/shivam-sahu-network" target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn →
              </a>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 16, fontFamily: "var(--font-mono)" }}>
              {emailCopied ? "Paste it anywhere — go say hi." : "Click to copy. I'll be on the other end."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid var(--border)", padding: "28px",
        position: "relative", zIndex: 2,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, color: "var(--text-primary)", marginBottom: 4 }}>
              Shivam Sahu
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", lineHeight: 1.7 }}>
              {new Date().getFullYear()} · Hyderabad, India
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", lineHeight: 1.7 }}>
              <div>Built with React, Cormorant Garamond,</div>
              <div>and a quiet cup of chai.</div>
              <div style={{ marginTop: 6, color: "var(--accent)" }}>You've been here {timeOnPage}.</div>
            </div>
          </div>
        </div>
        <div style={{
          maxWidth: 1200, margin: "20px auto 0", paddingTop: 14, borderTop: "1px solid var(--border)",
          fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", textAlign: "center", letterSpacing: 0.5,
        }}>
          ↑↑↓↓←→←→BA — try it
        </div>
      </footer>

      {/* EASTER EGG MODAL */}
      {easterEgg && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 10000,
          background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center",
          animation: "fadeUp 0.4s ease",
        }} onClick={() => setEasterEgg(false)}>
          <div style={{
            background: "var(--card-bg)", borderRadius: 18, padding: 40,
            border: "1px solid var(--accent-border)", textAlign: "center", maxWidth: 400,
          }}>
            <div style={{ fontSize: 48, marginBottom: 16, animation: "float 3s ease-in-out infinite" }}>🎮</div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, color: "var(--accent)", marginBottom: 10 }}>You found it!</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7 }}>
              The Konami Code still works. You're clearly someone who appreciates the classics.
            </p>
            <p style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 12, marginTop: 16 }}>↑↑↓↓←→←→BA</p>
          </div>
        </div>
      )}
    </div>
  );
}
