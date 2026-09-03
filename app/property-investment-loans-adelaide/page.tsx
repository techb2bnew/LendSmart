import type { Metadata } from "next";
import { pageMetadata } from "@/app/lib/site";
import { propertyInvestmentLoansAdelaideContent } from "@/app/content/service-landing-pages";
import ServiceLandingTemplate from "@/app/pages-component/ServiceLandingTemplate";

export const metadata: Metadata = pageMetadata(
  propertyInvestmentLoansAdelaideContent.metaTitle,
  propertyInvestmentLoansAdelaideContent.metaDescription,
  `/${propertyInvestmentLoansAdelaideContent.slug}`
);

export default function PropertyInvestmentLoansAdelaidePage() {
  return <ServiceLandingTemplate content={propertyInvestmentLoansAdelaideContent} />;
}
