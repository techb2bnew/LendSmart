import Image from "next/image";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative  bg-white">
      {/* top content area */}
      <div className="page-container pt-10 sm:pt-14 lg:pt-16 relative z-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-start gap-10 lg:gap-6">
          {/* left content */}
          <div className="lg:pl-12 xl:pl-12 pt-6 lg:pt-10">
            <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[40px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#222222]">
              Smart <span className="text-[#84c441]">Loan</span> Solutions for
              <br />
              Your Financial Goals
            </h1>

            <p className="mt-4 text-[14px] leading-6 text-[#333333]">
              We make the loan process simple, transparent, and tailored to your
              needs.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="tel:0413208624"
                className="inline-flex h-[42px] items-center gap-2 rounded-[2px] bg-[#3f7416] px-5 text-white shadow-sm transition hover:opacity-95"
              >
                <Phone size={15} strokeWidth={2.6} />
                <span className="text-[14px] font-semibold">Call Now</span>
              </a>

              <a
                href="https://wa.me/61413208624"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-[#cfcfcf] pb-1 text-[14px] font-medium text-[#222]"
              >

                <Image
                  src="/icon.png"
                  alt="Whatsapp"
                  width={30}
                  height={30}
                  priority
                  className="object-contain"
                />
                <span>Click here to chat</span>
              </a>
            </div>
          </div>

          {/* top right image */}
          <div className="relative flex justify-center lg:justify-end lg:pr-10  z-10">
            <div className="relative h-[250px] w-full max-w-[300px] sm:h-[290px] sm:max-w-[350px] lg:h-[400px] lg:max-w-[500px] overflow-hidden rounded-[16px] ">
              <Image
                src="/hero.png"
                alt="Hero house"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed mint band: starts ~28% below image top (::before), image sits above (z-10) */}
      <div className="relative z-10 mt-[-40px] md:mt-[-10px] lg:mt-[-60px] w-screen max-w-[100vw] left-1/2 -translate-x-1/2 pb-10 lg:pb-14">
        <div className="page-container sm:px-6 lg:px-8">
          <div
            className="relative mx-auto w-full
              before:pointer-events-none before:absolute before:left-1/2 before:top-[26%] sm:before:top-[27%] lg:before:top-[28%]
              before:bottom-[-48px] lg:before:bottom-[-56px] before:z-0 before:w-screen before:-translate-x-1/2 before:bg-[#F4FBE9]
              before:content-['']"
          >
            <div className="relative z-10 w-full overflow-hidden rounded-[14px] shadow-[0_16px_35px_rgba(0,0,0,0.14)]">
              <div className="relative h-[200px] w-full min-h-[180px] sm:h-[300px] md:h-[360px] lg:h-[430px]">
                <Image
                  src="/hero-banner.png"
                  alt="Hero banner"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}