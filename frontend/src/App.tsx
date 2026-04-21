import { useState } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Navbar from "./components/Navbar";
import CursorDot from "./components/CursorDot";
import MagneticLink from "./components/MagneticLink";
import BlurReveal from "./components/BlurReveal";
import ExperienceRow from "./components/ExperienceRow";
import ProjectTile from "./components/ProjectTile";
import "./animations.css";

const experienceItems = [
  {
    image: "./c1.png",
    title: "Capital One",
    subtitle: "Incoming Software Engineer Intern",
    year: "2026",
    description: "incoming 2026",
    tags: [],
  },
  {
    image: "./Labcast.png",
    title: "Stanford University",
    subtitle: "AI Research Platform",
    year: "2025",
    description:
      "Engineered an AI-powered research platform leveraging RAG and GPT-4.1 to process 10,000+ papers monthly and automate scientific discovery for researchers.",
    tags: ["Python", "Django", "OpenAI", "Pinecone", "Langchain"],
  },
  {
    image: "./Bhizchat.png",
    title: "Bhizchat",
    subtitle: "AI Commerce Assistant",
    year: "2024",
    description:
      "Developed an AI chatbot for Shopify stores, integrating GPT-4o and Pinecone's vector database with Socket.IO for seamless, context-aware conversations.",
    tags: ["TypeScript", "Node.js", "AWS EC2", "OpenAI", "Pinecone"],
  },
  {
    image: "./SCE.png",
    title: "SJSU SCE",
    subtitle: "Software & Computer Engineering Society",
    year: "2024",
    description:
      "Engineered and optimized secure RESTful APIs in Express.js with JWT, and streamlined CI/CD with GitHub Actions, shipping reliably to 500+ club members.",
    tags: ["JavaScript", "Node.js", "Jest Unit Testing", "CI/CD"],
  },
];

const projectItems = [
  {
    image: "./chillguy.png",
    title: "ChillGuy.ai",
    description:
      "An AI-powered mental health voice agent for stress relief and emotional support, built in 36 hours and awarded 2nd place at SCU's Hack for Humanity 2025 out of 330+ competitors.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "Google OAuth",
      "Twilio",
      "Eleven Labs",
    ],
    link: "https://devpost.com/software/chillguy-ai",
    pullQuote: "2nd place, out of 330+",
    accolade: "SCU H4H · 2nd Place · 2025",
    variant: "hero" as const,
  },
  {
    image: "./VIVI.png",
    title: "VIVI",
    description:
      "An AI storytelling companion for neurodivergent children with real-time face tracking with OpenCV, voice understanding via Whisper, and adaptive visual storytelling to foster reading.",
    tags: ["Python", "FastAPI", "React", "OpenCV", "Whisper"],
    link: "https://devpost.com/software/vivi-qj6fug",
    accolade: "HackDavis · 2025",
    variant: "standard" as const,
  },
  {
    image: "./openscript4.png",
    title: "OpenScript",
    description:
      "An AI video-script generator that learns a creator's voice and taps live social-media trends to produce engaging, on-brand scripts at a fraction of the usual effort.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    link: "https://www.openscript.me/",
    variant: "standard" as const,
  },
  {
    image: "./studybuddy.png",
    title: "StudyBuddy",
    description:
      "An automated deadline management tool connecting Canvas, Google Calendar, and AI to deliver personalized daily SMS reminders, ensuring students never miss an assignment.",
    tags: ["React", "Node.js", "OpenAI", "Canvas API", "Google Calendar API"],
    link: "https://github.com/deeedaniel/studybuddy",
    variant: "wide" as const,
  },
];

