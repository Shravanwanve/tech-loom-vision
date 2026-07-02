import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Cpu,
  Wifi,
  CircuitBoard,
  Microscope,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
  Github,
  Calendar,
  
  Users,
  Sparkles,
  Award,
  Send,
  ChevronsDown,
  ChevronsUp,
  Asterisk,
  RadioTower,
  Satellite,
  Antenna,

} from "lucide-react";
import { toast } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { TypingText } from "@/components/portfolio/TypingText";
import { FloatingPCB } from "@/components/portfolio/FloatingPCB";
import { PCBScene } from "@/components/portfolio/PCBScene";
import { TiltCard } from "@/components/portfolio/TiltCard";
import { ProgressBar } from "@/components/portfolio/ProgressBar";
import { Counter } from "@/components/portfolio/Counter";
import profileImg from "@/assets/profile-shravan.jpg";
import projectFogger from "@/assets/project-fogger.jpg";
import projectEnergy from "@/assets/project-energy.jpg";
import projectWater from "@/assets/project-water.jpg";
import projectPlant from "@/assets/project-plant.jpg";


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

/* ───────────────── DATA ───────────────── */

const marqueeWords = [
  "EMBEDDED SYSTEMS",
  "IOT",
  "ROBOTICS",
  "VLSI",
  "ARDUINO",
  "ESP32",
  "PCB DESIGN",
  "SENSORS",
];

const skills = [
  { name: "Arduino", level: 95 },
  { name: "ESP32", level: 90 },
  { name: "IoT", level: 92 },
  { name: "PCB Design", level: 82 },
];

const services = [
  { num: "01", title: "Embedded Systems", short: "Hardware" },
  { num: "02", title: "IoT Systems", short: "Connected" },
  { num: "03", title: "PCB Design", short: "Schematic" },
  { num: "04", title: "Mentorship", short: "Workshops" },
];


const experiences = [
  {
    role: "Technical Trainer & Developer",
    org: "CircuitoClaro Solutions",
    period: "Jan 2026 — Present",
    type: "Full-time",
    desc: "Conducting hands-on workshops on Arduino, IoT and Robotics. Developing embedded and automation projects with Atal Tinkering Labs.",
    highlight: true,
  },
  {
    role: "IEEE Student Branch Member",
    org: "PRMIT&R, Amravati",
    period: "Jan 2026 — Present",
    type: "Member",
    desc: "Participating in technical events and contributing to student engagement and technical awareness programs.",
  },
  {
    role: "Summer Intern",
    org: "MDB Electrosoft",
    period: "May 2024 — Oct 2024",
    type: "Internship",
    desc: "Worked on electronics systems and embedded technologies. Assisted in PCB design, testing and prototyping.",
  },
];

const education = [
  {
    period: "2025 — Present",
    org: "PRMIT&R",
    title: "B.Tech in ENTC",
    desc: "3rd Year — Electronics & Telecommunication Engineering, focused on embedded systems and VLSI fundamentals.",
  },
  {
    period: "2022 — 2025",
    org: "Dr. PD Polytechnic",
    title: "Diploma in Electronics",
    desc: "Completed Diploma in Electronics Engineering with 78%, building strong fundamentals in circuits and hardware.",
  },
  {
    period: "Ongoing",
    org: "Self-led",
    title: "VLSI Physical Design",
    desc: "Learning floorplanning, place & route, timing closure and DFT methodologies through industry-aligned coursework.",
  },
];

const projects = [
  {
    id: "01",
    name: "IoT Fogger",
    meta: "(Duration: 14 Days)",
    tags: ["Arduino", "Sensors", "IoT"],
    img: projectFogger,
  },
  {
    id: "02",
    name: "Smart Energy Monitor",
    meta: "(Duration: 10 Days)",
    tags: ["ESP32", "Cloud", "Sensors"],
    img: projectEnergy,
  },
  {
    id: "03",
    name: "Water Level Controller",
    meta: "(Duration: 7 Days)",
    tags: ["Arduino", "Ultrasonic", "Relay"],
    img: projectWater,
  },
  {
    id: "04",
    name: "Soil Moisture & Auto Plant Watering",
    meta: "(Duration: 12 Days)",
    tags: ["ESP32", "Sensor", "Pump", "IoT"],
    img: projectPlant,
  },
];


