import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Cpu,
  Wifi,
  Bot,
  CircuitBoard,
  Microscope,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ArrowRight,
  ArrowUpRight,
  Github,
  Briefcase,
  Calendar,
  Zap,
  Wrench,
  Layers,
  Code2,
  Users,
  Lightbulb,
  Target,
  Sparkles,
  Building2,
  Award,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { Counter } from "@/components/portfolio/Counter";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import projectFogger from "@/assets/project-fogger.jpg";
import projectEnergy from "@/assets/project-energy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shravan Wanve — Electronics & Embedded Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Shravan Murlidhar Wanve — B.Tech ENTC student building IoT, Embedded Systems, Robotics and VLSI Physical Design projects.",
      },
    ],
  }),
  component: Portfolio,
});

const highlights = [
  { icon: Cpu, label: "Embedded Systems", desc: "Firmware, microcontrollers, real-time control." },
  { icon: Wifi, label: "IoT Solutions", desc: "Connected devices, sensor networks, cloud telemetry." },
  { icon: Bot, label: "Robotics", desc: "Sensing, actuation, autonomous behavior." },
  { icon: Microscope, label: "VLSI Physical Design", desc: "Floorplan, place & route, timing closure." },
  { icon: CircuitBoard, label: "DFT", desc: "Scan insertion, ATPG, testability flows." },
  { icon: GraduationCap, label: "Engineering Mentorship", desc: "Workshops, project guidance, training." },
];

const experiences = [
  {
    role: "Technical Trainer & Developer",
    org: "CircuitoClaro Solutions Pvt. Ltd.",
    period: "Jan 2026 – Present",
    type: "Full-time",
    bullets: [
      "Conducting hands-on workshops on Arduino, IoT, Robotics and Electronics.",
      "Developing embedded and automation projects.",
      "Training students in circuit design, programming and prototyping.",
      "Working with Atal Tinkering Labs in schools.",
    ],
  },
  {
    role: "IEEE Student Branch Member",
    org: "Prof. Ram Meghe Institute of Technology and Research",
    period: "Jan 2026 – Present",
    type: "Member",
    bullets: [
      "Participating in technical events and workshops.",
      "Contributing to student engagement and technical awareness programs.",
    ],
  },
  {
    role: "Summer Intern",
    org: "MDB Electrosoft",
    period: "May 2024 – Oct 2024",
    type: "Internship",
    bullets: [
      "Worked on electronics systems and embedded technologies.",
      "Assisted in PCB design, testing and prototyping.",
      "Developed industry-oriented practical skills.",
    ],
  },
  {
    role: "Freelance Project Developer",
    org: "Independent",
    period: "2026 – Present",
    type: "Freelance",
    bullets: [
      "Guided engineering and diploma students.",
      "Assisted with hardware design and programming.",
      "Supported IoT, automation, embedded and software projects.",
    ],
  },
];

const techSkills = [
  { name: "IoT Development", level: 92 },
  { name: "Embedded Systems", level: 90 },
  { name: "Arduino", level: 95 },
  { name: "ESP32", level: 90 },
  { name: "PCB Design", level: 82 },
  { name: "Robotics", level: 80 },
  { name: "Automation Systems", level: 85 },
  { name: "VLSI Physical Design", level: 72 },
  { name: "Design for Testability (DFT)", level: 68 },
  { name: "Engineering Project Development", level: 90 },
];

const proSkills = [
  "Technical Training",
  "Engineering Mentorship",
  "Workshop Management",
  "Team Collaboration",
  "Project Guidance",
  "Problem Solving",
];

const services = [
  { icon: Wrench, title: "Engineering Project Development", desc: "End-to-end design and implementation support for academic and industry-grade projects." },
  { icon: Wifi, title: "IoT & Embedded Systems", desc: "Smart connected devices, sensor networks, and automation solutions." },
  { icon: CircuitBoard, title: "PCB Design & Prototyping", desc: "Schematic capture, PCB layout, fabrication-ready files and bring-up." },
  { icon: Cpu, title: "Arduino & ESP32 Development", desc: "Custom embedded firmware and hardware integration for products." },
  { icon: Users, title: "Project Mentorship", desc: "1:1 and group guidance for diploma and engineering students." },
  { icon: Zap, title: "Automation Systems", desc: "Industrial and educational automation built around real-world constraints." },
  { icon: Code2, title: "Software & IT Projects", desc: "Support for software-based academic projects, from idea to demo." },
];

