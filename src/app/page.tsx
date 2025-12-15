import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: '🌐',
      title: 'Webhosting',
      description: 'Snelle hosting met SSL en dagelijkse backups.',
    },
    {
      icon: '📈',
      title: 'SEO',
      description: 'Verbeter uw vindbaarheid in zoekmachines.',
    },
    {
      icon: '💻',
      title: 'Webapplicaties',
      description: 'Maatwerk software voor uw bedrijf.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Uw digitale partner voor groei
            </h1>
            <p className="text-lg mb-6 text-gray-100">
              Professionele weboplossingen: hosting, SEO en maatwerk webapplicaties.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[var(--primary)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Gratis offerte
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-colors"
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
          <h2 className="text-2xl font-bold mb-6 text-center">Onze Diensten</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--primary)] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">
              Klaar om te starten?
            </h2>
            <p className="mb-4 text-gray-100">
              Neem contact op voor een vrijblijvend gesprek.
            </p>
            <Link
              href="/contact"
              className="bg-white text-[var(--primary)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
