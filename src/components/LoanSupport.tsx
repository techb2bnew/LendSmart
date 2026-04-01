import Image from "next/image";

const supportItems = [
  {
    icon: "/home.png",
    label: "Buying your first home",
  },
  {
    icon: "/signing.png",
    label: "Refinancing an existing loan",
  },
  {
    icon: "/assets.png",
    label: "Financing business assets",
  },
  {
    icon: "/agreement.png",
    label: "Purchasing vehicles or equipment",
  },
];

export default function LoanSupport() {
  return (
    <section className="overflow-hidden bg-white py-14 lg:py-20">
      <div className="page-container sm:px-6 lg:px-10">
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[460px_1fr] lg:items-start lg:gap-8">
          {/* Left image */}
          <div className="relative z-10 flex justify-center lg:justify-start">
            <div className="relative h-[370px] w-full max-w-[360px] sm:h-[400px] sm:max-w-[400px] lg:h-[520px] lg:max-w-[430px]">
              <Image
                src="/family-house.png"
                alt="Loan support"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="relative lg:min-h-[520px]">
            <div className="relative z-20 lg:pl-2">
              <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[40px]">
                <span className="text-[#7cc242]">Loan Support</span> for
                <br />
                Different Needs
              </h2>

              <div className="mt-5 max-w-full border-l-[5px] border-[#79c44a] pl-4 sm:max-w-[82%]">
                <p className="text-[15px] leading-7 text-[#222]">
                  Most people find that mortgage financing is complicated and
                  confusing. We help you buy your dream home by simplifying the
                  mortgage financing process with personalized loan options that
                  save you time and money.
                </p>
              </div>
            </div>

            {/* Overlapping cards */}
            <div className="mt-6 lg:relative lg:left-[-140px] lg:z-30 lg:mt-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                {supportItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-[82px] w-full flex-row items-center gap-3 rounded-[12px] border border-[#9bd05c] bg-[#F4FBE9] px-4 py-4 shadow-[0_2px_0_rgba(0,0,0,0.02)] sm:px-5 lg:w-full"
                  >
                    <div className="relative h-[34px] w-[34px] shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <p className="text-[14px] font-semibold leading-[1.35] text-black sm:text-[15px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-black lg:ml-[120px]">
                <span className="font-bold text-[#1380d4]">Lend</span>
                <span className="font-bold text-[#7cc242]">Smart</span>{" "}
                Mortgages can help guide you through the financing process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}