import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data/team';

export default function Team() {
  const { t, lang } = useLanguage();
  const tm = t.team;
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('div')?.offsetWidth ?? 300;
    el.scrollBy({ left: dir === 'right' ? cardWidth + 24 : -(cardWidth + 24), behavior: 'smooth' });
  }

  return (
    <section id="team" className="section-pad bg-steel-50">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block bg-steel-100 text-steel-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              {tm.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-2">{tm.heading}</h2>
            <p className="text-steel-500 text-lg max-w-xl">{tm.subtitle}</p>
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-xl bg-white border border-steel-200 flex items-center justify-center text-steel-600 hover:bg-steel-800 hover:text-white hover:border-steel-800 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-xl bg-white border border-steel-200 flex items-center justify-center text-steel-600 hover:bg-steel-800 hover:text-white hover:border-steel-800 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex-shrink-0 w-72 bg-white rounded-2xl border border-steel-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Photo */}
              <div className="h-56 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-steel-900 text-lg leading-tight">{member.name}</h3>
                <p className="text-steel-500 text-sm font-medium mt-0.5 mb-3">
                  {member.role[lang]}
                </p>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {member.bio[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {teamMembers.map((m) => (
            <span key={m.name} className="w-1.5 h-1.5 rounded-full bg-steel-300" />
          ))}
        </div>
      </div>

    </section>
  );
}
