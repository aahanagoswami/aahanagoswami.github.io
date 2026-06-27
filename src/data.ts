import { Strength, WorkPiece, ExperienceItem } from "./types";

export const STRENGTHS_DATA: Strength[] = [
  {
    id: "ai",
    title: "I turn ideas into products with AI.",
    boldHighlight: "I built this entire portfolio site using Claude Code — no CS degree, no engineer.",
    description: "I define the user need, write a clear spec, and use AI to build it. Claude Code, ChatGPT, Gemini, Canva AI — I go from problem to shipped product. When it gets complex, I collaborate with engineers. The skill isn't coding — it's knowing exactly what to ask for.",
    tag: "AI Product Delivery · Claude Code · Spec Writing",
    iconName: "cpu",
    colorClass: "var(--indigo)"
  },
  {
    id: "writing",
    title: "I make other people's writing better.",
    boldHighlight: "Selected top 10% at UIC Writing Center to coach students one-on-one.",
    description: "I find the weak spot in an argument — the leap in logic, the buried thesis, the wrong audience — and help the writer fix it themselves. That's harder than writing it for them.",
    tag: "Critical Thinking · Coaching · UIC Writing Center",
    iconName: "pen",
    colorClass: "var(--green)"
  },
  {
    id: "research",
    title: "I find what's actually broken.",
    boldHighlight: "Analyzed 10+ products through usability audits and user research.",
    description: "I test products the way real users use them, document where they fail, and recommend what to fix first. No opinions — evidence.",
    tag: "Product Analysis · User Research · UX",
    iconName: "search",
    colorClass: "var(--rose)"
  },
  {
    id: "co-founder",
    title: "I got early startup experience as a teenager.",
    boldHighlight: "Helped Graaphene, an AI-powered care marketplace, with content and operations support.",
    description: "I created social media content, sat in on operational planning sessions, and helped the team think through how to communicate with parents and providers. My first taste of building something from zero.",
    tag: "Content · Startup · Graaphene",
    iconName: "headset",
    colorClass: "var(--blue)"
  },
  {
    id: "social",
    title: "I created content that people actually engaged with.",
    boldHighlight: "Produced social media content across multiple roles — concept, copy, and design.",
    description: "From Graaphene's Instagram to Nao Now's editorial assets, I've created content that connects with real audiences. I think about what works, not just what looks good.",
    tag: "Content Creation · Social Media · Design",
    iconName: "megaphone",
    colorClass: "var(--violet)"
  },
  {
    id: "awards",
    title: "I win when I pitch.",
    boldHighlight: "Multiple awards for persuasive writing and competitive presentations.",
    description: "I build a pitch the way a lawyer builds a case — data first, then narrative, then the ask. It works because the audience trusts the structure before they trust the conclusion.",
    tag: "Persuasion · Pitch · Negotiation",
    iconName: "trophy",
    colorClass: "var(--amber)"
  }
];

