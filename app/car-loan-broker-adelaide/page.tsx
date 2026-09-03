import type { Metadata } from "next";
import { pageMetadata } from "@/app/lib/site";
import { carLoanBrokerAdelaideContent } from "@/app/content/service-landing-pages";
import ServiceLandingTemplate from "@/app/pages-component/ServiceLandingTemplate";

export const metadata: Metadata = pageMetadata(
  carLoanBrokerAdelaideContent.metaTitle,
  carLoanBrokerAdelaideContent.metaDescription,
  `/${carLoanBrokerAdelaideContent.slug}`
);

export default function CarLoanBrokerAdelaidePage() {
  return <ServiceLandingTemplate content={carLoanBrokerAdelaideContent} />;
}
