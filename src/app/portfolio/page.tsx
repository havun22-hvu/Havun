import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio | Havun',
  description: 'Bekijk onze gerealiseerde projecten: webapplicaties en tools.',
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Herdenkingsportaal',
      category: 'Webapplicatie',
      image: '/portfolio/herdenkingsportaal.jpg',
      url: 'https://www.herdenkingsportaal.nl',
      description: 'Digitaal memorial platform voor permanente gedenkplaatsen op de Arweave blockchain. Nabestaanden kunnen waardige memorials maken voor overleden dierbaren, speciaal voor gecremeerden zonder fysieke grafsteen.',
      technologies: ['Laravel', 'PHP 8.2', 'Fabric.js', 'Tailwind CSS', 'MySQL', 'Arweave Blockchain'],
      features: [
        'Monument editor (1920x1440px canvas)',
        'Mollie, SEPA QR & Crypto betalingen',
        '2FA authenticatie',
        'PWA installeerbaar',
        'Dark mode',
      ],
    },
    {
      title: 'JudoToernooi Manager',
      category: 'Management Systeem',
      image: '/portfolio/judotoernooi.jpg',
      url: 'https://judotournament.org',
      description: 'Compleet toernooimanagementsysteem voor judoverenigingen. Eerste klant: WestFries Open (Judoschool Cees Veen). Van deelnemersimport tot automatische poule-indeling, live wedstrijdscoring en prijsuitreiking.',
      technologies: ['Laravel 11', 'PHP 8.2', 'MySQL', 'QR Scanner'],
      features: [
        'Automatische poule-indeling (leeftijd/gewicht/band)',
        'Weging interface met QR scanner',
        'Mat interface voor live scoring',
        'Spreker interface voor prijsuitreiking',
        'CSV/Excel import',
      ],
    },
    {
      title: 'Studieplanner',
      category: 'Webapplicatie',
      image: '/portfolio/studieplanner.svg',
      url: 'https://studieplanner.havun.nl',
      description: 'Slimme studieplanningsapp voor scholieren en studenten. Plan vakken, volg voortgang met timer en statistieken. Ouders en mentoren kunnen meekijken via een speciale mentor-view.',
      technologies: ['React 19', 'TypeScript', 'Vite', 'Laravel 12', 'Sanctum API', 'PWA'],
      features: [
        'Vakken en studiesessies plannen',
        'Studietimer met voortgang',
        'Mentor/ouder meekijk-functie',
        'Statistieken dashboard',
        'PWA installeerbaar',
      ],
    },
    {
      title: 'VPD Update',
      category: 'Prijzen Tool',
      image: '/portfolio/vpdupdate.png',
      url: 'https://vpdupdate.havun.nl',
      description: 'Automatische prijzen- en bestelcode updater voor dierenartspraktijken. Vergelijkt VPD productenlijst met groothandel prijslijsten en detecteert wijzigingen.',
      technologies: ['Node.js', 'SheetJS', 'Browser-based'],
      features: [
        'Prijswijzigingen detectie',
        'Bestelcode matching (fuzzy)',
        'Uit de handel detectie',
        'Excel export',
        '100% lokale verwerking (privacy)',
      ],
    },
    {
      title: 'HavunAdmin',
      category: 'Administratie',
      image: '/portfolio/havunadmin.png',
      url: 'https://havunadmin.havun.nl',
      description: 'Professioneel bedrijfsadministratie systeem. Automatiseert factuurimport, banksynchronisatie en financiële rapportage. 97% Belastingdienst compliant met audit trail en 7 jaar bewaarplicht.',
      technologies: ['Laravel 12', 'PHP 8.2', 'Tailwind CSS', 'Chart.js', 'Mollie', 'Bunq API'],
      features: [
        'Automatische factuurimport',
        'Bank sync & auto-categorisatie',
        'Kwartaal/jaar rapportages',
        'Dashboard met grafieken',
        'Belastingdienst compliant',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-1">Portfolio</h1>
          <p className="text-gray-100">Projecten waar we trots op zijn</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="md:flex">
                  <div className="md:w-48 md:flex-shrink-0 bg-gray-100 flex items-center justify-center p-4">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={160}
                          height={160}
                          className="object-contain rounded-lg"
                        />
                      </a>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={160}
                        height={160}
                        className="object-contain rounded-lg"
                      />
                    )}
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-[var(--accent)] text-[var(--primary)] px-2 py-0.5 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--secondary)] hover:underline">
                          {project.url.replace('https://', '')}
                        </a>
                      )}
                    </div>
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <h3 className="font-semibold text-sm mb-2">Tech</h3>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2">Features</h3>
                        <ul className="text-xs text-gray-600 space-y-0.5">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <span className="text-green-500">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-[var(--primary)] rounded-xl p-4 text-white">
            <h2 className="text-lg font-bold mb-2">Uw project hier?</h2>
            <Link href="/contact" className="bg-white text-[var(--primary)] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-sm">
              Start uw project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
