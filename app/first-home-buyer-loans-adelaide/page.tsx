import type { Metadata } from "next";
import { pageMetadata } from "@/app/lib/site";
import { firstHomeBuyerLoansAdelaideContent } from "@/app/content/service-landing-pages";
import ServiceLandingTemplate from "@/app/pages-component/ServiceLandingTemplate";

export const metadata: Metadata = pageMetadata(
  firstHomeBuyerLoansAdelaideContent.metaTitle,
  firstHomeBuyerLoansAdelaideContent.metaDescription,
  `/${firstHomeBuyerLoansAdelaideContent.slug}`
);

export default function FirstHomeBuyerLoansAdelaidePage() {
  return <ServiceLandingTemplate content={firstHomeBuyerLoansAdelaideContent} />;
}
