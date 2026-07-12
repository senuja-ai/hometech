import { Home, Clock, HeartHandshake, Banknote, Languages, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [Home, Clock, HeartHandshake, Banknote, Languages, ShieldCheck];

export default function WhyUs() {
  const { t } = useLanguage();
  const w = t.whyUs;

  return (
    <section id="why-us" className="section-pad bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-steel-100 text-steel-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {w.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-3">{w.heading}</h2>
          <p className="text-steel-500 text-lg max-w-xl mx-auto">{w.subtitle}</p>
        </div>

        {/* Reason grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {w.reasons.map((r, idx) => {
            const Icon = icons[idx];
            return (
              <div key={r.title} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-steel-100 group-hover:bg-steel-800 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 text-steel-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-steel-900 text-base">{r.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed mt-1">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image banner */}
        <div className="mt-16 rounded-2xl overflow-hidden relative h-48 sm:h-64">
          <img
            src="https://i.postimg.cc/XqxsQ3kg/pexels-gokceerem-38485579.jpg"
            alt="Friendly IT technician helping a customer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-steel-900/60 flex items-center justify-center">
            <p className="text-white text-xl sm:text-2xl font-bold text-center px-4">
              {w.bannerText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