const projects = [
  {
    title: "IoT-Based Fogger System for Dairy Farm",
    tags: ["Arduino", "Sensors", "IoT", "Automation"],
    desc: "Automated environmental control for dairy farms — monitors temperature and humidity, and activates foggers to maintain ideal conditions for livestock comfort.",
    img: projectFogger,
  },
  {
    title: "Smart Energy Monitoring System",
    tags: ["ESP32", "IoT", "Energy Sensors", "Cloud"],
    desc: "Real-time monitoring of voltage, current, power and energy consumption with cloud connectivity for remote analysis and dashboarding.",
    img: projectEnergy,
  },
];

const stats = [
  { value: 25, suffix: "+", label: "Workshops Conducted" },
  { value: 120, suffix: "+", label: "Students Trained" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "Years Building" },
];

function Portfolio() {
  return (
    <div id="home" className="relative min-h-screen bg-background text-foreground">
      {/* Ambient page glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.21_256/0.18),transparent_60%)] blur-3xl" />
        <div className="absolute top-[40%] -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.14_210/0.14),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.18_280/0.12),transparent_70%)] blur-3xl" />
      </div>

      <Nav />

      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Floating particles */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              boxShadow: "0 0 12px oklch(0.65 0.21 256 / 0.8)",
              animation: `float ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
              opacity: 0.5 + ((i % 4) * 0.12),
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to internships & collaborations
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Shravan
              <br />
              <span className="text-gradient">Murlidhar Wanve</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Electronics & Telecommunication Engineer · Embedded Systems Developer · IoT Innovator · VLSI Enthusiast
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground/90">
              I build practical engineering solutions across embedded systems, IoT, robotics and VLSI — and help students
              turn ideas into real-world products through workshops, mentoring and project development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
              >
                Contact Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-cyan-accent/60 hover:text-cyan-accent"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              <span>Arduino</span>
              <span className="h-px w-6 bg-border" />
              <span>ESP32</span>
              <span className="h-px w-6 bg-border" />
              <span>VLSI</span>
              <span className="h-px w-6 bg-border" />
              <span>IoT</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-md">
            {/* Orbiting rings */}
            <div aria-hidden className="absolute inset-0 -m-8 rounded-full border border-primary/20" />
            <div
              aria-hidden
              className="absolute inset-0 -m-16 rounded-full border border-cyan-accent/15"
              style={{ animation: "drift 30s linear infinite" }}
            />

            <div className="relative overflow-hidden rounded-3xl border border-border glow-ring">
              <img
                src={profileImg}
                alt="Shravan Murlidhar Wanve"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-3 backdrop-blur">
                <div>
                  <div className="font-display text-sm font-semibold">Shravan Wanve</div>
                  <div className="text-[11px] text-muted-foreground">B.Tech ENTC · Amravati</div>
                </div>
                <Sparkles className="h-5 w-5 text-cyan-accent" />
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="glass absolute -left-6 top-10 hidden rounded-2xl px-3 py-2 text-xs font-medium sm:block"
              style={{ animation: "float 7s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-primary" /> Embedded
              </div>
            </div>
            <div
              className="glass absolute -right-4 bottom-24 hidden rounded-2xl px-3 py-2 text-xs font-medium sm:block"
              style={{ animation: "float 8s ease-in-out 1s infinite" }}
            >
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-cyan-accent" /> IoT
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── ABOUT ───────────────── */
function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="01 — About" title="Engineer. Builder. Mentor." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass-card glass-card-hover rounded-3xl p-8">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold">My Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Become a skilled engineer and innovator capable of developing impactful products and solutions that solve
                real-world problems — while sharing what I learn through workshops, mentoring and project development.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Pill label="ENTC · B.Tech" />
                <Pill label="Diploma · 78%" />
                <Pill label="IEEE Member" />
                <Pill label="Workshops" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-lg leading-relaxed text-foreground/90">
                I am currently pursuing a <span className="text-foreground font-medium">B.Tech in Electronics and
                Telecommunication Engineering</span> and previously completed a Diploma in Electronics Engineering. My
                interests span Embedded Systems, IoT, Robotics, Automation and VLSI Physical Design.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I enjoy bridging hardware and software — from designing PCBs and writing firmware to deploying connected
                systems and guiding fellow students through their own engineering journeys.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h, i) => (
                  <Reveal key={h.label} delay={i * 60}>
                    <div className="glass-card glass-card-hover group flex gap-3 rounded-2xl p-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                        <h.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">{h.label}</div>
                        <div className="text-xs text-muted-foreground">{h.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-center text-xs font-medium text-muted-foreground">
      {label}
    </div>
  );
}

/* ───────────────── EDUCATION ───────────────── */
function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="02 — Education" title="Academic Foundation" />

        <div className="mt-14">
          <Reveal>
            <div className="glass-card glass-card-hover relative overflow-hidden rounded-3xl p-8 sm:p-10">
              <div
                aria-hidden
                className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.21_256/0.3),transparent_70%)] blur-2xl"
              />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 sm:flex sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-background shadow-[var(--shadow-glow)]">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-[0.18em] text-primary">Diploma · Completed</div>
                    <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                      Diploma in Electronics Engineering
                    </h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Dr. Panjabrao Deshmukh Polytechnic, Amravati
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl font-bold text-gradient">78%</div>
                  <div className="text-xs text-muted-foreground">2022 – 2025</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card glass-card-hover mt-5 rounded-3xl p-8 sm:p-10">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 sm:flex sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-accent/40 bg-cyan-accent/10 text-cyan-accent">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-[0.18em] text-cyan-accent">B.Tech · 3rd Year</div>
                    <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                      Electronics & Telecommunication Engineering
                    </h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Prof. Ram Meghe Institute of Technology and Research
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl font-bold text-foreground/80">Ongoing</div>
                  <div className="text-xs text-muted-foreground">3rd Year</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── EXPERIENCE ───────────────── */
function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="03 — Experience" title="Where I've Been Building" />

        <div className="relative mt-14">
          {/* Timeline rail */}
          <div
            aria-hidden
            className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-cyan-accent/40 to-transparent sm:block"
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 80}>
                <div className="relative grid gap-4 sm:grid-cols-[40px_1fr]">
                  <div className="hidden sm:block">
                    <div className="relative mt-6 grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-background">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="absolute -inset-2 rounded-full bg-primary/10 blur-md" />
                    </div>
                  </div>

                  <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                        <div className="mt-1 text-sm text-primary">{exp.org}</div>
                      </div>
                      <div className="flex shrink-0 flex-col items-end gap-1.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-2.5 py-1 text-[11px] text-muted-foreground">
                          <Calendar className="h-3 w-3" /> {exp.period}
                        </span>
                        <span className="rounded-full bg-cyan-accent/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-accent">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── SKILLS ───────────────── */
function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="04 — Skills" title="Toolbox" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <Layers className="h-4 w-4" /> Technical
              </div>
              <div className="space-y-5">
                {techSkills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-accent">
                <Lightbulb className="h-4 w-4" /> Professional
              </div>
              <div className="flex flex-wrap gap-2">
                {proSkills.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-surface/60 px-3.5 py-2 text-sm text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-cyan-accent/60 hover:text-cyan-accent"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="font-display text-lg font-semibold">Currently exploring</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  VLSI Physical Design flows · DFT methodologies · Industrial-grade IoT deployments.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">{name}</span>
          <span className="font-mono text-xs text-muted-foreground">{level}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-[image:var(--gradient-primary)] shadow-[0_0_12px_oklch(0.65_0.21_256/0.6)]"
            style={{
              width: `${level}%`,
              transition: "width 1.2s cubic-bezier(0.2,0.8,0.2,1)",
              transitionDelay: `${delay + 100}ms`,
            }}
          />
        </div>
      </div>
    </Reveal>
  );
}

/* ───────────────── SERVICES ───────────────── */
function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="05 — Services" title="What I Offer" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="glass-card glass-card-hover group relative h-full overflow-hidden rounded-3xl p-6">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.21_256/0.25),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-background">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PROJECTS ───────────────── */
function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="06 — Projects" title="Selected Work" />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-surface/70 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 rounded-3xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            More projects in robotics, automation, and VLSI coming soon — case studies in progress.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── ACHIEVEMENTS ───────────────── */
function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="07 — Impact" title="By the Numbers" />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="glass-card glass-card-hover rounded-3xl p-6 text-center sm:p-8">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, t: "Technical Workshops", d: "Conducted hands-on workshops across schools and colleges." },
            { icon: Users, t: "Student Training", d: "Mentored students on Arduino, IoT and automation projects." },
            { icon: Sparkles, t: "IEEE Participation", d: "Active member contributing to technical events." },
            { icon: Wrench, t: "Project Contributions", d: "Delivered embedded and automation systems end-to-end." },
            { icon: GraduationCap, t: "Engineering Mentorship", d: "Helped diploma and B.Tech students ship real projects." },
            { icon: CircuitBoard, t: "Atal Tinkering Labs", d: "Collaborated on hardware sessions for school labs." },
          ].map((a, i) => (
            <Reveal key={a.t} delay={i * 60}>
              <div className="glass-card glass-card-hover flex h-full gap-3 rounded-2xl p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-accent/10 text-cyan-accent">
                  <a.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold">{a.t}</div>
                  <div className="text-xs text-muted-foreground">{a.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CONTACT ───────────────── */
function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setSending(true);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    window.location.href = `mailto:shravanwanve@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="08 — Contact" title="Let's Build Something Innovative" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass-card flex h-full flex-col justify-between gap-6 rounded-3xl p-7">
              <div>
                <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Whether it's a project collaboration, mentorship, or a workshop request — I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-3">
                <ContactItem icon={Mail} label="Email" value="shravanwanve@gmail.com" href="mailto:shravanwanve@gmail.com" />
                <ContactItem icon={Phone} label="Phone" value="+91 74981 76331" href="tel:+917498176331" />
                <ContactItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="shravan-wanve"
                  href="https://www.linkedin.com/in/shravan-wanve-44097b312"
                />
                <ContactItem icon={MapPin} label="Location" value="Amravati, Maharashtra, India" />
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Amravati location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.70%2C20.85%2C77.85%2C20.99&layer=mapnik&marker=20.9374%2C77.7796"
                  className="h-44 w-full grayscale invert-[0.92]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="glass-card rounded-3xl p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your idea, project, or workshop request…"
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-primary)] px-5 py-3.5 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {sending ? "Sending…" : (<><Send className="h-4 w-4" /> Send Message</>)}
              </button>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <a
                  href="mailto:shravanwanve@gmail.com"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface/60 px-3 py-2.5 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
                <a
                  href="tel:+917498176331"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface/60 px-3 py-2.5 text-xs font-medium transition-colors hover:border-cyan-accent/50 hover:text-cyan-accent"
                >
                  <Phone className="h-3.5 w-3.5" /> Call
                </a>
                <a
                  href="https://www.linkedin.com/in/shravan-wanve-44097b312"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface/60 px-3 py-2.5 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) {
  const Body = (
    <div className="group flex items-center gap-3 rounded-2xl border border-border bg-surface/50 px-4 py-3 transition-all hover:border-primary/40">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {Body}
    </a>
  ) : (
    Body
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-base font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-background">
                SW
              </span>
              Shravan Murlidhar Wanve
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Engineering Ideas Into Reality — embedded systems, IoT, robotics, and VLSI projects built with care.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Navigate</div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Connect</div>
            <div className="mt-3 flex gap-2">
              <SocialBtn href="mailto:shravanwanve@gmail.com" icon={Mail} />
              <SocialBtn href="tel:+917498176331" icon={Phone} />
              <SocialBtn
                href="https://www.linkedin.com/in/shravan-wanve-44097b312"
                icon={Linkedin}
                external
              />
              <SocialBtn href="#" icon={Github} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Shravan Murlidhar Wanve. All rights reserved.</div>
          <div>Designed & Developed by Shravan Murlidhar Wanve</div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ href, icon: Icon, external }: { href: string; icon: any; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/60 text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

/* ───────────────── SHARED ───────────────── */
function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">{eyebrow}</span>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <div className="h-px w-16 bg-[image:var(--gradient-primary)]" />
      </div>
    </Reveal>
  );
}
