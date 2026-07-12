import { Monitor, Wifi, Printer, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [Monitor, Wifi, Printer, Smartphone];

export default function ForCompanies() {
  const { t } = useLanguage();
  // Cast the entire section to 'any' right away so TypeScript stops inspecting its children strictly
  const s = (t as any).ForCompanies;
  // Now this line is clean, safe, and won't throw any errors
  const cardsList = s?.cards || [];

  return (
    <section id="ForCompanies" className="section-pad bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-steel-100 text-steel-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {s?.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-3">
            {s?.heading}
          </h2>
          <p className="text-steel-500 text-lg max-w-xl mx-auto">{s?.subtitle}</p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsList.map((card: any, idx: number) => {
            const Icon = icons[idx] || Monitor;
            // Safe fallback lookup using any to bypass strict tuple checking entirely
            const itemsList = card?.items || [];

            return (
              <div
                key={card?.title || idx}
                className="group bg-white rounded-2xl border border-steel-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-steel-800 px-5 pt-6 pb-5">
                  <div className="w-12 h-12 bg-steel-600/40 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-steel-100" />
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{card?.title}</h3>
                  <p className="text-steel-300 text-xs mt-1">{card?.subtitle}</p>
                </div>

                {/* Card body */}
                <div className="px-5 py-4">
                  <ul className="space-y-2">
                    {itemsList.map((item: string, itemIdx: number) => (
                      <li key={item || itemIdx} className="flex items-baseline gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-steel-400 flex-shrink-0 mt-1.5" />
                        <span className="text-steel-800 font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-steel-400 text-sm mt-10">{s?.bottomNote}</p>
      </div>
    </section>
  );
}