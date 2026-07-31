type SectionHeadingProps = {
  eyebrow?: string; // Kept for backwards compatibility but unused visually
  title: string;
  description?: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-9 max-w-5xl sm:mb-16">
      <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl font-display">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
