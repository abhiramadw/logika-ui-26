"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const highSchoolCompetitions = [
  { label: "MIC", href: "/competitions/mic" },
  { label: "MTC", href: "/competitions/mtc" },
  { label: "ASC", href: "/competitions/asc" },
  { label: "SEC", href: "/competitions/sec" },
];

const undergraduateCompetitions = [
  { label: "UEC", href: "/competitions/uec" },
  { label: "ACC", href: "/competitions/acc" },
  { label: "DSC", href: "/competitions/dsc" },
];

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  };

  const linkClass = `text-lg font-medium transition-colors hover:text-gold ${
    scrolled ? "text-cream" : "text-gold"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "opacity-100 translate-y-0 bg-brown-dark shadow-md pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/Logo.png"
              alt="Logo LOGIKA UI 2026"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-gold font-bold text-xl tracking-wide">
              LOGIKA UI 2026
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 ${linkClass}`}
                onClick={() => setDesktopDropdownOpen((v) => !v)}
                aria-expanded={desktopDropdownOpen}
              >
                Competitions
                <ChevronDown open={desktopDropdownOpen} />
              </button>

              {desktopDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-brown-dark border border-gold/20 rounded-lg shadow-xl py-2">
                  <p className="px-4 py-1.5 text-gold/50 text-xs font-semibold uppercase tracking-widest">
                    High School
                  </p>
                  {highSchoolCompetitions.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm text-cream hover:text-gold hover:bg-white/5 transition-colors"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                  <div className="border-t border-gold/20 my-1" />
                  <p className="px-4 py-1.5 text-gold/50 text-xs font-semibold uppercase tracking-widest">
                    Undergraduate
                  </p>
                  {undergraduateCompetitions.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm text-cream hover:text-gold hover:bg-white/5 transition-colors"
                      onClick={() => setDesktopDropdownOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hamburger button */}
          <button
            className={`md:hidden p-1 transition-colors hover:text-gold ${
              scrolled ? "text-cream" : "text-gold"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-brown-dark border-t border-gold/20">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block py-2.5 text-cream hover:text-gold transition-colors font-medium"
              onClick={closeMobile}
            >
              Home
            </Link>

            <button
              className="w-full flex items-center justify-between py-2.5 text-cream hover:text-gold transition-colors font-medium"
              onClick={() => setMobileDropdownOpen((v) => !v)}
              aria-expanded={mobileDropdownOpen}
            >
              Competitions
              <ChevronDown open={mobileDropdownOpen} />
            </button>

            {mobileDropdownOpen && (
              <div className="pl-4 pb-2 space-y-0.5">
                <p className="text-gold/50 text-xs font-semibold uppercase tracking-widest py-1.5">
                  High School
                </p>
                {highSchoolCompetitions.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block py-2 text-sm text-cream hover:text-gold transition-colors"
                    onClick={closeMobile}
                  >
                    {c.label}
                  </Link>
                ))}
                <p className="text-gold/50 text-xs font-semibold uppercase tracking-widest py-1.5 pt-3">
                  Undergraduate
                </p>
                {undergraduateCompetitions.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block py-2 text-sm text-cream hover:text-gold transition-colors"
                    onClick={closeMobile}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;