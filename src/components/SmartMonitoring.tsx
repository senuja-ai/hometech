import {
  Droplets,
  Warehouse,
  Flame,
  Trees,
  Sprout,
  BellRing,
  RadioTower,
  Radio,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Home,
  Building,
  Building2,
  Factory,
  Tractor,
  Map,
  LayoutDashboard,
  ClipboardList,
  FileBarChart,
  Plug,
  Wrench,
  MessagesSquare,
  Search,
  FlaskConical,
  Rocket,
  LifeBuoy,
  CheckCircle2,
  Info,
  Cpu,
  Settings2,
  SlidersHorizontal,
  Waves,
  Phone,
  Zap,
  Thermometer,
  ClipboardCheck,
  MapPinned,
  BadgeCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { monitoring, prefillContact } from '../i18n/monitoring';

const benefitIcons = [BellRing, RadioTower, MessagesSquare, Waves];
const productIcons = [Droplets, Warehouse, Flame, Sprout];
const chainIcons = [SlidersHorizontal, Cpu, RadioTower, LayoutDashboard, Settings2];
const siteIcons = [Home, Building, Building2, Factory, Tractor, Map];
const platformIcons = [LayoutDashboard, ClipboardList, BellRing, FileBarChart, Plug, Wrench];
const stepIcons = [MessagesSquare, Search, FlaskConical, Rocket, LifeBuoy];
const promiseIcons = [MapPinned, BadgeCheck, ClipboardList];

/** Illustrative dashboard card shown next to the headline. */
function ExampleDashboard({ lang }: { lang: 'en' | 'da' }) {
  const da = lang === 'da';
  const rows = [
    { icon: Droplets, label: da ? 'Kælder · lækage' : 'Basement · leak', value: 'OK', ok: true },
    { icon: Thermometer, label: da ? 'Stald 2 · temperatur' : 'Stable 2 · temperature', value: '14.2 °C', ok: true },
    { icon: Waves, label: da ? 'Vandtank · niveau' : 'Water tank · level', value: '72 %', ok: true },
    { icon: Zap, label: da ? 'Strøm · lade' : 'Power · barn', value: da ? 'Tilsluttet' : 'On', ok: true },
    { icon: Radio, label: 'Gateway', value: 'Online', ok: true },
  ];

  return (
    <div className="relative bg-steel-900/80 backdrop-blur border border-steel-700 rounded-2xl shadow-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-white font-semibold text-sm">{da ? 'Eksempel på overblik' : 'Example overview'}</p>
        <span className="flex items-center gap-1.5 text-[11px] text-mint-500 font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" /> Live
        </span>
      </div>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center gap-3 bg-steel-800/70 rounded-xl px-3 py-2.5">
            <r.icon className="w-4 h-4 text-steel-300 flex-shrink-0" />
            <span className="text-steel-200 text-sm flex-1 truncate">{r.label}</span>
            <span className="text-white text-sm font-semibold">{r.value}</span>
            <span className="w-2 h-2 rounded-full bg-mint-500 flex-shrink-0" />
          </li>
        ))}
      </ul>
      {/* Example alert */}
      <div className="mt-4 border border-amber-400/40 bg-amber-400/10 rounded-xl p-3">
        <p className="text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <BellRing className="w-3.5 h-3.5" /> {da ? 'Alarm · bryggers' : 'Alert · utility room'}
        </p>
        <ol className="text-steel-200 text-xs space-y-1">
          <li>1. {da ? 'Vand registreret under vaskemaskinen' : 'Water detected under washing machine'}</li>
          <li>2. {da ? 'SMS sendt til ansvarlig – kvitteret' : 'SMS sent to person responsible – acknowledged'}</li>
          <li>3. {da ? 'Hovedventil lukket automatisk' : 'Main valve closed automatically'}</li>
        </ol>
      </div>
      <p className="text-steel-500 text-[11px] mt-3">
        {da ? 'Illustration – det endelige dashboard afhænger af den valgte platform.' : 'Illustration – the final dashboard depends on the chosen platform.'}
      </p>
    </div>
  );
}

type SplitHalf = { label: string; title: string; desc: string; monitors: string[]; where: string[] };
type Labels = { monitorsLabel: string; whereLabel: string; featuresLabel: string };
type SplitProduct = {
  id: string; tag: string; name: string; tagline: string; desc: string;
  features: string[]; footnote: string; split: SplitHalf[];
};