/* ───────────────── PAGE ───────────────── */

function Portfolio() {
  return (
    <div id="home" className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Achievements />
      <Services />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-cream pb-12 pt-28 sm:pt-32">
      {/* Futuristic PCB layout + drone takeoff */}
      <PCBScene className="-z-10" />
      {/* Parallax PCB layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <FloatingPCB />
      </div>
      {/* Decorative squiggles */}
      <DecoSquiggle className="absolute right-6 top-16 hidden h-32 w-32 text-ink/70 sm:block" />
      <DecoSquiggle className="absolute left-2 top-1/2 hidden h-20 w-20 -translate-y-1/2 text-ink/60 md:block" />
      <div aria-hidden className="absolute right-12 top-44 hidden h-16 w-16 rotate-12 text-ink/80 lg:block">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-full w-full">
          <path d="M2 12 Q8 4 14 12 T22 12" />
        </svg>
      </div>
      <div aria-hidden className="absolute left-10 top-32 hidden h-0 w-0 border-l-[28px] border-l-transparent border-b-[40px] border-b-lime border-r-[28px] border-r-transparent md:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="relative">
            <h1 className="font-display text-[5.5rem] font-extrabold leading-none tracking-tight text-ink sm:text-[8rem] lg:text-[10rem]">
              Hey
            </h1>
            <div className="-mt-1 text-sm font-medium text-ink/60">— It's Shravan</div>

            <div className="mt-10 max-w-md">
              <h2 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                <TypingText
                  words={[
                    "Electronics Engineer",
                    "Embedded Developer",
                    "IoT Builder",
                    "VLSI / DFT Learner",
                    "Robotics Enthusiast",
                  ]}
                />
                <br />
                Based
                <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-0.5 text-base text-cream">
                  <Cpu className="h-3.5 w-3.5 text-lime" /> In India
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-md">
            {/* lime blob */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[50%] bg-lime"
              style={{ clipPath: "ellipse(48% 60% at 50% 55%)" }}
            />
            {/* circle ring */}
            <div aria-hidden className="absolute inset-0 -z-10 rounded-full border-2 border-ink/15" />
            <img
              src={profileImg}
              alt="Shravan Murlidhar Wanve"
              width={600}
              height={700}
              className="relative mx-auto block h-[360px] w-auto object-contain sm:h-[440px]"
            />

            {/* Side controls */}
            <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
              <SocialDot icon={Linkedin} href="https://www.linkedin.com/in/shravan-wanve-44097b312" />
              <SocialDot icon={Mail} href="mailto:shravanwanve@gmail.com" />
              <SocialDot icon={Github} href="#" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialDot({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 bg-paper text-ink transition-all hover:bg-ink hover:text-lime"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function DecoSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1="10" y1={10 + i * 8} x2="90" y2={10 + i * 8} />
      ))}
    </svg>
  );
}

/* ───────────────── MARQUEE STRIP ───────────────── */
function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative overflow-hidden border-y border-ink bg-ink py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl font-extrabold tracking-tight text-cream">{w}</span>
            <Asterisk className="h-6 w-6 text-lime" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────── ABOUT ───────────────── */
