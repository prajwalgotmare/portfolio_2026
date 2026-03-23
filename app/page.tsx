import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ContactCard from "@/components/ContactCard";
import Reveal from "@/components/Reveal";
import SocialLogo from "@/components/SocialLogo";

const portrait = "/images/portrait.jpg";
const linkedinSessionThumb = "/images/linkedin-session-thumb.jpg";
const aithinkersLogo = "/logos/aithinkers.png";
const klizerLogo = "/logos/klizer-icon.png";
const technoExponentLogo = "/logos/techno-exponent.png";
const shyenaLogo = "/logos/shyena.png";

const highlights = [
  {
    kicker: "Experience",
    value: "7+ years",
    label: "LLM · NLP · ML in production",
    valueClassName: "stat-value"
  },
  {
    kicker: "Shipping",
    value: "10+ production systems",
    label: "Clinical trials, SEO, forecasting, Teaching Platform and many more",
    valueClassName: "card-title"
  },
  {
    kicker: "Stack",
    value: "LLM · AWS · LangGraph",
    label: "OpenAI · LangChain · FastAPI · SageMaker",
    valueClassName: "card-title"
  },
  {
    kicker: "Impact",
    value: "26k+ products · +15% accuracy",
    label: "Across SEO, forecasting, and data pipelines",
    valueClassName: "card-title"
  }
];

const heroLinks = [
  {
    label: "GitHub",
    href: "https://github.com/prajwalgotmare",
    icon: "github" as const,
    hoverClass:
      "hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prajwalgotmare/",
    icon: "linkedin" as const,
    hoverClass:
      "hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
  }
];

const projects = [
  {
    title: "Clinical Trials Data Pipeline",
    company: "AIThinkers x Decentrialz",
    problem:
      "Clinical trial data was fragmented and hard to search.",
    built:
      "Built AWS pipeline with AI enrichment and OpenSearch.",
    impact:
      "Delivered cleaner data and faster retrieval in production.",
    stack: ["Python", "AWS", "Lambda", "ECS", "OpenSearch"],
    links: [
      {
        label: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/"
      },
      {
        label: "Decentrialz",
        href: "https://decentrialz.com"
      }
    ]
  },
  {
    title: "AI SEO Platform",
    company: "Virginia Tile",
    problem:
      "26k+ products needed SEO content without manual bottlenecks.",
    built:
      "Built FastAPI + React platform with OpenAI and Gemini.",
    impact:
      "Scaled consistent product and FAQ content across the catalog.",
    stack: ["FastAPI", "React", "OpenAI", "Gemini", "AWS"],
    links: [
      {
        label: "Virginia Tile",
        href: "https://virginiatile.com/"
      }
    ]
  },
  {
    title: "Demand Forecasting System",
    company: "Klizer x Marysville Marine",
    problem:
      "1000+ SKUs lacked unified demand visibility across ERP and ecommerce.",
    built:
      "Built SageMaker forecasting platform with XGBoost and FastAPI.",
    impact:
      "+10-15% forecast accuracy and stronger inventory decisions.",
    stack: ["XGBoost", "SageMaker", "Airbyte", "PostgreSQL", "FastAPI"],
    links: [
      {
        label: "Marysville Marine",
        href: "https://marysvillemarine.com/"
      },
      {
        label: "Klizer",
        href: "https://www.klizer.com/"
      }
    ]
  }
];

const experience = [
  {
    yearLabel: "2025 - Now",
    period: "May 2025 - Present",
    role: "Senior Data Scientist",
    company: "AIThinkers",
    companyHref: "https://www.aithinkers.com/",
    logo: aithinkersLogo,
    logoAlt: "AIThinkers logo",
    logoFrameClassName: "h-16 w-16",
    points: [
      "Own end-to-end delivery from architecture to production.",
      "Lead AWS implementations that improve data quality and reliability."
    ]
  },
  {
    yearLabel: "2024 - 2025",
    period: "May 2024 - May 2025",
    role: "AI Engineer",
    company: "Klizer (DCKAP)",
    companyHref: "https://www.klizer.com/",
    logo: klizerLogo,
    logoAlt: "Klizer logo",
    logoFrameClassName: "h-14 w-14",
    points: [
      "Owned AI delivery for forecasting and assistant workflows.",
      "Connected models, backend services, and business data into usable systems."
    ]
  },
  {
    yearLabel: "2023 - 2024",
    period: "May 2023 - May 2024",
    role: "Senior Software Engineer",
    company: "Techno Exponent",
    companyHref: "https://www.technoexponent.com/",
    logo: technoExponentLogo,
    logoAlt: "Techno Exponent logo",
    logoFrameClassName: "h-14 w-14",
    points: [
      "Built multilingual tutoring products with AI-assisted workflows.",
      "Expanded reach to 15+ languages with cleaner integrations."
    ]
  },
  {
    yearLabel: "2019 - 2023",
    period: "Apr 2019 - Jan 2023",
    role: "Data Scientist",
    company: "Shyena Tech Yarns",
    companyHref: "https://shyenatechyarns.com/",
    logo: shyenaLogo,
    logoAlt: "Shyena Tech Yarns logo",
    logoFrameClassName: "h-11 w-24",
    points: [
      "Built NLP logistics products, including an Alexa freight-rate experience.",
      "Raised engagement 25% in three months."
    ]
  }
];

