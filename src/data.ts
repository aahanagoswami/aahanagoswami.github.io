import { Strength, WorkPiece, ExperienceItem } from "./types";

export const STRENGTHS_DATA: Strength[] = [
  {
    id: "co-founder",
    title: "Founding member of Graaphene.",
    boldHighlight: "Built operations, content, and media for an AI-powered care marketplace.",
    description: "Designed user-engagement processes and coordinated with parents, caregivers, and partners to resolve issues and improve program effectiveness.",
    tag: "Content, Media & Operations Support · Graaphene",
    iconName: "headset",
    colorClass: "var(--blue)"
  },
  {
    id: "writing",
    title: "Refined every word.",
    boldHighlight: "Delivered individualized writing consultations.",
    description: "Selected through a competitive process to edit for clarity, structure, and audience — and to build clients' analytical thinking and revision strategies.",
    tag: "Writing Consultant · UIC Writing Center",
    iconName: "pen",
    colorClass: "var(--green)"
  },
  {
    id: "social",
    title: "Created 100+ posts.",
    boldHighlight: "Grew presence across Instagram and Facebook.",
    description: "Produced social content end to end — concept, copy, and publishing — to build engagement and brand voice.",
    tag: "Content & Social",
    iconName: "megaphone",
    colorClass: "var(--violet)"
  },
  {
    id: "awards",
    title: "Won 3 awards.",
    boldHighlight: "Recognized for competitive pitch writing.",
    description: "Authored pitch materials for competitions and earned multiple awards for persuasive, audience-driven storytelling.",
    tag: "Pitch & Persuasive Writing",
    iconName: "trophy",
    colorClass: "var(--amber)"
  },
  {
    id: "research",
    title: "Researched 10+ products.",
    boldHighlight: "Turned insight into recommendations.",
    description: "Studied accessibility challenges and user needs, synthesizing findings into recommendations that informed product and service decisions.",
    tag: "Market & User Research",
    iconName: "search",
    colorClass: "var(--rose)"
  },
  {
    id: "ai",
    title: "Works fluently with AI.",
    boldHighlight: "Uses modern tools to move faster.",
    description: "Applies AI tools to accelerate research, drafting, and content workflows — pairing them with strong editorial judgment.",
    tag: "AI-Assisted Workflows",
    iconName: "cpu",
    colorClass: "var(--indigo)"
  }
];

