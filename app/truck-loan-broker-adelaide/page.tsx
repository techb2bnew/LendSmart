import type { Metadata } from "next";
import { pageMetadata } from "@/app/lib/site";
import { truckLoanBrokerAdelaideContent } from "@/app/content/service-landing-pages";
import ServiceLandingTemplate from "@/app/pages-component/ServiceLandingTemplate";

export const metadata: Metadata = pageMetadata(
  truckLoanBrokerAdelaideContent.metaTitle,
  truckLoanBrokerAdelaideContent.metaDescription,
  `/${truckLoanBrokerAdelaideContent.slug}`
);

export default function TruckLoanBrokerAdelaidePage() {
  return <ServiceLandingTemplate content={truckLoanBrokerAdelaideContent} />;
}