const writingItems = [
  {
    eyebrow: "Article",
    title: "How AI Chatbots in Ecommerce Provide 24/7 Customer Support",
    description:
      "AI chatbots in ecommerce support.",
    href: "https://www.klizer.com/blog/how-ai-chatbots-in-ecommerce-provide-24-7-customer-support/",
    cta: "Read article"
  },
  {
    eyebrow: "GitHub",
    title: "GitHub Profile",
    description:
      "Code and experiments across AI systems.",
    href: "https://github.com/prajwalgotmare",
    cta: "Open GitHub"
  },
  {
    eyebrow: "LinkedIn",
    title: "LinkedIn Profile",
    description:
      "Experience, writing, and public profile.",
    href: "https://www.linkedin.com/in/prajwalgotmare/",
    cta: "Open LinkedIn"
  }
];

const contacts = [
  {
    label: "Email",
    value: "prajwalvgotmare@gmail.com",
    href: "mailto:prajwalvgotmare@gmail.com",
    icon: "email" as const
  },
  {
    label: "GitHub",
    value: "github.com/prajwalgotmare",
    href: "https://github.com/prajwalgotmare",
    icon: "github" as const
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/prajwalgotmare",
    href: "https://www.linkedin.com/in/prajwalgotmare/",
    icon: "linkedin" as const
  }
];

const speakingSession = {
  title: "Power of LLMs in E-Commerce: Accelerating Growth with Advanced AI Strategies",
  description:
    "LLMs for ecommerce growth, support, and operations.",
  date: "September 26, 2024",
  thumbnail: linkedinSessionThumb,
  href: "https://www.linkedin.com/events/powerofllmsinecommerce-accelera7236308485955575808/theater/",
  cta: "Open featured talk"
};

const youtubeVideos = [
  {
    id: "PA_PAZZjzyg",
    title:
      "Story of Voyager program and its Golden record | क्या एलियंस सुनेंगे इंसानों की आवाज़ ?",
    description:
      "Voyager, the Golden Record, and life beyond Earth."
  },
  {
    id: "0HCGm7n0K5w",
    title:
      "अंग्रेजों ने लूटी हुई 3 सबसे महंगी चीजें ! | 3 Most Expensive things - BRITISH looted from INDIA",
    description:
      "Colonial-era theft and iconic artifacts from India."
  },
  {
    id: "INdKvYhhcIY",
    title:
      "5 Biggest threats to Humanity | ...क्या हैं ? मानवता के लिए खतरा !",
    description:
      "Long-term risks, human progress, and civilization."
  }
];

type ExperienceItem = (typeof experience)[number];

function ExperienceLogo({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex justify-center">
      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-soft lg:h-28 lg:w-28 lg:p-4">
        <div className={`relative ${item.logoFrameClassName}`}>
          <Image
            src={item.logo}
            alt={item.logoAlt}
            fill
            sizes="(min-width: 1024px) 112px, 96px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function ExperienceDate({
  item,
  className = ""
}: {
  item: ExperienceItem;
  className?: string;
}) {
  return (
    <p
      className={`min-w-[112px] whitespace-nowrap text-sm font-medium leading-6 text-slate-400 ${className}`}
    >
      {item.yearLabel}
    </p>
  );
}

