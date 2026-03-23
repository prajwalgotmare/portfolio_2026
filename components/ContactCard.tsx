import SocialLogo from "@/components/SocialLogo";

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
  icon: "email" | "github" | "linkedin";
};

const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 7.5L12 13.5L20 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.25"
        y="5.25"
        width="17.5"
        height="13.5"
        rx="2.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 .75C5.787.75.75 5.79.75 12.01c0 4.974 3.223 9.195 7.694 10.684.562.104.768-.244.768-.542 0-.268-.01-.978-.015-1.92-3.129.68-3.79-1.508-3.79-1.508-.512-1.304-1.25-1.651-1.25-1.651-1.022-.699.077-.685.077-.685 1.13.08 1.725 1.16 1.725 1.16 1.005 1.723 2.637 1.225 3.278.936.103-.728.393-1.225.715-1.507-2.497-.284-5.123-1.249-5.123-5.559 0-1.227.439-2.23 1.159-3.016-.116-.284-.503-1.429.11-2.98 0 0 .945-.302 3.096 1.152A10.77 10.77 0 0 1 12 6.2c.955.005 1.917.129 2.815.38 2.149-1.454 3.093-1.152 3.093-1.152.615 1.551.228 2.696.112 2.98.722.786 1.158 1.789 1.158 3.016 0 4.321-2.63 5.272-5.135 5.551.404.348.764 1.035.764 2.087 0 1.507-.014 2.723-.014 3.093 0 .301.202.651.772.54 4.468-1.492 7.688-5.712 7.688-10.683C23.25 5.79 18.213.75 12 .75Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M4.983 3.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5ZM3.5 8.5h2.966V20.5H3.5V8.5ZM9 8.5h2.844v1.639h.04c.396-.75 1.364-1.84 2.809-1.84c3.003 0 3.557 1.977 3.557 4.548V20.5h-2.966v-6.785c0-1.619-.029-3.698-2.252-3.698c-2.253 0-2.598 1.759-2.598 3.58V20.5H9V8.5Z" />
    </svg>
  )
} as const;

const iconWrapClasses = {
  email: "border border-blue-100 bg-blue-50 text-blue-600",
  github: "border border-slate-200 bg-slate-50 text-slate-950",
  linkedin: "border border-blue-100 bg-blue-50 text-blue-600"
} as const;

export default function ContactCard({
  label,
  value,
  href,
  icon
}: ContactCardProps) {
  const isExternal = href.startsWith("http");
  const socialIcon = icon === "github" || icon === "linkedin";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconWrapClasses[icon]}`}
        >
          {socialIcon ? (
            <SocialLogo icon={icon} className="h-5 w-5" />
          ) : (
            icons[icon]
          )}
        </div>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-slate-300 transition group-hover:text-blue-300"
          aria-hidden="true"
        >
          <path
            d="M8 16L16 8M10 8H16V14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <p className="meta-label mt-6">
        {label}
      </p>
      <p className="mt-3 break-words text-base font-semibold leading-7 text-slate-950">
        {value}
      </p>
    </a>
  );
}