function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <Asterisk aria-hidden className="absolute right-10 top-16 hidden h-14 w-14 text-ink/70 lg:block" />
      <Asterisk aria-hidden className="absolute left-10 bottom-10 hidden h-14 w-14 text-ink/60 lg:block" />
      {/* Telecom signal decorations */}
      <RadioTower aria-hidden className="absolute right-6 bottom-24 hidden h-24 w-24 text-ink/10 lg:block" />
      <Satellite aria-hidden className="absolute left-1/3 top-10 hidden h-10 w-10 text-lime lg:block" />
      <SignalArcs className="absolute -left-6 top-1/2 hidden h-40 w-40 -translate-y-1/2 text-ink/15 md:block" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <span className="chip">ABOUT ME</span>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
              I'm an{" "}
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-0.5 align-middle">
                <span className="text-2xl font-bold sm:text-4xl">ENTC</span>
              </span>{" "}
              Engineer building{" "}
              <span className="inline-flex items-center gap-1 rounded-full bg-lime px-3 py-0.5 align-middle">
                <Antenna className="h-5 w-5" />
                <span>Smart Hardware</span>
              </span>{" "}
              &amp; IoT Systems.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink/65 sm:text-base">
              I design embedded systems, prototype IoT products, build robotics &amp; PCB projects,
              and mentor diploma &amp; engineering students through hands-on workshops — bridging
              circuits and real-world deployment.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.name} className="rounded-2xl border border-ink/12 bg-paper p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-lime/60">
                      <SkillIcon name={s.name} />
                    </div>
                    <div className="text-sm font-semibold text-ink">{s.name}</div>
                  </div>
                  <div className="font-mono text-xs font-bold text-ink/70">{s.level}%</div>
                </div>
                <ProgressBar value={s.level} className="mt-3" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillIcon({ name }: { name: string }) {
  const map: Record<string, any> = {
    Arduino: Cpu,
    ESP32: Wifi,
    IoT: CircuitBoard,
    "PCB Design": Microscope,
  };
  const Icon = map[name] ?? Sparkles;
  return <Icon className="h-5 w-5 text-ink" />;
}

function SignalArcs({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="50" cy="50" r="10" />
      <path d="M30 50 A20 20 0 0 1 70 50" />
      <path d="M20 50 A30 30 0 0 1 80 50" />
      <path d="M10 50 A40 40 0 0 1 90 50" />
    </svg>
  );
}


/* ───────────────── ACHIEVEMENTS ───────────────── */
const stats = [
  { value: 10, suffix: "+", label: "Workshops Delivered", icon: Users },
  { value: 12, suffix: "+", label: "Projects Built", icon: CircuitBoard },
  { value: 3, suffix: "+", label: "Years in Electronics", icon: Cpu },
  { value: 100, suffix: "+", label: "Students Mentored", icon: GraduationCap },
];

