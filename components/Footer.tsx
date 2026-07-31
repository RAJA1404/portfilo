import { profile } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-zinc-400 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Building reliable software.
          </p>
        </div>
        <div className="flex gap-5 font-medium">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
