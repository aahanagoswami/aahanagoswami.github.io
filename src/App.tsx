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
import Resume from "./Resume";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showResume, setShowResume] = useState<boolean>(false);
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
            {showResume ? (
              <button onClick={() => setShowResume(false)} className="nav-link">Back to Portfolio</button>
            ) : (
              <>
                <a href="#about" className="nav-link">About</a>
                <a href="#strengths" className="nav-link">Capabilities</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#work" className="nav-link">Portfolio</a>
                <a href="#connect" className="nav-link">Connect</a>
              </>
            )}
            <button onClick={() => { setShowResume(!showResume); window.scrollTo(0, 0); }} className="nav-link" style={{ color: "var(--blue)" }}>
              {showResume ? "Portfolio" : "Resume"}
            </button>
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
                { href: "#work", label: "Portfolio" },
                { href: "#connect", label: "Leave a Note" },
              ].filter(() => !showResume).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium" style={{ color: "var(--ink-soft)" }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setShowResume(!showResume); setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                className="text-base font-medium" style={{ color: "var(--blue)" }}
              >
                {showResume ? "Back to Portfolio" : "Resume"}
              </button>
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

      {showResume ? <Resume /> : <>
      {/* Hero Header Section — matches original HTML grid */}
      <header className="hero-section">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="hero-grid">

            <div>
              <div className="hero-kicker">
                Communications · Strategy · Content · Research
              </div>
              <h1 className="hero-title">
                Aahana Goswami.<br />
                <span className="sub">Clear thinking, clear writing.</span>
              </h1>
              <p className="hero-lede">
                Summa Cum Laude, Communication & English Literature, UIC. I solve problems, build compelling cases, and present ideas that move people to act.
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
            <p className="about-statement" style={{ color: "var(--ink)" }}>
              I break down complex problems, build the case, and present it so people act. At <span style={{ color: "var(--blue)" }}>Graaphene</span>, I built a startup's operations from scratch — onboarding, content, service delivery — solving problems no one had framed yet. At <span style={{ color: "var(--blue)" }}>UIC</span>, I graduated with a 4.0 while coaching writers to sharpen their arguments, leading accessibility campaigns, and running product analyses that found what was actually broken. I use <span style={{ color: "var(--blue)" }}>AI tools daily</span> — Claude, ChatGPT, Gemini — to move faster on research, drafting, and strategy. I solve problems, structure information, and tell the story that convinces the room.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths and Capabilities Cards */}
      <section id="strengths" className="py-[54px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-[34px] max-w-[46rem]">
            <h2 className="section-title mb-3" style={{ color: "var(--ink)" }}>
              What I do well. <span style={{ color: "var(--ink-soft)" }}>And how I know.</span>
            </h2>
            <p className="mt-3 text-[19px]" style={{ color: "var(--ink-soft)" }}>
              Each of these came from real work — not coursework, not theory.
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
                Where I've worked. <span style={{ color: "var(--ink-soft)" }}>And what I did there.</span>
              </h2>
              <p className="mt-3 text-[19px]" style={{ color: "var(--ink-soft)" }}>
                Startups, research, writing, advocacy — every role taught me something I use daily.
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

          <div className="space-y-4">
            {EXPERIENCE_DATA.filter((exp) => {
              if (activeTab === "all-exp") return true;
              if (activeTab === "work" && (exp.type === "work" || exp.type === "advocacy")) return true;
              if (activeTab === "advocacy" && exp.type === "education") return true;
              return false;
            }).map((exp) => (
              <div
                key={exp.id}
                className="p-6 md:p-8 rounded-[22px] transition-colors flex flex-col md:flex-row gap-5 justify-between items-start"
                style={{ border: "1px solid var(--hair)", background: "var(--card)" }}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 overflow-hidden flex items-center justify-center shrink-0">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" style={exp.id === "second-city" ? { filter: "var(--logo-invert, invert(1))" } : undefined} />
                    ) : exp.type === "work" || exp.type === "advocacy" ? (
                      <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ background: "var(--tag-bg)" }}>
                        <Briefcase className="w-5 h-5" style={{ color: "var(--blue)" }} />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ background: "var(--tag-bg)" }}>
                        <GraduationCap className="w-5 h-5" style={{ color: "var(--indigo)" }} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-snug" style={{ color: "var(--ink)" }}>{exp.role}</h3>
                    <div className="text-[15px] font-medium mt-1" style={{ color: "var(--ink-soft)" }}>{exp.company}</div>

                    <ul className="mt-3 space-y-2 max-w-2xl text-[15px]" style={{ color: "var(--ink)" }}>
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--blue)" }}></span>
                          <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--blue); text-decoration: underline;">$1</a>') }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end justify-between h-full gap-3 w-full md:w-auto">
                  <span className="text-sm font-semibold py-1.5 px-3 rounded-full whitespace-nowrap" style={{ color: "var(--ink-soft)", background: "var(--tag-bg)" }}>
                    {exp.period}
                  </span>

                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs font-medium py-1 px-2.5 rounded-full" style={{ background: "var(--tag-bg)", color: "var(--ink-soft)" }}>
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
                My work. <span style={{ color: "var(--ink-soft)" }}>Click any card to see the full story.</span>
              </h2>
              <p className="mt-3 text-[19px]" style={{ color: "var(--ink-soft)" }}>
                Campaigns I launched, products I analyzed, articles I published.
              </p>
            </div>

            <div className="flex gap-1 mt-6 lg:mt-0 p-1 rounded-full whitespace-nowrap" style={{ background: "var(--tag-bg)", border: "1px solid var(--hair-soft)" }}>
              {[
                { key: "all", label: "All" },
                { key: "pr", label: "PR & Strategy" },
                { key: "research", label: "Product" },
                { key: "journalism", label: "Research" }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => { setActiveCategory(category.key); setSelectedWork(null); }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
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

          {/* Apple Discover-style editorial layout */}
          {!selectedWork && filteredWork.length > 0 && (
            <div className="space-y-4">
              {filteredWork.map((sample, idx) => {
                const isHero = idx % 3 === 0;

                if (isHero) {
                  return (
                    <div key={sample.id}>
                      {/* Hero card — text left, large image right */}
                      <button
                        onClick={() => setSelectedWork(sample)}
                        className="w-full text-left rounded-[20px] overflow-hidden group cursor-pointer focus:outline-none transition-transform hover:scale-[1.003]"
                        style={{ background: "var(--card)", border: "1px solid var(--hair)" }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
                          <div className="p-7 md:p-9 flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] font-semibold uppercase tracking-wider py-0.5 px-2.5 rounded-full inline-block mb-3" style={{ color: "var(--blue)", background: "var(--tag-bg)" }}>
                                {sample.category === "pr" ? "Strategy & PR" : sample.category === "research" ? "Product Analysis" : sample.category === "journalism" ? "Research & Insight" : "Featured"}
                              </span>
                              <h3 className="text-2xl md:text-[28px] font-bold tracking-tight leading-tight mb-3" style={{ color: "var(--ink)" }}>
                                {sample.title}
                              </h3>
                              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                                {sample.description}
                              </p>
                            </div>
                          </div>
                          {sample.image && (
                            <div className="h-[220px] md:h-[300px] overflow-hidden">
                              <img src={sample.image} alt={sample.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                            </div>
                          )}
                        </div>
                      </button>

                      {/* Pair of square cards right after the hero */}
                      {filteredWork[idx + 1] && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                          {filteredWork.slice(idx + 1, idx + 3).map((pair) => (
                            <button
                              key={pair.id}
                              onClick={() => setSelectedWork(pair)}
                              className="w-full text-left rounded-[20px] overflow-hidden group cursor-pointer focus:outline-none transition-transform hover:scale-[1.003]"
                              style={{ background: "var(--card)", border: "1px solid var(--hair)" }}
                            >
                              <div className="flex items-center p-5 md:p-6 gap-4">
                                <div className="flex-1 min-w-0">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider py-0.5 px-2 rounded-full inline-block mb-2" style={{ color: "var(--blue)", background: "var(--tag-bg)" }}>
                                    {pair.category === "pr" ? "Strategy & PR" : pair.category === "research" ? "Product Analysis" : pair.category === "journalism" ? "Research & Insight" : "Featured"}
                                  </span>
                                  <h3 className="text-base md:text-lg font-bold leading-snug mb-1.5" style={{ color: "var(--ink)" }}>
                                    {pair.title}
                                  </h3>
                                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--ink-soft)" }}>
                                    {pair.description}
                                  </p>
                                </div>
                                {pair.image && (
                                  <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden shrink-0 bg-black/5">
                                    <img src={pair.image} alt={pair.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                  </div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}

          {/* Inline expanded article view — replaces cards when a piece is selected */}
          {selectedWork && (
            <div className="animate-fade-in">
              <button
                onClick={() => setSelectedWork(null)}
                className="flex items-center gap-2 mb-6 text-sm font-medium transition-colors cursor-pointer hover:opacity-70"
                style={{ color: "var(--blue)" }}
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to all work
              </button>

              <div className="rounded-[20px] overflow-hidden" style={{ background: "var(--card)", border: "1px solid var(--hair)" }}>
                {/* Article header */}
                <div className="p-8 md:p-12" style={{ borderBottom: "1px solid var(--hair)" }}>
                  <span className="text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4" style={{ color: "var(--blue)", background: "var(--tag-bg)" }}>
                    {selectedWork.category === "pr" ? "Strategy & PR" : selectedWork.category === "research" ? "Product Analysis" : selectedWork.category === "journalism" ? "Research & Insight" : "Featured"}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--ink)" }}>
                    {selectedWork.title}
                  </h1>
                  <p className="text-base md:text-lg mb-6" style={{ color: "var(--ink-soft)" }}>
                    {selectedWork.subtitle}
                  </p>

                  <div className="flex items-start gap-2 py-3 px-4 rounded-xl mb-6 inline-flex" style={{ background: "var(--tag-bg)" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--blue)" }} />
                    <p className="text-sm font-semibold" style={{ color: "var(--blue)" }}>
                      {selectedWork.outcome}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedWork.skillsUsed.map((skill, idx) => (
                      <span key={idx} className="text-xs font-medium py-1.5 px-3 rounded-full" style={{ background: "var(--tag-bg)", color: "var(--ink-soft)", border: "1px solid var(--hair-soft)" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article body */}
                <div className="p-8 md:px-12 md:py-10">
                  <div className="max-w-3xl">
                    <article className="prose max-w-none" style={{ color: "var(--ink)" }}>
                      {selectedWork.fullContent ? (
                        <MarkdownRenderer content={selectedWork.fullContent} />
                      ) : (
                        <p className="italic" style={{ color: "var(--ink-soft)" }}>Writing sample text coming soon...</p>
                      )}
                    </article>

                    {selectedWork.id === "usability-memo" && (
                      <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--hair)" }}>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--ink)" }}>Video Demo — Editing in DaVinci Resolve</h3>
                        <video controls className="w-full rounded-xl shadow-lg" preload="metadata">
                          <source src="/videos/davinci-resolve-demo.mp4" type="video/mp4" />
                        </video>
                      </div>
                    )}
                  </div>
                </div>

                {/* Article footer */}
                <div className="px-8 md:px-12 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderTop: "1px solid var(--hair)" }}>
                  <p className="text-xs" style={{ color: "var(--ink-soft)" }}>
                    Interested in this work? Let's connect.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#connect"
                      onClick={() => setSelectedWork(null)}
                      className="px-4 py-2 text-xs font-medium rounded-full transition-colors inline-flex items-center gap-1.5"
                      style={{ background: "var(--ink)", color: "var(--bg)" }}
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Leave a Note
                    </a>
                    <button
                      onClick={() => setSelectedWork(null)}
                      className="px-4 py-2 text-xs font-medium rounded-full transition-colors cursor-pointer"
                      style={{ border: "1px solid var(--hair)", color: "var(--ink)" }}
                    >
                      Back to Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                  Let's talk.
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--ink-soft)" }}>
                  I'm looking for roles in strategy, communications, and consulting — where I can solve problems, present ideas, and tell the story that gets people to yes. Open to internships, assistantships, and full-time opportunities.
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
                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--ink)" }}>Leave me a note</h3>
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
                      <Mail className="w-4 h-4" /> Send Note
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
          <p className="mb-3">© {new Date().getFullYear()} Aahana Goswami · University of Illinois Chicago</p>
          <p className="text-sm font-medium mb-1" style={{ color: "var(--ink-soft)" }}>
            I built this site myself using <span style={{ color: "var(--blue)" }}>Claude Code</span>, React, and GitHub Pages — no CS degree needed.
          </p>
          <p style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
            I write the spec. AI writes the code. I ship the product.
          </p>
        </div>
      </footer>

      </>}
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