function ExperienceDetails({
  item,
  className = "",
  showYear = true
}: {
  item: ExperienceItem;
  className?: string;
  showYear?: boolean;
}) {
  return (
    <div className={className}>
      {showYear && <ExperienceDate item={item} />}

      <p className={`${showYear ? "mt-3" : ""} text-xl font-semibold leading-7 text-slate-950`}>
        {item.role} at{" "}
        <a
          href={item.companyHref}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 transition hover:text-blue-700"
        >
          {item.company}
        </a>
      </p>

      <p className="meta-text mt-2">{item.period}</p>

      <div className="mt-4 space-y-3">
        {item.points.map((point) => (
          <p key={point} className="body-primary">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top" className="pb-20">
        <section className="mx-auto max-w-6xl px-6 pt-8 lg:px-8 lg:pt-12">
          <div className="section-card overflow-hidden">
            <div className="grid gap-8 p-7 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-x-10 lg:gap-y-7 lg:p-10">
              <Reveal direction="left">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Open to opportunities
                  </div>

                  <h1 className="hero-title">
                    Prajwal Gotmare
                  </h1>
                  <p className="mt-3 text-xl font-medium leading-7 text-slate-700">
                    AI Engineer · LLM Systems · Production ML
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    {heroLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={link.label}
                        title={link.label}
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition duration-200 ${link.hoverClass}`}
                      >
                        <SocialLogo icon={link.icon} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>

                  <p className="body-primary mt-4 max-w-2xl">
                    <span className="block">
                      I build LLM systems that ship to production.
                    </span>
                    <span className="mt-1 block text-slate-500">
                      Pipelines · Forecasting · AI Platforms · AWS
                    </span>
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#projects"
                      className="button-primary"
                    >
                      See My Work
                    </a>
                    <a
                      href="mailto:prajwalvgotmare@gmail.com"
                      className="button-secondary"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={120}>
                <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[1.85rem] border border-blue-200/80 bg-gradient-to-br from-blue-50 via-white to-slate-100 p-2.5 shadow-soft">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-blue-100/80 bg-slate-100">
                    <Image
                      src={portrait}
                      alt="Portrait of Prajwal Gotmare"
                      fill
                      sizes="(min-width: 1024px) 320px, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-2" delay={180}>
                <div className="rounded-[1.75rem] border border-blue-100/80 bg-gradient-to-r from-blue-50/90 via-slate-50 to-blue-50/80 p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <p className="eyebrow text-blue-700">
                      Key highlights
                    </p>
                    <p className="body-secondary text-slate-500">
                      Quick signals from shipped work.
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-4">
                    {highlights.map((item, index) => (
                      <div
                        key={item.label}
                        className="group relative overflow-hidden rounded-[1.5rem] border border-white/90 bg-white/95 p-5 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-1 hover:border-blue-200"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                        <div className="absolute -right-5 -top-8 h-20 w-20 rounded-full bg-blue-100/70 blur-2xl" />

                        <div className="relative flex h-full flex-col">
                          <div className="flex items-center justify-between gap-3">
                            <p className="meta-label text-blue-600">
                              {item.kicker}
                            </p>
                            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-xs font-semibold leading-5 text-blue-300">
                              0{index + 1}
                            </span>
                          </div>

                          <p className={`${item.valueClassName} mt-4 max-w-[16ch] text-slate-950`}>
                            {item.value}
                          </p>
                          <p className="body-secondary mt-2 max-w-[22ch] text-slate-700">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-6xl px-6 pt-16 lg:px-8 lg:pt-20"
        >
          <div className="section-card p-8 sm:p-10 lg:p-12">
            <Reveal>
              <div className="flex flex-col gap-4">
                <p className="eyebrow">Experience</p>
                <h2 className="section-title">
                  A track record across AI, backend, and data systems
                </h2>
                <p className="body-primary max-w-3xl">
                  Product, machine learning, and backend delivery.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-12">
              <div className="absolute bottom-0 left-[280px] top-0 hidden w-px bg-slate-200 lg:block" />

              <div className="space-y-12 lg:space-y-16">
                {experience.map((item, index) => {
                  const isRight = index % 2 === 0;

                  return (
                    <Reveal
                      key={item.period}
                      delay={index * 90}
                      direction={isRight ? "right" : "left"}
                    >
                      <article>
                        <div className="grid gap-4 sm:grid-cols-[112px_minmax(0,1fr)] lg:hidden">
                          <ExperienceLogo item={item} />
                          <ExperienceDetails item={item} />
                        </div>

                        <div className="hidden lg:grid lg:grid-cols-[220px_72px_220px_minmax(0,1fr)] lg:items-start lg:gap-6">
                          <div>
                            {!isRight && (
                              <div className="flex items-start justify-end gap-4">
                                <ExperienceDate item={item} className="pt-11 text-right" />
                                <ExperienceLogo item={item} />
                              </div>
                            )}
                          </div>

                          <div className="flex justify-center pt-[50px]">
                            <span className="z-10 h-3 w-3 rounded-full bg-slate-300 ring-4 ring-[#f5f7fb]" />
                          </div>

                          <div>
                            {isRight && (
                              <div className="flex items-start gap-4">
                                <ExperienceLogo item={item} />
                                <ExperienceDate item={item} className="pt-11" />
                              </div>
                            )}
                          </div>

                          <ExperienceDetails item={item} className="pt-2" showYear={false} />
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-6xl px-6 pt-16 lg:px-8 lg:pt-20"
        >
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="eyebrow">Selected Projects</p>
                <h2 className="section-title">
                  Case studies from production AI systems
                </h2>
                <p className="body-primary max-w-3xl">
                  Three projects: problem, build, impact.
                </p>
              </div>
            </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} className="h-full" delay={index * 90}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="writing"
          className="mx-auto max-w-6xl px-6 pt-20 lg:px-8 lg:pt-24"
        >
          <div className="section-card overflow-hidden border border-slate-200/90 p-8 sm:p-10 lg:px-12 lg:py-14">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow">Writing & Talks</p>
                <h2 className="section-title">
                  Public proof beyond delivery work
                </h2>
                <p className="body-primary max-w-3xl">
                  Writing, talks, side work.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.16fr)_minmax(320px,0.84fr)] xl:items-stretch">
              <Reveal direction="left" className="h-full">
                <div className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-7">
                  <p className="meta-label">
                    Featured Talk
                  </p>

                  <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-2.5 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.28)]">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[1.1rem] bg-[#f8fafc]">
                      <Image
                        src={speakingSession.thumbnail}
                        alt={speakingSession.title}
                        fill
                        sizes="(min-width: 1280px) 42vw, (min-width: 640px) 80vw, 100vw"
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col">
                    <div>
                      <h3 className="card-title max-w-[20ch]">
                        {speakingSession.title}
                      </h3>
                      <p className="body-secondary mt-3 max-w-[34rem]">
                        {speakingSession.description}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <span className="meta-pill">{speakingSession.date}</span>
                      <span className="meta-pill">LinkedIn talk</span>
                    </div>

                    <a
                      href={speakingSession.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="button-primary mt-6 w-full self-start sm:w-auto"
                    >
                      {speakingSession.cta}
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="grid auto-rows-fr gap-5">
                {writingItems.map((item, index) => (
                  <Reveal
                    key={item.title}
                    direction="right"
                    className="h-full"
                    delay={80 + index * 60}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7"
                    >
                      <p className="eyebrow">
                        {item.eyebrow}
                      </p>

                      <div className="mt-4 flex flex-1 flex-col">
                        <h3 className="card-title max-w-[24ch]">
                          {item.title}
                        </h3>
                        <p className="body-secondary mt-3 flex-1 max-w-[34ch]">
                          {item.description}
                        </p>
                        <span className="mt-6 text-sm font-medium text-blue-600">
                          {item.cta}
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={140}>
              <div className="mt-10">
                <p className="meta-label">
                  Explorations
                </p>
                <p className="body-secondary mt-2 max-w-2xl">
                  A lighter outlet for storytelling, editing, and curiosity.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {youtubeVideos.map((video, index) => (
                    <Reveal
                      key={video.id}
                      className="h-full"
                      delay={180 + index * 60}
                    >
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-[1.1rem] bg-slate-200">
                          <img
                            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                            alt={video.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-3 pb-2">
                          <p className="eyebrow">
                            Exploration
                          </p>
                          <h3 className="mt-2 text-xl font-semibold leading-7 text-slate-950">
                            {video.title}
                          </h3>
                          <p className="body-secondary mt-2 flex-1">
                            {video.description}
                          </p>
                          <span className="mt-4 text-sm font-medium text-blue-600">
                            Watch on YouTube
                          </span>
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 pt-20 lg:px-8 lg:pt-24"
        >
          <div className="section-card p-10 sm:p-12 lg:px-14 lg:py-16">
            <Reveal>
              <div className="max-w-2xl">
                <p className="eyebrow">Contact</p>
                <h2 className="section-title mt-4">
                  Reach out
                </h2>
                <p className="body-primary mt-5">
                  Email, GitHub, or LinkedIn.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {contacts.map((contact, index) => (
                <Reveal key={contact.label} className="h-full" delay={index * 80}>
                  <ContactCard {...contact} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