export const WORK_DATA: WorkPiece[] = [
  {
    id: "press-release",
    title: "Launched a Campus Accessibility Campaign",
    subtitle: "Challenge: Low awareness of information-design barriers affecting students with visual and physical needs at UIC.",
    description: "I built the full PR strategy for 'Avenues of Access' — wrote the narrative, produced distribution-ready press assets, and coordinated outreach across 5 campus organizations. The student senate redesigned their communications as a result.",
    outcome: "5 organizations activated · Digital assets redesigned · Campus-wide narrative shift",
    image: "/images/work/press-release.jpg",
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
    description: "I tested every step of the user journey — install, onboarding, editing, export — and documented exactly where the product breaks its own promise. Found a hidden 10GB export limit, chronic crash loops, and zero onboarding.",
    outcome: "3 critical failures documented · Full journey mapped · Actionable redesign recommendations",
    image: "/images/work/usability-memo.jpg",
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
    description: "I surveyed 100 students and analyzed rhetoric across TikTok and Instagram to understand how Gen Z tells real brand advocacy from performative posturing. The finding: advocacy-led brands see 40% higher retention, but only when the commitment is specific, not aesthetic.",
    outcome: "100-student survey · 40% retention insight · Strategic framework for brand trust",
    image: "/images/work/journalistic-piece.png",
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
    description: "I investigated how gender discrimination and poverty fuel child marriage in the Gaza Strip — and covered the grassroots men's movement that has prevented 50+ forced marriages.",
    outcome: "Published byline · 65% violence statistic surfaced · 50 marriages prevented",
    image: "/images/work/article-palestine.jpg",
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
    description: "I covered how Indian American communities organized a star-studded virtual fundraiser during India's devastating COVID surge — 500K+ daily cases, only 4.3% vaccinated.",
    outcome: "Published byline · Crisis awareness · Celebrity-driven advocacy spotlight",
    image: "/images/work/article-india.jpg",
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
    description: "I analyzed how a $4 billion tax reform pushed 3 million more Colombians into poverty and triggered nationwide protests — the policy, the opposition, and the human cost.",
    outcome: "Published byline · $4B policy analyzed · 3M poverty impact surfaced",
    image: "/images/work/article-colombia.jpg",
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
    description: "I reported on how political unrest after Zuma's imprisonment led to 200+ ransacked malls and deepened food scarcity — requiring 25,000 troops to restore order.",
    outcome: "Published byline · 200+ malls ransacked · 25K troops deployed",
    image: "/images/work/article-south-africa.jpg",
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
    description: "I covered Spain's landmark 'yes means yes' consent bill — the 5-year fight from the wolfpack case to a law redefining rape with sentences up to 15 years.",
    outcome: "Published byline · Landmark legislation covered · Consent framework analyzed",
    image: "/images/work/article-spain.jpg",
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
    description: "I investigated how 70% of UIC students struggle with tuition — 65% skip textbooks, 20% fail courses as a result. Co-authored a policy proposal for MAP grant expansion.",
    outcome: "Published byline · 70% student struggle documented · Policy solution proposed",
    image: "/images/work/article-tuition.jpg",
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
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "uic-ra",
    role: "Resident Assistant",
    company: "University of Illinois Chicago",
    period: "Feb 2025 – Present",
    logo: "/images/logos/uic.png",
    description: [
      "I run a residential floor — resolving conflicts, enforcing policy, and building a community where students actually talk to each other.",
      "I design monthly programs around practical life skills, not icebreakers. The goal is relationships that outlast the semester."
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
      "Selected top 10% (5 of 57 applicants). I sit with students one-on-one and help them see what's wrong with their argument — then they fix it.",
      "I coach on structure, logic, audience, and revision across every discipline. The skill isn't knowing grammar — it's diagnosing weak thinking."
    ],
    skills: ["Editing", "Critical Thinking", "Coaching", "Pedagogy"],
    type: "work"
  },
  {
    id: "great-lakes",
    role: "Believe in Students · Intern",
    company: "Great Lakes FAST Fund Consortium",
    period: "Aug 2024 – May 2026",
    logo: "/images/logos/greatlakes.png",
    description: [
      "I surveyed 600+ students on the real cost of college, organized events, and pushed for policy change around tuition transparency.",
      "Co-authored 'The Price of Success — Is Paying College Tuition Worth It?' published in UIC Bonfire."
    ],
    skills: ["Research", "Communication", "Event Planning", "Advocacy", "Data Analysis"],
    type: "advocacy"
  },
  {
    id: "graaphene",
    role: "Content & Operations Support",
    company: "Graaphene",
    period: "May 2021 – Sep 2023",
    logo: "/images/logos/graaphene.png",
    description: [
      "Helped an early-stage AI-powered care marketplace as a teenager — creating Instagram content, supporting operational planning, and learning how startups work from the inside.",
      "Created social media posts and helped the team communicate with parents and childcare providers across Cook County. [View content →](https://www.instagram.com/graaphene/)",
      "Helped present the product concept to stakeholders. [Watch product concept →](https://www.youtube.com/watch?v=7NhmULXc5vM)",
      "Supported day-to-day operations and team coordination. [Watch operations work →](https://www.youtube.com/watch?v=5oQ1f3ysAIM)"
    ],
    skills: ["Content Creation", "Social Media", "Operations Support"],
    type: "work"
  },
  {
    id: "nao-now",
    role: "Content Developer · Intern",
    company: "Nao Now",
    period: "Jun 2023 – Aug 2023",
    logo: "/images/logos/naonow.png",
    description: [
      "I wrote and planned content for an ed-tech platform — taking complex ideas and making them clear enough for any audience to act on."
    ],
    skills: ["Content Strategy", "Creative Writing", "Digital Media"],
    type: "work"
  },
  {
    id: "future-founders",
    role: "Summer Intern",
    company: "Future Founders",
    period: "May 2022 – Aug 2022",
    logo: "/images/logos/futurefounders.png",
    description: [
      "I learned how startups actually work — pitching, building teams, writing business plans, and shipping under pressure.",
      "Wrote, directed, recorded, and presented a video project from start to finish. [Watch my video →](https://www.linkedin.com/feed/update/urn:li:activity:6946637752427851776/)"
    ],
    skills: ["Teamwork", "Creative Writing", "Entrepreneurship", "Video Production", "Business Planning"],
    type: "work"
  },
  {
    id: "uic-academic",
    role: "B.A. in Communication & English Literature · Summa Cum Laude",
    company: "University of Illinois Chicago (UIC)",
    period: "Aug 2023 – May 2026",
    logo: "/images/logos/uic.png",
    description: [
      "4.0 GPA. Studied literature, philosophy, critical reasoning, and technical writing.",
      "Sigma Tau Delta, Honors College, Faculty Union, Red Shoes Review Assistant Editor, Writing Center Tutor."
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
      "Won a 50% scholarship. Learned to think on my feet, listen actively, and perform under pressure — skills I use in every presentation."
    ],
    skills: ["Improv", "Communication", "Creative Thinking", "Public Speaking"],
    type: "education"
  },
  {
    id: "niu-writing",
    role: "Creative Writing Day Camp",
    company: "Northern Illinois University",
    period: "Jul 2017",
    logo: "/images/logos/niu.png",
    description: [
      "Wrote stories, poetry, and screenplays. Learned to get past the inner critic and just write."
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
      "Where I first learned to write clearly, argue well, and lead."
    ],
    skills: ["Liberal Arts", "Leadership", "Academic Writing"],
    type: "education"
  }
];