/** FireGuard: one card split diagonally into "Buildings" (light) and "Wildfire" (dark). */
function FireGuardCard({ p, m }: { p: SplitProduct; m: Labels }) {
  const [bld, wild] = p.split;
  return (
    <article
      id={p.id}
      className="bg-white text-steel-900 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-orange-500/60 flex flex-col scroll-mt-20"
    >
      {/* Header – warm fire gradient sets it apart from the other packages */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-700 to-steel-900 px-6 sm:px-8 pt-7 pb-6 overflow-hidden">
        <Flame aria-hidden className="absolute -right-6 -bottom-8 w-40 h-40 text-white/10" />
        <span className="relative inline-block bg-white/15 text-orange-50 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4">
          {p.tag}
        </span>
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <Flame className="w-7 h-7 text-white" />
          </div>
          <div>
            <h4 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">{p.name}</h4>
            <p className="text-orange-100 text-sm">{p.tagline}</p>
          </div>
        </div>
      </div>

      {/* Half 1 – Buildings (light) */}
      <div className="px-6 sm:px-8 pt-6 pb-16">
        <p className="text-steel-600 leading-relaxed mb-5">{p.desc}</p>
        <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          <Building2 className="w-3.5 h-3.5" /> {bld.label}
        </span>
        <p className="font-bold text-steel-900 text-lg leading-tight">{bld.title}</p>
        <p className="text-steel-500 text-sm mt-1 mb-4">{bld.desc}</p>
        <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-2">{m.monitorsLabel}</p>
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
          {bld.monitors.map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm text-steel-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              {x}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {bld.where.map((x) => (
            <span key={x} className="bg-orange-50/60 border border-orange-100 text-steel-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {x}
            </span>
          ))}
        </div>
      </div>

      {/* Half 2 – Wildfire (dark), with a diagonal top edge */}
      <div
        className="relative -mt-12 bg-gradient-to-br from-steel-800 to-steel-950 text-white px-6 sm:px-8 pt-16 pb-6 flex-1 flex flex-col"
        style={{ clipPath: 'polygon(0 48px, 100% 0, 100% 100%, 0 100%)' }}
      >
        <svg aria-hidden className="absolute top-0 left-0 w-full h-12" viewBox="0 0 100 48" preserveAspectRatio="none">
          <line x1="0" y1="48" x2="100" y2="0" stroke="#f97316" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="self-start inline-flex items-center gap-1.5 bg-orange-500/15 text-orange-300 border border-orange-400/30 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          <Trees className="w-3.5 h-3.5" /> {wild.label}
        </span>
        <p className="font-bold text-white text-lg leading-tight">{wild.title}</p>
        <p className="text-steel-300 text-sm mt-1 mb-4">{wild.desc}</p>
        <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-2">{m.monitorsLabel}</p>
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
          {wild.monitors.map((x) => (
            <li key={x} className="flex items-start gap-2 text-sm text-steel-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              {x}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {wild.where.map((x) => (
            <span key={x} className="bg-white/5 border border-white/10 text-steel-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {x}
            </span>
          ))}
        </div>

        {/* Shared features */}
        <div className="mt-auto pt-5">
          <div className="border-t border-white/10 pt-5">
            <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-2.5">{m.featuresLabel}</p>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {p.features.map((x) => (
                <li key={x} className="flex items-baseline gap-2 text-sm text-steel-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="text-steel-400 text-xs mt-3">{p.footnote}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SmartMonitoring() {
  const { lang } = useLanguage();
  const m = monitoring[lang];

  const enquire = () => prefillContact(m.prefill);

  return (
    <section id="smart-monitoring" className="scroll-mt-16">
      {/* ───────────── Part 1: flagship message (dark) ───────────── */}
      <div className="relative bg-steel-950 text-white overflow-hidden section-pad">
        {/* Decorative background: soft glows + radio rings */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-steel-600/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-mint-500/10 blur-3xl" />
          <svg className="absolute top-10 right-0 w-[40rem] opacity-[0.07] hidden lg:block" viewBox="0 0 400 400" fill="none">
            {[40, 80, 120, 160, 200].map((r) => (
              <circle key={r} cx="300" cy="100" r={r} stroke="white" strokeWidth="1.5" />
            ))}
          </svg>
        </div>

        <div className="container-max relative">
          {/* Headline + example dashboard */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 bg-mint-500/15 text-mint-500 border border-mint-500/30 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                <Radio className="w-3.5 h-3.5" />
                {m.badge}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-4">{m.title}</h2>
              <p className="text-xl sm:text-2xl font-semibold text-mint-500 leading-snug mb-5 max-w-2xl">{m.heading}</p>
              <p className="text-steel-300 text-lg leading-relaxed mb-8 max-w-2xl">{m.intro}</p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="#contact"
                  onClick={enquire}
                  className="inline-flex items-center justify-center gap-2 bg-mint-500 hover:bg-mint-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  {m.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#monitoring-how"
                  className="inline-flex items-center justify-center gap-2 border border-steel-600 hover:border-steel-400 hover:bg-steel-800 text-steel-100 font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  {m.ctaSecondary}
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <p className="text-steel-400 text-sm flex items-start gap-2 max-w-2xl">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {m.pilotNote}
              </p>
            </div>

            <div className="lg:col-span-2">
              <ExampleDashboard lang={lang} />
            </div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {m.benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={b.title} className="bg-steel-900/60 border border-steel-800 rounded-2xl p-5">
                  <div className="w-10 h-10 bg-mint-500/15 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-mint-500" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{b.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Products: WaterGuard, StableGuard, FireGuard (split card), AgriGuard */}
          <h3 className="text-center text-steel-300 text-xs font-semibold uppercase tracking-widest mt-20 mb-6">
            {m.productsHeading}
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {m.products.map((p, i) => {
              const Icon = productIcons[i];
              if ('split' in p && p.split) {
                return <FireGuardCard key={p.id} p={p as SplitProduct} m={m} />;
              }
              return (
                <article
                  key={p.id}
                  id={p.id}
                  className="bg-white text-steel-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col scroll-mt-20"
                >
                  <div className="bg-gradient-to-br from-steel-700 to-steel-900 px-6 sm:px-8 pt-7 pb-6">
                    <span className="inline-block bg-white/10 text-steel-100 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4">
                      {p.tag}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-mint-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">{p.name}</h4>
                        <p className="text-steel-300 text-sm">{p.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 py-6 flex flex-col gap-6 flex-1">
                    <p className="text-steel-600 leading-relaxed">{p.desc}</p>

                    <div>
                      <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-2.5">{m.monitorsLabel}</p>
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                        {p.monitors.map((x) => (
                          <li key={x} className="flex items-start gap-2 text-sm text-steel-800 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-mint-500 flex-shrink-0 mt-0.5" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-2.5">{m.whereLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.where.map((x) => (
                          <span key={x} className="bg-steel-50 border border-steel-100 text-steel-700 text-xs font-medium px-3 py-1 rounded-full">
                            {x}
                          </span>
                        ))}
                      </div>
                    </div>

                    {'useCases' in p && p.useCases && (
                      <div>
                        <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-2.5">{p.useCasesLabel}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {p.useCases.map((u) => (
                            <div key={u.title} className="bg-steel-50 border border-steel-100 rounded-xl px-4 py-3">
                              <p className="font-semibold text-steel-900 text-sm">{u.title}</p>
                              <p className="text-steel-500 text-xs mt-0.5">{u.desc}</p>
                            </div>
                          ))}
                        </div>
                        {'startNote' in p && p.startNote && (
                          <p className="mt-4 flex items-start gap-2 text-sm text-steel-600 bg-mint-500/10 border border-mint-500/20 rounded-xl px-4 py-3">
                            <Rocket className="w-4 h-4 text-mint-600 flex-shrink-0 mt-0.5" />
                            {p.startNote}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="mt-auto">
                      <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-2.5">{m.featuresLabel}</p>
                      <ul className="space-y-1.5">
                        {p.features.map((x) => (
                          <li key={x} className="flex items-baseline gap-2 text-sm text-steel-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-steel-400 flex-shrink-0 mt-1.5" />
                            {x}
                          </li>
                        ))}
                      </ul>
                      <p className="text-steel-400 text-xs mt-3">{p.footnote}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ───────────── Part 2: how it works & technical detail (light) ───────────── */}
      <div id="monitoring-how" className="bg-steel-50 section-pad scroll-mt-16">
        <div className="container-max space-y-20">
          {/* Remote water-valve control */}
          <div className="bg-white rounded-3xl border border-steel-100 shadow-sm p-6 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <span className="inline-block bg-steel-100 text-steel-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {m.valve.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-steel-900">{m.valve.heading}</h3>
              </div>
              <div className="text-steel-600 leading-relaxed space-y-3">
                <p>{m.valve.body}</p>
                <p className="font-medium text-steel-800">{m.valve.body2}</p>
              </div>
            </div>

            <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3">
              {m.valve.chain.map((c, i) => {
                const Icon = chainIcons[i];
                const last = i === m.valve.chain.length - 1;
                return (
                  <li key={c.title} className="flex flex-col lg:flex-row items-center gap-3 lg:flex-1">
                    <div className="w-full h-full bg-steel-50 border border-steel-100 rounded-2xl p-4 flex lg:flex-col items-center lg:items-start gap-3">
                      <div className="w-10 h-10 bg-steel-800 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-steel-900 text-sm leading-tight">{c.title}</p>
                        <p className="text-steel-500 text-xs mt-0.5">{c.desc}</p>
                      </div>
                    </div>
                    {!last && <ArrowRight className="w-5 h-5 text-steel-300 flex-shrink-0 rotate-90 lg:rotate-0" />}
                  </li>
                );
              })}
            </ol>

            <p className="mt-6 flex items-start gap-2 text-sm text-steel-600 bg-mint-500/10 border border-mint-500/20 rounded-xl px-4 py-3">
              <ShieldCheck className="w-5 h-5 text-mint-600 flex-shrink-0" />
              {m.valve.safety}
            </p>
          </div>

          {/* Where it fits */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-steel-900 mb-2">{m.sitesHeading}</h3>
              <p className="text-steel-500">{m.sitesSub}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {m.sites.map((s, i) => {
                const Icon = siteIcons[i];
                return (
                  <div key={s.title} className="bg-white rounded-2xl border border-steel-100 p-5 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 bg-steel-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-steel-600" />
                    </div>
                    <div>
                      <p className="font-bold text-steel-900">{s.title}</p>
                      <p className="text-steel-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Platform features */}
          <div>
            <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-steel-900 mb-10">{m.platformHeading}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {m.platform.map((f, i) => {
                const Icon = platformIcons[i];
                return (
                  <div key={f.title} className="flex gap-3">
                    <Icon className="w-6 h-6 text-steel-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-steel-900">{f.title}</p>
                      <p className="text-steel-500 text-sm">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How a project begins */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-steel-900 mb-2">{m.processHeading}</h3>
              <p className="text-steel-500">{m.processSub}</p>
            </div>
            <ol className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div aria-hidden className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-steel-200" />
              {m.steps.map((s, i) => {
                const Icon = stepIcons[i];
                return (
                  <li key={s.title} className="relative bg-white rounded-2xl border border-steel-100 p-5 lg:text-center">
                    <div className="flex lg:flex-col items-center gap-3 mb-2">
                      <div className="relative w-12 h-12 bg-steel-800 rounded-full flex items-center justify-center flex-shrink-0 ring-4 ring-steel-50">
                        <Icon className="w-5 h-5 text-white" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-mint-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <p className="font-bold text-steel-900 leading-tight">{s.title}</p>
                    </div>
                    <p className="text-steel-500 text-sm">{s.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* What we validate together */}
          <div className="bg-steel-800 text-white rounded-3xl p-6 sm:p-10 grid lg:grid-cols-5 gap-8 lg:gap-12 lg:items-center">
            <div className="lg:col-span-2 flex flex-col">
              <span className="inline-flex items-center gap-2 self-start bg-mint-500/15 text-mint-500 border border-mint-500/30 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                <ClipboardCheck className="w-3.5 h-3.5" />
                {m.validateEyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">{m.validateHeading}</h3>
              <p className="text-steel-300 leading-relaxed mb-6">{m.validateSub}</p>

              <ul className="space-y-4 border-l-2 border-mint-500/40 pl-5 mb-8">
                {m.validatePromises.map((v, i) => {
                  const Icon = promiseIcons[i];
                  return (
                    <li key={v.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-steel-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-mint-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{v.title}</p>
                        <p className="text-steel-400 text-sm leading-snug">{v.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                onClick={enquire}
                className="mt-auto inline-flex items-center justify-center gap-2 self-start bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                {m.validateCta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="lg:col-span-3">
              <ul className="grid sm:grid-cols-2 gap-3">
                {m.validate.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 bg-steel-700/50 rounded-xl px-4 py-3 text-sm text-steel-100">
                    <CheckCircle2 className="w-4 h-4 text-mint-500 flex-shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
              <p className="text-steel-300 text-sm mt-4 flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {m.validateNote}
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-steel-900 mb-10">{m.faqHeading}</h3>
            <div className="grid lg:grid-cols-2 gap-4 items-start">
              {m.faq.map((f) => (
                <details key={f.q} className="group bg-white rounded-2xl border border-steel-100 open:shadow-md transition-shadow">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-steel-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="w-5 h-5 text-steel-400 flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-steel-600 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Enquiry */}
          <div className="relative overflow-hidden bg-gradient-to-br from-steel-800 to-steel-950 rounded-3xl p-6 sm:p-10 text-white grid lg:grid-cols-2 gap-8 items-center">
            <div aria-hidden className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-mint-500/10 blur-2xl" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">{m.enquiryHeading}</h3>
              <p className="text-steel-300 mb-5">{m.enquirySub}</p>
              <ul className="space-y-2">
                {m.enquiryItems.map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-sm text-steel-100">
                    <CheckCircle2 className="w-4 h-4 text-mint-500 flex-shrink-0 mt-0.5" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex flex-col items-stretch sm:items-center lg:items-end gap-4">
              <a
                href="#contact"
                onClick={enquire}
                className="inline-flex items-center justify-center gap-2 bg-mint-500 hover:bg-mint-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
              >
                {m.enquiryButton}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+4571875494" className="inline-flex items-center justify-center gap-2 text-steel-300 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4" />
                {m.enquiryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
