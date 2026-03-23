const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing & Talks" },
  { href: "#contact", label: "Contact" }
];

const resumeHref =
  "https://drive.google.com/file/d/10aW63rwmPaOjurI7DeWmCNEQQMPrylbZ/view?usp=sharing";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#top"
          className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-900"
        >
          Prajwal Gotmare
        </a>

        <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
