type ProjectCardProps = {
  title: string;
  company: string;
  problem: string;
  built: string;
  impact: string;
  stack: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export default function ProjectCard({
  title,
  company,
  problem,
  built,
  impact,
  stack,
  links = []
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <p className="eyebrow">
        {company}
      </p>

      <h3 className="card-title mt-4">
        {title}
      </h3>

      <div className="mt-6 space-y-4">
        {[
          { label: "Problem", value: problem },
          { label: "Built", value: built },
          { label: "Impact", value: impact }
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="meta-label">
              {item.label}
            </p>
            <p className="body-primary mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
