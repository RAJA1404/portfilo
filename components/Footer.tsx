import { profile } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-muted">Building reliable software.</p>
        </div>
        <div className="flex gap-5 font-medium">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
