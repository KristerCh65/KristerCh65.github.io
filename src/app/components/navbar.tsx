
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/app/images/MK.png';
import { useLanguage } from "@/app/i18n/language";

export const sectionIds = ["about", "skills", "experience", "projects", "education", "contact"] as const;

const linkClass = "whitespace-nowrap text-black dark:text-gray-300 hover:text-teal-700 dark:hover:text-white transition-colors";
const activeLinkClass = "whitespace-nowrap text-teal-700 dark:text-teal-400 font-semibold";
const cvButtonClass = "whitespace-nowrap rounded-lg font-medium bg-gray-900 text-white hover:bg-teal-700 dark:bg-white dark:text-gray-900 dark:hover:bg-teal-400 transition-colors inline-flex items-center gap-2";


const SunIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
  </svg>
);

const MoonIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
  </svg>
);

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  // The theme is only known on the client; wait until mount to pick the icon
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === 'dark';

  // Highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));

    // The last section may be too short to reach the middle of the screen
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mobile menu: lock page scroll, close on Escape, keep keyboard focus inside the panel
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isMenuOpen) return;
    const panel = menuPanelRef.current;
    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      menuButton?.focus({ preventScroll: true });
    };
  }, [isMenuOpen]);

  const links = sectionIds.map((id) => ({ id, label: t.nav[id] }));
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const toggleLanguage = () => setLang(lang === 'en' ? 'es' : 'en');
  const closeMenu = () => setIsMenuOpen(false);

  const languageButton = (
    <button
      onClick={toggleLanguage}
      className={`${linkClass} text-sm font-semibold px-1`}
      aria-label={t.nav.switchLanguage}
      title={t.nav.switchLanguage}
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  );

  return (
    <>
      <nav className="sticky top-0 z-30 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur border-b border-teal-500 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src={logo} className="invert dark:invert-0" alt="Krister Munguia" width={50} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? activeLinkClass : linkClass}
                aria-current={activeSection === link.id ? "true" : undefined}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-px h-6 bg-gray-400 dark:bg-gray-600"></div>

            {languageButton}

            <button onClick={toggleTheme} className={`${linkClass} p-1`} aria-label={t.nav.toggleTheme}>
              {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>

            <a href="/KBMCH_CV.pdf" target="_blank" rel="noopener noreferrer" className={`px-4 py-2 ${cvButtonClass}`}>
              <DownloadIcon />
              {t.nav.downloadCv}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="xl:hidden text-black dark:text-white p-2 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
            aria-label={t.nav.openMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden" onClick={closeMenu}></div>

          {/* Sidebar */}
          <div
            id="mobile-menu"
            ref={menuPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed top-0 right-0 h-full w-80 max-w-full overflow-y-auto bg-gray-100 dark:bg-gray-900 z-50 xl:hidden shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-teal-500">
                <Link href="/" className="hover:opacity-80 transition-opacity" onClick={closeMenu}>
                  <Image src={logo} className="invert dark:invert-0" alt="Krister Munguia" width={40} height={40} />
                </Link>
                <button
                  onClick={closeMenu}
                  className="text-black dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors p-1"
                  aria-label={t.nav.closeMenu}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-2 p-6 flex-grow">
                {links.map((link) => (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    className={`${activeSection === link.id ? activeLinkClass : linkClass} py-2`}
                    aria-current={activeSection === link.id ? "true" : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Theme Toggle */}
                <div className="flex items-center justify-between py-2 mt-4">
                  <span className="text-black dark:text-gray-300">{t.nav.switchTheme}</span>
                  <button onClick={toggleTheme} className={`${linkClass} p-1`} aria-label={t.nav.toggleTheme}>
                    {isDark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                  </button>
                </div>

                {/* Language Toggle */}
                <div className="flex items-center justify-between py-2">
                  <span className="text-black dark:text-gray-300">{t.nav.switchLanguage}</span>
                  {languageButton}
                </div>

                {/* Download CV Button */}
                <a
                  href="/KBMCH_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 px-4 py-3 justify-center ${cvButtonClass}`}
                  onClick={closeMenu}
                >
                  <DownloadIcon />
                  {t.nav.downloadCv}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
