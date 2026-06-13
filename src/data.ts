import { Strength, WorkPiece, ExperienceItem } from "./types";

export const STRENGTHS_DATA: Strength[] = [
  {
    id: "ai",
    title: "Accelerates every deliverable with AI.",
    boldHighlight: "Leverages Claude, ChatGPT, Gemini, and Canva AI to move faster without sacrificing quality.",
    description: "Embeds AI into research, drafting, and design workflows — turning around high-impact content in hours, not days, while keeping editorial standards razor-sharp.",
    tag: "AI-Powered Workflows · Claude · ChatGPT · Gemini · Canva AI",
    iconName: "cpu",
    colorClass: "var(--indigo)"
  },
  {
    id: "writing",
    title: "Sharpened arguments through structured critique.",
    boldHighlight: "Transformed rough drafts into persuasive, publish-ready work through 1-on-1 coaching.",
    description: "Competitively selected to diagnose weaknesses in logic, structure, and audience fit — equipping writers with critical thinking frameworks that elevated their work permanently.",
    tag: "Critical Thinking & Coaching · UIC Writing Center",
    iconName: "pen",
    colorClass: "var(--green)"
  },
  {
    id: "research",
    title: "Analyzed 10+ products to drive strategic decisions.",
    boldHighlight: "Converted raw user research and accessibility audits into high-confidence recommendations.",
    description: "Broke down complex usability challenges with structured problem-solving — delivering evidence-based insights that directly shaped product roadmaps and service pivots.",
    tag: "Problem Solving & Product Analysis",
    iconName: "search",
    colorClass: "var(--rose)"
  },
  {
    id: "co-founder",
    title: "Built operations from zero at an AI startup.",
    boldHighlight: "Architected onboarding, content strategy, and service playbooks that powered Graaphene's launch.",
    description: "Identified operational gaps, designed scalable workflows, and coordinated across parents, caregivers, and partners — turning a blank slate into a functioning AI-powered care marketplace.",
    tag: "Problem Solving & Operations · Graaphene",
    iconName: "headset",
    colorClass: "var(--blue)"
  },
  {
    id: "social",
    title: "Produced 100+ campaigns from concept to publish.",
    boldHighlight: "Drove measurable brand engagement across Instagram and Facebook with design-led storytelling.",
    description: "Applied design thinking end-to-end — ideating formats, crafting copy, testing visuals, and iterating on performance data to maximize reach and conversion.",
    tag: "Design Thinking & Content Strategy",
    iconName: "megaphone",
    colorClass: "var(--violet)"
  },
  {
    id: "awards",
    title: "Won multiple awards for persuasive pitch writing.",
    boldHighlight: "Delivered competition-winning narratives powered by data, audience insight, and strategic framing.",
    description: "Combined persuasive writing with negotiation instincts and structured argumentation — building pitch decks that consistently outperformed in high-stakes competitive evaluation.",
    tag: "Negotiation & Persuasive Writing",
    iconName: "trophy",
    colorClass: "var(--amber)"
  }
];

