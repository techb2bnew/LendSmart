import type { LoanProcessStep } from "@/app/pages-component/LoanProcess";
import type { SolutionBlock } from "@/app/pages-component/SolutionBlocksSection";
import type { FeatureItem } from "@/app/pages-component/FeatureGridSection";
import type { FAQItem } from "@/app/pages-component/FAQSection";

export type ServiceLandingReview = {
  heading: string;
  description: string;
  name: string;
  time: string;
  image: string;
};

export type ServiceLandingContent = {
  /** Route slug, e.g. "home-loans-adelaide" -> "/home-loans-adelaide" */
  slug: string;
  metaTitle: string;
  metaDescription: string;

  hero: {
    breadcrumbLabel: string;
    heading: string;
    headingHighlight?: string;
    description: string;
    extraDescription?: string;
    featurePoints?: string[];
    image: string;
  };

  intro: {
    eyebrow?: string;
    heading: string;
    headingHighlight?: string;
    paragraphs: string[];
    listHeading?: string;
    listItems?: string[];
    closingParagraphs?: string[];
  };

  solutions: {
    heading: string;
    headingHighlight?: string;
    description?: string;
    blocks: SolutionBlock[];
  };

  whyChoose: {
    heading: string;
    headingHighlight?: string;
    description?: string;
    features: FeatureItem[];
  };

  process: {
    normalText?: string;
    highlightText?: string;
    breakText?: string;
    description?: string;
    steps: LoanProcessStep[];
  };

  whoWeHelp: {
    heading: string;
    headingHighlight?: string;
    paragraphs: string[];
    listItems: string[];
    closingParagraphs?: string[];
  };

  compare: {
    heading: string;
    headingHighlight?: string;
    paragraphs: string[];
  };

  getStarted: {
    heading: string;
    headingHighlight?: string;
    paragraphs: string[];
  };

  faqs: {
    heading?: string;
    headingHighlight?: string;
    description?: string;
    items: FAQItem[];
  };

  testimonials?: {
    title: string;
    description: string;
    reviews: ServiceLandingReview[];
  };
};

