"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({
  end,
  duration = 1500,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#F4FBE9] pt-8 pb-4 sm:pt-10 overflow-hidden">
      <div className="page-container sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-end">
          {/* left */}
          <div className="lg:pt-2">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-black">
              About <span className="text-[#1380d4]">Lend</span>
              <span className="text-[#7cc242]">Smart</span> Mortgages
            </h2>

            <div className="mt-5 border-l-[5px] border-[#79c44a] pl-4">
              <p className="text-[15px] leading-7 text-[#222]">
                LendSmart Mortgages helps individuals, families, and businesses
                access the right loan solutions with confidence.
              </p>

              <p className="mt-1 text-[15px] leading-7 text-[#222]">
                We work with a wide network of lenders to help you find loan
                options that suit your financial goals. Whether you are
                purchasing a home, financing a vehicle, or expanding your
                business, we guide you through the entire loan process.
              </p>

              <p className="mt-2 text-[15px] font-semibold leading-7 text-black">
                Our goal is to make borrowing{" "}
                <span className="text-[#79c44a]">
                  simple, transparent, and stress-free.
                </span>
              </p>
            </div>

            
          </div>

          {/* right */}
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-center lg:justify-end">
            <div>
            {/* stats */}
            <div className="mt-16 flex   items-start gap-14 sm:gap-20">
              <div className="min-w-[110px]">
                <div className="text-[40px] sm:text-[40px] leading-none font-extrabold text-black">
                  <Counter end={78} suffix="%" />
                </div>
                <div className="mt-2 text-[14px] leading-5 text-black">
                  Business from Referrals
                </div>
              </div>

              <div className="min-w-[110px]">
                <div className="text-[40px] sm:text-[40px] leading-none font-extrabold text-black">
                  <Counter end={45} suffix="+" />
                </div>
                <div className="mt-2 text-[14px] leading-5 text-black">
                  Minute Verbal Commitment
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="mt-8 h-[1px] w-full max-w-[500px] bg-[#d7dfca]" />

            {/* bottom row */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between max-w-[500px]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                      style={{ backgroundColor: "var(--color-green-mint)" }}
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-${i === 1
                            ? "1507003211169-0a1dd7228f2d"
                            : i === 2
                              ? "1494790108377-be9c29b29330"
                              : "1472099645785-5658abf4ff4e"
                          }?w=80&q=80`}
                        alt={`Client ${i}`}
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-[13px] leading-[1.1] text-black">
                  <div className="font-bold">8665+</div>
                  <div>Popular Clients</div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full border border-[#8ebc64] px-8 text-[14px] font-medium text-[#5e9730] transition hover:bg-[#e5edd7]"
              >
                Know More About Us
                <ArrowRight size={15} />
              </Link>
            </div>
            </div>
            <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px] h-[300px] sm:h-[380px] lg:h-[400px]">

              {/* person image */}
              <div className="absolute bottom-0 left-1/2 z-10 h-full w-full max-h-[280px] -translate-x-1/2 sm:max-h-none">
                <Image
                  src="/land-smart.png"
                  alt="LendSmart advisor" 
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_12px_18px_rgba(0,0,0,0.24)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}