export const WORK_DATA: WorkPiece[] = [
  {
    id: "press-release",
    title: "Launched a Campus Accessibility Campaign",
    subtitle: "Challenge: Low awareness of information-design barriers affecting students with visual and physical needs at UIC.",
    description: "Built the full PR strategy for 'Avenues of Access' — crafting the narrative, writing distribution-ready press assets, and coordinating outreach that mobilized 5 campus organizations and redesigned student senate communications.",
    outcome: "5 organizations activated · Digital assets redesigned · Campus-wide narrative shift",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
    url: "https://agosw2.myportfolio.com/press-release",
    category: "pr",
    skillsUsed: ["Stakeholder Alignment", "Narrative Strategy", "AP Style", "Campaign Design"],
    fullContent: `### FOR IMMEDIATE RELEASE

## NEW CAMPUS INITIATIVE DEBUTS: UNIVERSITY OF ILLINOIS CHICAGO EXPANDS STUDENT ACCESSIBILITY WORKFLOWS

**UIC Communication and English student team creates unified campaign to increase information design awareness and student advocacy.**

**CHICAGO, IL — October 24, 2024** — Today, a student-led campaign at the University of Illinois Chicago (UIC) announced the rollout of a comprehensive campus awareness initiative: **'Avenues of Access.'** The project focuses on improving campus navigation and course material information design for students with varied visual and physical needs.

Co-developed by B.A. Communication scholar Aahana Goswami, the initiative leverages contemporary social design, clear narrative building, and focused student-to-student workshops to emphasize why structural accessibility begins with clear communication.

> "We often treat accessibility as a series of physical updates like ramps or automatic doors," says Aahana Goswami, writing consultant and campaign co-lead. "But rhetoric, digital communication, and graphic hierarchy are just as crucial. Accessibility is how we represent information, invite interaction, and ensure no student is left guessing."

### Key Campaign Highlights:

* **Narrative Workshops:** Over 5 key campus organizations participated in creative writing workshops that focus on inclusive, audience-focused, and descriptive text.
* **Digital Asset Redesign:** Upgrades to existing student senate assets, introducing high-contrast typography palettes.
* **Community Outreach:** Aligning with UIC Writing Center tutors to provide student-facing support in document styling advice.

---

### About Aahana Goswami
Aahana Goswami graduated Summa Cum Laude with a B.A. in Communication and English Literature from the University of Illinois Chicago, with background in tutoring at the Writing Center and startup operations. For media inquiries or collaboration, contact: **aasignshere@gmail.com**`
  },
  {
    id: "usability-memo",
    title: "Uncovered 3 Critical UX Failures in DaVinci Resolve",
    subtitle: "Challenge: Blackmagic markets DaVinci Resolve as beginner-friendly, but new users can't complete basic tasks.",
    description: "Ran a full heuristic evaluation across the entire user journey — install, onboarding, editing, and export — systematically documenting where the product breaks its own promise. Identified a hidden 10GB export limit, chronic crash loops, and missing onboarding that blocks adoption.",
    outcome: "3 critical failures documented · Full journey mapped · Actionable redesign recommendations",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    url: "https://agosw2.myportfolio.com/usability-memo",
    category: "research",
    skillsUsed: ["Heuristic Evaluation", "Problem Decomposition", "Technical Writing", "UX Research"],
    fullContent: `# USABILITY MEMO

**FROM:** Aahana Goswami
**SUBJECT:** DaVinci Resolve

---

Created by Blackmagic Design, a manufacturer company that creates advanced video editing technology, DaVinci Resolve is a beginner-friendly high quality video editing software. Known as "Hollywood's most popular solution," this software is pretty easy to understand. That is, if you have a high enough processor that can actually open the software without it crashing every 10 minutes. The unfortunate truth is that if it wasn't for the constant crashing, rendering nightmare, and holding projects hostage, this would be amazing software. Beginners who have competent laptops and computers should be able to use this software with no major issues. Those who don't have copious amounts of storage in their devices should look somewhere else.

---

## Installing DaVinci Resolve

The only way to download DaVinci Resolve is through the Blackmagic Design website. There are two versions of DaVinci Resolve, the free version and the studio version which is $295. For the purposes of this memo, we'll be looking at the DaVinci Resolve free version.

Upon heading to the website, the button to download the free and paid version are easy to find. When clicking on the button labelled, "Free Download Now" and selecting the version that best fits your laptop, the consumer is met with a pop up form that asks for personal information.

You can circumvent giving your actual information by typing random letters into the textbox. Luckily, registering with fake details does not hinder the downloading process or your ability to use this software. Overall, the installation process is straightforward and easy to understand. The real issues come up when you try to open up the software.

---

## Day One On DaVinci Resolve

Trying to open up the free version of DaVinci Resolve is similar to feeding a starving flesh-eating alligator. As soon as it starts to load, you're met with the flash of the software's home screen only for it to shut its jaws and crash.

If you manage to get this software up and running, you'll quickly figure out that there is no tutorial. Instead you're thrust into the editing portion immediately. If you're comfortable with editing videos, this shouldn't be an issue since it's a pretty cut and dry video editor. However, if this is one of your first times editing a video, it's common to get overwhelmed by the sheer amount of information that is on one page at a time.

In total there are **7 pages** that divide up the different components of video editing. These pages are: **media, cut, edit, fusion, color, fairlight, and deliver.** Most of these components can be done in the "Edit" page, so half of these aren't entirely helpful when working on smaller projects. If a user wants a full in-depth look at each of the pages, the DaVinci Resolve website has a section for each component.

This is incredibly helpful as a breakdown of what the possibilities are for each section. There are also many guides on YouTube from professionals who have used DaVinci Resolve. Armed with this information, a new user should be able to start using this software with relative ease, if it wasn't for the excessive technical problems that occur when using this product.

---

## Editing On DaVinci Resolve

One of its redeeming features is the ability to upload large files. For the purposes of this memo, a **13 GB video** was uploaded to the software with ease. But trying to edit it is a whole other problem.

The lag of the video being edited makes it impossible to truly understand the edits that are being made and the amount of time that it takes to edit a 5 minute video, is enough to dissuade people from pursuing editing as a career. To make sure that this wasn't just because of the processor of my laptop, I used a gaming PC, which also resulted in the same kind of lagging video.

Another issue that a person can expect to encounter while editing is that the software has a high chance of forgetting where the files that were uploaded are located. When it does this, DaVinci Resolve will let you know through a **"Media Not Found"** error message that pops up. In order to fix this issue, the user has to manually reorganize their files to make sure that the software knows where these files are located.

Not only is this repetitive and tedious, it also nullifies the act of uploading these clips to the software in the first place. This feels dishonest as the website tries to make clear to new customers that DaVinci Resolve **"is fast to learn and easy for new users, yet powerful for professionals."** There is no introductory portion to teach new users and isn't able to handle large files.

---

## Delivering The Goods With DaVinci Resolve

If clips are not rendered correctly beforehand or the "Media Not Found" error message keeps popping up, then the software will stop the rendering process. DaVinci Resolve has a tendency to take your project hostage since the only way to download the video is to render it through the software itself. A way to combat this is by going through every single clip to render it by itself before rendering it all together again. However, it took around **2-3 days of negotiating** with DaVinci Resolve to give me my video back to properly learn. Needless to say, it took more than a day to simply upload it. But the fun doesn't end there!

Another fun thing about the free version that the makers of DaVinci Resolve don't tell new users, is that this particular version has a **limit of 10 GB.** Anything more, and it will only render the audio. This is a lesson that the user has the pleasure of learning the hard way, as there is absolutely nothing within the software or the website that informs the public of this.

The only way to prevent spending $295 on the paid version of this software was to screen record the video and then upload it. Which worked much better if it wasn't for the perpetual lag that has plagued most of the projects uploaded onto the platform.

---

## Thoughts on DaVinci Resolve

In simple terms, the free version of DaVinci Resolve is not the right video editing software for new directors and writers. In the end, I was able to make a 5 minute video that ended up taking a couple days to even figure out how to upload. A new user will not be able to learn the mechanics of the program without supplemental help from the community that uses DaVinci Resolve. In order to take full advantage of the platform, the user must have a baseline knowledge of editing softwares and film.

If someone does want to try DaVinci Resolve for themselves, continue using the free version rather than paying for the full software. This is because the only major difference between the two platforms is that the paid version includes artificial intelligence (AI). Paying $295 for a service that is already free would not be worth it for beginner editors.

In total, there are **three major issues** that severely impact the relationship between DaVinci Resolve and the people that they're marketing towards:

1. **Constant crashing** of the software
2. **A rendering nightmare**
3. **Kidnaps your projects!**

> Wasting your storage space for this software is not worth it. Rather, any free video editing website such as Canva or Microsoft Clips can provide the same utilities but for free. Not only are websites and apps like these a lot easier to edit with and understand the mechanics, but they don't kidnap your edits just because of rendering.`
  },
  {
    id: "journalistic-piece",
    title: "Decoded How Gen Z Evaluates Brand Authenticity",
    subtitle: "Challenge: Brands invest in social advocacy campaigns but can't tell if Gen Z sees through it.",
    description: "Surveyed 100 students and analyzed rhetoric patterns across TikTok and Instagram to map how Gen Z distinguishes authentic brand advocacy from performative messaging. Found that advocacy-led brands show 40% higher retention — but only when commitments are specific, not aesthetic.",
    outcome: "100-student survey · 40% retention insight · Strategic framework for brand trust",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    url: "https://agosw2.myportfolio.com/journalistic-pieces",
    category: "journalism",
    skillsUsed: ["Primary Research", "Consumer Analysis", "Strategic Framing", "Data Synthesis"],
    fullContent: `# THE DIGITAL LANDSCAPE: RHETORIC, CREATIVE STORYTELLING, AND MODERN CONSUMER CULTURE

*An Investigative Study on Gen Z Consumer Behavior, Social Narratives, and Brand Trust.*

**Prepared by:** Aahana Goswami, Senior Media Scholar  
**Published:** December 2024  

---

### Abstract
Modern digital landscapes have shifted the rules of brand communication. No longer can institutions survive solely on transactional branding. This white paper studies how Gen Z audiences interpret social media rhetoric, identify authentic corporate advocacy, and utilize creative storytelling to rewrite relationships between consumers and modern brands.

### I. Introduction: The Rhetoric of Scroll
We live in an era governed by split-second choices. On platforms like TikTok or Instagram, consumer attention is won or lost within 1.5 seconds. What captures this attention is not standard advertisement, but rather narrative rhetoric. This study identifies how colloquial brand voices are replacing formal prose, creating artificial intimacy with consumer groups.

### II. Gen Z & The 'Authenticity' Heuristic
Gen Z consumers prioritize genuine intent above polished sales copy:
1. **Advocacy as Brand Currency:** Brands that take real stands on community accessibility and user needs show a 40% higher retention rate in this cohort.
2. **The Risk of 'Pride-washing' or 'Clutter-washing':** Our survey of 100 students shows that audiences can easily identify shallow activism, preferring simple, direct commitments over aesthetic campaigns.

---

### III. Creative Journalism & Social Change
As writing consultants and communication specialists, we find that storytelling serves as a direct mirror for student needs. When student startup founders use descriptive, emotional hooks rather than industry jar-speak, user signup increases significantly.

> "Storytelling is not about decorating a product with words; it's about articulating the human necessity underneath." — A. Goswami`
  },
  {
    id: "article-palestine",
    title: "The Fight Against Child Marriage in Palestine",
    subtitle: "The Borgen Project · July 2021",
    description: "Investigated how gender discrimination and poverty fuel child marriage in the Gaza Strip — and the grassroots men's movement that has prevented 50+ forced marriages.",
    outcome: "Published byline · 65% violence statistic surfaced · 50 marriages prevented",
    image: "https://b1332256.smushcdn.com/1332256/wp-content/uploads/Child-Marriage-in-Palestine-1030x773.jpg?lossy=1&strip=1&avif=1",
    url: "https://borgenproject.org/child-marriage-in-palestine/",
    category: "journalism",
    skillsUsed: ["Policy Research", "Humanitarian Reporting", "Persuasive Storytelling"],
    fullContent: `# The Fight Against Child Marriage in Palestine
*The Borgen Project · July 7, 2021*

In 2014, the State of Palestine ratified the Convention on the Elimination of All Forms of Discrimination Against Women and the Convention on the Rights of the Child. These treaties aim to protect children from child marriage in Palestine. However, child marriage is still a threat to children due to gender discrimination and economic struggle.

### The Main Causes
Gender discrimination is among the causes of child marriage in Palestine. Children living in the Gaza Strip and West Bank, especially girls and women, suffer gender-based violence throughout their communities and even in their families. In 2015, the Women's Affairs Center (WAC) reported that **"65% of women married before 18 experienced at least one act of violence in the Gaza Strip."** Political instability has led to widespread poverty with more than half of families living below the poverty line.

### The Men Who Stand Against It
Freeh Abu T'ema is one of the first 20 ambassadors of change working to persuade their community to stop early marriages. These men had undergone training from the Future Brilliant Society as part of the U.N. Women's Regional Men and Women Gender Equality Programme. The group expanded to more than 30 men and prevented **50 marriages and counting.**`
  },
  {
    id: "article-india",
    title: "Vax India Now: Fighting the COVID-19 Crisis in India",
    subtitle: "The Borgen Project · July 2021",
    description: "Covered how Indian American communities organized a star-studded virtual fundraiser to address India's devastating COVID surge — 500K+ daily cases, 4.3% vaccinated.",
    outcome: "Published byline · Crisis awareness · Celebrity-driven advocacy spotlight",
    image: "https://b1332256.smushcdn.com/1332256/wp-content/uploads/Celebrities-Fight-Against-the-COVID-19-Crisis-in-India.jpg?lossy=1&strip=1&avif=1",
    url: "https://borgenproject.org/covid-19-crisis-in-india/",
    category: "journalism",
    skillsUsed: ["Deadline Journalism", "Crisis Reporting", "Research Synthesis"],
    fullContent: `# Vax India Now: Fighting Against the COVID-19 Crisis in India
*The Borgen Project · July 12, 2021*

During April 2021, COVID-19 cases and deaths started to rise exponentially in India — more than 500,000 cases and 300,000 deaths. Hospitals were overwhelmed with a lack of supplies, space and staff, and only about 4.3% of India was vaccinated.

A new variant called B.1.617, also known as "the double mutant," targets everyone, including the younger population. Facing panic in the country, Indian American actor **Anuradha Palakurthi** decided to bring people together through the power of music and donations.

Vax India Now hosted a virtual event on July 7, 2021 featuring Gloria Estefan, Alan Walker, Josh Groban, Anil Kapoor, Hasan Minhaj and more — shedding a spotlight on the crisis and informing viewers on how they can help save lives.`
  },
  {
    id: "article-colombia",
    title: "Colombia's New Tax Plan Sparks Protests",
    subtitle: "The Borgen Project · September 2021",
    description: "Analyzed how a $4 billion tax reform pushed 3 million more Colombians into poverty and triggered nationwide protests — examining the policy, the opposition, and the human cost.",
    outcome: "Published byline · $4B policy analyzed · 3M poverty impact surfaced",
    image: "https://b1332256.smushcdn.com/1332256/wp-content/uploads/Colombia-Tax-Plan-1030x859.jpg?lossy=1&strip=1&avif=1",
    url: "https://borgenproject.org/colombias-new-tax-plan/",
    category: "journalism",
    skillsUsed: ["Policy Analysis", "Economic Research", "Narrative Framing"],
    fullContent: `# Colombia's New Tax Plan Sparks Protests
*The Borgen Project · September 27, 2021*

On July 6, 2021, Colombia's Independence Day, President Ivan Duque presented a new $4 billion tax plan aimed at helping pay for social programs and pandemic-related expenses. Thousands marched through Colombia's main cities in protest.

The new reform places a higher tax burden on company earnings, discarding the previous $6.3 billion package that would have imposed taxes on basic items from coffee to salt. In 2020, the economy contracted 7% and pushed an additional **3 million people into poverty.**

> Duque told legislators the "social investment law, which we will build between all of us, is the largest jump in human development in recent decades."

Francisco Maltes, president of the Central Union of Workers, leads demonstrations and plans to present congress with 10 proposals on addressing Colombia's social and economic crisis.`
  },
  {
    id: "article-south-africa",
    title: "Riots in South Africa Increase Food Insecurity",
    subtitle: "The Borgen Project · July 2021",
    description: "Reported on how political unrest following Zuma's imprisonment ransacked 200+ malls and deepened food scarcity — requiring 25,000 troops to restore order.",
    outcome: "Published byline · 200+ malls ransacked · 25K troops deployed",
    image: "https://b1332256.smushcdn.com/1332256/wp-content/uploads/riots-in-South-Africa-1-300x160.jpg?lossy=1&strip=1&avif=1",
    url: "https://borgenproject.org/riots-in-south-africa/",
    category: "journalism",
    skillsUsed: ["Crisis Analysis", "Data-Driven Reporting", "Geopolitical Research"],
    fullContent: `# Riots in South Africa Increase Food Insecurity
*The Borgen Project · July 30, 2021*

When former president Jacob Zuma started serving a 15-month sentence for contempt of court, supporters in his home province of KwaZulu-Natal erupted. Rioters blocked major highways and burned about 20 trucks, resulting in the closing of two major roads linking Indian Ocean ports to the industrial hub of Johannesburg.

Looters ransacked more than **200 shopping malls.** For people living in poverty in Durban and surrounding towns, food was always scarce — but now even more so. Professor Mcebisi Ndletyana noted that communities have left people in poverty to fend for themselves in a system that keeps them in poverty, causing them to start lashing out. **25,000 army troops** were eventually deployed to end the violence.`
  },
  {
    id: "article-spain",
    title: "New Efforts in Fighting Sexual Violence in Spain",
    subtitle: "The Borgen Project · July 2021",
    description: "Covered Spain's landmark 'yes means yes' consent bill — tracing the 5-year legislative fight from the wolfpack case to a law redefining rape with sentences up to 15 years.",
    outcome: "Published byline · Landmark legislation covered · Consent framework analyzed",
    image: "https://b1332256.smushcdn.com/1332256/wp-content/uploads/SEXUAL-VIOLENCE-IN-SPAIN-e1628679771232.jpg?lossy=1&strip=1&avif=1",
    url: "https://borgenproject.org/sexual-violence-in-spain/",
    category: "journalism",
    skillsUsed: ["Legislative Analysis", "Human Rights Reporting", "Persuasive Writing"],
    fullContent: `# New Efforts in Fighting Sexual Violence in Spain
*The Borgen Project · July 1, 2021*

After five years of pushback, in May 2021 Spain finally approved a bill defining all non-consensual sexual acts as rape. The legislation came after the notorious "wolfpack" case, when five men gang-raped a woman and were initially charged with sexual abuse — not rape — because Spanish law required evidence of physical violence or intimidation.

The bill is based on the **"yes means yes"** model of sexual consent. Under the new legislation, stalking, street harassment and genital mutilation also become crimes, with gang rape carrying prison sentences as high as **15 years.**

> Maria Jesus Montero, spokesperson for the Spanish government, stated that the new law places "the victim at the center of the public response." Most importantly, she stressed that **passivity and silence do not equal consent.**`
  },
  {
    id: "article-tuition",
    title: "The Price of Success: Is Paying College Tuition Worth It?",
    subtitle: "UIC Bonfire · November 2024 · Co-authored with Gaby Perez",
    description: "Investigated how 70% of UIC students struggle with tuition costs, with 65% skipping textbooks and 20% failing courses as a result — proposing MAP grant expansion as a solution.",
    outcome: "Published byline · 70% student struggle documented · Policy solution proposed",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=800&q=80",
    url: "https://bonfire.digital.uic.edu/opinion/the-price-of-success-is-paying-college-tuition-worth-it/",
    category: "journalism",
    skillsUsed: ["Investigative Reporting", "Student Advocacy", "Data Analysis"],
    fullContent: `# The Price of Success: Is Paying College Tuition Worth It?
*UIC Bonfire · November 5, 2024 · Co-authored with Gaby Perez*

Around **65 percent** of college students have skipped buying textbooks due to expense, with approximately 20 percent subsequently failing courses. At UIC specifically, **70% of students** struggle with tuition and other costs, describing it as a constant stressor. 81 percent of UIC students work between 4 and 35 hours weekly, leaving inadequate time for academics or wellbeing.

The article proposes expanding Illinois's Monetary Award Program grants — need-based funds that currently support tuition and mandatory fees for low-income students but require expansion to address housing and textbook costs.

> "Why do I have to pay for everything?"

The authors conclude by urging student participation in electoral processes as the primary mechanism for demanding educational affordability and systemic change.`
  },
  {
    id: "resume",
    title: "Full Résumé — Experience, Skills & Honors",
    subtitle: "Summa Cum Laude · 4.0 GPA · Writing Center · Graaphene · Dean's List",
    description: "Summa Cum Laude graduate in Communication and English Literature, with startup operations experience, competitive writing awards, and a track record of turning ambiguity into structured outcomes.",
    outcome: "Summa Cum Laude · 4.0 GPA · Multiple awards · 2 professional roles",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    url: "https://agosw2.myportfolio.com/resume",
    category: "all",
    skillsUsed: ["Strategic Communication", "Operations Design", "Leadership", "AI Tools"],
    fullContent: `# AAHANA GOSWAMI
Chicago, IL · aasignshere@gmail.com · [LinkedIn Profile](https://www.linkedin.com/in/aahana-goswami)

---

### PROFESSIONAL PROFILE
Summa Cum Laude graduate in Communication and English Literature from the University of Illinois Chicago. Proven capability in startup operations, writing program support, social media content, and community-facing advocacy.

---

### KEY EXPERIENCES

#### Writing Consultant 
**University of Illinois Chicago Writing Center (2023 - 2025)**
* Conducted detailed, peer-to-peer consultations with diverse student groups, editing for structural flow, academic clarity, and audience focus.
* Led campus outreach workshops designed to simplify complex essay prompts for multi-lingual and international student scholars.

#### Content, Media & Operations Support
**Graaphene — AI Powered Care Marketplace (2024 - 2025)**
* Managed client onboarding, operational guidelines, and scheduling protocols for localized child caretakers in the Cook County area.
* Spearheaded content generation to build trust across digital consumer networks, developing operational playbooks used by the care marketplace.

---

### EDUCATION & HONORS
* **B.A. in Communication and English Literature, Summa Cum Laude** — University of Illinois Chicago (UIC), GPA: 4.0/4.0.
* Honors: Summa Cum Laude, competitive pitch competition champion, Dean's List, accessibility advocate team leader.`
  },
  {
    id: "full-portfolio",
    title: "Explore the Complete Portfolio",
    subtitle: "Additional writing samples, creative campaigns, and project archives.",
    description: "A curated collection of work spanning PR, content strategy, research, and creative storytelling — built to demonstrate range, rigor, and the ability to deliver across formats and audiences.",
    outcome: "Full archive · Multiple formats · End-to-end project ownership",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80",
    url: "https://agosw2.myportfolio.com/about-2",
    category: "all",
    skillsUsed: ["Creative Direction", "Information Architecture", "Cross-Format Writing"],
    fullContent: `# WELCOME TO THE INTEGRATED PORTFOLIO WORKSPACE OF AAHANA GOSWAMI

My research and creative workflows center on one core mandate: **simplify communication and heighten connection.**

Inside this custom database, you will find writing assets created to build real relationships. Rather than hosting an external site, this setup allows you to read my primary compositions directly. I welcome all inquiries regarding PR placements, corporate communication consulting, and design writing assignments:

---

### Key Information:
* **Direct Email Inbox:** aasignshere@gmail.com
* **UIC Office Address:** University Hall m/c 152, Chicago, IL 60607
* **Primary Skillsets:** Public Relations writing, AP style guide standards, Heuristic UX assessments, startup planning.

*Thank you for exploring my connected work. Let's make an impact together.*`
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "uic-ra",
    role: "Resident Assistant",
    company: "University of Illinois Chicago",
    period: "Feb 2025 – Present",
    logo: "/images/logos/uic.png",
    description: [
      "Coordinate monthly community engagement initiatives based on real-life skills development — implementing targeted strategies including one-on-one conversations and relationship building.",
      "Manage a residential floor of students, resolving conflicts, enforcing policies, and fostering an inclusive living environment."
    ],
    skills: ["People Management", "Leadership", "Conflict Resolution", "Community Building"],
    type: "work"
  },
  {
    id: "uic-writing",
    role: "Writing Consultant",
    company: "University of Illinois Chicago (UIC) Writing Center",
    period: "Jan 2025 – May 2026",
    logo: "/images/logos/uic.png",
    description: [
      "Selected through a competitive application process (top 10% — 5 of 57 applicants) to deliver one-on-one writing consultations to a diverse student population.",
      "Coach students on structural clarity, argumentation, audience analysis, and revision strategies across academic disciplines."
    ],
    skills: ["Editing", "People Management", "Critical Thinking", "Coaching", "Pedagogy"],
    type: "work"
  },
  {
    id: "great-lakes",
    role: "Believe in Students · Intern",
    company: "Great Lakes FAST Fund Consortium",
    period: "Aug 2024 – May 2026",
    logo: "/images/logos/greatlakes.png",
    description: [
      "Collaborated with a student fellow to champion full transparency within the cost of college education — event planning, surveying 600+ students, and advocating for policy change.",
      "Co-authored and published 'The Price of Success — Is Paying College Tuition Worth It?' in UIC Bonfire."
    ],
    skills: ["Research Skills", "Communication", "Event Planning", "Advocacy", "Data Analysis"],
    type: "advocacy"
  },
  {
    id: "graaphene",
    role: "Content Media & Operations Support",
    company: "Graaphene",
    period: "May 2021 – Sep 2023",
    logo: "",
    description: [
      "Built operations, user engagement processes, and service delivery from the ground up for a backup childcare startup serving working parents — alongside one other co-founder.",
      "Created operational playbooks, matching protocols, and SLAs between parents and certified childcare providers across Cook County."
    ],
    skills: ["Creative Writing", "Communication", "Operations", "Business Development", "Social Media", "Content Strategy"],
    type: "work"
  },
  {
    id: "nao-now",
    role: "Content Developer · Intern",
    company: "Nao Now",
    period: "Jun 2023 – Aug 2023",
    logo: "/images/logos/naonow.png",
    description: [
      "Developed content strategy and produced editorial assets for a digital platform, translating complex ideas into engaging, audience-focused narratives."
    ],
    skills: ["Content Development", "Creative Writing", "Digital Media"],
    type: "work"
  },
  {
    id: "future-founders",
    role: "Summer Intern",
    company: "Future Founders",
    period: "May 2022 – Aug 2022",
    logo: "/images/logos/futurefounders.svg",
    description: [
      "Participated in an entrepreneurship-focused internship program, developing teamwork, creative writing, and business development skills in a startup ecosystem."
    ],
    skills: ["Teamwork", "Creative Writing", "Entrepreneurship", "Business Planning"],
    type: "work"
  },
  {
    id: "uic-academic",
    role: "B.A. in Communication & English Literature · Summa Cum Laude",
    company: "University of Illinois Chicago (UIC)",
    period: "Aug 2023 – May 2026",
    logo: "/images/logos/uic.png",
    description: [
      "Summa Cum Laude · GPA: 4.0/4.0. Coursework in Literature, Philosophy, Critical Reasoning, and Technical Writing.",
      "Activities: Sigma Tau Delta, UIC Honors College, Faculty Union, Red Shoes Review Assistant Editor, UIC Writing Center Tutor."
    ],
    skills: ["Strategic Communications", "Rhetorical Analysis", "Critical Reasoning", "Philosophy"],
    type: "education"
  },
  {
    id: "second-city",
    role: "Improvisation & Stand-up Comedy · 50% Scholarship",
    company: "The Second City",
    period: "May 2017 – Jun 2017",
    logo: "/images/logos/secondcity.png",
    description: [
      "Won 50% scholarship to attend summer camp. Developed creative thinking, active listening, brainstorming, and performance confidence through improv and stand-up."
    ],
    skills: ["Improv Comedy", "Communication", "Creative Thinking", "Public Speaking"],
    type: "education"
  },
  {
    id: "niu-writing",
    role: "Creative Writing Day Camp",
    company: "Northern Illinois University",
    period: "Jul 2017",
    logo: "/images/logos/niu.png",
    description: [
      "Sharpened foundational skills in writing stories, poetry, and screenplays — learning to overcome emotional filters that block creative inspiration."
    ],
    skills: ["Creative Writing", "Storytelling", "Poetry"],
    type: "education"
  },
  {
    id: "conant",
    role: "High School Diploma · Liberal Arts & Sciences",
    company: "James B. Conant High School",
    period: "2018 – 2023",
    logo: "/images/logos/conant.png",
    description: [
      "Foundation in liberal arts and sciences with emphasis on analytical writing, communication, and leadership."
    ],
    skills: ["Liberal Arts", "Leadership", "Academic Writing"],
    type: "education"
  }
];
