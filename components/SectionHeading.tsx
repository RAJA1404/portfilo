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
    <div className="mb-9 max-w-5xl sm:mb-16">
      <p className="text-sm font-semibold uppercase text-blue-400">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-6xl">
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
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
