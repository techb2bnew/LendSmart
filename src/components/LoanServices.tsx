"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "residential",
    title: "Residential Home Loans",
    description:
      "Helping home buyers and property investors secure suitable mortgage solutions.",
    details: [
      "First home buyer loans",
      "Home purchase loans",
      "Refinancing options",
      "Investment property loans",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Loans",
    description:
      "Tailored financing solutions for businesses, offices, retail spaces, and commercial properties.",
    details: [],
  },
  {
    id: "personal",
    title: "Personal Loans",
    description:
      "Flexible personal loan solutions for lifestyle, travel, education, or urgent needs.",
    details: [],
  },
  {
    id: "car",
    title: "Car & Truck Loans",
    description:
      "Competitive vehicle finance options for personal and commercial transport needs.",
    details: [],
  },
  {
    id: "asset",
    title: "Asset Finance",
    description:
      "Finance solutions for equipment, machinery, and essential business assets.",
    details: [],
  },
  {
    id: "construction",
    title: "Construction Loans",
    description:
      "Structured funding support for new builds and property construction projects.",
    details: [],
  },
];

export default function LoanServices() {
  const [activeId, setActiveId] = useState("residential");
  const activeService = services.find((service) => service.id === activeId);

  return (
    <section id="services" className="relative z-10 -mt-10 sm:-mt-12 lg:-mt-14 sm:px-6 lg:px-8">
      <div className="page-container rounded-[12px] bg-[#171717] py-7 shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8 lg:px-10 lg:py-10 ">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[500px] w-full max-w-[280px] overflow-hidden rounded-t-[999px] rounded-b-[999px] sm:h-[480px] sm:max-w-[300px] lg:h-[620px] lg:max-w-[300px] xl:max-w-[320px]">
              <Image
                src="/our-loan.png"
                alt="Loan services"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="pt-1">
            <div className="mb-6 text-center lg:mb-8 lg:text-right">
              <div className="inline-flex flex-row-reverse items-center gap-3 sm:gap-4 lg:flex-row lg:gap-4">
                <div className="min-w-0 text-left lg:text-right">
                  <h2 className="text-[28px] font-extrabold leading-none text-white sm:text-[34px] lg:text-[40px]">
                    Our Loan Services
                  </h2>
                  <p className="mt-2 text-[14px] leading-snug text-[#a3a3a3] sm:text-[16px] lg:text-[17px]">
                    There are so many Loan &amp; financing options
                  </p>
                </div>
                <span className="hidden h-10 w-1 shrink-0 rounded-full bg-[#7cc242] sm:block sm:h-[48px]" />
              </div>
            </div>

            <div className="space-y-2.5">
              {services.map((service) => {
                const isActive = activeId === service.id;

                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    className={`cursor-pointer overflow-hidden rounded-[10px] border transition-all duration-300 ${
                      isActive
                        ? "border-[#66b11f] bg-gradient-to-r from-[#4f9b15] to-[#2f5c0e]"
                        : "border-[#494949] bg-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between px-5 py-4">
                      <h3
                        className={`text-[16px] font-semibold ${
                          isActive ? "text-white" : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <ArrowRight
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${
                          isActive ? "rotate-180 text-white" : "text-white"
                        }`}
                      />
                    </div>

                    {isActive && activeService && (
                      <div className="border-t border-white/15 px-5 pb-4 pt-3">
                        <p className="max-w-[520px] text-[13px] leading-5 text-white/95">
                          {activeService.description}
                        </p>

                        {activeService.details.length > 0 && (
                          <div className="mt-3">
                            <p className="mb-1.5 text-[13px] font-semibold text-white">
                              Services include:
                            </p>
                            <ul className="space-y-1">
                              {activeService.details.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-[12px] leading-4 text-white/90"
                                >
                                  <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-white" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}