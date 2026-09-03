type RichTextSectionProps = {
  eyebrow?: string;
  heading?: string;
  headingHighlight?: string;
  paragraphs?: string[];
  listHeading?: string;
  listItems?: string[];
  closingParagraphs?: string[];
  bgClassName?: string;
  align?: "left" | "center";
};

export default function RichTextSection({
  eyebrow,
  heading,
  headingHighlight,
  paragraphs = [],
  listHeading,
  listItems,
  closingParagraphs = [],
  bgClassName = "bg-white",
  align = "left",
}: RichTextSectionProps) {
  const isCenter = align === "center";

  return (
    <section className={`px-4 py-10 sm:py-12 lg:px-8 lg:py-14 ${bgClassName}`}>
      <div className={`max-w-[1440px] mx-auto ${isCenter ? "text-center" : ""}`}>
        <div className={isCenter ? "mx-auto max-w-[820px]" : "max-w-[900px]"}>
          {eyebrow && (
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-[#79c44a]">
              {eyebrow}
            </p>
          )}

          {heading && (
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
          )}

          {paragraphs.length > 0 && (
            <div
              className={`mt-5 space-y-3 ${
                isCenter ? "" : "border-l-[5px] border-[#79c44a] pl-4"
              }`}
            >
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-7 text-[#333]">
                  {p}
                </p>
              ))}
            </div>
          )}

          {listItems && listItems.length > 0 && (
            <div className={paragraphs.length > 0 && !isCenter ? "border-l-[5px] border-[#79c44a] pl-4" : "mt-5"}>
              {listHeading && (
                <p className="mt-4 text-[15px] font-semibold leading-7 text-black">
                  {listHeading}
                </p>
              )}
              <ul
                className={`mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 ${
                  isCenter ? "text-left" : ""
                }`}
              >
                {listItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px] leading-7 text-black">
                    <span className="mt-[6px] text-[15px] leading-none text-[#3f7416]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {closingParagraphs.length > 0 && (
            <div className="mt-5 space-y-3">
              {closingParagraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-7 text-[#333]">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
