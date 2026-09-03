export type FeatureItem = {
  title: string;
  description: string;
};

type FeatureGridSectionProps = {
  heading: string;
  headingHighlight?: string;
  description?: string;
  features: FeatureItem[];
  bgClassName?: string;
};

export default function FeatureGridSection({
  heading,
  headingHighlight,
  description,
  features,
  bgClassName = "bg-white",
}: FeatureGridSectionProps) {
  return (
    <section className={`px-4 py-10 sm:py-12 lg:px-8 lg:py-14 ${bgClassName}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[24px] font-extrabold leading-[1.12] tracking-[-0.02em] text-black sm:text-[30px] lg:text-[36px]">
            {headingHighlight && heading.includes(headingHighlight) ? (
              <>
                {heading.slice(0, heading.indexOf(headingHighlight))}
                <span className="text-[#7cc242]">{headingHighlight}</span>
                {heading.slice(heading.indexOf(headingHighlight) + headingHighlight.length)}
              </>
            ) : (
              heading
            )}
          </h2>
          {description && (
            <p className="mx-auto mt-3 text-[15px] leading-7 text-[#333]">{description}</p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[#dfe8d3] bg-[#F4F9F1] p-6 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3f7416] text-[15px] font-extrabold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-[16px] font-bold leading-snug text-black sm:text-[18px]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-[#333] sm:text-[15px] sm:leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
