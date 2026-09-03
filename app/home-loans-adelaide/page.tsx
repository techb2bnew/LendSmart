import type { Metadata } from "next";
import { pageMetadata } from "@/app/lib/site";
import { homeLoansAdelaideContent } from "@/app/content/service-landing-pages";
import ServiceLandingTemplate from "@/app/pages-component/ServiceLandingTemplate";

export const metadata: Metadata = pageMetadata(
  homeLoansAdelaideContent.metaTitle,
  homeLoansAdelaideContent.metaDescription,
  `/${homeLoansAdelaideContent.slug}`
);

export default function HomeLoansAdelaidePage() {
  return <ServiceLandingTemplate content={homeLoansAdelaideContent} />;
}
