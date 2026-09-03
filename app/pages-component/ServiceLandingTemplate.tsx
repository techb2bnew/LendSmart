import Link from "next/link";
import type { ServiceLandingContent } from "@/app/content/service-landing-pages";
import MainSection from "./MainSection";
import RichTextSection from "./RichTextSection";
import SolutionBlocksSection from "./SolutionBlocksSection";
import FeatureGridSection from "./FeatureGridSection";
import LoanProcess from "./LoanProcess";
import FAQSection from "./FAQSection";
import Testimonials from "./Testimonials";

type ServiceLandingTemplateProps = {
  content: ServiceLandingContent;
};

export default function ServiceLandingTemplate({ content }: ServiceLandingTemplateProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <MainSection
        title={content.hero.breadcrumbLabel}
        titleContent={
          <>
            <Link href="/" className="text-[#79c44a] hover:text-[#5ea933]">
              Home
            </Link>
            {" / "}
            <span className="text-[#1e1e1e]">{content.hero.breadcrumbLabel}</span>
          </>
        }
        heading={content.hero.heading}
        headingHighlight={content.hero.headingHighlight}
        description={content.hero.description}
        extraDescription={content.hero.extraDescription}
        featurePoints={content.hero.featurePoints}
        image={content.hero.image}
        sectionBgClassName="bg-[#E8F5E9]"
        callText="Call Now"
        callLink="tel:0413 206 624"
        chatText="Chat With Us"
        chatLink="https://wa.me/61413206624"
      />

      <RichTextSection
        eyebrow={content.intro.eyebrow}
        heading={content.intro.heading}
        headingHighlight={content.intro.headingHighlight}
        paragraphs={content.intro.paragraphs}
        listHeading={content.intro.listHeading}
        listItems={content.intro.listItems}
        closingParagraphs={content.intro.closingParagraphs}
        bgClassName="bg-white"
      />

      <SolutionBlocksSection
        heading={content.solutions.heading}
        headingHighlight={content.solutions.headingHighlight}
        description={content.solutions.description}
        blocks={content.solutions.blocks}
        bgClassName="bg-[#F4F9F1]"
      />

      <FeatureGridSection
        heading={content.whyChoose.heading}
        headingHighlight={content.whyChoose.headingHighlight}
        description={content.whyChoose.description}
        features={content.whyChoose.features}
        bgClassName="bg-white"
      />

      <LoanProcess
        normalText={content.process.normalText}
        highlightText={content.process.highlightText}
        breakText={content.process.breakText}
        description={content.process.description}
        steps={content.process.steps}
        buttonText="Chat With Us"
        buttonLink="https://wa.me/61413206624"
      />

      <RichTextSection
        heading={content.whoWeHelp.heading}
        headingHighlight={content.whoWeHelp.headingHighlight}
        paragraphs={content.whoWeHelp.paragraphs}
        listItems={content.whoWeHelp.listItems}
        closingParagraphs={content.whoWeHelp.closingParagraphs}
        bgClassName="bg-[#F4F9F1]"
      />

      <RichTextSection
        heading={content.compare.heading}
        headingHighlight={content.compare.headingHighlight}
        paragraphs={content.compare.paragraphs}
        bgClassName="bg-white"
      />

      <RichTextSection
        heading={content.getStarted.heading}
        headingHighlight={content.getStarted.headingHighlight}
        paragraphs={content.getStarted.paragraphs}
        bgClassName="bg-[#EEF4E4]"
        align="center"
      />

      <FAQSection
        heading={content.faqs.heading}
        headingHighlight={content.faqs.headingHighlight}
        description={content.faqs.description}
        items={content.faqs.items}
        bgClassName="bg-white"
      />

      {content.testimonials && (
        <Testimonials
          title={content.testimonials.title}
          description={content.testimonials.description}
          reviews={content.testimonials.reviews}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
