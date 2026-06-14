import { Download } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #resume-content, #resume-content * { visibility: visible; }
          #resume-content { position: absolute; left: 0; top: 0; width: 100%; padding: 0.5in; font-size: 11pt; }
          .no-print { display: none !important; }
          a { color: #000 !important; text-decoration: none !important; }
          h1 { font-size: 18pt; }
          h2 { font-size: 13pt; border-bottom: 1pt solid #000; padding-bottom: 2pt; margin-bottom: 6pt; }
          h3 { font-size: 11pt; }
          p, li { font-size: 10.5pt; line-height: 1.4; }
        }
      `}</style>

      <div className="min-h-screen" style={{ background: "var(--bg)" }}>
        <div className="max-w-[850px] mx-auto px-6 py-12">

          <div className="flex justify-between items-center mb-8 no-print">
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "var(--ink)" }}>Resume</h1>
              <p className="text-sm mt-1" style={{ color: "var(--ink-soft)" }}>Click download for PDF</p>
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "var(--blue)", color: "#fff" }}
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>

          <div
            id="resume-content"
            className="rounded-2xl p-8 md:p-12"
            style={{ background: "var(--card)", border: "1px solid var(--hair)", color: "var(--ink)" }}
          >
            {/* Header */}
            <div className="text-center mb-6" style={{ borderBottom: "2px solid var(--hair)", paddingBottom: "16px" }}>
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>AAHANA GOSWAMI</h1>
              <p className="text-sm mt-2" style={{ color: "var(--ink-soft)" }}>
                Chicago, IL · <a href="mailto:aasignshere@gmail.com" style={{ color: "var(--blue)" }}>aasignshere@gmail.com</a> · <a href="https://www.linkedin.com/in/aahana-goswami" style={{ color: "var(--blue)" }}>linkedin.com/in/aahana-goswami</a> · <a href="https://aahanagoswami.github.io" style={{ color: "var(--blue)" }}>aahanagoswami.github.io</a>
              </p>
            </div>

            {/* Summary */}
            <section className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-2" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "4px" }}>Summary</h2>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink)" }}>
                Summa Cum Laude graduate in Communication & English Literature (4.0 GPA) with hands-on experience in strategic communications, content strategy, startup operations, and product analysis. Skilled at breaking down complex problems, building compelling narratives, and presenting ideas that drive action. Proficient in AI tools (Claude, ChatGPT, Gemini, Canva AI) for research, drafting, and strategy. Published journalist with 6+ bylines covering policy, human rights, and consumer behavior.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-2" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "4px" }}>Experience</h2>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Resident Assistant</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>Feb 2025 – Present</span>
                </div>
                <p className="text-sm italic mb-1" style={{ color: "var(--ink-soft)" }}>University of Illinois Chicago</p>
                <ul className="list-disc pl-5 text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                  <li>Manage a residential floor of students, resolving conflicts, enforcing policy, and building inclusive community through monthly life-skills programming</li>
                  <li>Design targeted engagement initiatives including one-on-one conversations and relationship-building strategies</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Writing Consultant</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>Jan 2025 – May 2026</span>
                </div>
                <p className="text-sm italic mb-1" style={{ color: "var(--ink-soft)" }}>UIC Writing Center</p>
                <ul className="list-disc pl-5 text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                  <li>Selected through competitive process (top 10% — 5 of 57 applicants) to deliver one-on-one writing consultations across disciplines</li>
                  <li>Coach students on argumentation, structural clarity, audience analysis, and revision strategies — diagnosing weaknesses in logic and helping writers fix them independently</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Believe in Students Intern</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>Aug 2024 – May 2026</span>
                </div>
                <p className="text-sm italic mb-1" style={{ color: "var(--ink-soft)" }}>Great Lakes FAST Fund Consortium</p>
                <ul className="list-disc pl-5 text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                  <li>Surveyed 600+ students on college cost transparency, organized advocacy events, and pushed for tuition policy change</li>
                  <li>Co-authored and published "The Price of Success — Is Paying College Tuition Worth It?" in UIC Bonfire</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Content Media & Operations Support</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>May 2021 – Sep 2023</span>
                </div>
                <p className="text-sm italic mb-1" style={{ color: "var(--ink-soft)" }}>Graaphene — AI-Powered Care Marketplace</p>
                <ul className="list-disc pl-5 text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                  <li>Co-built startup operations from the ground up: onboarding, content strategy, provider matching protocols, and service-level agreements for childcare providers across Cook County</li>
                  <li>Produced 100+ branded content pieces across Instagram, driving parent engagement and provider acquisition</li>
                  <li>Designed operational playbooks and scalable workflows that enabled the founding team to manage provider-parent relationships at scale</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Content Developer — Intern</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>Jun 2023 – Aug 2023</span>
                </div>
                <p className="text-sm italic mb-1" style={{ color: "var(--ink-soft)" }}>Nao Now</p>
                <ul className="list-disc pl-5 text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                  <li>Developed content strategy and produced editorial assets for an ed-tech platform, translating complex ideas into clear, audience-focused narratives</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Summer Intern</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>May 2022 – Aug 2022</span>
                </div>
                <p className="text-sm italic mb-1" style={{ color: "var(--ink-soft)" }}>Future Founders</p>
                <ul className="list-disc pl-5 text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                  <li>Completed entrepreneurship-focused internship: pitching business plans, building cross-functional teams, and developing creative writing and business development skills</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-2" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "4px" }}>Education</h2>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">University of Illinois Chicago (UIC)</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>Aug 2023 – May 2026</span>
                </div>
                <p className="text-[15px] italic">B.A. in Communication & English Literature — Summa Cum Laude, GPA: 4.0/4.0</p>
                <p className="text-sm mt-1" style={{ color: "var(--ink)" }}>
                  Sigma Tau Delta Honor Society · UIC Honors College · Red Shoes Review Assistant Editor · Writing Center Tutor · Faculty Union · Dean's List
                </p>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">POW! ZAM! BAM!: Superheroes in Media — Tokyo, Japan</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>May 2024 – Jun 2024</span>
                </div>
                <p className="text-[15px] italic">Study Abroad Program in Global Asian Studies</p>
                <p className="text-sm mt-1" style={{ color: "var(--ink)" }}>
                  Studied how superhero narratives shape cultural identity across Japanese and American media — analyzing anime, manga, and film through the lens of digital media, storytelling, and cross-cultural communication.
                </p>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">The Second City</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>May 2017 – Jun 2017</span>
                </div>
                <p className="text-[15px] italic">Improvisation & Stand-up Comedy — 50% Scholarship Recipient</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">James B. Conant High School</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>2018 – 2023</span>
                </div>
                <p className="text-[15px] italic">High School Diploma — Liberal Arts & Sciences</p>
              </div>
            </section>

            {/* Projects & Publications */}
            <section className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-2" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "4px" }}>Projects & Publications</h2>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Avenues of Access — Campus Accessibility Campaign</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>2024</span>
                </div>
                <p className="text-[14px]" style={{ color: "var(--ink)" }}>
                  Built and executed full PR strategy — press release, stakeholder outreach, narrative design — mobilizing 5 campus organizations and redesigning student senate communications
                </p>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">DaVinci Resolve Usability Analysis</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>2024</span>
                </div>
                <p className="text-[14px]" style={{ color: "var(--ink)" }}>
                  Conducted full heuristic evaluation of the user journey — install through export — documenting 3 critical UX failures and delivering actionable redesign recommendations
                </p>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">Gen Z Brand Authenticity Study</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>2024</span>
                </div>
                <p className="text-[14px]" style={{ color: "var(--ink)" }}>
                  Surveyed 100 students and analyzed rhetoric patterns across TikTok and Instagram to map how Gen Z evaluates brand advocacy — found 40% higher retention for brands with specific commitments
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[15px]">The Borgen Project — Published Journalist</h3>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>2021</span>
                </div>
                <p className="text-[14px]" style={{ color: "var(--ink)" }}>
                  6 published bylines covering child marriage in Palestine, India's COVID crisis, Colombia's tax reform, South Africa's food insecurity, and Spain's consent legislation
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-5">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-2" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "4px" }}>Skills</h2>
              <div className="text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                <p><strong>Communication:</strong> Strategic Communications, Persuasive Writing, Public Relations, AP Style, Stakeholder Alignment, Pitch Development, Rhetorical Analysis</p>
                <p><strong>Research & Analysis:</strong> User Research, Heuristic Evaluation, Consumer Behavior Analysis, Survey Design, Data Synthesis, Policy Research, Critical Thinking</p>
                <p><strong>Content & Design:</strong> Content Strategy, Social Media Management, Campaign Design, Brand Storytelling, Editorial Writing, Copywriting</p>
                <p><strong>Operations:</strong> Startup Operations, Process Design, Playbook Development, Cross-functional Coordination, Project Management</p>
                <p><strong>Technology:</strong> Claude AI, ChatGPT, Gemini, Canva AI, Microsoft Office, Google Workspace, Adobe Portfolio</p>
              </div>
            </section>

            {/* Awards & Honors */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wide mb-2" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "4px" }}>Awards & Honors</h2>
              <ul className="list-disc pl-5 text-[14px] space-y-1" style={{ color: "var(--ink)" }}>
                <li>Summa Cum Laude — University of Illinois Chicago, 4.0 GPA</li>
                <li>Sigma Tau Delta International English Honor Society</li>
                <li>UIC Honors College</li>
                <li>Dean's List (all semesters)</li>
                <li>50% Scholarship — The Second City Improvisation Program</li>
                <li>Multiple awards for persuasive pitch writing and competitive presentations</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
