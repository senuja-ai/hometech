import { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Lang } from '../i18n/translations';
import DanishFlag from './flags/DanishFlag';
import UKFlag from './flags/UKFlag';

function LangToggle() {
  const { lang, setLang } = useLanguage();

  function toggle(l: Lang) {
    if (l !== lang) setLang(l);
  }

  return (
    <div className="flex items-center rounded-xl overflow-hidden border border-steel-600 text-xs font-semibold">
      <button
        onClick={() => toggle('da')}
        title="Dansk"
        className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors ${
          lang === 'da'
            ? 'bg-steel-500 text-white'
            : 'text-steel-300 hover:text-white hover:bg-steel-700'
        }`}
      >
        <DanishFlag className="w-5 h-3.5 rounded-[2px]" />
        <span>DA</span>
      </button>
      <span className="w-px h-5 bg-steel-600" />
      <button
        onClick={() => toggle('en')}
        title="English"
        className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors ${
          lang === 'en'
            ? 'bg-steel-500 text-white'
            : 'text-steel-300 hover:text-white hover:bg-steel-700'
        }`}
      >
        <UKFlag className="w-5 h-3.5 rounded-[2px]" />
        <span>EN</span>
      </button>
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-steel-900 shadow-lg' : 'bg-steel-900/95'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-steel-500 rounded-lg flex items-center justify-center group-hover:bg-steel-400 transition-colors">
            <Wifi className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className="block text-white font-bold text-base tracking-tight">HomeTech</span>
            <span className="block text-steel-300 text-[10px] font-medium tracking-widest uppercase">Denmark</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-steel-200 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <LangToggle />
          <a
            href="tel:71 87 54 94"
            className="ml-1 bg-mint-500 hover:bg-mint-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            71 87 54 94
          </a>
        </nav>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button
            className="text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-steel-900 border-t border-steel-800 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-steel-200 hover:text-white text-sm font-medium border-b border-steel-800 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4571875494"
            className="mt-3 block text-center bg-mint-500 hover:bg-mint-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            +45 7187 5494
          </a>
        </div>
      )}
    </header>
  );
}
