import { profile } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Designed and built for {profile.name}.</p>
        <div className="flex gap-5">
          <a href={profile.githubUrl} className="transition hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedinUrl} className="transition hover:text-white">
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