function Achievements() {
  return (
    <section className="relative overflow-hidden bg-lime-soft py-16 sm:py-20">
      <div aria-hidden className="absolute inset-0 opacity-40">
        <FloatingPCB />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="chip-dark">ACHIEVEMENTS</span>
          <div className="font-display text-xl font-bold text-ink sm:text-2xl">
            Numbers that power the journey
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <TiltCard className="rounded-2xl border border-ink/15 bg-paper p-5">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-lime">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <Award className="h-4 w-4 text-ink/40" />
                </div>
                <div className="mt-4 font-display text-4xl font-extrabold leading-none text-ink">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-ink/60">
                  {s.label}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── SERVICES (DARK BENTO) ───────────────── */
function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <div aria-hidden className="absolute inset-0 grid-faint opacity-50" />
      <ChevronsDown className="absolute left-10 top-16 hidden h-10 w-10 text-lime sm:block" />
      <div aria-hidden className="absolute bottom-12 right-10 h-3 w-3 rounded-full bg-lime" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
          <span className="chip">SERVICES</span>
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-snug sm:text-3xl">
              I build clean, reliable hardware &amp; embedded systems that fuse
              <br className="hidden md:block" />
              electronics, embedded systems &amp; IoT into real-world solutions.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[auto_1fr]">
          {/* Vertical labels */}
          <div className="hidden flex-col items-center justify-between border-l border-cream/15 pl-3 lg:flex">
            <ChevronsUp className="h-5 w-5 text-cream/60" />
            <div className="vert-text text-xs uppercase tracking-[0.3em] text-cream/70">Development</div>
            <div className="vert-text text-xs uppercase tracking-[0.3em] text-cream/70">Design</div>
            <ChevronsDown className="h-5 w-5 text-cream/60" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 60}>
                <TiltCard>
                  <ServiceCard num={s.num} title={s.title} short={s.short} highlight={i === 0 || i === 3} />
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  num,
  title,
  short,
  highlight,
}: {
  num: string;
  title: string;
  short: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`group flex h-full flex-col justify-between rounded-2xl border p-5 transition-all ${
        highlight
          ? "border-transparent bg-lime text-ink"
          : "border-cream/15 bg-cream text-ink hover:-translate-y-1"
      }`}
    >
      <div className="flex items-start justify-between text-xs font-mono">
        <span className="rounded-md bg-ink/10 px-2 py-0.5 text-[10px] font-semibold uppercase">{short}</span>
        <span className="font-display text-2xl font-extrabold">{num}</span>
      </div>
      <div className="mt-10">
        <div className="font-display text-xl font-bold leading-tight">{title}</div>
        <div className="mt-2 flex items-center justify-between text-xs">
          <span className="text-ink/70">Mastery</span>
          <span className="font-display text-2xl font-extrabold">95%</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────── JOURNEY (EXPERIENCE + EDUCATION) ───────────────── */
