import { profile } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-zinc-500 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-3xl font-semibold text-white sm:text-6xl">
            {profile.name}
          </p>
          <p className="mt-3">Designed as a cinematic developer portfolio.</p>
        </div>
        <div className="flex gap-5">
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
