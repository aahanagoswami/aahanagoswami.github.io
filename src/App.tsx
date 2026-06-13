import { useState, useEffect, FormEvent, ReactNode } from "react";
import {
  Pen,
  Megaphone,
  Award,
  Search,
  Cpu,
  Linkedin,
  Mail,
  FileText,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Sparkles,
  Heart,
  MessageSquare,
  BookOpen,
  Sun,
  Moon
} from "lucide-react";
import { STRENGTHS_DATA, WORK_DATA, EXPERIENCE_DATA } from "./data";
import { PORTRAIT_IMAGE } from "./imageAsset";
import { WorkPiece } from "./types";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"work" | "advocacy" | "all-exp">("all-exp");
  const [selectedWork, setSelectedWork] = useState<WorkPiece | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("aahana_theme") as "light" | "dark") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("aahana_theme", theme);
  }, [theme]);

  // Feedback / Form States
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recentSubmissions, setRecentSubmissions] = useState<{name: string, message: string, date: string}[]>([]);

  // Listen for the escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedWork(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fetch past stored messages on mount
  useEffect(() => {
    const saved = localStorage.getItem("aahana_site_pings");
    if (saved) {
      setRecentSubmissions(JSON.parse(saved));
    }
  }, []);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactMessage.trim()) return;

    // Compose real mailto link to send email to aasignshere@gmail.com
    const subject = `Workspace Note from ${contactName}`;
    const body = `Hi Aahana,\n\nI left a note on your digital workspace:\n\n"${contactMessage}"\n\nBest,\n${contactName}\nEmail: ${contactEmail || "Not provided"}`;
    const mailtoUrl = `mailto:aasignshere@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Trigger the client system email program
    window.location.href = mailtoUrl;

    const newPing = {
      name: contactName,
      message: contactMessage,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
    };

    const updated = [newPing, ...recentSubmissions].slice(0, 5);
    setRecentSubmissions(updated);
    localStorage.setItem("aahana_site_pings", JSON.stringify(updated));

    setFormSubmitted(true);
  };

  const filteredWork = WORK_DATA.filter((item: WorkPiece) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const getStrengthIcon = (name: string, color: string) => {
    const cls = "w-8 h-8";
    switch (name) {
      case "headset":
        return <Heart className={cls} style={{ color }} />;
      case "pen":
        return <Pen className={cls} style={{ color }} />;
      case "megaphone":
        return <Megaphone className={cls} style={{ color }} />;
      case "trophy":
        return <Award className={cls} style={{ color }} />;
      case "search":
        return <Search className={cls} style={{ color }} />;
      case "cpu":
        return <Cpu className={cls} style={{ color }} />;
      default:
        return <Sparkles className={cls} style={{ color }} />;
    }
  };

  const getStrengthGlowClass = (name: string) => {
    switch (name) {
      case "headset": return "glow-indigo";
      case "pen": return "glow-green";
      case "megaphone": return "glow-violet";
      case "trophy": return "glow-amber";
      case "search": return "glow-rose";
      case "cpu": return "glow-indigo";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#0a66c2]/20 relative" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      
      {/* Navigation */}
      <nav className="site-nav">
        <div className="max-w-[1120px] mx-auto px-6 h-[54px] flex items-center justify-between">
          <a href="#top" className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity" style={{ color: "var(--ink)" }}>
            Aahana Goswami
          </a>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-[26px]">
            <a href="#about" className="nav-link">About</a>
            <a href="#strengths" className="nav-link">Capabilities</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#connect" className="nav-link">Connect</a>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-[var(--ink-soft)] hover:text-[var(--ink)] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu pane */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-6 py-4 animate-fade-in absolute w-full left-0 z-40 shadow-sm" style={{ background: "var(--bg)", borderBottom: "1px solid var(--hair)" }}>
            <div className="flex flex-col gap-4">
              {[
                { href: "#about", label: "About" },
                { href: "#strengths", label: "Capabilities" },
                { href: "#experience", label: "Experience" },
                { href: "#work", label: "Work" },
                { href: "#connect", label: "Leave a Note" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium" style={{ color: "var(--ink-soft)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/aahana-goswami"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium flex items-center gap-1" style={{ color: "var(--ink)" }}
              >
                Connect on LinkedIn <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      <a id="top"></a>

      {/* Hero Header Section — matches original HTML grid */}
      <header className="hero-section">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="hero-grid">

            <div>
              <div className="hero-kicker">
                Storyteller, Content & Media, Communications, Marketing, PR, Consulting
              </div>
              <h1 className="hero-title">
                Aahana Goswami.<br />
                <span className="sub">Communication built to connect.</span>
              </h1>
              <p className="hero-lede">
                Recent University of Illinois Chicago graduate working at the intersection of media, public perception, and social impact — through public relations, advocacy, and strategic communication.
              </p>

              <div className="hero-cta">
                <a href="#work" className="btn btn-primary">
                  See the work <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aahana-goswami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="portrait">
              <img
                src={PORTRAIT_IMAGE}
                alt="Aahana Goswami in graduation regalia"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </header>

      {/* Narrative Lead Segment */}
      <section id="about" className="py-[54px] section-white border-y" style={{ borderColor: "var(--hair)" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--ink-soft)" }}>Core Statement</h3>
            <p className="about-statement" style={{ color: "var(--ink)" }}>
              I do my clearest thinking when things are ambiguous — breaking down complex problems, aligning stakeholders with competing priorities, and building narratives that drive action. As a founding member of Graaphene, an AI-powered care marketplace, I designed operations and engagement systems from the ground up — learning that the hardest problems aren't technical, they're human. At UIC, I sharpened that instinct across <span style={{ color: "var(--blue)" }}>strategic communication, rhetoric, and consumer behavior</span>, earning highest honors while consulting with writers to restructure complex arguments, leading accessibility advocacy across campus organizations, and showing up through personal adversity with the kind of <span style={{ color: "var(--blue)" }}>resilience, judgment, and grace under pressure</span> that no transcript captures. I work fluently with <span style={{ color: "var(--blue)" }}>Claude, Gemini, ChatGPT, and Canva AI</span> — not as shortcuts, but as force multipliers for research, analysis, and content strategy. What drives me is the intersection of <span style={{ color: "var(--blue)" }}>analytical rigor and creative storytelling</span> — and I'm looking to bring that to strategy and consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths and Capabilities Cards */}
      <section id="strengths" className="py-[54px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-[34px] max-w-[46rem]">
            <h2 className="section-title mb-3" style={{ color: "var(--ink)" }}>
              What Aahana brings. <span style={{ color: "var(--ink-soft)" }}>A few reasons to work with her.</span>
            </h2>
            <p className="mt-3 text-[17px]" style={{ color: "var(--ink-soft)" }}>
              From founding startup projects to classroom writing center consultations — demonstrated strengths through real work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]" id="strengths-bento-grid">
            {STRENGTHS_DATA.map((card, idx) => (
              <div
                key={card.id}
                className={`apple-card strength-card animate-fade-in ${getStrengthGlowClass(card.iconName)}`}
                style={{ animationDelay: `${idx * 0.08}s` }}
                id={`strength-card-${card.id}`}
              >
                <div>
                  <div className="card-icon">
                    {getStrengthIcon(card.iconName, card.colorClass)}
                  </div>
                  <h3 className="card-title">
                    <span style={{ color: card.colorClass }}>{card.title}</span>
                    <span className="card-highlight">{card.boldHighlight}</span>
                  </h3>
                </div>
                <div>
                  <div className="card-tag">{card.tag}</div>
                  <p className="card-body">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Road Map Section */}
      <section id="experience" className="py-[54px] section-white border-y" style={{ borderColor: "var(--hair)" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[34px]">
            <div className="max-w-xl">
              <h2 className="section-title mb-3" style={{ color: "var(--ink)" }}>
                Action-led journey. <span style={{ color: "var(--ink-soft)" }}>Professional and Academic road.</span>
              </h2>
              <p className="mt-3 text-[17px]" style={{ color: "var(--ink-soft)" }}>
                Proven analytical focus and operational setup in academic settings and self-driven business ventures.
              </p>
            </div>

            {/* Filter segments */}
            <div className="flex gap-2 mt-6 md:mt-0 p-1 rounded-full max-w-fit" style={{ background: "var(--tag-bg)", border: "1px solid var(--hair)" }}>
              {(["all-exp", "work", "advocacy"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={activeTab === tab
                    ? { background: "var(--ink)", color: "var(--bg)", boxShadow: "0 1px 3px rgba(0,0,0,.1)" }
                    : { color: "var(--ink-soft)" }
                  }
                >
                  {tab === "all-exp" ? "All Rows" : tab === "work" ? "Professional" : "Education"}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {EXPERIENCE_DATA.filter((exp) => {
              if (activeTab === "all-exp") return true;
              if (activeTab === "work" && exp.type === "work") return true;
              if (activeTab === "advocacy" && exp.type === "education") return true;
              return false;
            }).map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-[22px] transition-colors flex flex-col md:flex-row gap-6 justify-between items-start"
                style={{ border: "1px solid var(--hair)", background: "var(--card)" }}
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl shadow-sm" style={{ background: "var(--bg)", border: "1px solid var(--hair)" }}>
                    {exp.type === "work" ? <Briefcase className="w-5 h-5" style={{ color: "var(--blue)" }} /> : <GraduationCap className="w-5 h-5" style={{ color: "var(--indigo)" }} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-snug" style={{ color: "var(--ink)" }}>{exp.role}</h3>
                    <div className="text-sm font-medium mt-1" style={{ color: "var(--ink-soft)" }}>{exp.company}</div>

                    <ul className="mt-4 space-y-2 max-w-2xl text-sm" style={{ color: "var(--ink)" }}>
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--hair)" }}></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end justify-between h-full gap-4 w-full md:w-auto">
                  <span className="text-xs font-semibold py-1.5 px-3 rounded-full" style={{ color: "var(--ink-soft)", background: "var(--tag-bg)" }}>
                    {exp.period}
                  </span>

                  <div className="flex flex-wrap gap-1 md:justify-end">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-medium py-1 px-2.5 rounded-full" style={{ background: "var(--card)", color: "var(--ink)", border: "1px solid var(--hair)" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Selected Work Portfolio Segment */}
      <section id="work" className="py-[54px]">
        <div className="max-w-[1120px] mx-auto px-6">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[34px]">
            <div className="max-w-[46rem]">
              <h2 className="section-title mb-3" style={{ color: "var(--ink)" }}>
                Selected work. <span style={{ color: "var(--ink-soft)" }}>Real problems, real outcomes.</span>
              </h2>
              <p className="mt-3 text-[17px]" style={{ color: "var(--ink-soft)" }}>
                Each piece solved a real problem — click any card to read the full case study.
              </p>
            </div>

            {/* Interactive Category Select Grid list */}
            <div className="flex flex-wrap gap-2 mt-6 lg:mt-0 p-1.5 rounded-full" style={{ background: "var(--tag-bg)", border: "1px solid var(--hair-soft)" }}>
              {[
                { key: "all", label: "All Work" },
                { key: "pr", label: "Strategy & PR" },
                { key: "research", label: "Product Analysis" },
                { key: "journalism", label: "Research & Insight" }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={activeCategory === category.key
                    ? { background: "var(--card)", color: "var(--ink)", fontWeight: 600, boxShadow: "0 1px 3px rgba(0,0,0,.08)" }
                    : { color: "var(--ink-soft)" }
                  }
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="work-grid-pieces">
            {filteredWork.map((sample, idx) => (
              <button 
                key={sample.id}
                onClick={() => setSelectedWork(sample)}
                className="apple-card p-8 flex flex-col justify-between group relative overflow-hidden text-left cursor-pointer w-full focus:outline-none"
                style={{ animationDelay: `${idx * 0.05}s` }}
                id={`work-item-${sample.id}`}
              >
                <div className="w-full">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full mb-3 inline-block" style={{ color: "var(--blue)", background: "var(--tag-bg)" }}>
                        {sample.category === "pr" ? "Strategy & PR" : sample.category === "research" ? "Product Analysis" : sample.category === "journalism" ? "Research & Insight" : "Featured"}
                      </span>
                      <h3 className="text-xl font-bold transition-colors" style={{ color: "var(--ink)" }}>
                        {sample.title}
                      </h3>
                      <p className="text-xs font-medium mt-2 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                        {sample.subtitle}
                      </p>
                    </div>
                    <span className="p-2.5 rounded-full transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" style={{ color: "var(--blue)", background: "var(--tag-bg)" }}>
                      <BookOpen className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink-soft)" }}>
                    {sample.description}
                  </p>

                  <div className="flex items-start gap-2 mb-6 py-2.5 px-3 rounded-lg" style={{ background: "var(--tag-bg)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "var(--blue)" }} />
                    <p className="text-xs font-semibold" style={{ color: "var(--blue)" }}>
                      {sample.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 w-full" style={{ borderTop: "1px solid var(--hair-soft)" }}>
                  {sample.skillsUsed.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-semibold py-1 px-2.5 rounded-md" style={{ background: "var(--tag-bg)", color: "var(--ink-soft)" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Dynamic Local Messager and Contact Form Workspace */}
      <section id="connect" className="py-[54px] border-t" style={{ background: "var(--bg)", borderColor: "var(--hair)" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* CTA Statement */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--ink-soft)" }}>Next Steps</h3>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--ink)" }}>
                  Let's craft some shared words.
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--ink-soft)" }}>
                  Aahana is actively pursuing internships, assistantships and full-time entry-level opportunities in public relations agency work, strategic copywriting, social growth partnerships and consumer digital consulting.
                </p>

                <div className="flex flex-col gap-4 max-w-sm">
                  <a
                    href="https://www.linkedin.com/in/aahana-goswami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl transition-colors"
                    style={{ background: "var(--card)", border: "1px solid var(--hair)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl" style={{ background: "var(--tag-bg)", color: "var(--blue)" }}>
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>linkedin.com/in/aahana-goswami</span>
                    </div>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--ink-soft)" }} />
                  </a>

                  <a
                    href="https://agosw2.myportfolio.com/about-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl transition-colors"
                    style={{ background: "var(--card)", border: "1px solid var(--hair)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl" style={{ background: "var(--tag-bg)", color: "var(--indigo)" }}>
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>agosw2.myportfolio.com</span>
                    </div>
                    <ChevronRight className="w-4 h-4" style={{ color: "var(--ink-soft)" }} />
                  </a>
                </div>
              </div>

              {/* Submissions shelf */}
              {recentSubmissions.length > 0 && (
                <div className="mt-8 p-6 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--hair)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--ink-soft)" }}>
                      <MessageSquare className="w-4 h-4" /> Recent Visitor Notes
                    </div>
                    <button
                      onClick={() => {
                        setRecentSubmissions([]);
                        localStorage.removeItem("aahana_site_pings");
                      }}
                      className="text-[10px] font-medium hover:text-red-500 transition-colors cursor-pointer"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="space-y-3">
                    {recentSubmissions.map((sub, i) => (
                      <div key={i} className="text-xs last:border-0 pb-2 last:pb-0 group" style={{ borderBottom: "1px solid var(--hair-soft)" }}>
                        <div className="flex justify-between items-center font-bold" style={{ color: "var(--ink)" }}>
                          <span>{sub.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-normal" style={{ color: "var(--ink-soft)" }}>{sub.date}</span>
                            <button
                              onClick={() => {
                                const updated = recentSubmissions.filter((_, idx) => idx !== i);
                                setRecentSubmissions(updated);
                                localStorage.setItem("aahana_site_pings", JSON.stringify(updated));
                              }}
                              className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all cursor-pointer"
                              aria-label="Delete note"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <p className="mt-1 italic" style={{ color: "var(--ink-soft)" }}>"{sub.message}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Local Interactive Mailbox Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-[28px]" style={{ background: "var(--card)", border: "1px solid var(--hair)" }}>
                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--ink)" }}>Leave Aahana a workspace note</h3>
                <p className="text-sm mb-6" style={{ color: "var(--ink-soft)" }}>Want to request a press asset, resume PDF, or check her availability? Write below!</p>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--ink)" }}> Your Name </label>
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--ink)" }}>
                        Your Email <span className="text-slate-400 font-normal lowercase italic">(optional)</span>
                      </label>
                      <input 
                        type="email" 
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--ink)" }}> Message </label>
                    <textarea 
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Hi Aahana, I loved your Usability Memo sample! Are you open to communications advisor roles in Chicago?"
                      className="form-input resize-none"
                    ></textarea>
                  </div>

                  {formSubmitted ? (
                    <div className="p-6 bg-emerald-50/50 border border-emerald-200/60 rounded-2xl flex flex-col gap-4 text-sm animate-fade-in">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-emerald-950 text-base block mb-0.5">Your Workspace Note has been Dispatched!</strong>
                          <p className="text-emerald-800 leading-relaxed">
                            Your system mail client was activated to route this note layout safely to <strong className="font-semibold underline">aasignshere@gmail.com</strong>.
                          </p>
                          <p className="text-emerald-700/85 mt-2 text-xs">
                            A live backup item has also been appended directly into the "Visitor Notes" timeline on the left panel!
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setContactName("");
                          setContactEmail("");
                          setContactMessage("");
                        }}
                        className="self-end px-4 py-1.5 border border-emerald-200 bg-white hover:bg-emerald-50 text-emerald-900 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-2xs"
                      >
                        Write Another Note
                      </button>
                    </div>
                  ) : (
                    <button 
                      type="submit"
                      className="w-full py-3.5 rounded-full btn-primary font-medium text-sm flex items-center justify-center gap-2 cursor-pointer focus:ring-2 focus:ring-[#0a66c2]/15"
                    >
                      <Mail className="w-4 h-4" /> Send Note to Aahana
                    </button>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Styled connection card */}
      <section className="py-6 max-w-[1120px] mx-auto px-6">
        <div className="connect-banner rounded-[28px] p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let's build something that connects.</h2>
          <p className="mt-3 max-w-lg mx-auto">Open to communications, marketing, PR, and consulting roles inside Chicago and remotely.</p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a className="btn primary px-6 py-3 rounded-full text-sm font-medium bg-white text-[#1d1d1f] hover:bg-slate-100 transition-colors" href="https://www.linkedin.com/in/aahana-goswami" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn line px-6 py-3 rounded-full text-sm font-medium border border-[#4a4a4e] text-white hover:border-white transition-colors focus:ring-1 focus:ring-white/40" href="#connect">Leave a Note</a>
            <a className="btn line px-6 py-3 rounded-full text-sm font-medium border border-[#4a4a4e] text-white hover:border-white transition-colors focus:ring-1 focus:ring-white/40" href="#work">Explore Samples</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-xs border-t" style={{ color: "var(--ink-soft)", borderColor: "var(--hair-soft)" }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <p className="mb-2">© {new Date().getFullYear()} Aahana Goswami · University of Illinois Chicago</p>
          <p style={{ color: "var(--hair)", opacity: 0.85 }}>Built with modern React and premium Apple Card design principles.</p>
        </div>
      </footer>

      {/* Immersive Workpiece Modal Viewer */}
      {selectedWork && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          id="workpiece-modal-overlay"
        >
          {/* Animated Backdrop */}
          <div 
            className="absolute inset-0 bg-[#1d1d1f]/40 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedWork(null)}
          ></div>
          
          {/* Modal Container */}
          <div 
            className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-[24px] shadow-2xl border border-[#cbd5e1]/40 flex flex-col overflow-hidden animate-scale-up z-10 transition-all"
            id="workpiece-modal-content"
          >
            {/* Modal Header */}
            <header className="px-6 py-4 border-b border-[#cbd5e1]/30 flex items-center justify-between bg-slate-50 flex-shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0a66c2] bg-[#0a66c2]/10 px-2.5 py-1 rounded-full">
                  {selectedWork.category === "pr" ? "Public Relations" : selectedWork.category === "research" ? "Usability Memo" : selectedWork.category === "journalism" ? "Journalistic" : "Portfolio Collection"}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  esc to close
                </span>
              </div>
              <button 
                onClick={() => setSelectedWork(null)}
                className="p-1.5 rounded-full hover:bg-[#1d1d1f]/5 text-[#6e6e73] hover:text-[#1d1d1f] transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            {/* Read Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:py-12 scrollbar-thin">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h1 className="text-2xl md:text-3.5xl font-extrabold tracking-tight text-[#1d1d1f] mb-3 leading-snug font-sans">
                    {selectedWork.title}
                  </h1>
                  <p className="text-base md:text-lg text-[#6e6e73] font-medium leading-relaxed">
                    {selectedWork.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-slate-100">
                  {selectedWork.skillsUsed.map((skill, idx) => (
                    <span key={idx} className="text-xs font-medium bg-slate-100 text-[#1d1d1f] border border-[#cbd5e1]/40 py-1 px-3 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Main Text Content */}
                <article className="prose max-w-none text-[#1d1d1f]">
                  {selectedWork.fullContent ? (
                    <MarkdownRenderer content={selectedWork.fullContent} />
                  ) : (
                    <p className="italic text-[#6e6e73]">Writing sample text coming soon...</p>
                  )}
                </article>

                {selectedWork.id === "usability-memo" && (
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--ink)" }}>Video Demo — Editing in DaVinci Resolve</h3>
                    <video
                      controls
                      className="w-full rounded-xl shadow-lg"
                      preload="metadata"
                    >
                      <source src="/videos/davinci-resolve-demo.mp4" type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Sticky Footer */}
            <footer className="px-6 py-4 bg-slate-50 border-t border-[#cbd5e1]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-shrink-0">
              <p className="text-xs text-[#6e6e73]">
                Interested in this writing sample? Ask Aahana about it!
              </p>
              <div className="flex gap-3">
                <a 
                  href="#connect"
                  onClick={() => {
                    setSelectedWork(null);
                    // allow smooth scroll to execute after modal unmount
                    setTimeout(() => {
                      const element = document.getElementById("connect");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 150);
                  }}
                  className="px-4 py-2 bg-[#1d1d1f] text-white hover:bg-[#323236] text-xs font-medium rounded-full transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Leave Workspace Note
                </a>
                <button 
                  onClick={() => setSelectedWork(null)}
                  className="px-4 py-2 border border-[#cbd5e1] hover:border-[#6e6e73] text-[#1d1d1f] text-xs font-medium rounded-full transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}

    </div>
  );
}

/* --- Inline lightweight Markdown utility elements --- */
function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const renderedElements: ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      continue;
    }

    // Horizontal Rule
    if (line === "---") {
      renderedElements.push(<hr key={i} className="my-6 border-[#cbd5e1]/40" />);
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const text = line.substring(2).replace(/"/g, '"');
      renderedElements.push(
        <blockquote key={i} className="pl-4 border-l-4 border-[#0a66c2]/80 italic text-[#48484a] my-4 leading-relaxed font-sans text-sm md:text-base bg-slate-50/70 py-2 pr-2 rounded-r-lg">
          {parseInline(text)}
        </blockquote>
      );
      continue;
    }

    // Headers
    if (line.startsWith("# ")) {
      renderedElements.push(
        <h1 key={i} className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1d1d1f] mt-8 mb-4 font-sans leading-tight">
          {parseInline(line.substring(2))}
        </h1>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      renderedElements.push(
        <h2 key={i} className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f] mt-6 mb-3 font-sans leading-tight">
          {parseInline(line.substring(3))}
        </h2>
      );
      continue;
    }
    if (line.startsWith("### ")) {
      renderedElements.push(
        <h3 key={i} className="text-base md:text-lg font-bold tracking-tight text-[#1d1d1f] mt-5 mb-2 font-sans">
          {parseInline(line.substring(4))}
        </h3>
      );
      continue;
    }

    // List Items
    if (line.startsWith("* ")) {
      renderedElements.push(
        <li key={i} className="list-disc ml-5 mb-2 text-[#424245] text-sm leading-relaxed">
          {parseInline(line.substring(2))}
        </li>
      );
      continue;
    }
    if (line.match(/^\d+\.\s/)) {
      const match = line.match(/^(\d+)\.\s(.*)/);
      if (match) {
        renderedElements.push(
          <li key={i} className="list-decimal ml-5 mb-2 text-[#424245] text-sm leading-relaxed" style={{ listStyleType: "decimal" }}>
            {parseInline(match[2])}
          </li>
        );
        continue;
      }
    }

    // Normal Paragraph
    renderedElements.push(
      <p key={i} className="mb-4 text-[#424245] text-sm md:text-base leading-relaxed">
        {parseInline(line)}
      </p>
    );
  }

  return <div className="space-y-1 select-text">{renderedElements}</div>;
}

// Inline parser for bold **text** and [link](url)
function parseInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let currentWord = "";
  let i = 0;

  while (i < text.length) {
    if (text.substr(i, 2) === "**") {
      if (currentWord) {
        parts.push(currentWord);
        currentWord = "";
      }
      i += 2;
      let boldText = "";
      while (i < text.length && text.substr(i, 2) !== "**") {
        boldText += text[i];
        i++;
      }
      i += 2; 
      parts.push(<strong key={i} className="font-bold text-[#1d1d1f]">{boldText}</strong>);
    } else if (text[i] === "[" && text.indexOf("]", i) > -1) {
      const closeBracket = text.indexOf("]", i);
      const openParen = text.indexOf("(", closeBracket);
      const closeParen = text.indexOf(")", openParen);

      if (openParen === closeBracket + 1 && closeParen > -1) {
        if (currentWord) {
          parts.push(currentWord);
          currentWord = "";
        }
        const linkText = text.substring(i + 1, closeBracket);
        const linkUrl = text.substring(openParen + 1, closeParen);
        parts.push(
          <a key={i} href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:underline font-semibold inline-flex items-center gap-0.5">
            {linkText}
          </a>
        );
        i = closeParen + 1;
      } else {
        currentWord += text[i];
        i++;
      }
    } else {
      currentWord += text[i];
      i++;
    }
  }

  if (currentWord) {
    parts.push(currentWord);
  }

  return parts;
}
