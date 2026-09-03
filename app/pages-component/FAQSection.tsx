"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  items: FAQItem[];
  bgClassName?: string;
};

export default function FAQSection({
  heading = "Frequently Asked Questions",
  headingHighlight = "Asked",
  description,
  items,
  bgClassName = "bg-white",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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

        <div className="mx-auto mt-10 max-w-[900px] space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[14px] border border-[#dfe8d3] bg-[#F4F9F1]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-[15px] font-semibold text-black sm:text-[16px]">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[#3f7416] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  id={panelId}
                  role="region"
                  className={isOpen ? "block" : "hidden"}
                >
                  <p className="px-5 pb-4 text-[14px] leading-6 text-[#333] sm:px-6 sm:text-[15px] sm:leading-7">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
