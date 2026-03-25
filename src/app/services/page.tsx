import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diensten | Havun',
  description: 'Ontdek onze diensten: SaaS platforms, Android apps, webhosting en SEO-optimalisatie.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: '🚀',
      title: 'SaaS Platforms',
      description: 'Schaalbare webapplicaties als volledige SaaS-oplossing.',
      features: [
        'Multi-tenant architectuur',
        'Betalingsintegratie (Mollie, Stripe)',
        'Gebruikersbeheer en rechten',
        'API-first ontwerp',
        'Automatische schaalbaarheid',
        'Onderhoud en doorontwikkeling',
      ],
    },
    {
      icon: '📱',
      title: 'Android Apps',
      description: 'Native Android apps met React Native en Expo.',
      features: [
        'React Native + Expo',
        'Offline-first werking',
        'Push notificaties',
        'Real-time synchronisatie',
        'APK distributie',
        'OTA updates',
      ],
    },
    {
      icon: '🌐',
      title: 'Webhosting',
      description: 'Betrouwbare en snelle hosting voor uw website of applicatie.',
      features: [
        '99.9% uptime garantie',
        'Gratis SSL-certificaat',
        'Dagelijkse automatische backups',
        'SSD-opslag voor maximale snelheid',
        'Onbeperkt dataverkeer',
        '24/7 monitoring',
      ],
    },
    {
      icon: '📈',
      title: 'SEO Optimalisatie',
      description: 'Verbeter uw vindbaarheid en trek meer bezoekers aan.',
      features: [
        'Technische SEO-audit',
        'Keyword onderzoek',
        'On-page optimalisatie',
        'Content strategie',
        'Linkbuilding',
        'Maandelijkse rapportages',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hero-from)] to-[var(--hero-to)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Onze Diensten</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            SaaS platforms, Android apps en professionele weboplossingen.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] p-8 rounded-xl shadow-lg border border-[var(--border)]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">{service.title}</h2>
                <p className="text-[var(--text-secondary)] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[var(--primary)] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[var(--text-primary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Interesse in onze diensten?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Neem contact op voor een vrijblijvende offerte of meer informatie.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Vraag een offerte aan
          </Link>
        </div>
      </section>
    </div>
  );
}
