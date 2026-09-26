import { Sparkles, Bot, Code2, Cpu, TrendingUp, PiggyBank } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [Bot, Code2, Cpu, TrendingUp, PiggyBank];

// 5 cards: 3 on the top row, 2 centred below on large screens
const layout = ['', '', '', 'lg:col-start-2', ''];

export default function AISolutions() {
  const { t } = useLanguage();
  const s = (t as any).AISolutions;
  const cardsList = s?.cards || [];

  return (
    <section id="AI-Solutions" className="section-pad bg-steel-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-mint-500/10 text-mint-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {s?.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-3">
            {s?.heading}
          </h2>
          <p className="text-steel-500 text-lg max-w-xl mx-auto">{s?.subtitle}</p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {cardsList.map((card: any, idx: number) => {
            const Icon = icons[idx % icons.length];
            const itemsList = card?.items || [];

            return (
              <div
                key={card?.title || idx}
                className={`lg:col-span-2 ${layout[idx] || ''} group bg-white rounded-2xl border border-steel-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Card header */}
                <div className="bg-gradient-to-br from-steel-800 to-steel-900 px-5 pt-6 pb-5">
                  <div className="w-12 h-12 bg-mint-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-mint-500" />
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{card?.title}</h3>
                  <p className="text-steel-300 text-xs mt-1">{card?.subtitle}</p>
                </div>

                {/* Card body */}
                <div className="px-5 py-4">
                  <ul className="space-y-2">
                    {itemsList.map((item: string, itemIdx: number) => (
                      <li key={item || itemIdx} className="flex items-baseline gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint-500 flex-shrink-0 mt-1.5" />
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
