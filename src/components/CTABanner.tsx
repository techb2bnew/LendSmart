import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative bg-white">
      {/* Full-bleed mint: starts ~⅓ down the green card (::before), same idea as Hero */}
      <div className="relative z-10 w-screen max-w-[100vw] left-1/2 -translate-x-1/2 pt-10 sm:pt-12 lg:pt-16 pb-10 sm:pb-12 lg:pb-16">
        <div className="page-container sm:px-6 lg:px-8">
          <div
            className="relative mx-auto w-full
              before:pointer-events-none before:absolute before:left-1/2 before:top-[30%] sm:before:top-[31%] lg:before:top-[33%]
              before:bottom-[-70px] sm:before:bottom-[-64px] lg:before:bottom-[-64px] before:z-0 before:w-screen before:-translate-x-1/2 before:bg-[#F4FBE9]
              before:content-['']"
          >
            <div className="relative z-10 mx-auto rounded-[14px] bg-gradient-to-b from-[#5ea814] to-[#2f660d] px-5 py-8 shadow-[0_10px_24px_rgba(0,0,0,0.08)] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Left text */}
                <div className="w-full lg:max-w-[55%]">
                  <h2 className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[32px] lg:text-[38px] xl:text-[40px]">
                    A team of industry pros to guide <br className="hidden sm:block" /> you each step of the
                    way
                  </h2>

                  <p className="mt-5 text-[15px] leading-7 text-[#f1f7e9]">
                    Most people find that mortgage financing is complicated and
                    confusing. We help you buy your dream home by simplifying the
                    mortgage financing process with personalized loan options that
                    save you time and money.
                  </p>
                </div>

                {/* Right content */}
                <div className="flex min-w-[210px] flex-col items-start gap-4 lg:items-start">
                  <a
                    href="mailto:info@lendsmartmortgages.com"
                    className="flex items-center gap-2 text-[14px] font-medium text-white transition hover:text-[#e9f6da]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>info@lendsmartmortgages.com</span>
                  </a>

                  <a
                    href="tel:0413206624"
                    className="flex items-center gap-2 text-[14px] font-medium text-white transition hover:text-[#e9f6da]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>0413 206 624</span>
                  </a>

                  <a
                    href="https://wa.me/61413206624"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[30px] items-center gap-2 rounded-[6px] bg-white pr-3 text-[11px] font-medium text-[#222] transition hover:bg-[#f4f4f4]"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
