import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const areas = ['Dragør', 'Tårnby', 'Amager', 'København'];

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Validate
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSending(true);
    setError('');

    try {
      // Create form data
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone || '');
      formData.append('message', form.message);

      // Send to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorText = await response.text();
        console.error('Netlify form error:', errorText);
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-pad bg-steel-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="inline-block bg-steel-100 text-steel-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {c.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-3">{c.heading}</h2>
          <p className="text-steel-500 text-lg max-w-xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - unchanged */}
          <div className="space-y-6">
            <div className="bg-steel-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">{c.info.heading}</h3>
              <div className="space-y-5">
                <a href="tel:71 87 54 94" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-steel-700 group-hover:bg-mint-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-steel-400 text-xs uppercase tracking-wide">{c.info.phoneLabel}</p>
                    <p className="text-white font-semibold text-lg">71 87 54 94</p>
                  </div>
                </a>

                <a href="mailto:hometechdenmark@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-steel-700 group-hover:bg-mint-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-steel-400 text-xs uppercase tracking-wide">{c.info.emailLabel}</p>
                    <p className="text-white font-semibold break-all">hometechdenmark@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/4571875494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 bg-steel-700 group-hover:bg-mint-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-steel-400 text-xs uppercase tracking-wide">{c.info.chatLabel}</p>
                    <p className="text-white font-semibold">{c.info.chatSub}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-steel-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-steel-400 text-xs uppercase tracking-wide mb-1">{c.info.areaLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {areas.map((a) => (
                        <span key={a} className="bg-steel-700 text-steel-100 text-sm px-3 py-1 rounded-full">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.facebook.com/people/HomeTech-Denmark/61591429198875/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-steel-100 p-6 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-steel-900">{c.facebook.title}</p>
                <p className="text-steel-500 text-sm">{c.facebook.sub}</p>
              </div>
            </a>

          </div>
          
          {/* Right side - Updated form */}
          <div className="bg-white rounded-2xl border border-steel-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-steel-900 mb-2">{c.form.heading}</h3>
            <p className="text-steel-400 text-sm mb-6">{c.form.sub}</p>

            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-mint-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-mint-500" />
                </div>
                <h4 className="text-steel-900 font-bold text-lg mb-2">{c.success.heading}</h4>
                <p className="text-steel-400 text-sm">{c.success.sub}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-steel-500 hover:text-steel-700 text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-4"
              >
                {/* Required hidden field */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field */}
                <div hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" onChange={() => {}} />
                  </label>
                </div>

                <div>
                  <label className="block text-steel-700 text-sm font-medium mb-1.5">
                    {c.form.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={c.form.namePlaceholder}
                    className="w-full border border-steel-200 rounded-xl px-4 py-2.5 text-steel-900 placeholder-steel-300 text-sm focus:outline-none focus:ring-2 focus:ring-steel-400 focus:border-transparent transition"
                    disabled={isSending}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-steel-700 text-sm font-medium mb-1.5">
                      {c.form.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full border border-steel-200 rounded-xl px-4 py-2.5 text-steel-900 placeholder-steel-300 text-sm focus:outline-none focus:ring-2 focus:ring-steel-400 focus:border-transparent transition"
                      disabled={isSending}
                    />
                  </div>
                  <div>
                    <label className="block text-steel-700 text-sm font-medium mb-1.5">{c.form.phoneLabel}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={c.form.phonePlaceholder}
                      className="w-full border border-steel-200 rounded-xl px-4 py-2.5 text-steel-900 placeholder-steel-300 text-sm focus:outline-none focus:ring-2 focus:ring-steel-400 focus:border-transparent transition"
                      disabled={isSending}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-steel-700 text-sm font-medium mb-1.5">
                    {c.form.messageLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full border border-steel-200 rounded-xl px-4 py-2.5 text-steel-900 placeholder-steel-300 text-sm focus:outline-none focus:ring-2 focus:ring-steel-400 focus:border-transparent transition resize-none"
                    disabled={isSending}
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-steel-800 hover:bg-steel-700 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    c.form.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}