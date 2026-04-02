import Image from "next/image";

const steps = [
  {
    num: 1,
    title: "Contact Us",
    desc: "Reach out by phone, WhatsApp, or online form to discuss your loan needs.",
    icon: "/communication-center.png",
  },
  {
    num: 2,
    title: "Loan\nAssessment",
    desc: "We review your financial situation and determine suitable loan options.",
    icon: "/appraisal.png",
  },
  {
    num: 3,
    title: "Lender\nComparison",
    desc: "We compare loan products across lenders to find competitive options.",
    icon: "/officer.png",
    active: true,
  },
  {
    num: 4,
    title: "Loan\nApplication",
    desc: "We assist you with documentation and application submission.",
    icon: "/collateral.png",
  },
  {
    num: 5,
    title: "Approval &\nSettlement",
    desc: "Reach out by phone, WhatsApp, or online form to discuss your loan needs.",
    icon: "/approved.png",
  },
];

export default function LoanProcess() {
  return (
    <section className="bg-white pb-2 lg:pb-20 overflow-hidden">
      <div className="page-container sm:px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-[100%] text-center">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[54px] font-extrabold leading-[1.08] tracking-[-0.02em] text-black">
            How Our <span className="text-[#7cc242]">Loan Process</span> Works
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-7 text-[#333]">
            Choosing the right loan can be complicated. At LendSmart Mortgages,
            we simplify the process and help you make informed decisions.
          </p>
        </div>

        {/* steps */}
        <div className="relative mt-12 lg:mt-14">
          {/* dashed connectors desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[70px] hidden lg:block">
            <svg
              className="h-[60px] w-full"
              viewBox="0 0 1200 90"
              preserveAspectRatio="none"
            >
              <polyline
                points="170,58 225,52 280,48"
                stroke="#8e8e8e"
                strokeWidth="1.4"
                strokeDasharray="3 6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="390,48 480,70 570,78"
                stroke="#8e8e8e"
                strokeWidth="1.4"
                strokeDasharray="3 6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="630,78 700,52 770,46"
                stroke="#8e8e8e"
                strokeWidth="1.4"
                strokeDasharray="3 6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="850,46 955,66 1060,72"
                stroke="#8e8e8e"
                strokeWidth="1.4"
                strokeDasharray="3 6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-2 p-2 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const isActive = !!step.active;
              const moveUpCard = index === 1 || index === 3;

              return (
                <div
                  key={step.num}
                  className={`relative flex justify-center ${moveUpCard ? "lg:top-[-30px]" : ""
                    }`}
                >
                  <div
                    className={`relative flex min-h-[220px] w-full max-w-[200px] flex-col items-center px-4 pt-9 pb-6 text-center sm:min-h-[232px] sm:max-w-[172px] sm:px-5 sm:pt-10 sm:pb-7 ${isActive ? "bg-gradient-to-b from-[#509D1C] to-[#325918] text-white" : "bg-[#f3f3f3] text-black"
                      }`}
                    style={{
                      borderRadius: "999px",
                    }}
                  >
                    <div className="relative h-[56px] w-[56px]">
                      <Image
                        src={step.icon}
                        alt={step.title.replace("\n", " ")}
                        fill
                        className={`object-contain ${isActive ? "brightness-0 invert" : ""}`}
                      />
                    </div>

                    <h3
                      className={`mt-4 whitespace-pre-line text-[15px] font-extrabold leading-[1.15] ${isActive ? "text-white" : "text-black"
                        }`}
                    >
                      {step.num}. {step.title}
                    </h3>

                    <p
                      className={`mt-3 text-[11px] leading-[1.45] ${isActive ? "text-white/95" : "text-[#333]"
                        }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* whatsapp button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/61413208624"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] items-center gap-2 rounded-[3px] bg-[#1f1f1f] px-4 text-[11px] font-medium text-white transition hover:opacity-95"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-[3px] bg-[#25D366]">
              <Image
                src="/icon.png"
                alt="Whatsapp"
                width={30}
                height={30}
                priority
                className="object-contain"
              />
            </span>
            <span>Click here to chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}