import { MapPin, CheckCircle2, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const areas = ['Dragør', 'Tårnby', 'Amager', 'København'];

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center bg-steel-900 overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-steel-950/60 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-steel-700/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-steel-500/15 blur-3xl" />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-steel-700/60 border border-steel-600/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
            <span className="text-steel-200 text-sm font-medium">{h.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            {h.heading1}{' '}
            <span className="text-steel-300">{h.heading2}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-steel-200 font-medium mb-3">
            {h.subheading} <em className="not-italic text-white">{h.subheadingYou}</em>
          </p>
          <p className="text-steel-300 text-base sm:text-lg mb-10 max-w-xl">
            {h.tagline}
            <br />
            <span className="text-steel-400 text-sm">{h.taglineSub}</span>
          </p>

          {/* Highlights */}
          <ul className="grid sm:grid-cols-2 gap-2.5 mb-10">
            {h.highlights.map((hl) => (
              <li key={hl} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-steel-100 text-sm">{hl}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:71 87 54 94"
              className="inline-flex items-center gap-2 bg-mint-500 hover:bg-mint-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-mint-500/20 transition-all hover:scale-105 active:scale-100"
            >
              <Phone className="w-4 h-4" />
              {h.cta1}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-sm transition-all hover:scale-105 active:scale-100"
            >
              {h.cta2}
            </a>
          </div>

          {/* Areas */}
          <div className="flex flex-wrap items-center gap-2 mt-10">
            <MapPin className="w-4 h-4 text-steel-400" />
            <span className="text-steel-500 text-sm mr-1">{h.areaLabel}:</span>
            {areas.map((area, i) => (
              <span key={area} className="text-steel-300 text-sm">
                {area}
                {i < areas.length - 1 && <span className="text-steel-600 ml-2">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero photo */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="IT support technician"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-900 via-steel-900/60 to-transparent" />
      </div>
    </section>
  );
}
