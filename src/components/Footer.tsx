"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const quickLinks = ["Home", "Services", "About Us", "Contact Us"];
const services = [
  "Residential Home Loans",
  "Commercial Loans",
  "Personal Loans",
  "Car & Truck Loans",
  "Asset Finance",
  "Construction Loans",
];
const company = [
  "Terms & Condition",
  "Privacy Policy",
  "Calculate Mortgage",
  "History & Fidelity",
];

const accordionIds = {
  quick: "quick",
  services: "services",
  company: "company",
  contact: "contact",
} as const;

type AccordionId = (typeof accordionIds)[keyof typeof accordionIds];

function FooterAccordionSection({
  id,
  title,
  isOpen,
  onToggle,
  children,
}: {
  id: AccordionId;
  title: string;
  isOpen: boolean;
  onToggle: (id: AccordionId) => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-[#d7dfca] lg:border-0 lg:border-transparent">
      <button
        type="button"
        className="flex w-full min-h-[48px] items-center justify-between gap-3 py-3 text-left lg:hidden"
        aria-expanded={isOpen}
        aria-controls={`footer-panel-${id}`}
        onClick={() => onToggle(id)}
      >
        <span className="text-[18px] font-bold text-black sm:text-[22px]">{title}</span>
        <ChevronDown
          size={22}
          className={`shrink-0 text-[#333] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <h4 className="hidden text-[22px] font-bold text-black lg:block">{title}</h4>

      <div
        id={`footer-panel-${id}`}
        role="region"
        aria-label={title}
        className={`${isOpen ? "block" : "max-lg:hidden"} lg:block`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openId, setOpenId] = useState<AccordionId | null>(null);

  const toggle = (id: AccordionId) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="overflow-hidden bg-[#F4FBE9]">
      {/* Newsletter */}
      <div className="px-4 pt-8 lg:pt-10">
        <div className="w-full sm:px-6 lg:page-container lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
            <h3 className="text-left text-[22px] font-extrabold leading-[1.05] text-black sm:text-[28px]">
              Subscribe to
              <br />
              Our Newsletter
            </h3>

            <div className="flex w-full max-w-[640px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="min-h-[48px] sm:min-h-[52px] lg:min-h-[48px] min-w-0 flex-1 rounded-[4px] border border-[#9bd05c] bg-transparent px-4 py-3 text-[14px] text-black outline-none placeholder:text-[#b9b9b9]"
              />
              <button
                type="button"
                className="h-[44px] cursor-pointer rounded-[4px] bg-[#1f1f1f] px-6 text-[13px] font-medium text-white transition hover:bg-black"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-[#d7dfca]" />
        </div>
      </div>

      {/* Main footer */}
      <div className="relative px-4 lg:px-0 pb-8 pt-10 lg:pb-10 lg:pt-12">
        <div className="w-full sm:px-6 lg:page-container lg:px-8">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.35fr_0.55fr_0.7fr_0.55fr_0.75fr] lg:gap-8">
            {/* Brand — always expanded */}
            <div className="max-w-none pb-8 lg:max-w-[330px] lg:pb-0">
              <div className="relative h-[54px] w-[155px]">
                <Image
                  src="/LendSmart-Logo.png"
                  alt="LendSmart Mortgages"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="mt-4 text-[15px] leading-7 text-[#444]">
                With a rich history spanning decades, our club has become a
                symbol of excellence in the golfing community, offers a
                challenging yet rewarding game play.
              </p>

              <div className="mt-6 flex items-center gap-5 text-black">
                <a href="#" aria-label="Facebook" className="transition hover:text-[#79c44a]">
                  <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 8h3V4h-3c-3.3 0-6 2.7-6 6v3H5v4h3v7h4v-7h4l1-4h-5v-3c0-1.1.9-2 2-2Z" />
                  </svg>
                </a>
                <a href="#" aria-label="X" className="transition hover:text-[#79c44a]">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.1l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="transition hover:text-[#79c44a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.03A1.97 1.97 0 1 0 5.25 3.1a1.97 1.97 0 0 0 0 3.94ZM20.44 20h-3.37v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V20H9.7V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.42 0 4.05 2.25 4.05 5.18V20Z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="transition hover:text-[#79c44a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <FooterAccordionSection
              id={accordionIds.quick}
              title="Quick Links"
              isOpen={openId === accordionIds.quick}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 lg:mt-5 lg:pb-0">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[14px] text-[#333] transition hover:text-[#79c44a]">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordionSection>

            {/* Services */}
            <FooterAccordionSection
              id={accordionIds.services}
              title="Services"
              isOpen={openId === accordionIds.services}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 lg:mt-5 lg:pb-0">
                {services.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-[#333] transition hover:text-[#79c44a]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordionSection>

            {/* Company */}
            <FooterAccordionSection
              id={accordionIds.company}
              title="Company"
              isOpen={openId === accordionIds.company}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 lg:mt-5 lg:pb-0">
                {company.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-[#333] transition hover:text-[#79c44a]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordionSection>

            {/* Contact */}
            <FooterAccordionSection
              id={accordionIds.contact}
              title="Our Contact"
              isOpen={openId === accordionIds.contact}
              onToggle={toggle}
            >
              <ul className="space-y-3 pb-4 text-[14px] text-[#333] lg:mt-5 lg:pb-0">
                <li>
                  <a href="mailto:bharat@lendsmart.com.au" className="transition hover:text-[#79c44a]">
                    bharat@lendsmart.com.au
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@lendsmart.com.au" className="transition hover:text-[#79c44a]">
                    admin@lendsmart.com.au
                  </a>
                </li>
                <li className="pt-2">
                  <a href="tel:0413206624" className="transition hover:text-[#79c44a]">
                    0413 206 624
                  </a>
                </li>
              </ul>
            </FooterAccordionSection>
          </div>

          {/* Bottom right image */}
          <div className="pointer-events-none mt-8   justify-end lg:absolute lg:bottom-[54px] lg:right-0 lg:mt-0 hidden lg:flex">
            <div className="relative h-[180px] w-[200px] sm:h-[220px] sm:w-[250px] lg:h-[230px] lg:w-[280px]">
              <Image
                src="/house-loan-footer.png"
                alt="House loan footer"
                fill
                className="object-contain object-right-bottom"
              />
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-[#d7dfca] hidden lg:flex" />

          {/* Bottom row */}
          <div className="flex flex-col gap-3 pt-6 text-[14px] text-[#555] lg:flex-row lg:items-center lg:justify-between">
            <p>©2026 All Rights Reserved | LendSmartmortgages | Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
