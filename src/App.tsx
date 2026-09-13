import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Send,
  Sparkles,
  Star,
  Target,
  Workflow,
  X,
} from 'lucide-react'
import { portfolio } from './data/portfolio'

const filters = ['All', 'AI/ML', 'Web', 'Software', 'Other'] as const

type Filter = (typeof filters)[number]

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const socialIconMap = {
  github: GitBranch,
  linkedin: BriefcaseBusiness,
  mail: Mail,
} as const

const skillIcons = [Code2, BrainCircuit, Globe, Workflow, Database]

function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof portfolio.projects)[number] | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolio.projects
    return portfolio.projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const handleFieldChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
    setSubmitted(false)
  }

  const validateForm = () => {
    const nextErrors: FormErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please write a short message.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#070b10] text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/10 text-sm font-bold text-cyan-300">
              {portfolio.name.charAt(0).toUpperCase()}
            </span>
            <span>{portfolio.name}</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {portfolio.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={portfolio.resumeLink}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
              {portfolio.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-transparent px-3 py-2 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolio.resumeLink}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-20">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="flex flex-col justify-center"
            >
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                {portfolio.availability}
              </div>

              <p className="mb-4 text-base text-slate-300">Hi, I&apos;m {portfolio.name}</p>
              <h1 className="max-w-xl text-4xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                {portfolio.headline.split(' | ').slice(0, 2).join(' ')}
                <span className="block text-cyan-300">{portfolio.headline.split(' | ')[2] || 'Developer'}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {portfolio.intro}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  Let&apos;s Connect
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-slate-300">
                {portfolio.socials.map((social) => {
                  const Icon = socialIconMap[social.icon]

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="relative flex items-center justify-center"
            >
              <div className="absolute left-10 top-12 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute bottom-8 right-8 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.6)] backdrop-blur-md">
                <div className="absolute inset-x-5 top-5 h-16 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/90 p-3">
                  <div className="relative flex items-center justify-center overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#0f172a,#111827_35%,#090e14)] p-3">
                    <img
                      src={`${import.meta.env.BASE_URL}profile.jpg`}
                      alt="Profile portrait"
                      className="h-[460px] w-full rounded-[18px] object-cover object-center"
                    />
                  </div>
                </div>

                <div className="absolute -left-2 bottom-20 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-cyan-500/15 p-2 text-cyan-300">
                      <BrainCircuit className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Focus</div>
                      <div className="text-sm font-medium text-white">AI Solutions</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 top-20 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-violet-500/15 p-2 text-violet-300">
                      <Monitor className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Stack</div>
                      <div className="text-sm font-medium text-white">Full-Stack</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">About</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">About Me</h2>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInUp}
                custom={0.12}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.35)]"
              >
                <p className="text-lg leading-8 text-slate-300">
                  I am an AI-focused developer with a passion for building intelligent, scalable and useful digital products. My journey blends software development, machine learning, and modern web engineering to solve real-world problems with practical and user-friendly experiences.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  I enjoy exploring the intersection of AI, web technologies and product thinking—turning ideas into accessible systems, polished interfaces, and meaningful experiences. I thrive on continuous learning, experimentation, and building projects that create measurable value.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInUp}
                custom={0.16}
                className="grid grid-cols-2 gap-4"
              >
                {portfolio.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={index % 2 === 0 ? 'rounded-2xl border border-white/10 bg-slate-900/80 p-5' : 'rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5'}
                  >
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.08}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">Skills</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Technologies I Work With</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolio.skills.map((group, index) => {
                const Icon = skillIcons[index % skillIcons.length]

                return (
                  <motion.div
                    key={group.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    custom={0.08 + index * 0.08}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
                  >
                    <div className={`bg-gradient-to-r ${group.accent} p-5`}>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-white">{group.title}</span>
                        <div className="rounded-full border border-white/10 bg-slate-950/40 p-2 text-cyan-200">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 p-5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.08}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">Experience</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Education & Learning Journey</h2>
            </motion.div>

            <div className="relative mx-auto max-w-4xl before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-white/10 md:before:left-1/2">
              {portfolio.experience.map((item, index) => (
                <motion.div
                  key={`${item.role}-${item.date}`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  custom={0.08 + index * 0.08}
                  className={`relative mb-8 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div className={`rounded-3xl border border-white/10 bg-slate-900/80 p-6 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                      <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-cyan-300">
                        <span>{item.date}</span>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10">
                          {index === 0 ? <GraduationCap className="h-4 w-4" /> : index === 1 ? <BriefcaseBusiness className="h-4 w-4" /> : <Target className="h-4 w-4" />}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-2 text-sm font-medium text-slate-300">{item.organization}</p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/15 md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.08}
              className="mb-10 text-center"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">Projects</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Selected Work</h2>
            </motion.div>

            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? 'border-cyan-400/60 bg-cyan-500/15 text-cyan-100'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.08 + index * 0.08}
                  onClick={() => setSelectedProject(project)}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 text-left shadow-[0_20px_50px_rgba(15,23,42,0.38)] transition hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_25px_60px_rgba(34,211,238,0.15)]"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.accent} p-5`}>
                    <div className="flex h-full items-end justify-between rounded-[20px] border border-white/10 bg-slate-950/20 p-4 backdrop-blur-sm">
                      <span className="rounded-full border border-white/10 bg-slate-950/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200">
                        {project.category}
                      </span>
                      <div className="rounded-full border border-white/10 bg-slate-950/30 p-2 text-white/80">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm text-slate-300">
                        View Details
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.08}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">Achievements</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Highlights & Recognitions</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {portfolio.achievements.map((achievement, index) => (
                <motion.a
                  key={achievement.title}
                  href={achievement.proof || achievement.link}
                  target={(achievement.proof || achievement.link).startsWith('#') ? undefined : '_blank'}
                  rel={(achievement.proof || achievement.link).startsWith('#') ? undefined : 'noreferrer'}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.08 + index * 0.08}
                  className="group rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 p-2 text-cyan-200">
                    <Award className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{achievement.date}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{achievement.organization}</p>
                  {achievement.proof && (
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                      View certificate
                      <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  )}
                  {!achievement.proof && (
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                      View details
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="coding-profiles" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.08}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">Coding Profiles</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Practice & Problem Solving</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {portfolio.codingProfiles.map((profile, index) => (
                <motion.a
                  key={profile.platform}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  custom={0.08 + index * 0.08}
                  className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-cyan-200">
                    {profile.platform === 'GitHub' ? <GitBranch className="h-5 w-5" /> : profile.platform === 'LinkedIn' ? <BriefcaseBusiness className="h-5 w-5" /> : <Star className="h-5 w-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{profile.platform}</h3>
                  <p className="mt-3 text-sm text-slate-300">{profile.handle}</p>
                  <div className="mt-4 text-xs uppercase tracking-[0.18em] text-cyan-300">{profile.stat}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.08}
              className="mb-12 text-center"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">Journey</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Learning Timeline</h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {portfolio.journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  custom={0.08 + index * 0.08}
                  className="relative mb-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6 pl-12"
                >
                  <div className="absolute left-4 top-7 h-4 w-4 rounded-full border border-cyan-400/40 bg-cyan-500/15" />
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.year}</div>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={0.08}
                className="rounded-[30px] border border-white/10 bg-slate-900/75 p-7"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">Contact</p>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">Let&apos;s Build Something Together</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Have an idea, project or opportunity? Feel free to get in touch.
                </p>

                <div className="mt-8 space-y-5 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-cyan-300" />
                    <a href={`mailto:${portfolio.email}`} className="hover:text-white">{portfolio.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <GitBranch className="h-4 w-4 text-cyan-300" />
                    <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
                    <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    <span>{portfolio.location}</span>
                  </div>
                </div>
              </motion.div>

              <motion.form
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={0.14}
                onSubmit={handleSubmit}
                noValidate
                className="rounded-[30px] border border-white/10 bg-white/5 p-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-2 block text-sm text-slate-300">Name</label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={(event) => handleFieldChange('name', event.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => handleFieldChange('email', event.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm text-slate-300">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(event) => handleFieldChange('message', event.target.value)}
                    rows={6}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/60"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>

                  {submitted && (
                    <div className="inline-flex items-center gap-2 text-sm text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" />
                      Message prepared successfully
                    </div>
                  )}
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:px-8">
          <p>© 2026 {portfolio.name}. Built with passion, code and AI.</p>
          <div className="flex items-center gap-4">
            {portfolio.socials.map((social) => {
              const Icon = socialIconMap[social.icon]

              return (
                <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200">
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-950 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.7)]"
            >
              <div className={`mb-6 rounded-[24px] bg-gradient-to-br ${selectedProject.accent} p-6`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200">{selectedProject.category}</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">{selectedProject.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full border border-white/10 bg-slate-950/30 p-2 text-white"
                    aria-label="Close project details"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Problem</h4>
                    <p className="mt-3 text-slate-300">{selectedProject.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Solution</h4>
                    <p className="mt-3 text-slate-300">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Features</h4>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Tech Stack</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.screenshots?.length ? (
                    <div className="mt-5 rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                      <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Project Screenshots</h4>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {selectedProject.screenshots.map((screenshot) => (
                          <img key={screenshot} src={screenshot} alt={`${selectedProject.name} screenshot`} className="h-32 w-full rounded-2xl border border-white/10 object-cover" />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                      <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Project Preview</h4>
                      <div className="mt-4 h-48 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,#0f172a,#111827_40%,#090e14)]" />
                    </div>
                  )}

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    {selectedProject.projectFile && (
                      <a href={selectedProject.projectFile} download className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
                        <Download className="h-4 w-4" />
                        Project Files
                      </a>
                    )}
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
                        <GitBranch className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
