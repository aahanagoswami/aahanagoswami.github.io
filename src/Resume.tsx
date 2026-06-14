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
          #resume-content { position: absolute; left: 0; top: 0; width: 100%; padding: 0.4in 0.5in; font-size: 10pt; }
          .no-print { display: none !important; }
          a { color: #000 !important; text-decoration: none !important; }
          h1 { font-size: 16pt; margin-bottom: 2pt; }
          h2 { font-size: 11pt; border-bottom: 0.5pt solid #000; padding-bottom: 1pt; margin-bottom: 4pt; }
          h3 { font-size: 10pt; }
          p, li { font-size: 9.5pt; line-height: 1.3; }
          section { margin-bottom: 8pt; }
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
            <div className="text-center mb-4" style={{ borderBottom: "2px solid var(--hair)", paddingBottom: "12px" }}>
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>AAHANA GOSWAMI</h1>
              <p className="text-sm mt-1" style={{ color: "var(--ink-soft)" }}>
                Chicago, IL · <a href="mailto:aasignshere@gmail.com" style={{ color: "var(--blue)" }}>aasignshere@gmail.com</a> · <a href="https://www.linkedin.com/in/aahana-goswami" style={{ color: "var(--blue)" }}>linkedin.com/in/aahana-goswami</a> · <a href="https://aahanagoswami.github.io" style={{ color: "var(--blue)" }}>aahanagoswami.github.io</a>
              </p>
            </div>

            {/* Summary */}
            <section className="mb-4">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "3px" }}>Summary</h2>
              <p className="text-[14px] leading-snug" style={{ color: "var(--ink)" }}>
                Summa Cum Laude graduate in Communication & English Literature (4.0 GPA) who uses AI tools daily to build real products — including this portfolio, shipped end-to-end with Claude Code. Coached 50+ writers at UIC, led an accessibility campaign across 5 organizations, and published 6+ bylines on global policy. Fluent in Claude, ChatGPT, Gemini, and Canva AI.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-4">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "3px" }}>Experience</h2>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">Resident Assistant</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Feb 2025 – Present</span>
                </div>
                <p className="text-xs italic" style={{ color: "var(--ink-soft)" }}>University of Illinois Chicago</p>
                <ul className="list-disc pl-5 text-[13px] space-y-0.5 mt-0.5" style={{ color: "var(--ink)" }}>
                  <li>Manage a residential floor — resolving conflicts, enforcing policy, and building community through monthly programming</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">Writing Consultant</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Jan 2025 – May 2026</span>
                </div>
                <p className="text-xs italic" style={{ color: "var(--ink-soft)" }}>UIC Writing Center</p>
                <ul className="list-disc pl-5 text-[13px] space-y-0.5 mt-0.5" style={{ color: "var(--ink)" }}>
                  <li>Selected top 10% (5 of 57 applicants) to deliver one-on-one writing consultations across disciplines</li>
                  <li>Coach students on argumentation, structural clarity, and revision — diagnosing logic gaps and building independent writers</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">Believe in Students Intern</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Aug 2024 – May 2026</span>
                </div>
                <p className="text-xs italic" style={{ color: "var(--ink-soft)" }}>Great Lakes FAST Fund Consortium</p>
                <ul className="list-disc pl-5 text-[13px] space-y-0.5 mt-0.5" style={{ color: "var(--ink)" }}>
                  <li>Surveyed 600+ students on college cost transparency; co-authored "The Price of Success" published in UIC Bonfire</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">Content & Operations Support</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>May 2021 – Sep 2023</span>
                </div>
                <p className="text-xs italic" style={{ color: "var(--ink-soft)" }}>Graaphene — AI-Powered Care Marketplace</p>
                <ul className="list-disc pl-5 text-[13px] space-y-0.5 mt-0.5" style={{ color: "var(--ink)" }}>
                  <li>Created social media content and supported operational planning for a startup serving childcare providers across Cook County</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">Content Developer — Intern</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Jun 2023 – Aug 2023</span>
                </div>
                <p className="text-xs italic" style={{ color: "var(--ink-soft)" }}>Nao Now</p>
                <ul className="list-disc pl-5 text-[13px] space-y-0.5 mt-0.5" style={{ color: "var(--ink)" }}>
                  <li>Produced editorial assets for an ed-tech platform, translating complex ideas into clear, audience-focused narratives</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">Summer Intern</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>May 2022 – Aug 2022</span>
                </div>
                <p className="text-xs italic" style={{ color: "var(--ink-soft)" }}>Future Founders</p>
                <ul className="list-disc pl-5 text-[13px] space-y-0.5 mt-0.5" style={{ color: "var(--ink)" }}>
                  <li>Pitched business plans, built cross-functional teams; wrote, directed, and presented a video project end-to-end</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-4">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "3px" }}>Education</h2>

              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">University of Illinois Chicago (UIC)</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>Aug 2023 – May 2026</span>
                </div>
                <p className="text-[13px] italic">B.A. in Communication & English Literature — Summa Cum Laude, GPA: 4.0/4.0</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--ink)" }}>
                  Sigma Tau Delta Honor Society · UIC Honors College · Dean's List (all semesters) · Red Shoes Review Assistant Editor · Writing Center Tutor
                </p>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[14px]">POW! ZAM! BAM!: Superheroes in Media — Tokyo, Japan</h3>
                  <span className="text-xs" style={{ color: "var(--ink-soft)" }}>May – Jun 2024</span>
                </div>
                <p className="text-[13px] italic">UIC Study Abroad · Analyzed superhero narratives across Japanese and American media through digital media and cross-cultural communication</p>
              </div>

              <div className="flex justify-between items-baseline mb-2">
                <div>
                  <h3 className="font-bold text-[14px] inline">The Second City</h3>
                  <span className="text-[13px] italic ml-2">Improvisation & Stand-up Comedy — 50% Scholarship</span>
                </div>
                <span className="text-xs" style={{ color: "var(--ink-soft)" }}>2017</span>
              </div>
            </section>

            {/* Projects & Publications */}
            <section className="mb-4">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "3px" }}>Projects & Publications</h2>

              <div className="mb-2">
                <h3 className="font-bold text-[14px] inline">Avenues of Access</h3>
                <span className="text-xs ml-2" style={{ color: "var(--ink-soft)" }}>2024</span>
                <p className="text-[13px]" style={{ color: "var(--ink)" }}>
                  Full PR strategy — press release, stakeholder outreach, narrative design — mobilizing 5 campus organizations
                </p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-[14px] inline">DaVinci Resolve Usability Analysis</h3>
                <span className="text-xs ml-2" style={{ color: "var(--ink-soft)" }}>2024</span>
                <p className="text-[13px]" style={{ color: "var(--ink)" }}>
                  Heuristic evaluation of the full user journey — documented 3 critical UX failures with redesign recommendations
                </p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-[14px] inline">Gen Z Brand Authenticity Study</h3>
                <span className="text-xs ml-2" style={{ color: "var(--ink-soft)" }}>2024</span>
                <p className="text-[13px]" style={{ color: "var(--ink)" }}>
                  Surveyed 100 students on TikTok/Instagram rhetoric — found 40% higher retention for brands with specific commitments
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[14px] inline">The Borgen Project</h3>
                <span className="text-xs ml-2" style={{ color: "var(--ink-soft)" }}>2021</span>
                <p className="text-[13px]" style={{ color: "var(--ink)" }}>
                  6 published bylines covering child marriage in Palestine, India's COVID crisis, Colombia's tax reform, and more
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-4">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "3px" }}>Skills</h2>
              <div className="text-[13px] space-y-0.5" style={{ color: "var(--ink)" }}>
                <p><strong>Communication & Research:</strong> Strategic Communications, Persuasive Writing, Public Relations, Rhetorical Analysis, User Research, Heuristic Evaluation, Survey Design</p>
                <p><strong>Content & Operations:</strong> Content Strategy, Social Media, Campaign Design, Editorial Writing, Copywriting, Project Management</p>
                <p><strong>Technology:</strong> Claude AI, Claude Code, ChatGPT, Gemini, Canva AI, GitHub Pages, Microsoft Office, Google Workspace</p>
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hair)", paddingBottom: "3px" }}>Awards & Honors</h2>
              <p className="text-[13px]" style={{ color: "var(--ink)" }}>
                Summa Cum Laude (4.0 GPA) · Sigma Tau Delta International English Honor Society · UIC Honors College · Dean's List (all semesters) · 50% Scholarship, The Second City · Multiple awards for persuasive pitch writing
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