export const WORK_DATA: WorkPiece[] = [
  {
    id: "press-release",
    title: "Press Release",
    subtitle: "Public relations writing",
    description: "A professional, distribution-ready press release structured for media pickup, featuring impactful headlines and a strong narrative.",
    url: "https://agosw2.myportfolio.com/press-release",
    category: "pr",
    skillsUsed: ["Media Pitching", "AP Style", "Corporate Comms"],
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
Aahana Goswami is a senior B.A. Communication scholar with an English Minor at the University of Illinois Chicago, with background in tutoring at the Writing Center and startup operations. For media inquiries or collaboration, contact: **aasignshere@gmail.com**`
  },
  {
    id: "usability-memo",
    title: "Usability Memo",
    subtitle: "DaVinci Resolve — Product usability evaluation",
    description: "A hands-on usability evaluation of DaVinci Resolve's free video editing software, identifying critical UX friction points, rendering issues, and beginner accessibility gaps.",
    url: "https://agosw2.myportfolio.com/usability-memo",
    category: "research",
    skillsUsed: ["UX Research", "Heuristic Evaluation", "Technical Writing", "Product Analysis"],
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
    title: "Mini White Paper",
    subtitle: "Analytical long-form writing",
    description: "A deeply-researched investigative white paper exploring societal behavior, accessibility issues, and digital media trends.",
    url: "https://agosw2.myportfolio.com/journalistic-pieces",
    category: "journalism",
    skillsUsed: ["Primary Research", "Policy Analysis", "Structural Editing"],
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
    id: "published-pieces",
    title: "Published Pieces",
    subtitle: "Bylined articles — The Borgen Project & UIC Bonfire",
    description: "Six published articles covering global humanitarian issues, policy analysis, and student advocacy — bylined in The Borgen Project and UIC's Bonfire digital publication.",
    url: "https://agosw2.myportfolio.com/published-pieces",
    category: "all",
    skillsUsed: ["Feature Writing", "Policy Analysis", "Deadline Journalism", "Primary Research"],
    fullContent: `# PUBLISHED ARTICLES BY AAHANA GOSWAMI

*Bylined features published in [The Borgen Project](https://borgenproject.org) and [UIC Bonfire](https://bonfire.digital.uic.edu) covering global humanitarian crises, policy reform, and student advocacy.*

---

## 1. The Fight Against Child Marriage in Palestine
*The Borgen Project · July 7, 2021*

In 2014, the State of Palestine ratified the Convention on the Elimination of All Forms of Discrimination Against Women and the Convention on the Rights of the Child. These treaties aim to protect children from child marriage in Palestine. However, child marriage is still a threat to children due to gender discrimination and economic struggle.

### The Main Causes
Gender discrimination is among the causes of child marriage in Palestine. Children living in the Gaza Strip and West Bank, especially girls and women, suffer gender-based violence throughout their communities and even in their families. In 2015, the Women's Affairs Center (WAC) reported that **"65% of women married before 18 experienced at least one act of violence in the Gaza Strip."** Political instability has led to widespread poverty with more than half of families living below the poverty line.

### The Men Who Stand Against It
Freeh Abu T'ema is one of the first 20 ambassadors of change working to persuade their community to stop early marriages. These men had undergone training from the Future Brilliant Society as part of the U.N. Women's Regional Men and Women Gender Equality Programme. The group expanded to more than 30 men and prevented **50 marriages and counting.**

---

## 2. Vax India Now: Fighting Against the COVID-19 Crisis in India
*The Borgen Project · July 12, 2021*

During April 2021, COVID-19 cases and deaths started to rise exponentially in India — more than 500,000 cases and 300,000 deaths. Hospitals were overwhelmed with a lack of supplies, space and staff, and only about 4.3% of India was vaccinated.

A new variant called B.1.617, also known as "the double mutant," targets everyone, including the younger population. Facing panic in the country, Indian American actor **Anuradha Palakurthi** decided to bring people together through the power of music and donations.

Vax India Now hosted a virtual event on July 7, 2021 featuring Gloria Estefan, Alan Walker, Josh Groban, Anil Kapoor, Hasan Minhaj and more — shedding a spotlight on the crisis and informing viewers on how they can help save lives.

---

## 3. Colombia's New Tax Plan Sparks Protests
*The Borgen Project · September 27, 2021*

On July 6, 2021, Colombia's Independence Day, President Ivan Duque presented a new $4 billion tax plan aimed at helping pay for social programs and pandemic-related expenses. Thousands marched through Colombia's main cities in protest.

The new reform places a higher tax burden on company earnings, discarding the previous $6.3 billion package that would have imposed taxes on basic items from coffee to salt. In 2020, the economy contracted 7% and pushed an additional **3 million people into poverty.**

> Duque told legislators the "social investment law, which we will build between all of us, is the largest jump in human development in recent decades."

Francisco Maltes, president of the Central Union of Workers, leads demonstrations and plans to present congress with 10 proposals on addressing Colombia's social and economic crisis.

---

## 4. Riots in South Africa Increase Food Insecurity
*The Borgen Project · July 30, 2021*

When former president Jacob Zuma started serving a 15-month sentence for contempt of court, supporters in his home province of KwaZulu-Natal erupted. Rioters blocked major highways and burned about 20 trucks, resulting in the closing of two major roads linking Indian Ocean ports to the industrial hub of Johannesburg.

Looters ransacked more than **200 shopping malls.** For people living in poverty in Durban and surrounding towns, food was always scarce — but now even more so. Professor Mcebisi Ndletyana noted that communities have left people in poverty to fend for themselves in a system that keeps them in poverty, causing them to start lashing out. **25,000 army troops** were eventually deployed to end the violence.

---

## 5. New Efforts in Fighting Sexual Violence in Spain
*The Borgen Project · July 1, 2021*

After five years of pushback, in May 2021 Spain finally approved a bill defining all non-consensual sexual acts as rape. The legislation came after the notorious "wolfpack" case, when five men gang-raped a woman and were initially charged with sexual abuse — not rape — because Spanish law required evidence of physical violence or intimidation.

The bill is based on the **"yes means yes"** model of sexual consent. Under the new legislation, stalking, street harassment and genital mutilation also become crimes, with gang rape carrying prison sentences as high as **15 years.**

> Maria Jesus Montero, spokesperson for the Spanish government, stated that the new law places "the victim at the center of the public response." Most importantly, she stressed that **passivity and silence do not equal consent.**

---

## 6. The Price of Success: Is Paying College Tuition Worth It?
*UIC Bonfire · November 5, 2024 · Co-authored with Gaby Perez*

Around **65 percent** of college students have skipped buying textbooks due to expense, with approximately 20 percent subsequently failing courses. At UIC specifically, **70% of students** struggle with tuition and other costs, describing it as a constant stressor. 81 percent of UIC students work between 4 and 35 hours weekly, leaving inadequate time for academics or wellbeing.

The article proposes expanding Illinois's Monetary Award Program grants — need-based funds that currently support tuition and mandatory fees for low-income students but require expansion to address housing and textbook costs.

> "Why do I have to pay for everything?"

The authors conclude by urging student participation in electoral processes as the primary mechanism for demanding educational affordability and systemic change.`
  },
  {
    id: "resume",
    title: "Résumé",
    subtitle: "Full background & skills",
    description: "Detailed professional experience, certifications, leadership roles, and academic achievements at UIC.",
    url: "https://agosw2.myportfolio.com/resume",
    category: "all",
    skillsUsed: ["Strategic Comms", "Team Leadership", "Operations Management"],
    fullContent: `# AAHANA GOSWAMI
Chicago, IL · aasignshere@gmail.com · [LinkedIn Profile](https://www.linkedin.com/in/aahana-goswami)

---

### PROFESSIONAL PROFILE
Diligent, strategic, and creative senior Communication scholar and English Minor at the University of Illinois Chicago. Possesses proven capability in startup operations, writing program support, social media content, and community-facing advocacy.

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
* **B.A. in Communication, Minor in English** — University of Illinois Chicago (UIC), GPA: 3.8/4.0.
* Honors: Competitve pitch competition champion, Dean's List student, accessibility advocate team leader.`
  },
  {
    id: "full-portfolio",
    title: "Full Portfolio",
    subtitle: "agosw2.myportfolio.com",
    description: "Access my complete interactive portfolio housing additional writing samples, projects, and creative campaigns.",
    url: "https://agosw2.myportfolio.com/about-2",
    category: "all",
    skillsUsed: ["Creative Direction", "Information Architecture", "UX Copywriting"],
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
    id: "uic-advisor",
    role: "Writing Consultant",
    company: "University of Illinois Chicago Writing Center",
    period: "2023 - 2025",
    description: [
      "Guided diverse student writers through structured editing strategies, enhancing overall thesis articulation, document organization, and stylistic clarity.",
      "Collaborated with faculty to host targeted workshops on analytical writing, user focus, and AP style compliance."
    ],
    skills: ["Editing", "Pedagogy", "Audience Analysis", "Coaching"],
    type: "work"
  },
  {
    id: "graaphene",
    role: "Content, Media & Operations Support",
    company: "Graaphene — AI Powered Care Marketplace",
    period: "2024 - 2025",
    description: [
      "Created operational playbooks, matching protocols, and service level agreements between parents and certified childcare providers.",
      "Headed digital marketing campaigns across social media channels, gaining traction and engagement among initial customer circles."
    ],
    skills: ["Business Development", "Customer Journey", "Social Media Copywriting"],
    type: "work"
  },
  {
    id: "uic-academic",
    role: "Bachelor of Arts in Communication / English Minor",
    company: "University of Illinois Chicago (UIC)",
    period: "Class of 2025 - Graduate",
    description: [
      "GPA: 3.8/4.0. Completed advanced coursework in Persuasive Writing, Rhetorical Theory, Technical Documentation, and Social Media Marketing.",
      "Recipient of competitive pitch writing and oral presentation awards, focusing of accessibility advocacy on campus."
    ],
    skills: ["Strategic Communications", "User Research", "Media Studies"],
    type: "education"
  }
];
