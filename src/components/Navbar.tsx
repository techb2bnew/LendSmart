"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Mail,
  Clock3,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function LendSmartHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full overflow-visible">
      <div className="h-1 w-full bg-[#6db33f] sm:h-[4px]" />

      <div className="w-full bg-[#fff] text-[11px] text-[#3e3e3e] sm:text-[12px]">
        <div className="page-container flex h-11 max-h-none items-center justify-between sm:h-[46px] sm:px-6 lg:px-10">
          <div className="hidden items-center divide-x divide-gray-300 md:flex">
            <div className="flex items-center gap-2 pr-4 lg:pr-5">
              <Mail size={12} className="shrink-0 text-gray-700" />
              <a href="mailto:bharat@lendsmart.com.au" className="truncate hover:underline">
                bharat@lendsmart.com.au
              </a>
            </div>

            <div className="flex items-center gap-2 px-4 lg:px-5">
              <Mail size={12} className="shrink-0 text-gray-700" />
              <a href="mailto:v.admin@lendsmart.com.au" className="truncate hover:underline">
                v.admin@lendsmart.com.au
              </a>
            </div>

            <div className="hidden items-center gap-2 px-4 lg:flex lg:px-5">
              <Clock3 size={12} className="shrink-0 text-gray-700" />
              <span className="whitespace-nowrap">Mon - Sun : 9am - 8pm</span>
            </div>

            <div className="hidden items-center gap-2 pl-4 lg:flex lg:pl-5">
              <Phone size={12} className="shrink-0 text-gray-700" />
              <a href="tel:+61413206624" className="whitespace-nowrap hover:underline">
                Call 0413 206 624
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Phone size={12} className="shrink-0" />
            <a href="tel:+61413206624" className="font-medium hover:underline">
              0413 206 624
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-3 text-black sm:gap-4">
            <Link href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <span className="text-[13px] font-semibold sm:text-[14px]">in</span>
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:opacity-70">
              <Facebook size={14} strokeWidth={2.3} className="sm:h-[14px] sm:w-[14px]" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:opacity-70">
              <Instagram size={14} strokeWidth={2.3} className="sm:h-[14px] sm:w-[14px]" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:opacity-70">
              <Youtube size={14} strokeWidth={2.3} className="sm:h-[14px] sm:w-[14px]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-visible bg-white">
        <div className="min-h-[64px] overflow-visible bg-[#3c6f16]">
          <div className="page-container relative flex min-h-[64px] items-center justify-center overflow-visible py-1 sm:px-6 lg:px-10">
            <div className="absolute left-0 top-[-6px] z-20 sm:left-1 sm:top-[-4px]">
              <Link href="/" className="block" onClick={() => setMobileOpen(false)}>
                <div
                  className="relative flex h-[90px] w-[190px] items-center justify-center px-2 sm:h-[88px] sm:w-[200px] sm:px-3"
                  style={{
                    backgroundImage: "url('/bg-shadow.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <Image
                    src="/LendSmart-Logo.png"
                    alt="LendSmart Mortgages"
                    width={150}
                    height={50}
                    className="max-h-[50px] object-cover sm:max-h-[50px]"
                    priority
                  />
                </div>
              </Link>
            </div>

            <nav
              className="hidden items-center gap-6 text-[13px] font-medium text-white md:flex lg:gap-8 lg:text-[14px]"
              aria-label="Main"
            >
              {navLinks.map((item, idx) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative transition hover:text-[#d7efc8] ${
                    idx === 0
                      ? "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-white"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="absolute right-0 hidden md:block lg:right-1">
              <a
                href="https://wa.me/61413208624"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-medium text-[#222] shadow-sm lg:px-4 lg:text-[14px]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#25D366] text-white">
                  <Image
                    src="/icon.png"
                    alt=""
                    width={30}
                    height={30}
                    priority
                    className="object-contain"
                  />
                </span>
                <span className="hidden lg:inline">Click here to chat</span>
                <span className="lg:hidden">Chat</span>
              </a>
            </div>

            <button
              type="button"
              className="absolute right-0 z-30 flex h-11 w-11 items-center justify-center rounded-md text-white md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`md:hidden ${mobileOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"} fixed inset-x-0 top-0 z-[100] transition-opacity duration-200`}
          style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
        >
          <div
            className="absolute inset-0 z-0 min-h-[100dvh] bg-black/45"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="relative z-[101] mt-[72px] mx-4 overflow-hidden rounded-xl border border-white/10 bg-[#2d5010] shadow-xl"
            aria-label="Mobile"
          >
            <ul className="flex flex-col divide-y divide-white/10 py-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-5 py-4 text-[15px] font-medium text-white active:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="px-5 py-4">
                <a
                  href="https://wa.me/61413208624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-[14px] font-semibold text-[#222]"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image src="/icon.png" alt="" width={24} height={24} className="object-contain" />
                  WhatsApp chat
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
