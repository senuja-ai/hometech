import { Wifi, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-steel-950 text-steel-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-steel-600 rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base">HomeTech</span>
                <span className="block text-steel-400 text-[10px] font-medium tracking-widest uppercase">Denmark</span>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed max-w-xs">{f.tagline}</p>
            <p className="text-steel-500 text-xs mt-4">
              Dragør · Tårnby · Amager · København
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.servicesHeading}</h4>
            <ul className="space-y-2 text-sm text-steel-400">
              {f.servicesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{f.contactHeading}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:71 87 54 94" className="flex items-center gap-2 text-steel-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  71 87 54 94
                </a>
              </li>
              <li>
                <a href="mailto:hometechdenmark@gmail.com" className="flex items-center gap-2 text-steel-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  hometechdenmark@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-steel-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {f.areaLabel}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-500 text-xs">
            &copy; {new Date().getFullYear()} HomeTech Denmark. {f.copyright}
          </p>
          <p className="text-steel-600 text-xs">{f.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
