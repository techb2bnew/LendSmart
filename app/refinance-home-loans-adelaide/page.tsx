import type { Metadata } from "next";
import { pageMetadata } from "@/app/lib/site";
import { refinanceHomeLoansAdelaideContent } from "@/app/content/service-landing-pages";
import ServiceLandingTemplate from "@/app/pages-component/ServiceLandingTemplate";

export const metadata: Metadata = pageMetadata(
  refinanceHomeLoansAdelaideContent.metaTitle,
  refinanceHomeLoansAdelaideContent.metaDescription,
  `/${refinanceHomeLoansAdelaideContent.slug}`
);

export default function RefinanceHomeLoansAdelaidePage() {
  return <ServiceLandingTemplate content={refinanceHomeLoansAdelaideContent} />;
}
