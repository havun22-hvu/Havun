import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diensten | Havun',
  description: 'Ontdek onze webdiensten: professionele hosting, SEO-optimalisatie en maatwerk webapplicaties.',
};

export default function ServicesPage() {
  const services = [
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
    {
      icon: '💻',
      title: 'Webapplicaties',
      description: 'Maatwerk software die perfect past bij uw bedrijf.',
      features: [
        'Analyse van uw wensen',
        'Modern en schaalbaar ontwerp',
        'Gebruiksvriendelijke interface',
        'API integraties',
        'Onderhoud en support',
        'Training voor uw team',
      ],
    },
    {
      icon: '🎨',
      title: 'Webdesign',
      description: 'Professionele websites die converteren en indruk maken.',
      features: [
        'Responsive design',
        'Moderne uitstraling',
        'Snelle laadtijden',
        'CMS integratie',
        'Conversie-optimalisatie',
        'Huisstijl verwerking',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Onze Diensten</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Complete weboplossingen voor bedrijven die online willen excelleren.
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
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interesse in onze diensten?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
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
