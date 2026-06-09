type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const words = title.split(" ");

  return (
    <div className="mb-12 max-w-5xl sm:mb-16">
      <p className="text-sm font-semibold uppercase text-blue-400">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="mr-3 inline-block overflow-hidden align-bottom"
          >
            <span className="inline-block">{word}</span>
          </span>
        ))}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
