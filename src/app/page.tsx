import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: '🚀',
      title: 'SaaS Platforms',
      description: 'Schaalbare webapplicaties als volledige SaaS-oplossing.',
    },
    {
      icon: '📱',
      title: 'Android Apps',
      description: 'Native Android apps met React Native en Expo.',
    },
    {
      icon: '🌐',
      title: 'Hosting & SEO',
      description: 'Snelle hosting met SSL, backups en SEO-optimalisatie.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--hero-from)] to-[var(--hero-to)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Uw digitale partner voor groei
            </h1>
            <p className="text-lg mb-6 text-gray-300">
              SaaS platforms, Android apps en professionele weboplossingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-colors"
              >
                Gratis offerte
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-[var(--primary)] text-[var(--primary-light)] px-6 py-2 rounded-lg font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                Bekijk ons werk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[var(--text-primary)]">Onze Diensten</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-[var(--border)] text-center"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{service.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[var(--hero-from)] to-[var(--hero-to)] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">
              Klaar om te starten?
            </h2>
            <p className="mb-4 text-gray-300">
              Neem contact op voor een vrijblijvend gesprek.
            </p>
            <Link
              href="/contact"
              className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-colors inline-block"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