function Journey() {
  return (
    <section id="experience" className="relative bg-cream py-20 sm:py-28">
      <Asterisk aria-hidden className="absolute left-10 top-12 hidden h-10 w-10 text-ink/60 lg:block" />
      <Asterisk aria-hidden className="absolute right-1/3 top-1/3 hidden h-8 w-8 text-lime lg:block" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-[auto_1fr]">
          <span className="chip-dark">EXPERIENCE</span>
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              A Journey Through My Engineering Career,
              <br className="hidden md:block" />
              Building Real Hardware &amp; IoT Solutions.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[auto_1fr_1fr]">
          {/* Vertical JOURNEY label */}
          <div className="hidden flex-col items-center justify-between lg:flex">
            <Asterisk className="h-6 w-6 text-ink" />
            <div
              className="vert-text font-display text-[3.5rem] font-extrabold uppercase leading-none text-ink"
              style={{ WebkitTextStroke: "1px var(--ink)", color: "transparent" }}
            >
              JOURNEY
            </div>
            <ChevronsDown className="h-6 w-6 text-ink" />
          </div>

          {/* Experience column */}
          <div className="flex flex-col gap-4">
            {experiences.map((e, i) => (
              <Reveal key={e.role} delay={i * 80}>
                <article
                  className={`rounded-2xl border p-5 ${
                    e.highlight ? "border-transparent bg-lime" : "border-ink/12 bg-paper"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-medium text-ink/70">
                      <Calendar className="h-3 w-3" /> {e.period}
                    </span>
                    <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cream">
                      {e.type}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{e.role}</h3>
                  <div className="text-xs font-medium text-ink/60">{e.org}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{e.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Education column */}
          <div className="relative flex flex-col gap-4">
            <div aria-hidden className="absolute -left-3 top-2 hidden h-[calc(100%-1rem)] w-px border-l border-dashed border-ink/30 lg:block" />
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <article className="rounded-2xl border border-ink/12 bg-paper p-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-ink/70">{e.period}</span>
                    <span className="font-semibold text-ink/70">{e.org}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{e.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PROJECTS ───────────────── */
function Projects() {
  return (
    <section id="projects" className="relative bg-lime-soft py-20 sm:py-28">
      <ChevronsUp className="absolute left-10 bottom-16 hidden h-10 w-10 text-ink lg:block" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-[auto_1fr]">
          <span className="chip-dark">PROJECTS</span>
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              A Curated Collection of My Recent
              <br className="hidden md:block" />
              Embedded &amp; IoT Engineering Projects.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <TiltCard>
                <article className="paper-card paper-card-hover overflow-hidden">
                  <div className="flex items-start justify-between p-5 pb-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{p.name}</h3>
                      <div className="font-mono text-[11px] text-ink/55">{p.meta}</div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-ink/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="font-display text-2xl font-extrabold text-ink/80">{p.id}</span>
                  </div>
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.name} className="aspect-[4/3] w-full object-cover" />
                  </div>
                </article>
              </TiltCard>
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
    <section id="contact" className="relative bg-ink py-20 text-cream sm:py-28">
      <div aria-hidden className="absolute inset-0 grid-faint opacity-30" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr]">
          <span className="chip">CONTACT</span>
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-snug sm:text-3xl">
              Let's Connect, Collaborate and Build
              <br className="hidden md:block" />
              Innovative Hardware Together.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[auto_1.1fr_0.9fr]">
          {/* Vertical HELLO */}
          <div className="hidden items-end justify-center lg:flex">
            <div
              className="vert-text font-display text-[5rem] font-extrabold leading-none"
              style={{ WebkitTextStroke: "1.5px var(--cream)", color: "transparent" }}
            >
              HELLO
            </div>
          </div>

          {/* Form */}
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl bg-paper p-6 text-ink sm:p-7">
              <div className="mb-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">Service You Need</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Embedded", "IoT", "PCB", "Mentorship"].map((s, i) => (
                    <button
                      key={s}
                      type="button"
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        i === 0 ? "bg-lime text-ink" : "bg-secondary text-ink/70 hover:bg-ink hover:text-cream"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <Field label="Name" name="name" placeholder="Your name" />
              <div className="mt-3">
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mt-3">
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your idea, project or workshop…"
                  className="mt-1.5 w-full resize-none rounded-2xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {sending ? "Sending…" : (<><Send className="h-4 w-4" /> Contact Me</>)}
              </button>
            </form>
          </Reveal>

          {/* Side info */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-3">
              <ContactPill
                icon={Mail}
                label="Send your message"
                value="shravanwanve@gmail.com"
                href="mailto:shravanwanve@gmail.com"
                accent
              />
              <ContactPill
                icon={Phone}
                label="Let's Talk"
                value="+91 74981 76331"
                href="tel:+917498176331"
              />
              <ContactPill
                icon={Linkedin}
                label="LinkedIn"
                value="shravan-wanve"
                href="https://www.linkedin.com/in/shravan-wanve-44097b312"
              />
              <div className="overflow-hidden rounded-2xl border border-cream/15">
                <iframe
                  title="Amravati location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.70%2C20.85%2C77.85%2C20.99&layer=mapnik&marker=20.9374%2C77.7796"
                  className="h-36 w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-cream/15 px-4 py-3 text-xs text-cream/70">
                <MapPin className="h-4 w-4 text-lime" /> Amravati, Maharashtra, India
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactPill({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: any;
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all ${
        accent
          ? "bg-lime text-ink hover:scale-[1.01]"
          : "border border-cream/15 bg-cream/5 text-cream hover:bg-cream/10"
      }`}
    >
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
          accent ? "bg-ink text-lime" : "bg-cream/10 text-lime"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider opacity-70">{label}</div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
      <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
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
      <label className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
      />
    </div>
  );
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer className="bg-ink py-8 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-cream/15 px-4 pt-6 text-xs sm:flex-row sm:px-6">
        <div className="text-cream/60">© {new Date().getFullYear()} All rights reserved.</div>
        <div className="flex items-center gap-2 text-cream/70">
          <span className="h-2 w-2 rounded-full bg-lime" />
          Available for work
        </div>
        <div className="text-cream/60">Built by Shravan Wanve</div>
      </div>
    </footer>
  );
}
