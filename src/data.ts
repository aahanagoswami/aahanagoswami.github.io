import { Strength, WorkPiece, ExperienceItem } from "./types";

export const STRENGTHS_DATA: Strength[] = [
  {
    id: "ai",
    title: "I turn ideas into products with AI.",
    boldHighlight: "I built this entire portfolio site using Claude Code, no CS degree, no engineer.",
    description: "I define the user need, write a clear spec, and use AI to build it. Claude Code, ChatGPT, Gemini, Canva AI: I go from problem to shipped product. When it gets complex, I collaborate with engineers. The skill isn't coding, it's knowing exactly what to ask for.",
    tag: "AI Product Delivery · Claude Code · Spec Writing",
    iconName: "cpu",
    colorClass: "var(--indigo)"
  },
  {
    id: "writing",
    title: "I make other people's writing better.",
    boldHighlight: "Selected top 10% at UIC Writing Center to coach students one-on-one.",
    description: "I find the weak spot in an argument (the leap in logic, the buried thesis, the wrong audience) and help the writer fix it themselves. That's harder than writing it for them.",
    tag: "Critical Thinking · Coaching · UIC Writing Center",
    iconName: "pen",
    colorClass: "var(--green)"
  },
  {
    id: "research",
    title: "I find what's actually broken.",
    boldHighlight: "Analyzed 10+ products through usability audits and user research.",
    description: "I test products the way real users use them, document where they fail, and recommend what to fix first. No opinions. Evidence.",
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
    boldHighlight: "Produced social media content across multiple roles: concept, copy, and design.",
    description: "From Graaphene's Instagram to Nao Now's editorial assets, I've created content that connects with real audiences. I think about what works, not just what looks good.",
    tag: "Content Creation · Social Media · Design",
    iconName: "megaphone",
    colorClass: "var(--violet)"
  },
  {
    id: "awards",
    title: "I win when I pitch.",
    boldHighlight: "Multiple awards for persuasive writing and competitive presentations.",
    description: "I build a pitch the way a lawyer builds a case: data first, then narrative, then the ask. It works because the audience trusts the structure before they trust the conclusion.",
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
    description: "I built the full PR strategy for 'Avenues of Access': wrote the narrative, produced distribution-ready press assets, and coordinated outreach across 5 campus organizations. The student senate redesigned their communications as a result.",
    outcome: "5 organizations activated · Digital assets redesigned · Campus-wide narrative shift",
    image: "/images/work/press-release.jpg",
    url: "https://agosw2.myportfolio.com/press-release",
    category: "pr",
    skillsUsed: ["Stakeholder Alignment", "Narrative Strategy", "AP Style", "Campaign Design"],
    fullContent: `### FOR IMMEDIATE RELEASE

## NEW CAMPUS INITIATIVE DEBUTS: UNIVERSITY OF ILLINOIS CHICAGO EXPANDS STUDENT ACCESSIBILITY WORKFLOWS

**UIC Communication and English student team creates unified campaign to increase information design awareness and student advocacy.**

**CHICAGO, IL, October 24, 2024.** Today, a student-led campaign at the University of Illinois Chicago (UIC) announced the rollout of a comprehensive campus awareness initiative: **'Avenues of Access.'** The project focuses on improving campus navigation and course material information design for students with varied visual and physical needs.

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
    description: "I tested every step of the user journey (install, onboarding, editing, export) and documented exactly where the product breaks its own promise. Found a hidden 10GB export limit, chronic crash loops, and zero onboarding.",
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

> "Storytelling is not about decorating a product with words; it's about articulating the human necessity underneath." (A. Goswami)`
  },
  {
    id: "article-palestine",
    title: "The Fight Against Child Marriage in Palestine",
    subtitle: "The Borgen Project · July 2021",
    description: "I investigated how gender discrimination and poverty fuel child marriage in the Gaza Strip, and covered the grassroots men's movement that has prevented 50+ forced marriages.",
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
    description: "I covered how Indian American communities organized a star-studded virtual fundraiser during India's devastating COVID surge: 500K+ daily cases, only 4.3% vaccinated.",
    outcome: "Published byline · Crisis awareness · Celebrity-driven advocacy spotlight",
    image: "/images/work/article-india.jpg",
    url: "https://borgenproject.org/covid-19-crisis-in-india/",
    category: "journalism",
    skillsUsed: ["Deadline Journalism", "Crisis Reporting", "Research Synthesis"],
    fullContent: `# Vax India Now: Fighting Against the COVID-19 Crisis in India
*The Borgen Project · July 12, 2021*

During April 2021, COVID-19 cases and deaths started to rise exponentially in India: more than 500,000 cases and 300,000 deaths. Hospitals were overwhelmed with a lack of supplies, space and staff, and only about 4.3% of India was vaccinated.

A new variant called B.1.617, also known as "the double mutant," targets everyone, including the younger population. Facing panic in the country, Indian American actor **Anuradha Palakurthi** decided to bring people together through the power of music and donations.

Vax India Now hosted a virtual event on July 7, 2021 featuring Gloria Estefan, Alan Walker, Josh Groban, Anil Kapoor, Hasan Minhaj and more, shedding a spotlight on the crisis and informing viewers on how they can help save lives.`
  },
  {
    id: "article-colombia",
    title: "Colombia's New Tax Plan Sparks Protests",
    subtitle: "The Borgen Project · September 2021",
    description: "I analyzed how a $4 billion tax reform pushed 3 million more Colombians into poverty and triggered nationwide protests: the policy, the opposition, and the human cost.",
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
    description: "I reported on how political unrest after Zuma's imprisonment led to 200+ ransacked malls and deepened food scarcity, requiring 25,000 troops to restore order.",
    outcome: "Published byline · 200+ malls ransacked · 25K troops deployed",
    image: "/images/work/article-south-africa.jpg",
    url: "https://borgenproject.org/riots-in-south-africa/",
    category: "journalism",
    skillsUsed: ["Crisis Analysis", "Data-Driven Reporting", "Geopolitical Research"],
    fullContent: `# Riots in South Africa Increase Food Insecurity
*The Borgen Project · July 30, 2021*

When former president Jacob Zuma started serving a 15-month sentence for contempt of court, supporters in his home province of KwaZulu-Natal erupted. Rioters blocked major highways and burned about 20 trucks, resulting in the closing of two major roads linking Indian Ocean ports to the industrial hub of Johannesburg.

Looters ransacked more than **200 shopping malls.** For people living in poverty in Durban and surrounding towns, food was always scarce, but now even more so. Professor Mcebisi Ndletyana noted that communities have left people in poverty to fend for themselves in a system that keeps them in poverty, causing them to start lashing out. **25,000 army troops** were eventually deployed to end the violence.`
  },
  {
    id: "article-spain",
    title: "New Efforts in Fighting Sexual Violence in Spain",
    subtitle: "The Borgen Project · July 2021",
    description: "I covered Spain's landmark 'yes means yes' consent bill: the 5-year fight from the wolfpack case to a law redefining rape with sentences up to 15 years.",
    outcome: "Published byline · Landmark legislation covered · Consent framework analyzed",
    image: "/images/work/article-spain.jpg",
    url: "https://borgenproject.org/sexual-violence-in-spain/",
    category: "journalism",
    skillsUsed: ["Legislative Analysis", "Human Rights Reporting", "Persuasive Writing"],
    fullContent: `# New Efforts in Fighting Sexual Violence in Spain
*The Borgen Project · July 1, 2021*

After five years of pushback, in May 2021 Spain finally approved a bill defining all non-consensual sexual acts as rape. The legislation came after the notorious "wolfpack" case, when five men gang-raped a woman and were initially charged with sexual abuse, not rape, because Spanish law required evidence of physical violence or intimidation.

The bill is based on the **"yes means yes"** model of sexual consent. Under the new legislation, stalking, street harassment and genital mutilation also become crimes, with gang rape carrying prison sentences as high as **15 years.**

> Maria Jesus Montero, spokesperson for the Spanish government, stated that the new law places "the victim at the center of the public response." Most importantly, she stressed that **passivity and silence do not equal consent.**`
  },
  {
    id: "article-tuition",
    title: "The Price of Success: Is Paying College Tuition Worth It?",
    subtitle: "UIC Bonfire · November 2024 · Co-authored with Gaby Perez",
    description: "I investigated how 70% of UIC students struggle with tuition: 65% skip textbooks, 20% fail courses as a result. Co-authored a policy proposal for MAP grant expansion.",
    outcome: "Published byline · 70% student struggle documented · Policy solution proposed",
    image: "/images/work/article-tuition.jpg",
    url: "https://bonfire.digital.uic.edu/opinion/the-price-of-success-is-paying-college-tuition-worth-it/",
    category: "journalism",
    skillsUsed: ["Investigative Reporting", "Student Advocacy", "Data Analysis"],
    fullContent: `# The Price of Success: Is Paying College Tuition Worth It?
*UIC Bonfire · November 5, 2024 · Co-authored with Gaby Perez*

Around **65 percent** of college students have skipped buying textbooks due to expense, with approximately 20 percent subsequently failing courses. At UIC specifically, **70% of students** struggle with tuition and other costs, describing it as a constant stressor. 81 percent of UIC students work between 4 and 35 hours weekly, leaving inadequate time for academics or wellbeing.

The article proposes expanding Illinois's Monetary Award Program grants, need-based funds that currently support tuition and mandatory fees for low-income students but require expansion to address housing and textbook costs.

> "Why do I have to pay for everything?"

The authors conclude by urging student participation in electoral processes as the primary mechanism for demanding educational affordability and systemic change.`
  },
  {
    id: "wix-opinion-poverty",
    title: "Road Out of Poverty",
    subtitle: "Opinion · Believe in Students · April 2025",
    description: "An opinion piece on how the 2025 dismantling of the Department of Education threatens low-income students, and how Believe in Students' FAST Fund delivers emergency aid in 48 hours.",
    outcome: "Published opinion piece · FAST Fund advocacy · Basic-needs awareness",
    image: "/images/work/wix-opinion-poverty.jpg",
    url: "https://agosw2.wixsite.com/agosw2/blog-1",
    category: "journalism",
    skillsUsed: ["Opinion Writing", "Advocacy", "Policy Analysis"],
    fullContent: `College has always been considered a cornerstone of success. While the definition of success varies from person-to-person, oftentimes, people attribute success to wealth. However, in recent years, higher education has gotten more expensive. College students are struggling to pay tuition as well as keep their basic needs met. Now in the year 2025, students' rights to get higher education is in jeopardy more than ever. With the Trump administration cracking down on major universities and shutting down the Department of Education, low-income college students are facing an issue that may just take away their right to an education. In spite of these administrative crack-downs, Believe in Students aims to directly help college students meet their basic needs through the Faculty and Student Together (FAST) Fund.

On March 20, President Trump signed off on an executive order that dismantles the Department of Education. Known to be responsible for administering Federal Student Aid (FAFSA), the dismantling of the education department sent shockwaves around the country. Without FAFSA, around 17 million students around the country will be unable to attend college. With tuition rates already skyrocketing, the Trump administration has fueled the concern around financial insecurity, making it a serious crisis that threatens the future of higher education. This will not only have a drastic impact on the educational rates, but will force many students to find other means of income. Financial instability amongst college students is completely unsustainable for the future.

Through a hands-on approach, Believe in Students has designed a way to provide students with direct support on their college campuses. Run by faculty, the FAST Fund is a donor-advised fund that provides emergency aid in just 48 hours. The emergency fund is a hassle-free, application-free process that prioritizes putting the needs of students front and center. Not only does this provide immediate financial assistance, but it also strengthens the bond between students and instructors. When facing a challenge on and off-campus, students are more likely to seek out professors rather than administrators. Believe in Students take this relationship to the next level with staff directly helping their students.

The FAST Fund does provide immediate, yet temporary support for financially unstable students. Believe in Student's emergency aid is a short term solution for a long term problem. The cost of tuition as well as day-to-day costs rack up, leaving low-income students to have to prioritize one over the other. With the current political climate, this fear has gotten even stronger.

With the current policies surrounding higher education, it's vital that students and faculty help each other to spread the awareness of the FAST Fund. Through donations, flyering, and attending events, students can learn more about the resources available around campus and advocate for change. For some, a college education is not a privilege but a need. By using the platform Believe in Students has provided, students have the chance to fight for the right to learn. It's time to spread awareness of the various resources on college campuses, starting off with the FAST Fund.`
  },
  {
    id: "wix-out-of-state",
    title: "UIC's Out-of-State Students Are Struggling: How Can We Help?",
    subtitle: "Opinion · November 2024",
    description: "How non-resident UIC students pay nearly double the tuition, and how the Faculty Union's FAST Fund and a new student-led advocacy plan aim to close the gap.",
    outcome: "Published opinion piece · Tuition-equity advocacy · FAST Fund spotlight",
    image: "/images/work/wix-out-of-state.jpg",
    url: "https://agosw2.wixsite.com/agosw2/blog-2",
    category: "journalism",
    skillsUsed: ["Opinion Writing", "Higher-Ed Policy", "Advocacy"],
    fullContent: `If you had asked a student in the 1980s what they thought about college, they may go on and on about the activities and opportunities and complain about their workload. Flashforward to 2024; if you asked the very same question to the average college student in 2024, their answer would be something along the lines of, "It's sucking the money out of mine and my parents pockets."

This sentiment is entirely true for the University of Illinois at Chicago (UIC) and particularly the 14.8% of students who are not Illinois residents. While UIC is committed to offering ample student resources, such as UIC SnaP, a scholarship and awards program, to help students afford the cost of attendance, it simply doesn't cover enough to truly make a difference in a student's financial situation. And the scholarships that cover the cost of tuition, such as UIC Aspire, are only available to in-state students. Currently, an out-of-state student has to pay around double the tuition that the average in-state student pays. While this is a common practice among public universities, it raises critical questions about fairness and accessibility. Why is it that the geographic location of students determines the affordability of education?

This is where the UIC Faculty Union (UICUF) decided to take the initiative and create a new branch that is involved in making the financial needs of the UIC student community cared for called the FAST Fund.

The FAST Fund, short for Faculty and Students Together, is an initiative designed to provide small grants to students facing sudden financial crises. These funds, from donations and fundraising, cover everything from housing to medical bills. The beauty of the FAST Fund lies in its immediacy. A student can receive support in the blink of an eye. But the FAST Fund is much more than just a safety net for additional expenses apart from the cost of attendance.

At the end of August, the FAST Fund announced their newest addition to the team: students. The UICUF FAST Fund, partnered with Believe in Students, a non-profit dedicated to helping college students meet basic living expenses, has brought two students on board to craft an advocacy plan tackling systemic challenges at UIC. This advocacy plan, announced earlier this month, is aimed at lowering tuition for non-resident students.

Through student-led research, community engagement, and awareness campaigns, will there be hope in bringing change into our campus? Not only will lowering tuition for non-resident students help those already struggling with student debt and educational expenses, but it will also bring up enrollment for out-of-state students in the future. Lowering tuition will help maintain a vibrant campus community and lead to a greater increase in revenue from the increased enrollment of out-of-state students.

UICUF's dual approach of supporting students through the FAST Fund and advocating for lower out-of-state tuition represents a bold and necessary step forward. However, none of the actions behind the advocacy plan will come to fruition without the help of the UIC community. While this may not affect an in-state student (such as myself), everyone deserves to have an equal start to their education. And the best way to make sure that everyone is on the same footing is to donate via this link: [givebutter.com/UIC](https://givebutter.com/UIC).

For the sake of current and future students, this is an advocacy plan worth championing.`
  },
  {
    id: "wix-director-profile",
    title: "Tapping Into Your Audacity: The Creation of a Director",
    subtitle: "Profile Feature · October 2024",
    description: "A profile of horror filmmaker Jennifer Reeder, from ballet dropout to Sundance and Berlinale premieres, on breaking into film and telling stories that matter.",
    outcome: "Long-form profile · Original interview · Narrative feature",
    image: "/images/work/wix-director-profile.jpg",
    url: "https://agosw2.wixsite.com/agosw2/profile-feature",
    category: "journalism",
    skillsUsed: ["Profile Writing", "Interviewing", "Narrative Feature"],
    fullContent: `Sitting, waiting for Jennifer Reeder to enter her well-decorated office, it was incredibly nerve-racking. In a couple of minutes, the director of A Million Miles Away (2014), which premiered at the 2015 Sundance Film Festival, would sit before her large, marble-slab desk. Accolades hung up on the wall behind her and papers scattered on her desk. However as soon she started laughing, her warm demeanor soon melted the coldness of the office.

"You know, I was a pretty nervous kid like you when I first started out," said Reeder. "Somehow, I figured it out." Reeder's path to becoming an American horror film director and screenwriter has never been linear. It wasn't until she stumbled into a film class and picked up a rusty VHS camera that made her realize: this is what she was made to do. And it all started with ballet.

Jennifer Reeder had always been a curious and imaginative kid. In order to bundle all that curiosity into one thing, her parents sent her to ballet lessons. Reeder continued her training as a ballet dancer even into her undergraduate years at Ohio State University. It was there that she wanted to try something new apart from dance: sculpture. "I thought that's where I would find my kind of misfits in the art department," said Reeder. Unfortunately, those dreams were cut short when she started to fail her sculpture class.

Thankfully, her sculpting professor, aware about Reeder's life as a ballet dancer, had informed her that in the following semester a performance art class was going to be taught. However, Reeder was unprepared for what she would soon be learning.

As soon as Reeder stepped into the class the following semester, she realized that she might have just found the kind of misfits that she was looking for. This class focused on a different kind of performance art: filmmaking. For one of her assignments she had to make her own short film. "The minute that I picked up a camera, I felt like I had recovered a phantom limb," said Reeder. "From then on, I haven't done anything since."

But it wasn't easy breaking into the film industry, according to Reeder. At times she felt stuck writing and directing films that she believed nobody was willing to watch: "I understood that I couldn't just make films," said Reeder. "They had to live in the world."

During her early days of filmmaking, Reeder would make VHS copies of every one of her works and send them to every film festival that she could think of. Her hard work paid off because in 2017, her first feature, Signature Move (2017), a heartfelt story about a queer Muslim woman navigating love, family, and wrestling, won the Grand Prize at the 2017 Outfest in LA. After that, her films have made it all around the world from the Chicago International Film Festival to Sundance.

"I definitely think that, by certain standards, I've broken through the [independent film] industry," said Reeder. "But, I still work my ass off to get the script in the best possible condition and to the people I surround myself with." Her 2019 film, Knives and Skin (2019), a psychological thriller about teenage girls in an unknown town, broke through the industry's barriers, premiering at the Berlin International Film Festival.

From the beginning, Reeder never gave up on her passion for filmmaking. Even when she had no money, she made it a point to treat the actors in her early short films, such as A Million Miles Away (2017) and Blood Below the Skin (2014), to dinner. She called up old friends to become her cameramen and helpers. Ultimately, she believes that drawing inspiration from feminism, her own experience as a woman, and queer culture greatly impacted her ability to succeed in the industry.

"Without my past, I don't think I would be here right now," Reeder noted. While she thanks her history as a dancer for leading her to her dream job, what truly inspired her to stay was the message that she wanted to get across, and it all started with her family. "I grew up in a matriarchy," said Reeder. Growing up, she was surrounded by her mother, grandmother, and aunts who served as a role model and by men who weren't intimidated by strong women like them. "Feminism and equality has always been a no brainer for me," said Reeder. According to her, it was these themes of female empowerment, women finding and maintaining their voice, that were some of the most authentic stories to tell.

Films such as Perpetrator (2023) and All Small Bodies (2017) have incorporated themes of feminism with the horror genre. Reeder laughed when I asked why she loved the horror genre. "Female characters were made for horror, you know?" said Reeder.

Not only does Jennifer Reeder strive to incorporate female main characters in her works, but especially POC characters too. In the horror and thriller genres, POC characters are stuck in these boxed-in stereotypes and tend to be the first ones killed. "My stories and casting is about inclusivity and representation," said Reeder. "And you know, that matters."

Her passion to branch out these genre films was due to her own audiences. Without hesitation, she said the aspect of filmmaking she was most proud of was her audience. "The most special part to me is being able to screen a film and look out to an audience who see themselves in my movies," said Reeder. "I think that being able to reach audiences who feel seen by my films has been extraordinary."

It was during this part of the interview where she paused and bent down, picking up a stack of papers. When asked what those papers were, she simply replied, "Every failed script that didn't make it." In Reeder's eyes, the way aspiring filmmakers can break through the industry is to "tap into their audacity." That has been her motto for every single one of her films, especially her newest feature Perpetrator (2023), a dark coming-of-age horror story about a teenager discovering her supernatural abilities while confronting the horrors of womanhood. Just write the script. Just make the film.

"But be reasonable," warned Reeder. "Know your limitations, because there will never be enough money or time." This struck me, when I thought of the multi-million dollar budget that many Hollywood films have and the endless possibilities that can happen with the amount of money allocated for each project. But at the same time, materialistic items are not necessarily helpful in the stories that people create. "Tell stories that are important to you," said Reeder. "Don't forget why you started to create in the first place."`
  },
  {
    id: "wix-free-speech",
    title: "UIC Students Struggle to Express Themselves on Campus",
    subtitle: "Research Report · October 2024",
    description: "A reported investigation into free speech at UIC: why a share of students feel the campus climate discourages open expression, built on original interviews and national survey data.",
    outcome: "Reported feature · 3 sourced interviews · National survey data",
    image: "/images/work/wix-free-speech.jpg",
    url: "https://agosw2.wixsite.com/agosw2/research-report",
    category: "journalism",
    skillsUsed: ["Investigative Reporting", "Interviewing", "Data Synthesis"],
    fullContent: `Around early September a group of University of Illinois at Chicago (UIC) students marched across campus with one thing on their minds: to exercise their right to freedom of speech. A survey from Heterodox Academy shows that around 87.4 percent of students in 2021 overwhelmingly favor open expression among those on campus; however, another survey shows that around 63.5 percent of students in 2021 believe that social climate on their campuses prevents that. But why do a percentage of students believe that the environment on campus prevents them from expressing themselves? The answer: a divided country.

Since 2019, racial tensions such as Black Lives Matter, Free Congo, and the Israel-Palestine conflict have been at the forefront of international news. But, it isn't these issues that ultimately make students hesitant to speak out. Because of a politically charged world where news can spread like wildfire, more college students are starting to feel reluctant to freely express their opinions. To some students, there is a discrepancy in what they can say and where they can say it.

> "I believe to a certain extent I can speak freely on campus," said Grace Soh, a Resident Assistant, going into her 2nd year as a biomedical undergrad at UIC. "Outside of class I feel as if my conversations aren't as monitored as they are in-class."

The ability to speak more freely outside of class versus in-class mimics data from Columbia University where around 36 percent of students believed that they couldn't express their opinions out of fear of how other students and administration would respond, a 9 percent increase since the 27 percent before encampments.

This study from Columbia University is similar to Grace's own personal experiences at UIC. "[Distrust of administration is] questioning whether or not our views as students in the student body is being properly reflected in what is being said at UIC as an institution," said Grace Soh. Her distrust comes from the lack of clarity in where the university stands in social issues such as the Israel-Palestine conflict. "It's not clear what UIC stands for when it comes to social issues," says Grace.

While Grace Soh has a "high distrust in the UIC administration," Sarah Canela, a junior studying criminology at UIC, believes that not all of the administration is untrustworthy. "A lot of my professors express different opinions freely and believe in what we [students] have to say."

According to the Foundation for Individual Rights and Expression's (FIRE) annual free speech survey, around 24 percent of respondents stated that it was unclear that their administration protects free speech on campus, which has gone down by 12 percent since last year.

Mark Martell, an educator and director of the UIC Asian American Resource and Cultural Center (AARCC), believes that faculty-led resources and organizations have an impact on how comfortable students are to freely speak on campus. "[UIC Cultural Centers] have sent out statements of solidarity no matter what the issue is. We stand for what is just and right," Dr. Martell points out. Through the lens of social justice, Dr. Martell continues to speak up on what he believes is just. He believes resources such as the faculty union on campus "does provide some sort of support when it comes to any injustice that may occur."

While Dr. Martell believes that faculty and staff do try to express their opinions, there is a limitation to what can be said and who can speak. There are groups of different kinds of educators that make up the faculty at UIC. According to Dr. Martell, the faculty has the freedom to teach. However, there are "subcategories" within the faculty, which are the tenure and non-tenure faculty. Tenure faculty are "very protected" and can say "whatever they want" because they have security, career and professional security. Non-tenure faculty may join in on the discourse but they aren't protected because they don't have that security.

FIRE reported that many administrators believe that not promoting freedom of speech on campus is no longer an option as they continue to try and earn the trust of their students back. "When it comes to expressing opinions on sensitive matters, I think staff tends to be a little bit quieter because of the fear of being dismissed from their role," said Mark Martell.

The current political climate has raised the need for free speech more than ever, but the students on campus are hesitant. While there are limitations in place such as being hesitant to speak inside classrooms and being non-tenure faculty, it really boils down to what students and faculty believe is being reflected by the institution. There is a certain percentage of students that are hesitant to speak up; however, faculty such as Dr. Martell and other members strive to make UIC a space of open communication where students can freely express their opinions.`
  },
  {
    id: "wix-fastfund-press",
    title: "Students in Charge at the UICUF FAST Fund",
    subtitle: "Press Release · December 2024",
    description: "A press release announcing the UICUF FAST Fund's first cohort of student leadership fellows, tasked with researching basic-needs insecurity and raising funds across the UIC community.",
    outcome: "For Immediate Release format · New fellowship announced · Basic-needs advocacy",
    image: "/images/work/wix-fastfund-press.jpg",
    url: "https://agosw2.wixsite.com/agosw2/press-release",
    category: "pr",
    skillsUsed: ["Press Release Writing", "AP Style", "Public Relations"],
    fullContent: `### FOR IMMEDIATE RELEASE

## UIC ADVOCACY PROGRAM ENLISTS NEW COHORT TO BRIDGE GAP BETWEEN STUDENTS AND STAFF

**Contact:** Charitianne Williams · UIC FASTFund · info@believeinstudents.org

**CHICAGO, IL, December 2024.** The University of Illinois at Chicago (UIC) FASTFund, a program designed to give out small grants to UIC students in need, announced their new cohort of student leadership fellows at the UIC United Faculty (UICUF) Fall Member meeting during late August. The FASTFund, an initiative of UICUF, has been around since 2021. This is the first year that the FASTFund has enlisted student fellows as a part of their program.

> "My hope is that we will get some FASTFund fundraisers on the books or some union socials that can double as a FASTFund raising opportunity," said Vice President Jeffrey S. Gore. "With our new Fellows, that will be a part of what we'll be planning."

The UIC FASTFund has had a longstanding partnership with the UICUF, but this is the first time that they have a cohort of students that will be researching basic needs insecurity around the UIC community and helping to raise funds to help students in need. These basic needs include access to healthy food, the ability to cover the cost of rent/housing, and addressing external factors that may prevent a student from having a full college experience at UIC. The student fellows intend on being the direct link for faculty to understand the specific needs of UIC students.

The student leaders will take on a specific issue and raise awareness through different forms of media and events.

> "As a professor in English, this is an amazing opportunity, and it is rewarding to partner with students who share the same vision," said Gore. "We want the Fellows to find what their vision is and make it happen."

UIC FASTFund has been at UIC for the past two years and is part of a larger organization called Believe in Students that advocates for student rights with chapters implemented across the country. Through Believe in Students, student leaders will identify and address advocacy issues on their campuses. These students were chosen through an application process that first required them to send their resumes and complete a list of questions regarding basic needs insecurity. Afterwards, those selected to go onto the next round attended an online interview hosted by the UICUF and Believe in Students.

For more information about the UICUF FASTFund and Believe in Students, email info@believeinstudents.org.`
  },
  {
    id: "wix-crisis-memo",
    title: "Crisis Statement: NetEase & Marvel Rivals Layoffs",
    subtitle: "Crisis Management · PR Writing Sample",
    description: "A crisis-communications statement written for NetEase in response to the Marvel Rivals Seattle team layoffs, reassuring a passionate fanbase while protecting the brand.",
    outcome: "Crisis comms sample · Reputation management · Stakeholder reassurance",
    image: "/images/work/wix-crisis-memo.jpg",
    url: "https://agosw2.wixsite.com/agosw2/policy-brief",
    category: "pr",
    skillsUsed: ["Crisis Communications", "Corporate Messaging", "Public Relations"],
    fullContent: `## To Friends and Family of NetEase & Marvel Rivals

Dear fans of Marvel Rivals,

We first want to express our gratitude for your unwavering support of Marvel Rivals. The fanbase is the heart of Marvel Rivals and the reason that we at NetEase work hard to provide the best experience.

In order to continue refine the gaming experience, we had to make the difficult decision of parting ways with the support team in Seattle, Washington.

Recently, NetEase implemented restructuring and organizational efforts within the Marvel Rivals development team. As a result, our design team was restructured, leading to the scaling down of the Seattle team. We appreciate the hard work and passion of all the people that helped design the game, and wish them the best in their future endeavors.

We want to reassure fans of Marvel Rivals that these changes made to the team will not affect the exceptional experience of the game; in turn, these modifications will improve the user experience and interaction. We are dedicated to the growth of Marvel Rivals and new features such as the inclusion of different characters, maps, and a variety of new content.

Thank you for being a part of the Marvel Rivals community and stay tuned for future updates.

Sincerely,

The Marvel Rivals Team at NetEase`
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
      "Managed written and verbal communication for 50+ residents across in-person, email, Zoom, and Teams channels while serving as primary point of contact.",
      "Designed engagement strategies such as building-wide events, flyers, and one-to-one outreach, translating goals into measurable community participation."
    ],
    skills: ["People Management", "Leadership", "Conflict Resolution", "Community Building"],
    type: "work"
  },
  {
    id: "uic-writing",
    role: "Advanced Level Staff Tutor",
    company: "University of Illinois Chicago (UIC) Writing Center",
    period: "Jan 2025 – May 2026",
    logo: "/images/logos/uic.png",
    description: [
      "Delivered individualized writing consultations, coaching clients across skill levels in clarity, organization, and professional communication.",
      "Edited and refined academic and professional materials for organization, clarity, and audience engagement.",
      "Guided collaborative consultations that strengthened clients' analytical thinking and revision strategies."
    ],
    skills: ["Editing", "Critical Thinking", "Coaching", "Pedagogy"],
    type: "work"
  },
  {
    id: "great-lakes",
    role: "Believe in Students · Changemakers Fellow",
    company: "Great Lakes FAST Fund Consortium",
    period: "Aug 2024 – May 2026",
    logo: "/images/logos/greatlakes.png",
    description: [
      "Collected and analyzed stakeholder survey feedback for a national education nonprofit, translating insights into clear advocacy recommendations for program leadership.",
      "Co-authored a published opinion piece on civic engagement and voter participation, crafting persuasive public-facing content for broad audiences. [View published piece →](https://bonfire.digital.uic.edu/opinion/the-price-of-success-is-paying-college-tuition-worth-it/)",
      "Managed Facebook and Instagram channels to amplify advocacy messaging on student accessibility and basic-needs support."
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
      "A backup childcare startup serving working parents, providing content and operations support to build user engagement processes and service delivery from the ground up. [Watch operations work →](https://www.youtube.com/watch?v=5oQ1f3ysAIM)",
      "Conducted market research across 100+ products/services and synthesized findings into recommendations that directly informed platform design and service offerings. [Watch product concept →](https://www.youtube.com/watch?v=7NhmULXc5vM)",
      "Coordinated with parents, caregivers, and partners to gather requirements, resolve issues, and improve program effectiveness, managing 15+ ongoing relationships / partnerships. [View content →](https://www.instagram.com/graaphene/)"
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
      "Recruited to formulate 4-5 minute scripts for a new set of YouTube videos on a variety of simple-to-advanced topics based on a student's English comprehension levels.",
      "Created 50+ scripts, around 7-10 scripts per week, where 90% got approved at first pass.",
      "Learned to work in a diverse team and dynamic working environment, reflecting on and improving my own writing and communication skills."
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
      "I learned how startups actually work: pitching, building teams, writing business plans, and shipping under pressure.",
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
      "Won a 50% scholarship. Learned to think on my feet, listen actively, and perform under pressure, skills I use in every presentation."
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
