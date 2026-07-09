import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block bg-steel-100 text-steel-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              {a.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4 leading-tight">
              {a.heading}
            </h2>
            <p className="text-steel-500 text-lg mb-3 leading-relaxed">{a.subtitle}</p>
            <p className="text-steel-400 text-base leading-relaxed mb-4">{a.body}</p>
            <p className="text-steel-400 text-base leading-relaxed mb-8">{a.body2}</p>

            {/* Stats */}
            <div className="flex gap-8">
              {a.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-steel-800">{s.value}</p>
                  <p className="text-steel-400 text-sm mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: certified card + photo */}
          <div className="space-y-6">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 relative">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="IT technician at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-900/40 to-transparent" />
            </div>

            {/* Certified card */}
            <div className="bg-steel-800 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 bg-steel-600/50 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-steel-100" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{a.certifiedBadge}</h3>
                <p className="text-steel-300 text-sm leading-relaxed">{a.certifiedText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
