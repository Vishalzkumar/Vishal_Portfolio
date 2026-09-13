export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export type Stat = {
  label: string
  value: string
}

export type SkillGroup = {
  title: string
  items: string[]
  accent: string
}

export type ExperienceItem = {
  date: string
  role: string
  organization: string
  description: string
  technologies: string[]
}

export type Project = {
  id: string
  name: string
  category: 'AI/ML' | 'Web' | 'Software' | 'Other'
  description: string
  problem: string
  solution: string
  features: string[]
  stack: string[]
  github: string
  demo: string
  projectFile?: string
  screenshots?: string[]
  accent: string
}

export type Achievement = {
  title: string
  organization: string
  date: string
  link: string
  proof?: string
}

export type CodingProfile = {
  platform: string
  handle: string
  link: string
  stat: string
}

export type JourneyItem = {
  year: string
  title: string
  description: string
}

export const portfolio = {
  name: 'Vishal Kumar',
  headline: 'Software Engineer | AI & Full-Stack Developer',
  intro:
    'Computer Science undergraduate building practical software solutions with programming, AI/NLP, machine learning and modern web technologies.',
  location: 'Siwan, Bihar, India',
  availability: 'Open to Opportunities',
  email: 'panditvishal010@gmail.com',
  github: '#contact',
  linkedin: '#contact',
  resumeLink: '/Vishal_Kumar_Resume.pdf',
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ] as NavItem[],
  socials: [
    { label: 'GitHub', href: '#contact', icon: 'github' },
    { label: 'LinkedIn', href: '#contact', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:panditvishal010@gmail.com', icon: 'mail' },
  ] as SocialLink[],
  stats: [
    { label: 'Academic Projects', value: '07' },
    { label: 'B.Tech CGPA', value: '7.31' },
    { label: 'KYP Average', value: '91.45%' },
    { label: 'Graduation', value: '2027' },
  ] as Stat[],
  skills: [
    {
      title: 'Programming',
      accent: 'from-cyan-500/30 to-sky-500/10',
      items: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    },
    {
      title: 'AI / ML',
      accent: 'from-violet-500/30 to-fuchsia-500/10',
      items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'PyTorch', 'AI/NLP'],
    },
    {
      title: 'Web Development',
      accent: 'from-emerald-500/30 to-teal-500/10',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    },
    {
      title: 'Tools',
      accent: 'from-amber-500/30 to-orange-500/10',
      items: ['VS Code', 'Git & GitHub', 'Anaconda', 'Jupyter Notebook', 'Android Studio', 'n8n'],
    },
    {
      title: 'Databases',
      accent: 'from-rose-500/30 to-pink-500/10',
      items: ['SQL', 'MongoDB', 'DBMS'],
    },
  ] as SkillGroup[],
  experience: [
    {
      date: '2024 — Present',
      role: 'B.Tech in Computer Science & Engineering',
      organization: 'BEU, Bihar · Expected 2027',
      description:
        'Pursuing a B.Tech in Computer Science and Engineering with a current CGPA of 7.31, developing a strong foundation in software engineering and computer science.',
      technologies: ['DSA', 'OOPs', 'DBMS', 'JDK', 'JVM'],
    },
    {
      date: '2023',
      role: 'KYP Certification Programs',
      organization: 'Bihar · BS-CIT / BS-CLS / BS-CSS',
      description:
        'Completed BS-CIT, BS-CLS and BS-CSS programs with an average score of 91.45%, strengthening digital, communication and soft-skill foundations.',
      technologies: ['Computer Basics', 'Communication', 'Soft Skills'],
    },
    {
      date: '2020 — 2022',
      role: 'Senior & Secondary Education',
      organization: 'BSEB, Bihar',
      description:
        'Completed Senior Secondary education with 71% and Secondary education with 79.4%, building the academic foundation for computer science studies.',
      technologies: ['Senior Secondary · 71%', 'Secondary · 79.4%'],
    },
  ] as ExperienceItem[],
  projects: [
    {
      id: 'space-shooter-game',
      name: 'Space Shooter Game',
      category: 'Software',
      description: 'A 2D arcade-style game with player controls, collision detection, score tracking and progressive difficulty.',
      problem: 'A hands-on project was needed to practice programming logic, event handling and interactive application design.',
      solution: 'Developed a playable Python game with responsive controls, collision logic, scoring and difficulty scaling.',
      features: ['Player controls', 'Collision detection', 'Score tracking', 'Difficulty scaling'],
      stack: ['Python'],
      github: '',
      demo: '',
      accent: 'from-cyan-400/40 via-sky-500/20 to-slate-900',
    },
    {
      id: 'lecture-ai-summarizer',
      name: 'Lecture AI Summarizer',
      category: 'AI/ML',
      description: 'A browser extension that captures lecture content and generates concise AI-powered summaries in real time.',
      problem: 'Long lecture content can be difficult to review quickly and retain efficiently.',
      solution: 'Built a JavaScript and Node.js browser extension that processes lecture content with AI/NLP and returns concise summaries.',
      features: ['Browser extension workflow', 'Lecture capture', 'Real-time summarization', 'AI/NLP processing'],
      stack: ['JavaScript', 'Node.js', 'AI/NLP'],
      github: '',
      demo: '',
      accent: 'from-violet-500/35 via-fuchsia-500/20 to-slate-900',
    },
    {
      id: 'college-management-system',
      name: 'College Management System',
      category: 'Software',
      description: 'A Java and SQL system for managing student records, attendance and courses with role-based access.',
      problem: 'College records and academic workflows needed a structured system instead of fragmented manual management.',
      solution: 'Built CRUD workflows over a normalized SQL schema with role-based access for student and academic data.',
      features: ['Student records', 'Attendance management', 'Course management', 'Role-based access', 'CRUD operations'],
      stack: ['Java', 'SQL', 'DBMS'],
      github: '',
      demo: '',
      accent: 'from-emerald-500/35 via-teal-500/20 to-slate-900',
    },
    {
      id: 'hindi-santhali-converter',
      name: 'Hindi to Santhali Language Converter',
      category: 'AI/ML',
      description: 'A real-time language conversion application using Python, AI/NLP and language-mapping techniques.',
      problem: 'Users needed a practical way to translate Hindi text into Santhali in real time.',
      solution: 'Designed a Python NLP application that maps language patterns and produces real-time Hindi-to-Santhali conversions.',
      features: ['Real-time translation', 'Language mapping', 'NLP workflow', 'Text conversion'],
      stack: ['Python', 'AI/NLP'],
      github: '',
      demo: '',
      accent: 'from-amber-500/35 via-orange-500/20 to-slate-900',
    },
    {
      id: 'activity-tracker',
      name: 'Activity Tracker Application',
      category: 'Software',
      description: 'An Android application for logging and monitoring daily activities with local storage and history views.',
      problem: 'Users needed a simple way to record daily activities and review their history.',
      solution: 'Built a Java Android app with local data storage, activity logging and history-focused views.',
      features: ['Activity logging', 'Local data storage', 'Activity history', 'Android interface'],
      stack: ['Java', 'Android Studio'],
      github: '',
      demo: '',
      accent: 'from-rose-500/35 via-pink-500/20 to-slate-900',
    },
    {
      id: 'personal-portfolio',
      name: 'Personal Portfolio Website',
      category: 'Web',
      description: 'A responsive portfolio website showcasing skills, projects, education and resume.',
      problem: 'A professional online presence was needed to present technical skills and academic projects clearly.',
      solution: 'Designed a responsive portfolio with interactive sections, project storytelling and direct resume access.',
      features: ['Responsive design', 'Project showcase', 'Resume download', 'Interactive sections'],
      stack: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: '',
      demo: '',
      accent: 'from-indigo-500/35 via-blue-500/20 to-slate-900',
    },
    {
      id: 'college-website',
      name: 'College Website',
      category: 'Web',
      description: 'A multi-page informational website for a college with admissions, courses and events sections.',
      problem: 'Students and visitors needed a clear, accessible source of college information.',
      solution: 'Built a structured multi-page website that organizes admissions, courses and events content.',
      features: ['Admissions section', 'Course information', 'Events section', 'Multi-page layout'],
      stack: ['HTML', 'CSS', 'JavaScript'],
      github: '',
      demo: '',
      accent: 'from-sky-500/35 via-cyan-500/20 to-slate-900',
    },
  ] as Project[],
  achievements: [
    {
      title: 'B.Tech CSE — 3rd Year',
      organization: 'BEU, Bihar',
      date: '2025',
      link: '#experience',
    },
    {
      title: 'KYP Programs Completed',
      organization: 'BS-CIT / BS-CLS / BS-CSS',
      date: '2023',
      link: '#experience',
    },
    {
      title: 'Academic Projects',
      organization: 'AI, Web, Android & Software',
      date: '2024 — Present',
      link: '#projects',
    },
    {
      title: 'Full-Stack & AI Focus',
      organization: 'Software Engineering Journey',
      date: 'Present',
      link: '#skills',
    },
  ] as Achievement[],
  codingProfiles: [
    { platform: 'GitHub', handle: 'Profile link not provided', link: '#contact', stat: 'Projects' },
    { platform: 'LinkedIn', handle: 'Profile link not provided', link: '#contact', stat: 'Professional' },
  ],
  journey: [
    { year: '2020', title: 'Completed Secondary Education', description: 'Completed secondary education from BSEB, Bihar with 79.4%.' },
    { year: '2022', title: 'Completed Senior Secondary Education', description: 'Completed senior secondary education from BSEB, Bihar with 71%.' },
    { year: '2023', title: 'Completed KYP Programs', description: 'Completed BS-CIT, BS-CLS and BS-CSS programs with an average score of 91.45%.' },
    { year: '2024 — Present', title: 'B.Tech CSE & Project Development', description: 'Pursuing B.Tech in Computer Science and Engineering while building projects across AI/NLP, web, Android and software development.' },
  ],
}