function App() {
  const [openExp, setOpenExp] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-cream text-ink-900 font-sans relative">
      <CursorDot />
      <Navbar />

      {/* ─────────────────────────────── Hero */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center pt-20 pb-16"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 grid md:grid-cols-[1.45fr_1fr] gap-10 md:gap-16 items-center">
          {/* Left — kinetic serif headline */}
          <div className="pt-6 md:pt-10">
            <p className="rise delay-100 font-mono text-[11px] uppercase tracking-[0.3em] text-taupe mb-6">
              <span className="inline-block w-6 h-px bg-taupe align-middle mr-3" />
              Arman Bance · Portfolio · 2026
            </p>

            <h1 className="font-display text-ink-900 font-normal leading-[0.92] tracking-tightest text-[clamp(2.5rem,7vw,6.5rem)]">
              <span className="block rise delay-200">Software</span>
              <span className="block rise delay-300 text-terracotta">
                engineer
              </span>
              <span className="block rise delay-400">building</span>
              <span className="block rise delay-500">
                at scale<span className="text-terracotta">.</span>
              </span>
            </h1>

            <div className="rise delay-700 mt-8 flex items-baseline gap-4 font-mono text-sm text-ink-500">
              <span className="inline-block w-6 h-px bg-ink-500/40" />
              <span>currently:</span>
              <span className="text-ink-900">
                <Typewriter
                  options={{
                    strings: [
                      "grinding leetcode",
                      "prototyping AI agents",
                      "winning hackathons",
                      "a junior @ San Jose State",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    deleteSpeed: 20,
                  }}
                />
              </span>
            </div>

            <div className="rise delay-900 mt-10 flex items-center gap-6 md:gap-8 flex-wrap">
              <MagneticLink as="span" strength={0.35} radius={100}>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-40}
                  className="group inline-flex items-center gap-3 cursor-pointer"
                >
                  <span className="relative font-sans text-sm tracking-wide text-ink-900">
                    Selected work
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-ink-900 origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0" />
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-terracotta origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                  </span>
                  <span className="w-8 h-px bg-ink-900/40 group-hover:bg-terracotta transition-colors" />
                  <span className="font-display italic text-sm text-ink-900/60 group-hover:text-terracotta transition-colors">
                    ↓
                  </span>
                </Link>
              </MagneticLink>

              <a
                href="mailto:armanbance@gmail.com"
                className="font-sans text-sm tracking-wide text-ink-900/60 hover:text-ink-900 transition-colors"
              >
                armanbance@gmail.com
              </a>
            </div>
          </div>

          {/* Right — duotone portrait */}
          <div className="relative w-full max-w-[320px] md:max-w-[340px] ml-auto rise delay-600">
            <div className="relative overflow-hidden aspect-[3/4] bg-cream-200 rounded-sm">
              <img
                src="./ArmanProfilePic.png"
                alt="Arman Bance"
                className="w-full h-full object-cover duotone-portrait"
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-taupe">
              <span>fig. 01</span>
              <span>— San Jose, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── Experience */}
      <section id="experience" className="relative pt-24 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <BlurReveal>
            <div className="flex items-baseline justify-between mb-12 md:mb-16">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-taupe mb-3">
                  § 01 — Experience
                </p>
                <h2 className="font-display text-ink-900 text-5xl md:text-7xl tracking-tighter leading-[0.95]">
                  My engineering{" "}
                  <span className="italic text-terracotta">journey</span>.
                </h2>
              </div>
              <p className="hidden md:block font-display italic text-taupe text-base max-w-[22ch] text-right leading-snug">
                From startups and student orgs to enterprise scale.
              </p>
            </div>
          </BlurReveal>

          <BlurReveal delay={150}>
            <ul className="list-none">
              {experienceItems.map((item, i) => (
                <ExperienceRow
                  key={item.title}
                  item={item}
                  index={i}
                  total={experienceItems.length}
                  isOpen={openExp === i}
                  onToggle={() => setOpenExp(openExp === i ? null : i)}
                />
              ))}
            </ul>
          </BlurReveal>
        </div>
      </section>

      {/* ─────────────────────────────── Projects */}
      <section id="projects" className="relative pt-16 md:pt-24 pb-24 md:pb-36 bg-cream-50">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <BlurReveal>
            <div className="flex items-baseline justify-between mb-14 md:mb-20">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-taupe mb-3">
                  § 02 — Selected Projects
                </p>
                <h2 className="font-display text-ink-900 text-5xl md:text-7xl tracking-tighter leading-[0.95]">
                  Things I <span className="italic text-terracotta">built</span>
                  .
                </h2>
              </div>
              <p className="hidden md:block font-display italic text-taupe text-base max-w-[22ch] text-right leading-snug">
                Hackathon wins, side-projects, and working AI products.
              </p>
            </div>
          </BlurReveal>

          {/* Asymmetric editorial grid */}
          <div className="space-y-20 md:space-y-28">
            {/* Row 1 — ChillGuy, full-width hero */}
            <BlurReveal>
              <ProjectTile item={projectItems[0]} variant="hero" />
            </BlurReveal>

            {/* Row 2 — VIVI + OpenScript, equal columns */}
            <BlurReveal delay={100}>
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                <ProjectTile item={projectItems[1]} variant="standard" />
                <ProjectTile item={projectItems[2]} variant="standard" />
              </div>
            </BlurReveal>

            {/* Row 3 — Spartan Fitness, half-width offset */}
            <BlurReveal delay={150}>
              <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-center">
                <ProjectTile item={projectItems[3]} variant="wide" />
                <div className="hidden md:block">
                  <p className="font-display italic text-ink-900 text-3xl leading-snug max-w-[22ch]">
                    "Won 1st place overall at SCE Hacks!"
                  </p>
                  <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-taupe">
                    — fig. 04
                  </div>
                </div>
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── About */}
      <section id="about" className="relative py-24 md:py-36">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          <BlurReveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-taupe mb-6">
              § 03 — Colophon
            </p>
            <h2 className="font-display text-ink-900 text-5xl md:text-7xl tracking-tighter leading-[0.95] mb-14 md:mb-20">
              A little about <span className="italic text-terracotta">me</span>.
            </h2>
          </BlurReveal>

          <BlurReveal delay={150}>
            <div className="md:columns-2 md:gap-12 md:[column-rule:1px_solid_rgba(14,26,43,0.1)]">
              <p className="dropcap font-sans text-lg md:text-xl text-ink-700 leading-[1.75] mb-6 break-inside-avoid">
                I'm a junior Computer Science student at San Jose State
                University with a strong passion for solving complex problems
                and shipping applications that actually get used.
              </p>
              <p className="font-sans text-base md:text-lg text-ink-700 leading-[1.75] mb-6 break-inside-avoid">
                Building at the intersection of{" "}
                <em className="font-display italic text-terracotta">
                  software engineering
                </em>
                , <em className="font-display italic text-terracotta">cloud</em>
                , and{" "}
                <em className="font-display italic text-terracotta">
                  applied AI.
                </em>
              </p>
              <p className="font-sans text-base md:text-lg text-ink-700 leading-[1.75] mb-6 break-inside-avoid">
                My favorite project was <em>ChillGuy.ai</em>, a voice-powered
                mental-health agent I built with Twilio and ElevenLabs that took
                2nd place at Santa Clara's Hack for Humanity, out of 330+
                competitors.
              </p>
              <p className="font-sans text-base md:text-lg text-ink-700 leading-[1.75] break-inside-avoid">
                My goal is to keep building meaningful products that combine
                technical prowess and user-focused design.
              </p>
            </div>
          </BlurReveal>

          <BlurReveal delay={350}>
            <div className="mt-24 md:mt-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-ink-900/15 pt-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-taupe mb-4">
                  — Get in touch
                </p>
                <h3 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1] text-ink-900">
                  Let's build{" "}
                  <span className="italic text-terracotta">something</span>.
                </h3>
              </div>
              <div className="flex gap-8 font-sans text-sm">
                <MagneticLink
                  as="a"
                  href="mailto:armanbance@gmail.com"
                  strength={0.3}
                  radius={90}
                  className="group inline-flex items-center gap-2 text-ink-900"
                >
                  <span className="relative">
                    Email
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-ink-900 origin-left transition-transform duration-500 group-hover:scale-x-0" />
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-terracotta origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                  </span>
                  <span>↗</span>
                </MagneticLink>
                <MagneticLink
                  as="a"
                  href="https://www.linkedin.com/in/arman-bance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.3}
                  radius={90}
                  className="group inline-flex items-center gap-2 text-ink-900"
                >
                  <span className="relative">
                    LinkedIn
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-ink-900 origin-left transition-transform duration-500 group-hover:scale-x-0" />
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-terracotta origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                  </span>
                  <span>↗</span>
                </MagneticLink>
                <MagneticLink
                  as="a"
                  href="https://github.com/armanbance"
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.3}
                  radius={90}
                  className="group inline-flex items-center gap-2 text-ink-900"
                >
                  <span className="relative">
                    GitHub
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-ink-900 origin-left transition-transform duration-500 group-hover:scale-x-0" />
                    <span className="absolute left-0 -bottom-1 w-full h-px bg-terracotta origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                  </span>
                  <span>↗</span>
                </MagneticLink>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* ─────────────────────────────── Footer */}
      <footer className="border-t border-ink-900/15">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-taupe">
          <span>© 2026 · Arman Bance</span>
          <span className="italic font-display text-sm normal-case tracking-normal text-ink-500">
            Set in Fraunces & Inter.
          </span>
          <span>handcrafted · san jose</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