export const homeLoansAdelaideContent: ServiceLandingContent = {
  slug: "home-loans-adelaide",
  metaTitle: "Home Loans Adelaide | Mortgage Broker Adelaide",
  metaDescription:
    "Looking for home loans in Adelaide? Get personalised guidance from an Adelaide mortgage broker to compare suitable home loan options across South Australia.",

  hero: {
    breadcrumbLabel: "Home Loan Adelaide",
    heading: "Home Loan Adelaide",
    headingHighlight: "Loan",
    description:
      "Looking for a suitable home loan Adelaide option? LendSmart Mortgages helps individuals, families, first home buyers, property investors, and existing homeowners explore suitable home loan solutions.",
    extraDescription:
      "As experienced mortgage brokers Adelaide, we compare loan options from a wide network of lenders and help you through the application process.",
    featurePoints: ["First Home Buyers", "Refinancing", "Investment Property Loans"],
    image: "/service/main.png",
  },

  intro: {
    eyebrow: "Home Loans Adelaide South Australia",
    heading: "Home Loans Adelaide South Australia",
    paragraphs: [
      "Buying a home is a major financial decision. Finding the right loan can be just as important as finding the right property.",
      "LendSmart Mortgages provides home loans Adelaide South Australia borrowers can explore based on their financial position, property requirements, and long-term goals.",
    ],
    listHeading: "We can assist with:",
    listItems: [
      "First home buyer loans",
      "Home purchase loans",
      "Refinancing",
      "Investment property loans",
      "Construction loans",
      "Loan restructuring and comparison",
      "Guidance through the application process",
    ],
    closingParagraphs: [
      "Our home loan brokers Adelaide team helps make the lending process clearer, from the initial assessment through to settlement.",
    ],
  },

  solutions: {
    heading: "Home Loan Solutions for Adelaide Borrowers",
    headingHighlight: "Adelaide Borrowers",
    blocks: [
      {
        title: "First Home Buyer Loans",
        paragraphs: [
          "Buying your first home can involve many questions about deposits, borrowing capacity, lender requirements, and repayments.",
          "LendSmart Mortgages helps first home buyers understand their options and compare suitable loan products.",
        ],
        // listItems: [
        //   "Understanding your borrowing position",
        //   "Reviewing your deposit and finances",
        //   "Comparing lender options",
        //   "Preparing your loan application",
        //   "Understanding the next steps",
        // ],
      },
      {
        title: "Home Purchase Loans",
        paragraphs: [
          "Already know which property you want to purchase? Our mortgage brokers Adelaide can help you explore financing options that suit your circumstances.",
          "We compare available loan products and assist with the application process, helping you move from finance assessment towards settlement.",
        ],
      },
      {
        title: "Refinancing Home Loans",
        paragraphs: [
          "Your current mortgage may not always remain suitable as your financial circumstances change.",
          "If you are considering refinancing, LendSmart Mortgages can help you review your existing loan and compare other available options.",
        ],
        // listItems: [
        //   "Reviewing your existing mortgage",
        //   "Comparing available loan products",
        //   "Considering loan features and repayment structures",
        //   "Assessing potential costs",
        //   "Supporting the application process",
        // ],
      },
      {
        title: "Investment Property Loans",
        paragraphs: [
          "Planning to purchase an investment property in Adelaide? We can help you explore finance options for your investment goals.",
          "Our home loan brokers Adelaide can assess your circumstances and help compare suitable lending options based on lender criteria.",
        ],
      },
      {
        title: "Construction Loans",
        paragraphs: [
          "Building a new home requires a different approach to standard property finance. LendSmart Mortgages can help you explore construction loan options and understand how the application and funding process works.",
          "We can assist with lender comparison, documentation, application preparation, and communication throughout the loan process.",
        ],
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose LendSmart Mortgages?",
    headingHighlight: "LendSmart Mortgages?",
    description:
      "Choosing between lenders and loan products can be confusing. We make the process more straightforward with personalised guidance.",
    features: [
      {
        title: "Multiple Lender Options",
        description:
          "We work with a wide network of lenders, allowing us to compare different loan products based on your circumstances.",
      },
      {
        title: "Personalised Loan Guidance",
        description:
          "Your income, expenses, deposit, existing debts, property type, and financial goals all matter. We consider these factors when discussing suitable options.",
      },
      {
        title: "Support Throughout the Process",
        description:
          "Our support does not stop after you choose a loan. We can assist with documentation, application submission, lender communication, approval, and settlement.",
      },
      {
        title: "Clear Communication",
        description:
          "We explain the important parts of the lending process in straightforward terms, helping you understand your available options before proceeding.",
      },
    ],
  },

  process: {
    normalText: "Our",
    highlightText: "Home Loan",
    breakText: "Process",
    description:
      "Getting a home loan does not have to feel complicated. LendSmart Mortgages follows a straightforward process.",
    steps: [
      {
        num: 1,
        title: "Contact Us",
        desc: "Tell us about your property plans and finance requirements.",
        icon: "/communication-center.png",
      },
      {
        num: 2,
        title: "Loan\nAssessment",
        desc: "We review your financial position, borrowing requirements, and loan objectives.",
        icon: "/appraisal.png",
      },
      {
        num: 3,
        title: "Compare\nLenders",
        desc: "We compare suitable options across our lender network.",
        icon: "/officer.png",
        active: true,
      },
      {
        num: 4,
        title: "Application\nSupport",
        desc: "We help you prepare the required documentation and submit your application.",
        icon: "/collateral.png",
      },
      {
        num: 5,
        title: "Approval &\nSettlement",
        desc: "We support you through the approval process and help coordinate the next steps towards settlement.",
        icon: "/approved.png",
      },
    ] satisfies LoanProcessStep[],
  },

  whoWeHelp: {
    heading: "Who Can We Help?",
    paragraphs: [
      "LendSmart Mortgages provides home loan Adelaide assistance for different types of borrowers.",
      "Our services can be suitable for:",
    ],
    listItems: [
      "First home buyers",
      "Existing homeowners",
      "Property investors",
      "Families purchasing a new home",
      "Self-employed borrowers",
      "Borrowers looking to refinance",
      "Buyers constructing a new property",
    ],
    closingParagraphs: [
      "Every application is different, so we assess your circumstances before discussing suitable lending options.",
    ],
  },

  compare: {
    heading: "Compare Home Loans with Adelaide Mortgage Brokers",
    headingHighlight: "Adelaide Mortgage Brokers",
    paragraphs: [
      "Searching for a home loan directly can mean spending significant time comparing lenders, rates, features, fees, and eligibility requirements.",
      "Working with mortgage brokers Adelaide can simplify this process. LendSmart Mortgages helps you compare available options and understand the differences between loan products.",
      "Our focus is not simply on finding a loan. We aim to help you understand the finance options available for your particular circumstances.",
    ],
  },

  getStarted: {
    heading: "Home Loans Adelaide South Australia – Get Started Today",
    headingHighlight: "Get Started Today",
    paragraphs: [
      "Whether you are purchasing your first home, buying an investment property, refinancing, or building a new home, LendSmart Mortgages can help you explore your finance options.",
      "Our home loan brokers Adelaide provide personalised assistance and support throughout the lending journey.",
      "Ready to discuss your home loan?",
    ],
  },

  faqs: {
    description: "Talk to LendSmart Mortgages today about your home loan requirements.",
    items: [
      {
        question: "What types of home loans can LendSmart Mortgages help with?",
        answer:
          "LendSmart Mortgages can assist with first home buyer loans, home purchase loans, refinancing, investment property loans, and construction loans. We help compare available options based on your circumstances and requirements.",
      },
      {
        question: "How can mortgage brokers Adelaide help with my home loan?",
        answer:
          "Mortgage brokers Adelaide can help assess your financial position, compare loan options from multiple lenders, explain relevant loan features, and assist with the application process. This can make it easier to navigate the different stages of obtaining finance.",
      },
      {
        question: "Can you help first home buyers in Adelaide?",
        answer:
          "Yes. Our home loan brokers Adelaide can help first home buyers understand their borrowing position, discuss suitable loan options, and guide them through the documentation and application process.",
      },
      {
        question: "Can LendSmart Mortgages help with refinancing?",
        answer:
          "Yes. If you are considering refinancing, we can review your existing loan and help you compare other available options. We can also assist with the application process if you decide to proceed.",
      },
      {
        question: "Can self-employed borrowers apply for home loans Adelaide?",
        answer:
          "Self-employed borrowers can apply for home loans, although lender requirements can vary. We can discuss your circumstances, review the available financial information, and help identify loan options that may suit your situation.",
      },
      {
        question: "Why should I choose LendSmart Mortgages for home loans Adelaide South Australia?",
        answer:
          "LendSmart Mortgages provides personalised loan guidance, access to a wide lender network, and support throughout the application process. If you are searching for home loans Adelaide South Australia, our team can help you compare available options and understand the next steps.",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    description: "Clients trust LendSmart Mortgages for reliable loan guidance and support.",
    reviews: [
      {
        heading: "",
        description:
          "LendSmart made our home loan process incredibly easy. Everything was explained clearly, and we got approval faster than expected. Highly recommended!",
        name: "Michael Anderson",
        time: "3 Days ago",
        image: "/user.png",
      },
      {
        heading: "",
        description:
          "Professional, responsive, and genuinely helpful. We felt supported from application to settlement.",
        name: "Jason K.",
        time: "3 Days ago",
        image: "/user-t.jpg",
      },
      {
        heading: "",
        description:
          "Best mortgage experience we've ever had. Quick communication and great loan options.",
        name: "Priya S.",
        time: "3 Days ago",
        image: "/girl.jpg",
      },
    ],
  },
};

export const firstHomeBuyerLoansAdelaideContent: ServiceLandingContent = {
  slug: "first-home-buyer-loans-adelaide",
  metaTitle: "First Home Buyer Loan Adelaide | First Home Owner Grant SA | LendSmart",
  metaDescription:
    "Looking for a first home buyer loan Adelaide option? LendSmart Mortgages helps you compare deposit options, the First Home Owner Grant South Australia and first home buyer scheme Adelaide.",

  hero: {
    breadcrumbLabel: "First Home Buyer Loans Adelaide",
    heading: "First Home Buyer Loan Adelaide",
    headingHighlight: "Loan Adelaide",
    description:
      "LendSmart Mortgages works with first home buyers in Adelaide to help them understand their borrowing options, assess their finances, and compare suitable loan products.",
    extraDescription:
      "From working out your deposit to understanding available government assistance, our team can provide guidance throughout the home loan process. If you are looking for a first home buyer loan Adelaide, we can help you take the next step with greater confidence.",
    featurePoints: ["First Home Owner Grant SA", "Low Deposit Options", "Government Scheme Guidance"],
    image: "/family-house.png",
  },

  intro: {
    eyebrow: "First Home Buyer Finance in Adelaide",
    heading: "First Home Buyer Finance in Adelaide",
    paragraphs: [
      "Your first home loan depends on more than your property price. Lenders may consider your income, expenses, existing commitments, deposit, employment, and overall financial position when assessing an application.",
      "LendSmart Mortgages helps you understand these factors before you proceed with a loan application.",
    ],
    listHeading: "Our first home buyer services include:",
    listItems: [
      "Borrowing capacity assessment",
      "Home loan product comparison",
      "Deposit planning",
      "Lender requirement guidance",
      "Assistance with loan documentation",
      "Application support",
      "Approval and settlement assistance",
    ],
    closingParagraphs: [
      "Our home loan brokers Adelaide team can help simplify each stage and explain your options clearly.",
    ],
  },

  solutions: {
    heading: "Loan Options for First Home Buyers",
    headingHighlight: "First Home Buyers",
    blocks: [
      {
        title: "Finance for Your First Property",
        paragraphs: [
          "Getting your first mortgage is different from refinancing an existing loan because you are entering the property market for the first time.",
          "Our team can review your financial circumstances and help you identify potential first home buyer loan Adelaide options available through our lender network.",
          "We can help you consider:",
        ],
        listItems: [
          "Your available deposit",
          "Expected repayments",
          "Loan term and structure",
          "Interest rate options",
          "Lender eligibility",
          "Additional loan costs",
        ],
      },
      {
        title: "Lower Deposit Home Loan Options",
        paragraphs: [
          "Building a deposit is often one of the biggest hurdles for first home buyers. While a 20% deposit is commonly associated with avoiding LMI, it is not necessarily the only path to home ownership.",
          "If you are unsure about how much deposit for first home Adelaide buyers may require, LendSmart Mortgages can assess your circumstances and help you understand the options worth considering.",
        ],
      },
      {
        title: "How Much Deposit for First Home Adelaide?",
        paragraphs: [
          "The amount you need to save depends on the loan and your individual financial circumstances.",
          "Rather than focusing only on a percentage, it is important to calculate the total funds you may need to complete the purchase.",
          "For example, if you were purchasing a $500,000 property:",
        ],
        listItems: ["5% deposit = $25,000", "10% deposit = $50,000", "20% deposit = $100,000"],
      },
      {
        title: "First Home Owner Grant South Australia",
        paragraphs: [
          "The First Home Owner Grant South Australia is designed to provide eligible first home buyers with financial assistance when purchasing or building an eligible home.",
          "Eligibility requirements can depend on factors such as the property, purchase or construction circumstances, applicant status, and other government criteria.",
        ],
      },
      {
        title: "First Home Buyer Scheme Adelaide",
        paragraphs: [
          "Government-supported initiatives may also provide pathways for eligible first home buyers who are finding it difficult to enter the property market.",
          "If you are investigating a first home buyer scheme Adelaide, it is important to understand the conditions attached to the particular program. Factors such as income, property value, deposit, and eligibility can affect whether you qualify.",
        ],
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose LendSmart Mortgages?",
    headingHighlight: "LendSmart Mortgages?",
    description:
      "The first home loan process can involve numerous decisions. LendSmart Mortgages helps you work through these decisions with personalised support.",
    features: [
      {
        title: "Compare Different Lenders",
        description:
          "We have access to a broad network of lenders, giving you the opportunity to compare loan products rather than approaching lenders one at a time.",
      },
      {
        title: "Advice Based on Your Circumstances",
        description:
          "Your financial situation is unique. We consider factors such as your income, expenses, deposit, debts, and property plans when discussing potential lending solutions.",
      },
      {
        title: "Help With the Paperwork",
        description:
          "Loan applications require supporting information and documentation. We can guide you through what is required and assist with preparing your application.",
      },
      {
        title: "Assistance From Application to Settlement",
        description:
          "Our involvement can continue after your application is submitted. We can assist with lender communication and help you understand the progress of your application through to settlement.",
      },
    ],
  },

  process: {
    normalText: "How the",
    highlightText: "First Home Loan",
    breakText: "Process Works",
    description: "We keep the process straightforward so you know what happens at each stage.",
    steps: [
      {
        num: 1,
        title: "Talk to\nOur Team",
        desc: "Tell us about your deposit, income, property plans, and what you are looking to purchase.",
        icon: "/communication-center.png",
      },
      {
        num: 2,
        title: "Assess Your\nFinancial Position",
        desc: "We review your circumstances to help establish your potential borrowing position.",
        icon: "/appraisal.png",
      },
      {
        num: 3,
        title: "Explore\nSuitable Loans",
        desc: "We compare relevant loan products available through our lender network.",
        icon: "/officer.png",
        active: true,
      },
      {
        num: 4,
        title: "Submit Your\nApplication",
        desc: "Once you choose an appropriate option, we help you prepare the necessary information and submit the application.",
        icon: "/collateral.png",
      },
      {
        num: 5,
        title: "Work Towards\nSettlement",
        desc: "After approval, we continue to support you through the remaining steps leading to settlement.",
        icon: "/approved.png",
      },
    ] satisfies LoanProcessStep[],
  },

  whoWeHelp: {
    heading: "Who Can Use Our First Home Loan Services?",
    paragraphs: [
      "Our first home buyer finance services can assist Adelaide buyers at different stages of their purchasing journey.",
      "We can help if you are:",
    ],
    listItems: [
      "Saving for your first property",
      "Ready to apply for a mortgage",
      "Buying an established home",
      "Researching the First Home Owner Grant South Australia",
      "Looking into a first home buyer scheme Adelaide",
      "Unsure about how much deposit for first home Adelaide buyers need",
    ],
    closingParagraphs: [
      "Your eligibility for particular loan products or government programs will depend on your individual circumstances and the applicable criteria.",
    ],
  },

  compare: {
    heading: "Work With Home Loan Brokers Adelaide",
    headingHighlight: "Home Loan Brokers Adelaide",
    paragraphs: [
      "Comparing mortgages yourself can take considerable time, particularly when you are purchasing a property for the first time.",
      "Our home loan brokers Adelaide service gives you professional assistance with lender comparison, loan assessment, documentation, and application support.",
      "LendSmart Mortgages focuses on helping you understand the available choices rather than simply presenting you with a loan product.",
    ],
  },

  getStarted: {
    heading: "First Home Buyer Loan Adelaide – Speak With Our Team",
    headingHighlight: "Speak With Our Team",
    paragraphs: [
      "LendSmart Mortgages can help you assess your borrowing position, explore a first home buyer loan Adelaide, and understand potential deposit and government assistance options.",
      "Whether you are still saving or ready to apply, our team is available to discuss your requirements.",
      "Ready to start planning your first home?",
    ],
  },

  faqs: {
    description: "Talk to LendSmart Mortgages today about your first home buyer loan requirements.",
    items: [
      {
        question: "What deposit do I need to buy my first home in Adelaide?",
        answer:
          "There is no single deposit amount that applies to every buyer. A 20% deposit is commonly used as a benchmark, but some eligible borrowers may qualify for lower-deposit options. The answer to how much deposit for first home Adelaide buyers need depends on the lender, property, loan type, and financial circumstances.",
      },
      {
        question: "Can I apply for a first home buyer loan with a 5% deposit?",
        answer:
          "Some eligible borrowers may be able to purchase with a deposit of around 5%, depending on the lender and any applicable government-supported arrangements. A smaller deposit can involve additional costs, so it is important to assess the complete purchase budget before proceeding.",
      },
      {
        question: "How does the First Home Owner Grant South Australia work?",
        answer:
          "The First Home Owner Grant South Australia provides assistance to eligible applicants who meet the relevant conditions. The requirements can vary depending on the property and circumstances, so current government eligibility criteria should be confirmed before applying.",
      },
      {
        question: "What is a first home buyer scheme Adelaide buyers can access?",
        answer:
          "There are different government-supported initiatives that may assist eligible first home buyers. A first home buyer scheme Adelaide applicants can use will depend on factors such as income, property value, deposit, and other eligibility requirements.",
      },
      {
        question: "Can LendSmart Mortgages help me if I am self-employed?",
        answer:
          "Yes. Self-employed applicants can discuss their circumstances with our team. Lenders may assess self-employed income and documentation differently, so we can help you understand what information may be required and explore potentially suitable lending options.",
      },
      {
        question: "When should I speak to a mortgage broker about buying my first home?",
        answer:
          "It can be useful to speak with a broker before you start making offers. An early assessment can help you understand your potential borrowing position, deposit requirements, and loan options. This can give you a clearer idea of the property price range you may be able to consider.",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    description: "First home buyers trust LendSmart Mortgages for clear guidance and dependable support.",
    reviews: [
      {
        heading: "",
        description:
          "As first home buyers, we had so many questions about deposits and the grant. The team explained everything clearly and made the process far less stressful.",
        name: "Michael Anderson",
        time: "3 Days ago",
        image: "/user.png",
      },
      {
        heading: "",
        description:
          "We didn't think we'd qualify with a smaller deposit, but LendSmart compared options for us and got us moving faster than we expected.",
        name: "Jason K.",
        time: "3 Days ago",
        image: "/user-t.jpg",
      },
      {
        heading: "",
        description:
          "Great support from our first enquiry through to settlement on our first home. Would recommend to any first home buyer in Adelaide.",
        name: "Priya S.",
        time: "3 Days ago",
        image: "/girl.jpg",
      },
    ],
  },
};

export const refinanceHomeLoansAdelaideContent: ServiceLandingContent = {
  slug: "refinance-home-loans-adelaide",
  metaTitle: "Refinance Home Loans Adelaide | LendSmart",
  metaDescription:
    "Refinance your home loan in Adelaide and compare competitive mortgage options. Review your current loan, repayments and refinancing opportunities.",

  hero: {
    breadcrumbLabel: "Refinance Home Loans Adelaide",
    heading: "Refinance Home Loan Adelaide",
    headingHighlight: "Home Loan Adelaide",
    description:
      "Whether you want to compare your current interest rate, change lenders, adjust your loan structure, or review your repayment options, our team can help you understand the choices available.",
    extraDescription:
      "If you are looking for a refinance home loan Adelaide, we can assess your circumstances, compare suitable lending options, and guide you through the refinancing process from the initial review through to settlement.",
    featurePoints: ["Compare Multiple Lenders", "Review Your Current Rate", "Refinance Cashback Options"],
    image: "/loan-supported.png",
  },

  intro: {
    eyebrow: "Refinance Mortgage Adelaide",
    heading: "Refinance Mortgage Adelaide",
    paragraphs: [
      "Refinancing your home loan can be considered when your existing mortgage no longer matches your current financial circumstances or lending requirements.",
      "Your income, expenses, property value, loan balance, and financial goals may have changed since you first obtained your mortgage.",
    ],
    listHeading: "Our refinance home loan services include:",
    listItems: [
      "Existing home loan review",
      "Borrowing capacity assessment",
      "Interest rate comparison",
      "Loan product comparison",
      "Lender comparison",
      "Loan structure assessment",
    ],
    closingParagraphs: [
      "Our home loan brokers Adelaide team can help make the refinancing process easier to understand while helping you compare different lending options.",
    ],
  },

  solutions: {
    heading: "Refinancing Options for Adelaide Homeowners",
    headingHighlight: "Adelaide Homeowners",
    blocks: [
      {
        title: "Review Your Existing Home Loan",
        paragraphs: [
          "Our team can review your current mortgage, financial circumstances, and lending requirements to help you identify potential refinance home loan Adelaide options available through our lender network.",
          "We can help you consider:",
        ],
        listItems: [
          "Your current interest rate",
          "Remaining loan balance",
          "Potential repayment changes",
          "Loan term and structure",
          "Available loan features",
          "Refinancing costs",
        ],
      },
      {
        title: "Switch Home Loan Lender Adelaide",
        paragraphs: [
          "You are not necessarily required to stay with your current mortgage provider for the entire loan term. If another lender offers a loan structure that better suits your circumstances, switching may be worth considering.",
          "If you are planning to switch home loan lender Adelaide, LendSmart Mortgages can help you compare available lenders and understand the potential costs and requirements involved.",
        ],
      },
      {
        title: "Refinance Cashback Adelaide",
        paragraphs: [
          "Some lenders may offer cashback incentives when eligible borrowers refinance their home loans. A refinance cashback Adelaide offer can provide an additional financial benefit, but cashback should not be the only factor considered when comparing loans.",
          "Interest rates, fees, loan features, repayment terms, and the overall cost of the mortgage should also be assessed before deciding whether a particular refinancing offer is suitable.",
        ],
      },
      {
        title: "Refinance to Access Home Equity",
        paragraphs: [
          "If your property value has increased or you have paid down a significant portion of your mortgage, you may have built up equity in your property.",
          "Depending on your financial circumstances and lender requirements, equity may be considered when restructuring your mortgage or applying for additional borrowing. Our team can help you understand how your current property and loan position may affect your refinancing options.",
        ],
      },
      {
        title: "Refinance for Debt Consolidation",
        paragraphs: [
          "Some homeowners consider refinancing to combine eligible debts into a single loan structure. This may simplify the number of repayments you manage each month.",
          "However, debt consolidation can change the total interest and repayment period, so the complete financial impact should be considered before proceeding.",
        ],
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose LendSmart Mortgages?",
    headingHighlight: "LendSmart Mortgages?",
    description:
      "Changing your home loan involves more than comparing interest rates. LendSmart Mortgages helps Adelaide homeowners review different aspects of a mortgage before deciding whether refinancing is appropriate.",
    features: [
      {
        title: "Compare Different Lenders",
        description:
          "We have access to a network of lenders, allowing you to compare different home loan products rather than approaching individual lenders separately.",
      },
      {
        title: "Advice Based on Your Circumstances",
        description:
          "Your income, expenses, existing mortgage, property value, debts, and financial goals can all influence your refinancing options. We take these factors into account when discussing potential lending solutions.",
      },
      {
        title: "Understand the Costs",
        description:
          "Refinancing can involve costs such as loan discharge fees, application fees, valuation costs, and other charges depending on the lender and loan. We can help you understand the costs that may apply to your circumstances.",
      },
      {
        title: "Support With the Application",
        description:
          "Moving to a new lender requires documentation and application information. Our team can assist you in understanding the information required and help you through the application process.",
      },
    ],
  },

  process: {
    normalText: "How the",
    highlightText: "Home Loan Refinance",
    breakText: "Process Works",
    description:
      "We keep the process straightforward so you can understand what is involved before making a decision.",
    steps: [
      {
        num: 1,
        title: "Discuss Your\nCurrent Mortgage",
        desc: "Tell us about your existing home loan, current repayments, interest rate, remaining balance, and what you would like to achieve through refinancing.",
        icon: "/communication-center.png",
      },
      {
        num: 2,
        title: "Assess Your\nFinancial Position",
        desc: "We review relevant information about your income, expenses, debts, property, and existing mortgage to understand your current borrowing position.",
        icon: "/appraisal.png",
      },
      {
        num: 3,
        title: "Compare Suitable\nLoan Options",
        desc: "We compare relevant products from our lender network based on your circumstances and refinancing requirements.",
        icon: "/officer.png",
        active: true,
      },
      {
        num: 4,
        title: "Choose Your\nPreferred Option",
        desc: "Once you understand the available choices, you can decide which loan structure and lender may be appropriate for your needs.",
        icon: "/agreement.png",
      },
      {
        num: 5,
        title: "Submit Your\nApplication",
        desc: "We can help you prepare the required information and documentation before submitting your refinancing application to the selected lender.",
        icon: "/collateral.png",
      },
      {
        num: 6,
        title: "Work Towards\nSettlement",
        desc: "After approval, we continue to assist with the remaining steps involved in transferring your mortgage and completing settlement.",
        icon: "/approved.png",
      },
    ] satisfies LoanProcessStep[],
  },

  whoWeHelp: {
    heading: "Who Can Use Our Refinance Home Loan Services?",
    paragraphs: [
      "Our refinancing services can assist Adelaide homeowners at different stages of their mortgage journey.",
      "We can help if you are:",
    ],
    listItems: [
      "Looking for a more suitable home loan",
      "Comparing your current interest rate",
      "Considering a different lender",
      "Planning to switch home loan lender Adelaide",
      "Interested in refinance cashback Adelaide",
      "Looking to review your loan structure",
      "Considering debt consolidation",
    ],
    closingParagraphs: [
      "Your eligibility for particular refinancing products will depend on your financial circumstances, property, existing debts, lender requirements, and applicable lending criteria.",
    ],
  },

  compare: {
    heading: "Work With Home Loan Brokers Adelaide",
    headingHighlight: "Home Loan Brokers Adelaide",
    paragraphs: [
      "Comparing refinancing options yourself can take considerable time, particularly when lenders have different rates, fees, features, and eligibility requirements.",
      "Our home loan brokers Adelaide service provides professional assistance with reviewing your existing mortgage, comparing lenders, understanding potential costs, and preparing your application.",
      "LendSmart Mortgages can help you assess whether refinancing may be suitable for your circumstances rather than simply recommending a loan based on its advertised interest rate.",
    ],
  },

  getStarted: {
    heading: "Refinance Home Loan Adelaide – Speak With Our Team",
    headingHighlight: "Speak With Our Team",
    paragraphs: [
      "LendSmart Mortgages can help you review your existing mortgage, compare available lenders, and explore a refinance home loan Adelaide option based on your circumstances.",
      "Whether you want to compare your current rate, change lenders, restructure your mortgage, or investigate a refinance cashback Adelaide offer, our team can guide you through the available options.",
      "Thinking about refinancing your home loan? Speak with LendSmart Mortgages today.",
    ],
  },

  faqs: {
    description: "Thinking about refinancing your home loan? Speak with LendSmart Mortgages today.",
    items: [
      {
        question: "What is refinancing a home loan?",
        answer:
          "Refinancing involves replacing your existing home loan with a new mortgage. This may mean changing to another lender or restructuring your existing borrowing. Homeowners may refinance to review their interest rate, loan features, repayments, or overall loan structure.",
      },
      {
        question: "When should I consider a refinance home loan Adelaide?",
        answer:
          "You may consider refinancing when your financial circumstances have changed, your current loan is no longer suitable, you want to compare interest rates, or you are considering changing lenders. A review of your existing mortgage can help determine whether refinancing is worth considering.",
      },
      {
        question: "Can I switch home loan lender Adelaide?",
        answer:
          "Yes, you may be able to switch lenders if you meet the new lender's lending and eligibility requirements. Before changing lenders, it is important to consider the new loan's interest rate, fees, features, and any costs associated with leaving your existing mortgage.",
      },
      {
        question: "What is refinance cashback Adelaide?",
        answer:
          "A refinance cashback Adelaide offer is an incentive that some lenders may provide to eligible borrowers who refinance. The amount and conditions can vary. Cashback should be considered alongside the interest rate, fees, loan features, and overall cost of the new mortgage.",
      },
      {
        question: "Can I refinance if my property has increased in value?",
        answer:
          "Potentially. An increase in property value may mean you have more equity in your home, which could affect your lending position. However, lenders will still assess your income, expenses, debts, property value, and ability to meet the new loan repayments.",
      },
      {
        question: "Can I refinance to get a lower interest rate?",
        answer:
          "A lower interest rate can be one reason to refinance. However, the lowest rate is not necessarily the most suitable option. Other factors, including fees, loan features, repayment structure, and the total cost of the loan, should also be considered.",
      },
      {
        question: "Can I refinance and consolidate my debts?",
        answer:
          "Depending on your circumstances and lender requirements, refinancing may allow you to consolidate certain eligible debts. However, this can affect your loan term and total interest costs, so it is important to assess the overall financial impact before proceeding.",
      },
      {
        question: "How can LendSmart Mortgages help with refinancing?",
        answer:
          "LendSmart Mortgages can review your current mortgage, assess your financial circumstances, compare suitable lenders, and assist with the application process. Our team can help you understand your potential refinance mortgage Adelaide options and the factors to consider before changing your home loan.",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    description: "Adelaide homeowners trust LendSmart Mortgages for clear guidance when refinancing their home loan.",
    reviews: [
      {
        heading: "",
        description:
          "Switching lenders felt daunting, but the team compared our options clearly and made the whole refinance process simple.",
        name: "Michael Anderson",
        time: "3 Days ago",
        image: "/user.png",
      },
      {
        heading: "",
        description:
          "We didn't realise how much equity we'd built up. LendSmart explained our refinancing options and helped us restructure our loan.",
        name: "Jason K.",
        time: "3 Days ago",
        image: "/user-t.jpg",
      },
      {
        heading: "",
        description:
          "Great advice on the refinance cashback offer versus the overall loan cost. Helped us make a much more informed decision.",
        name: "Priya S.",
        time: "3 Days ago",
        image: "/girl.jpg",
      },
    ],
  },
};

export const propertyInvestmentLoansAdelaideContent: ServiceLandingContent = {
  slug: "property-investment-loans-adelaide",
  metaTitle: "Property Investment Loans Adelaide | LendSmart",
  metaDescription:
    "Explore property investment loans in Adelaide with tailored finance guidance for investors, including investment and interest-only loan options.",

  hero: {
    breadcrumbLabel: "Property Investment Loans Adelaide",
    heading: "Property Investment Adelaide",
    headingHighlight: "Investment Adelaide",
    description:
      "Whether you are buying your first investment property, adding another property to your portfolio, or using equity from an existing property, choosing the right investment loan structure is an important part of the process.",
    extraDescription:
      "If you are looking for property investment Adelaide finance, our team can review your financial position, compare suitable investment loan options, and help you understand the lending choices available through our lender network.",
    featurePoints: ["Investment Loan Comparison", "Interest-Only Options", "Equity & Portfolio Growth"],
    image: "/service/assets-main.png",
  },

  intro: {
    eyebrow: "Investment Property Loan Adelaide",
    heading: "Investment Property Loan Adelaide",
    paragraphs: [
      "An investment property loan Adelaide is used to finance a property that is purchased primarily for investment purposes, such as generating rental income or building a property portfolio.",
      "Investment loans can have different lending requirements, interest rates, repayment structures, and eligibility criteria.",
    ],
    listHeading: "Our property investment loan services include:",
    listItems: [
      "Investment borrowing capacity assessment",
      "Deposit and equity assessment",
      "Investment loan comparison",
      "Interest rate comparison",
      "Loan structure assessment",
      "Lender comparison",
    ],
    closingParagraphs: [
      "Our home loan brokers Adelaide team can help you understand the available investment lending options and identify potential loan structures based on your circumstances.",
    ],
  },

  solutions: {
    heading: "Property Investment Options for Adelaide Investors",
    headingHighlight: "Adelaide Investors",
    blocks: [
      {
        title: "Assess Your Investment Finance Requirements",
        paragraphs: [
          "Investing in property involves more than determining the purchase price. Your existing debts, income, deposit, property equity, expected rental income, and proposed loan structure can all affect your borrowing position.",
          "Our team can review your circumstances and help you understand potential property investment Adelaide finance options available through our lender network.",
          "We can help you consider:",
        ],
        listItems: [
          "Available deposit",
          "Existing property equity",
          "Expected rental income",
          "Proposed investment property",
          "Loan amount and repayments",
          "Loan structure and features",
        ],
      },
      {
        title: "Investment Home Loan South Australia",
        paragraphs: [
          "An investment home loan South Australia can provide finance for purchasing a residential property intended for investment rather than owner occupation. Different lenders can have different policies when assessing investment properties, rental income, deposits, and borrowing capacity.",
          "If you are considering an investment home loan South Australia, LendSmart Mortgages can help you compare different lenders and understand the loan structures that may be available for your circumstances.",
        ],
      },
      {
        title: "Interest Only Loan Investor Adelaide",
        paragraphs: [
          "Some property investors choose an interest-only structure for a specified period. With an interest only loan investor Adelaide, repayments during the interest-only period generally cover the interest on the loan rather than reducing the principal balance.",
          "Our team can help you compare an interest only loan investor Adelaide option with other investment loan structures and understand the potential repayment differences before you make a decision.",
        ],
      },
      {
        title: "Property Investment Using Home Equity",
        paragraphs: [
          "If you already own a property, you may have built equity through mortgage repayments or changes in the property's value.",
          "Depending on your financial position and lender requirements, available equity may potentially be used when arranging finance for an investment property.",
          "Our team can review your existing property and mortgage position to help you understand whether equity may form part of your investment funding strategy.",
        ],
      },
      {
        title: "Investment Loans for Property Portfolio Growth",
        paragraphs: [
          "Investors who already own one or more properties may consider additional finance when expanding their portfolio.",
          "However, taking on another investment property means considering your existing mortgages, rental income, debts, property values, available equity, and overall borrowing capacity.",
          "We can help you review your current lending position and compare potential investment property loan Adelaide options for your next purchase.",
        ],
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose LendSmart Mortgages?",
    headingHighlight: "LendSmart Mortgages?",
    description:
      "Choosing an investment loan involves looking at more than just the advertised interest rate. Loan features, repayment structure, fees, lender policies, and your broader financial position can all affect whether a particular investment loan is suitable.",
    features: [
      {
        title: "Compare Different Lenders",
        description:
          "We have access to a network of lenders, allowing you to compare different investment loan products instead of approaching lenders individually.",
      },
      {
        title: "Advice Based on Your Circumstances",
        description:
          "Your income, expenses, existing mortgages, debts, available deposit, property equity, and investment plans can all influence your lending options. We consider these factors when discussing potential investment finance solutions.",
      },
      {
        title: "Understand Investment Loan Structures",
        description:
          "Investment loans can be structured in different ways, including principal and interest and interest-only arrangements. We can explain the differences and help you understand how each structure may affect your repayments.",
      },
      {
        title: "Support With the Application",
        description:
          "Investment loan applications can require information about your income, existing loans, assets, liabilities, and the property being purchased. Our team can assist you with understanding the documentation and application process.",
      },
    ],
  },

  process: {
    normalText: "How the",
    highlightText: "Property Investment Loan",
    breakText: "Process Works",
    description:
      "We keep the process straightforward so you can understand each stage before proceeding with your investment property purchase.",
    steps: [
      {
        num: 1,
        title: "Discuss Your\nInvestment Plans",
        desc: "Tell us about the type of investment property you are considering, your investment goals, and whether you are purchasing your first property or adding to an existing portfolio.",
        icon: "/communication-center.png",
      },
      {
        num: 2,
        title: "Assess Your\nFinancial Position",
        desc: "We review relevant information about your income, expenses, existing mortgages, debts, deposit, property equity, and other financial commitments.",
        icon: "/appraisal.png",
      },
      {
        num: 3,
        title: "Determine Your\nBorrowing Options",
        desc: "Based on your circumstances, we can help you understand your potential borrowing position and the investment loan options that may be available.",
        icon: "/assets.png",
      },
      {
        num: 4,
        title: "Compare Suitable\nInvestment Loans",
        desc: "We compare relevant products from our lender network based on factors such as interest rates, fees, loan features, repayment structures, and lending requirements.",
        icon: "/officer.png",
        active: true,
      },
      {
        num: 5,
        title: "Choose Your\nPreferred Option",
        desc: "Once you understand the available choices, you can decide which lender and loan structure may be appropriate for your investment plans.",
        icon: "/agreement.png",
      },
      {
        num: 6,
        title: "Submit Your\nApplication",
        desc: "We can help you prepare the required information and documentation before submitting your investment loan application to the selected lender.",
        icon: "/collateral.png",
      },
    ] satisfies LoanProcessStep[],
  },

  whoWeHelp: {
    heading: "Who Can Use Our Property Investment Loan Services?",
    paragraphs: [
      "Our investment lending services can assist Adelaide borrowers at different stages of their property investment journey.",
      "We can help if you are:",
    ],
    listItems: [
      "Purchasing your first investment property",
      "Buying another rental property",
      "Building a property portfolio",
      "Looking for an investment property loan Adelaide",
      "Considering an investment home loan South Australia",
      "Interested in an interest only loan investor Adelaide",
    ],
    closingParagraphs: [
      "Your eligibility for particular investment loan products will depend on your income, expenses, existing debts, deposit, property details, borrowing capacity, lender requirements, and applicable lending criteria.",
    ],
  },

  compare: {
    heading: "Work With Home Loan Brokers Adelaide",
    headingHighlight: "Home Loan Brokers Adelaide",
    paragraphs: [
      "Comparing investment loans yourself can take time, particularly when lenders have different requirements for rental income, deposits, property types, loan structures, and borrowing capacity.",
      "Our home loan brokers Adelaide service can help you review your financial position, compare investment lenders, understand different loan structures, and work through the application process.",
      "LendSmart Mortgages can help you assess potential property investment Adelaide finance options based on your circumstances rather than simply choosing a loan because it has a lower advertised rate.",
    ],
  },

  getStarted: {
    heading: "Property Investment Adelaide – Speak With Our Team",
    headingHighlight: "Speak With Our Team",
    paragraphs: [
      "LendSmart Mortgages can help you review your financial position, compare investment lenders, and explore suitable finance options for your next property purchase.",
      "If you are looking for an investment property loan Adelaide or an investment home loan South Australia, speak with LendSmart Mortgages about your property investment finance requirements.",
      "Thinking about investing in property? Speak with LendSmart Mortgages today.",
    ],
  },

  faqs: {
    description: "Thinking about investing in property? Speak with LendSmart Mortgages today.",
    items: [
      {
        question: "What is a property investment loan?",
        answer:
          "A property investment loan is a mortgage used to purchase a property primarily for investment purposes. The property may be rented to tenants or held as part of an investment portfolio. Lenders can apply different assessment criteria to investment loans compared with owner-occupied mortgages.",
      },
      {
        question: "How can I get an investment property loan Adelaide?",
        answer:
          "To apply for an investment property loan Adelaide, lenders may assess your income, expenses, existing debts, deposit, assets, property details, and ability to meet the proposed repayments. LendSmart Mortgages can help you understand potential investment lending options based on your circumstances.",
      },
      {
        question: "Can I use equity to buy an investment property?",
        answer:
          "Potentially. If you already own a property and have sufficient available equity, it may be possible to use some of that equity towards purchasing another property. The amount available will depend on your property value, existing mortgage, income, debts, and lender requirements.",
      },
      {
        question: "What is an investment home loan South Australia?",
        answer:
          "An investment home loan South Australia is finance used to purchase a residential property for investment purposes. Different lenders may offer different investment loan products, with eligibility and lending requirements varying between lenders.",
      },
      {
        question: "What is an interest only loan investor Adelaide?",
        answer:
          "An interest only loan investor Adelaide is a loan where the required repayments during an agreed interest-only period generally cover the interest rather than reducing the principal balance. Once the interest-only period ends, the loan may move to principal and interest repayments, which can result in higher required repayments.",
      },
      {
        question: "Can first-time investors apply for an investment loan?",
        answer:
          "Yes, first-time investors may be able to apply for an investment loan if they meet the lender's eligibility and lending requirements. Factors such as income, expenses, deposit, existing debts, and borrowing capacity may be considered as part of the application.",
      },
      {
        question: "Can I purchase another investment property if I already have one?",
        answer:
          "Potentially. Investors may be able to purchase additional properties if they meet the relevant lender requirements and have sufficient borrowing capacity. Existing mortgages, rental income, property equity, debts, and overall financial commitments can affect the assessment.",
      },
      {
        question: "Is an interest-only investment loan suitable for every investor?",
        answer:
          "No. An interest-only structure may suit some investors but not others. While required repayments may be lower during the interest-only period, the principal does not reduce during that period and repayments may increase when principal repayments begin.",
      },
      {
        question: "How can LendSmart Mortgages help with property investment?",
        answer:
          "LendSmart Mortgages can review your financial position, discuss your investment plans, compare relevant lenders and loan products, and assist with the application process. Our team can help you understand potential property investment Adelaide options and the factors that may affect your investment loan.",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    description: "Property investors trust LendSmart Mortgages for clear guidance on investment finance.",
    reviews: [
      {
        heading: "",
        description:
          "We were looking at our second investment property and the team compared lenders and loan structures for us clearly.",
        name: "Michael Anderson",
        time: "3 Days ago",
        image: "/user.png",
      },
      {
        heading: "",
        description:
          "The interest-only option was explained really well, which helped us decide what suited our portfolio strategy.",
        name: "Jason K.",
        time: "3 Days ago",
        image: "/user-t.jpg",
      },
      {
        heading: "",
        description:
          "Using equity from our existing property felt complicated, but LendSmart made it easy to understand our options.",
        name: "Priya S.",
        time: "3 Days ago",
        image: "/girl.jpg",
      },
    ],
  },
};

export const carLoanBrokerAdelaideContent: ServiceLandingContent = {
  slug: "car-loan-broker-adelaide",
  metaTitle: "Car Loan Broker Adelaide | Car Finance Options",
  metaDescription:
    "Need car finance in Adelaide? Get help comparing car loan options for new or used vehicles with personalised support from an Adelaide finance broker.",

  hero: {
    breadcrumbLabel: "Car Loan Broker Adelaide",
    heading: "Car Loan Broker Adelaide",
    headingHighlight: "Broker Adelaide",
    description:
      "Whether you are purchasing your first vehicle, replacing your existing car, or looking for finance for a newer model, selecting the right loan structure is an important part of the car-buying process.",
    extraDescription:
      "If you are looking for a car loan broker Adelaide, our team can review your financial position, compare suitable vehicle finance options, and help you understand the lending choices available through our lender network.",
    featurePoints: ["New & Used Car Finance", "Trade-In & Deposit Options", "Multiple Lender Comparison"],
    image: "/service/truck-loan-main.png",
  },

  intro: {
    eyebrow: "Car Finance Broker Adelaide",
    heading: "Car Finance Broker Adelaide",
    paragraphs: [
      "A car finance broker Adelaide can help you compare different vehicle finance options based on your budget, income, existing commitments, and vehicle requirements.",
      "Car loans can have different interest rates, loan terms, fees, repayment structures, and eligibility criteria depending on the lender.",
    ],
    listHeading: "Our car loan services include:",
    listItems: [
      "Car borrowing capacity assessment",
      "Deposit and loan amount assessment",
      "Vehicle finance comparison",
      "Interest rate comparison",
      "Loan term assessment",
      "Lender comparison",
    ],
    closingParagraphs: [
      "Our team can help you understand the available car loan Adelaide options and identify potential finance structures based on your circumstances.",
    ],
  },

  solutions: {
    heading: "Car Finance Options for Adelaide Buyers",
    headingHighlight: "Adelaide Buyers",
    blocks: [
      {
        title: "Assess Your Vehicle Finance Requirements",
        paragraphs: [
          "Buying a vehicle involves more than deciding how much you want to spend. Your income, expenses, existing debts, deposit, credit position, vehicle price, and preferred repayment period can all affect your borrowing position.",
          "Our team can review your circumstances and help you understand potential car finance options available through our lender network.",
          "We can help you consider:",
        ],
        listItems: [
          "Available deposit",
          "Vehicle purchase price",
          "Existing financial commitments",
          "Expected repayments",
          "Loan amount and term",
          "Loan structure and features",
        ],
      },
      {
        title: "New Car Loan Adelaide",
        paragraphs: [
          "A new car loan Adelaide can provide finance for purchasing a new vehicle from an approved dealer or seller. Different lenders can have varying requirements for new vehicles, including loan amounts, repayment periods, interest rates, and eligible vehicle types.",
          "If you are considering a new car loan Adelaide, LendSmart Mortgages can help you compare different lenders and understand the finance structures that may be available based on your circumstances.",
        ],
      },
      {
        title: "Car Loan Adelaide for Used Vehicles",
        paragraphs: [
          "A car loan Adelaide may also be available when purchasing an eligible used vehicle. Lenders can consider factors such as the vehicle's age, value, condition, purchase price, and your overall financial position when assessing an application.",
          "Our team can help you compare potential vehicle finance options and understand how the car you are purchasing may affect your borrowing and repayment arrangements.",
        ],
      },
      {
        title: "Car Finance Using a Trade-In or Deposit",
        paragraphs: [
          "If you already own a vehicle, you may be able to use its trade-in value towards the purchase of another car. Alternatively, an available cash deposit can reduce the amount you need to borrow.",
          "Depending on your circumstances and lender requirements, the amount you contribute towards the purchase can affect the overall loan amount and repayment structure. Our team can review your position and help you understand how your deposit or trade-in may form part of your vehicle finance strategy.",
        ],
      },
      {
        title: "Car Loans for Vehicle Upgrades",
        paragraphs: [
          "Drivers who already own a vehicle may consider finance when replacing an existing car with a newer or different model. However, purchasing another vehicle means considering your current car loan, outstanding balance, trade-in value, income, and overall borrowing capacity.",
          "We can help you review your current lending position and compare potential car finance broker Adelaide options for your next vehicle purchase.",
        ],
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose a Car Loan Broker Adelaide?",
    headingHighlight: "Car Loan Broker Adelaide?",
    description:
      "Choosing vehicle finance involves looking at more than the advertised interest rate. Loan features, repayment terms, fees, lender policies, vehicle requirements, and your broader financial position can all influence whether a particular car loan is suitable.",
    features: [
      {
        title: "Compare Different Lenders",
        description:
          "We have access to a network of lenders, allowing you to compare different vehicle finance products instead of approaching lenders individually.",
      },
      {
        title: "Advice Based on Your Circumstances",
        description:
          "Your income, expenses, existing loans, debts, available deposit, credit position, and vehicle requirements can all influence your lending options. We consider these factors when discussing potential car finance solutions.",
      },
      {
        title: "Understand Car Loan Structures",
        description:
          "Vehicle loans can have different repayment periods, interest rates, fees, and loan features. We can explain the differences and help you understand how each structure may affect your repayments.",
      },
      {
        title: "Support With the Application",
        description:
          "Car loan applications can require information about your income, existing debts, assets, liabilities, expenses, and the vehicle being purchased. Our team can assist you with understanding the documentation and application process.",
      },
    ],
  },

  process: {
    normalText: "How the",
    highlightText: "Car Loan",
    breakText: "Process Works",
    description: "We keep the process straightforward so you can understand each stage before proceeding with your vehicle purchase.",
    steps: [
      {
        num: 1,
        title: "Discuss Your\nVehicle Plans",
        desc: "Tell us about the type of vehicle you are considering, your preferred budget, and whether you are purchasing a new or used car.",
        icon: "/communication-center.png",
      },
      {
        num: 2,
        title: "Assess Your\nFinancial Position",
        desc: "We review relevant information about your income, expenses, existing loans, debts, deposit, and other financial commitments.",
        icon: "/appraisal.png",
      },
      {
        num: 3,
        title: "Determine Your\nBorrowing Options",
        desc: "Based on your circumstances, we can help you understand your potential borrowing position and the vehicle finance options that may be available.",
        icon: "/assets.png",
      },
      {
        num: 4,
        title: "Compare Suitable\nCar Loans",
        desc: "We compare relevant products from our lender network based on factors such as interest rates, fees, loan terms, repayment structures, and lending requirements.",
        icon: "/officer.png",
        active: true,
      },
      {
        num: 5,
        title: "Choose Your\nPreferred Option",
        desc: "Once you understand the available choices, you can decide which lender and loan structure may be appropriate for your vehicle purchase.",
        icon: "/agreement.png",
      },
      {
        num: 6,
        title: "Submit Your\nApplication",
        desc: "We can help you prepare the required information and documentation before submitting your vehicle finance application to the selected lender.",
        icon: "/collateral.png",
      },
    ] satisfies LoanProcessStep[],
  },

  whoWeHelp: {
    heading: "Who Can Use Our Car Loan Services?",
    paragraphs: [
      "Our vehicle finance services can assist Adelaide borrowers at different stages of their car-buying journey.",
      "We can help if you are:",
    ],
    listItems: [
      "Purchasing your first car",
      "Buying a new vehicle",
      "Purchasing a used vehicle",
      "Replacing your current car",
      "Looking for a car loan Adelaide",
      "Considering a new car loan Adelaide",
      "Comparing different vehicle finance options",
    ],
    closingParagraphs: [
      "Your eligibility for particular car loan products will depend on your income, expenses, existing debts, deposit, credit position, vehicle details, borrowing capacity, lender requirements, and applicable lending criteria.",
    ],
  },

  compare: {
    heading: "Work With Car Finance Broker Adelaide",
    headingHighlight: "Car Finance Broker Adelaide",
    paragraphs: [
      "Comparing vehicle finance yourself can take time, particularly when lenders have different requirements for new and used vehicles, loan amounts, repayment periods, and borrower eligibility.",
      "Our car finance broker Adelaide service can help you review your financial position, compare vehicle finance lenders, understand different loan structures, and work through the application process.",
      "LendSmart Mortgages can help you assess potential car loan broker Adelaide options based on your circumstances rather than simply choosing a loan because it has a lower advertised interest rate.",
    ],
  },

  getStarted: {
    heading: "Car Loan Adelaide – Speak With Our Team",
    headingHighlight: "Speak With Our Team",
    paragraphs: [
      "LendSmart Mortgages can help you review your financial position, compare vehicle finance lenders, and explore suitable options for your next car purchase.",
      "If you are looking for a car loan broker Adelaide or considering a new car loan Adelaide, speak with LendSmart Mortgages about your vehicle finance requirements.",
      "Thinking about buying a car? Speak with LendSmart Mortgages today.",
    ],
  },

  faqs: {
    description: "Thinking about buying a car? Speak with LendSmart Mortgages today.",
    items: [
      {
        question: "What is a car loan broker?",
        answer:
          "A car loan broker helps borrowers compare vehicle finance options from different lenders. They can review your financial circumstances, discuss available loan structures, compare potential products, and assist with the application process.",
      },
      {
        question: "How can I get a car loan Adelaide?",
        answer:
          "To apply for a car loan Adelaide, lenders may assess your income, expenses, existing debts, deposit, credit position, vehicle details, and ability to meet the proposed repayments. LendSmart Mortgages can help you understand potential vehicle finance options based on your circumstances.",
      },
      {
        question: "Can I apply for a new car loan Adelaide?",
        answer:
          "Yes, eligible borrowers may be able to apply for a new car loan Adelaide to finance a new vehicle. Lenders can have different requirements relating to vehicle types, loan amounts, interest rates, and repayment periods.",
      },
      {
        question: "What is a car finance broker Adelaide?",
        answer:
          "A car finance broker Adelaide helps borrowers compare vehicle finance products from a selection of lenders. They can explain different loan structures and assist with identifying potential finance options that may suit the borrower's circumstances.",
      },
      {
        question: "Can I get finance for a used vehicle?",
        answer:
          "Potentially. Many lenders provide finance for eligible used vehicles, although requirements can vary based on factors such as the vehicle's age, value, condition, purchase price, and the amount being borrowed.",
      },
      {
        question: "How much deposit do I need for a car loan?",
        answer:
          "The deposit required can vary depending on the lender, vehicle, loan amount, and your financial circumstances. Some borrowers may be able to arrange finance with a smaller deposit, while contributing more upfront can reduce the amount that needs to be borrowed.",
      },
      {
        question: "How long can a car loan term be?",
        answer:
          "Car loan terms vary between lenders and finance products. A longer loan term may reduce the required regular repayment, but it can also increase the total interest paid over the life of the loan.",
      },
      {
        question: "Can a car loan broker compare different lenders?",
        answer:
          "Yes. A car loan broker Adelaide can compare available vehicle finance options based on factors such as interest rates, fees, loan terms, vehicle requirements, and eligibility criteria.",
      },
      {
        question: "Is a new car loan suitable for everyone?",
        answer:
          "No. The suitability of a new car loan Adelaide depends on your financial circumstances, vehicle requirements, borrowing capacity, and ability to manage the repayments. Comparing different finance structures can help you understand your available choices.",
      },
      {
        question: "How can LendSmart Mortgages help with car finance?",
        answer:
          "LendSmart Mortgages can review your financial position, discuss your vehicle purchase plans, compare relevant lenders, explain potential loan structures, and assist with the application process. Our team can help you understand potential car finance broker Adelaide options and the factors that may affect your vehicle finance application.",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    description: "Adelaide car buyers trust LendSmart Mortgages for clear guidance on vehicle finance.",
    reviews: [
      {
        heading: "",
        description:
          "We compared new car loan options and got clear advice on what suited our budget and repayment plans.",
        name: "Michael Anderson",
        time: "3 Days ago",
        image: "/user.png",
      },
      {
        heading: "",
        description:
          "Using our trade-in value was explained simply, which made upgrading our car much easier to finance.",
        name: "Jason K.",
        time: "3 Days ago",
        image: "/user-t.jpg",
      },
      {
        heading: "",
        description:
          "Quick, easy process for our used car loan. The team compared lenders and helped us get moving fast.",
        name: "Priya S.",
        time: "3 Days ago",
        image: "/girl.jpg",
      },
    ],
  },
};

export const truckLoanBrokerAdelaideContent: ServiceLandingContent = {
  slug: "truck-loan-broker-adelaide",
  metaTitle: "Truck Loan Broker Adelaide | Truck Finance",
  metaDescription:
    "Looking for truck finance in Adelaide? Compare commercial truck loan options for new or used vehicles with tailored finance support for your business.",

  hero: {
    breadcrumbLabel: "Truck Loan Broker Adelaide",
    heading: "Truck Loan Broker Adelaide",
    headingHighlight: "Broker Adelaide",
    description:
      "Whether you are purchasing your first truck, replacing an existing commercial vehicle, or expanding your transport operation, choosing the right finance structure can play an important role in managing your purchase.",
    extraDescription:
      "If you are looking for a truck loan broker Adelaide, our team can review your financial position, understand your vehicle requirements, compare suitable lending options, and help you work through the available truck finance choices.",
    featurePoints: ["New & Used Truck Finance", "Business Asset & Deposit Options", "Multiple Lender Comparison"],
    image: "/service/truck-benefit.png",
  },

  intro: {
    eyebrow: "Truck Finance Broker Adelaide",
    heading: "Truck Finance Broker Adelaide",
    paragraphs: [
      "A truck finance broker Adelaide can help you compare commercial vehicle finance options based on the type of truck you want to purchase, your business requirements, borrowing capacity, deposit, and preferred repayment structure.",
      "Different lenders can have their own interest rates, fees, loan terms, vehicle requirements, and eligibility criteria.",
    ],
    listHeading: "Our truck finance services include:",
    listItems: [
      "Truck borrowing capacity assessment",
      "Deposit and loan amount assessment",
      "Commercial vehicle finance comparison",
      "Interest rate comparison",
      "Loan term assessment",
      "Lender comparison",
    ],
    closingParagraphs: [
      "Our team can help you understand potential truck loan Adelaide options and identify finance structures that may be appropriate for your circumstances and vehicle purchase.",
    ],
  },

  solutions: {
    heading: "Commercial Truck Finance Options for Adelaide Businesses",
    headingHighlight: "Adelaide Businesses",
    blocks: [
      {
        title: "Assess Your Truck Finance Requirements",
        paragraphs: [
          "Purchasing a commercial truck involves more than considering the vehicle's purchase price. Your business income, existing debts, deposit, trading history, vehicle type, operating requirements, and proposed loan term can all influence your finance position.",
          "Our team can review your circumstances and help you understand potential commercial truck finance Adelaide options available through our lender network.",
          "We can help you consider:",
        ],
        listItems: [
          "Available deposit",
          "Truck purchase price",
          "Business financial position",
          "Existing finance commitments",
          "Expected loan repayments",
        ],
      },
      {
        title: "Commercial Truck Finance Adelaide",
        paragraphs: [
          "Commercial truck finance Adelaide can be used to fund the purchase of eligible trucks and commercial vehicles for business purposes. Depending on the lender and vehicle, finance may be available for different types of commercial trucks, with individual requirements applying to loan amounts, vehicle age, repayment periods, and borrower eligibility.",
          "If you are considering commercial truck finance Adelaide, LendSmart Mortgages can help you compare different lenders and understand the finance structures that may be available for your business.",
        ],
      },
      {
        title: "Truck Loan Adelaide for New and Used Trucks",
        paragraphs: [
          "A truck loan Adelaide may be available for eligible new and used commercial vehicles. Lenders can consider factors such as the truck's age, purchase price, condition, intended use, and your business's financial position when assessing a finance application.",
          "Our team can help you compare potential truck finance options and understand how the vehicle you are purchasing may affect the loan amount, repayments, and available lending choices.",
        ],
      },
      {
        title: "Truck Finance Using Business Assets or Deposit",
        paragraphs: [
          "Businesses may have different ways of contributing towards a commercial vehicle purchase. This can include an available cash deposit or, depending on the circumstances and lender requirements, using existing business assets or equity as part of the overall finance strategy.",
          "The amount contributed towards the purchase can affect how much you need to borrow and the resulting repayments. Our team can review your position and help you understand the potential options available.",
        ],
      },
      {
        title: "Truck Loans for Business Expansion",
        paragraphs: [
          "Businesses that already operate commercial vehicles may require additional finance when expanding their fleet or replacing older trucks. However, taking on another vehicle loan means considering existing finance commitments, business income, operating expenses, and overall borrowing capacity.",
          "We can help you review your current lending position and compare potential truck loan Adelaide options for your next commercial vehicle purchase.",
        ],
      },
    ],
  },

  whyChoose: {
    heading: "Why Choose a Truck Loan Broker Adelaide?",
    headingHighlight: "Truck Loan Broker Adelaide?",
    description:
      "Choosing commercial vehicle finance involves considering more than the advertised interest rate. Loan fees, repayment terms, lender policies, vehicle requirements, loan features, and your business's financial position can all affect whether a particular finance option is suitable.",
    features: [
      {
        title: "Compare Different Lenders",
        description:
          "Working with a truck loan broker Adelaide can give you access to a range of lending options through a lender network. This allows you to compare different commercial vehicle finance products instead of contacting lenders individually.",
      },
      {
        title: "Finance Based on Your Business",
        description:
          "Your business income, expenses, existing finance, trading history, deposit, and vehicle requirements can influence your available lending options. We consider these factors when discussing potential commercial vehicle finance solutions.",
      },
      {
        title: "Understand Truck Loan Structures",
        description:
          "Commercial vehicle loans can have different interest rates, repayment periods, fees, and loan features. We can explain the differences and help you understand how each structure may affect your business repayments.",
      },
      {
        title: "Support With the Application",
        description:
          "Truck finance applications may require information about your business income, expenses, assets, liabilities, existing loans, and the commercial vehicle being purchased. Our team can assist you in understanding the information and documentation required.",
      },
    ],
  },

  process: {
    normalText: "How the",
    highlightText: "Truck Finance",
    breakText: "Process Works",
    description: "We keep the process straightforward so you can understand each stage before proceeding with your commercial vehicle purchase.",
    steps: [
      {
        num: 1,
        title: "Discuss Your\nTruck Requirements",
        desc: "Tell us about the type of truck you are considering, its intended business use, your expected purchase price, and whether you are purchasing a new or used vehicle.",
        icon: "/communication-center.png",
      },
      {
        num: 2,
        title: "Review Your\nFinancial Position",
        desc: "We assess relevant information about your business income, expenses, existing finance commitments, deposit, assets, liabilities, and other financial obligations.",
        icon: "/appraisal.png",
      },
      {
        num: 3,
        title: "Determine Your\nBorrowing Options",
        desc: "Based on your circumstances, we can help you understand your potential borrowing position and the truck finance options that may be available.",
        icon: "/assets.png",
      },
      {
        num: 4,
        title: "Compare Suitable\nTruck Loans",
        desc: "We compare relevant products from our lender network based on factors such as interest rates, fees, loan terms, repayment structures, vehicle requirements, and lending criteria.",
        icon: "/officer.png",
        active: true,
      },
      {
        num: 5,
        title: "Select Your\nPreferred Option",
        desc: "Once you understand the available choices, you can decide which lender and finance structure may be appropriate for your commercial vehicle purchase.",
        icon: "/agreement.png",
      },
      {
        num: 6,
        title: "Submit Your\nApplication",
        desc: "We can help you prepare the required information and documentation before submitting your truck finance application to the selected lender.",
        icon: "/collateral.png",
      },
    ] satisfies LoanProcessStep[],
  },

  whoWeHelp: {
    heading: "Who Can Use Our Truck Finance Services?",
    paragraphs: [
      "Our commercial vehicle finance services can assist Adelaide businesses at different stages of their transport and business operations.",
      "We can help if you are:",
    ],
    listItems: [
      "Purchasing your first commercial truck",
      "Replacing an existing truck",
      "Expanding your business fleet",
      "Buying a new commercial vehicle",
      "Purchasing a used truck",
      "Looking for a truck finance broker Adelaide",
      "Considering commercial truck finance Adelaide",
    ],
    closingParagraphs: [
      "Your eligibility for particular truck finance products will depend on factors such as your business income, expenses, existing debts, deposit, trading history, vehicle details, borrowing capacity, lender requirements, and applicable lending criteria.",
    ],
  },

  compare: {
    heading: "Work With Truck Finance Broker Adelaide",
    headingHighlight: "Truck Finance Broker Adelaide",
    paragraphs: [
      "Comparing commercial vehicle finance yourself can take time, particularly when lenders have different requirements for truck types, vehicle age, business history, loan amounts, and repayment structures.",
      "Our truck finance broker Adelaide service can help you review your business's financial position, compare commercial vehicle lenders, understand different loan structures, and work through the application process.",
      "LendSmart Mortgages can help you assess potential commercial truck finance Adelaide options based on your circumstances rather than simply selecting a loan because it has a lower advertised interest rate.",
    ],
  },

  getStarted: {
    heading: "Truck Loan Adelaide – Speak With Our Team",
    headingHighlight: "Speak With Our Team",
    paragraphs: [
      "LendSmart Mortgages can help you review your business's financial position, compare truck finance lenders, and explore suitable options for your next commercial vehicle purchase.",
      "If you are looking for a truck loan broker Adelaide or comparing truck loan Adelaide options, speak with LendSmart Mortgages about your commercial vehicle finance requirements.",
      "Planning to purchase a commercial truck? Speak with LendSmart Mortgages today.",
    ],
  },

  faqs: {
    description: "Planning to purchase a commercial truck? Speak with LendSmart Mortgages today.",
    items: [
      {
        question: "What is a truck loan broker?",
        answer:
          "A truck loan broker helps businesses and borrowers compare commercial vehicle finance options from different lenders. They can review financial circumstances, discuss available loan structures, compare potential products, and assist with the application process.",
      },
      {
        question: "How can I get a truck loan Adelaide?",
        answer:
          "To apply for a truck loan Adelaide, lenders may assess your business income, expenses, existing debts, assets, deposit, trading history, truck details, and ability to meet the proposed repayments. LendSmart Mortgages can help you understand potential truck finance options based on your circumstances.",
      },
      {
        question: "What is commercial truck finance Adelaide?",
        answer:
          "Commercial truck finance Adelaide refers to finance used to purchase an eligible truck or commercial vehicle for business purposes. Different lenders can offer different loan structures, interest rates, repayment periods, and eligibility requirements.",
      },
      {
        question: "What does a truck finance broker Adelaide do?",
        answer:
          "A truck finance broker Adelaide helps borrowers compare commercial vehicle finance products from a selection of lenders. They can explain different finance structures and assist with identifying potential lending options based on the business and vehicle requirements.",
      },
      {
        question: "Can I get finance for a used truck?",
        answer:
          "Potentially. Some lenders provide finance for eligible used trucks, although their requirements can vary according to the vehicle's age, value, condition, purchase price, intended use, and the amount being borrowed.",
      },
      {
        question: "How much deposit is required for truck finance?",
        answer:
          "The deposit required can vary between lenders and depends on factors such as the truck, loan amount, business circumstances, and finance structure. Contributing a larger amount upfront may reduce the amount that needs to be financed.",
      },
      {
        question: "Can a new business apply for truck finance?",
        answer:
          "Potentially. New businesses may be able to apply for commercial vehicle finance, although lender requirements can differ. Business income, financial information, borrower circumstances, assets, liabilities, and the proposed truck may all be relevant to the assessment.",
      },
      {
        question: "Can a truck loan broker compare different lenders?",
        answer:
          "Yes. A truck loan broker Adelaide can help compare available commercial vehicle finance options based on factors such as interest rates, fees, loan terms, vehicle requirements, and lending criteria.",
      },
      {
        question: "Can I finance more than one commercial truck?",
        answer:
          "Potentially. Businesses may be able to finance additional vehicles when expanding their fleet, subject to lender requirements and borrowing capacity. Existing truck loans, business income, expenses, and other financial commitments can affect the assessment.",
      },
      {
        question: "How can LendSmart Mortgages help with truck finance?",
        answer:
          "LendSmart Mortgages can review your business's financial position, discuss your commercial vehicle requirements, compare relevant lenders, explain potential loan structures, and assist with the application process. Our team can help you understand potential commercial truck finance Adelaide options and the factors that may affect your application.",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    description: "Adelaide businesses trust LendSmart Mortgages for clear guidance on commercial truck finance.",
    reviews: [
      {
        heading: "",
        description:
          "We were expanding our fleet and the team compared commercial lenders clearly, which made the process much faster.",
        name: "Michael Anderson",
        time: "3 Days ago",
        image: "/user.png",
      },
      {
        heading: "",
        description:
          "As a new business, we weren't sure we'd qualify for truck finance. LendSmart explained our options and got us moving.",
        name: "Jason K.",
        time: "3 Days ago",
        image: "/user-t.jpg",
      },
      {
        heading: "",
        description:
          "Great support comparing new versus used truck finance options for our business. Helped us make the right call.",
        name: "Priya S.",
        time: "3 Days ago",
        image: "/girl.jpg",
      },
    ],
  },
};

/**
 * Central registry of prop-driven service/location landing pages.
 * To add a new page: add a new `ServiceLandingContent` object here (or in
 * its own file) and register it below, then create a one-line
 * `app/<slug>/page.tsx` that renders `<ServiceLandingTemplate content={...} />`.
 */
export const serviceLandingPages: Record<string, ServiceLandingContent> = {
  [homeLoansAdelaideContent.slug]: homeLoansAdelaideContent,
  [firstHomeBuyerLoansAdelaideContent.slug]: firstHomeBuyerLoansAdelaideContent,
  [refinanceHomeLoansAdelaideContent.slug]: refinanceHomeLoansAdelaideContent,
  [propertyInvestmentLoansAdelaideContent.slug]: propertyInvestmentLoansAdelaideContent,
  [carLoanBrokerAdelaideContent.slug]: carLoanBrokerAdelaideContent,
  [truckLoanBrokerAdelaideContent.slug]: truckLoanBrokerAdelaideContent,
};

export function getServiceLandingContent(slug: string): ServiceLandingContent | undefined {
  return serviceLandingPages[slug];
}
