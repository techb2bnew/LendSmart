export type SolutionBlock = {
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

type SolutionBlocksSectionProps = {
  heading: string;
  headingHighlight?: string;
  description?: string;
  blocks: SolutionBlock[];
  bgClassName?: string;
};

export default function SolutionBlocksSection({
  heading,
  headingHighlight,
  description,
  blocks,
  bgClassName = "bg-[#F4F9F1]",
}: SolutionBlocksSectionProps) {
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

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-[#dfe8d3] bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)] sm:p-7"
            >
              <h3 className="text-[18px] font-bold leading-snug text-black sm:text-[20px]">
                {block.title}
              </h3>

              <div className="mt-3 space-y-3">
                {block.paragraphs.map((p, i) => (
                  <p key={i} className="text-[14px] leading-6 text-[#333] sm:text-[15px] sm:leading-7">
                    {p}
                  </p>
                ))}
              </div>

              {/* {block.listItems && block.listItems.length > 0 && (
                <ul className="mt-4 space-y-2 border-l-[3px] border-[#79c44a] pl-3">
                  {block.listItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] leading-6 text-black sm:text-[15px]"
                    >
                      <span className="mt-[5px] text-[14px] leading-none text-[#3f7416]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
