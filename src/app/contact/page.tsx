import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Havun',
  description: 'Neem contact op met Havun voor SaaS platforms, Android apps of webhosting. Wij helpen u graag verder.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hero-from)] to-[var(--hero-to)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Heeft u een vraag of wilt u een offerte? Neem gerust contact op.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[var(--card-bg)] p-8 rounded-xl shadow-lg border border-[var(--border)]">
              <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Stuur een bericht</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Waar kunnen we u mee helpen?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none text-[var(--text-primary)]"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="app">Android App</option>
                    <option value="hosting">Webhosting</option>
                    <option value="seo">SEO Optimalisatie</option>
                    <option value="other">Anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none resize-none text-[var(--text-primary)]"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Verstuur bericht
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Contactgegevens</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--primary)] bg-opacity-20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">E-mail</h3>
                      <p className="text-[var(--text-secondary)]">havun22@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[var(--primary)] bg-opacity-20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">Locatie</h3>
                      <p className="text-[var(--text-secondary)]">Nederland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--card-bg)] border border-[var(--border)] p-6 rounded-xl">
                <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Reactietijd</h3>
                <p className="text-[var(--text-secondary)]">
                  Wij streven ernaar om binnen 24 uur te reageren op uw bericht.
                  Voor urgente zaken kunt u dit aangeven in uw bericht.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[var(--hero-from)] to-[var(--hero-to)] text-white p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Gratis adviesgesprek</h3>
                <p className="text-gray-300">
                  Wilt u eerst sparren over de mogelijkheden? Plan een vrijblijvend
                  adviesgesprek in en ontdek hoe wij u kunnen helpen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
