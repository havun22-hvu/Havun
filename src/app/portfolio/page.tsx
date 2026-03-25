import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio | Havun',
  description: 'Bekijk onze gerealiseerde projecten: SaaS platforms, Android apps en tools.',
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Herdenkingsportaal',
      category: 'Webapplicatie',
      image: '/portfolio/hplogo.png',
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
      image: '/portfolio/judotoernooi.png',
      url: 'https://judotournament.org',
      description: 'Compleet toernooimanagementsysteem voor judoverenigingen. Van deelnemersimport tot automatische poule-indeling, live wedstrijdscoring en prijsuitreiking.',
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
      title: 'JudoScoreBoard',
      category: 'Android App',
      image: '/portfolio/judoscoreboard.png',
      url: 'https://judoscoreboard.havun.nl',
      status: 'Onder constructie',
      description: 'Judo scorebord app voor Android. Timer, scores, shido\'s en osaekomi met automatische drempels. Kan standalone draaien of gekoppeld aan JudoToernooi voor live wedstrijddata via WebSocket.',
      technologies: ['React Native', 'Expo SDK 55', 'TypeScript', 'Laravel Reverb'],
      features: [
        'Standalone of gekoppeld aan JudoToernooi',
        'Osaekomi timer met instelbare drempels',
        'Live scorebord op TV/scherm',
        'Auto-rotate landscape/portrait',
        'Golden Score modus',
      ],
    },
    {
      title: 'Studieplanner',
      category: 'Android App',
      image: '/portfolio/studieplanner.png',
      url: 'https://studieplanner.havun.nl',
      description: 'Mobiele studieplanner voor leerlingen en studenten. Plan vakken, studeer met timer en volg je voortgang. Ouders en mentoren volgen resultaten real-time via een mentor dashboard.',
      technologies: ['React Native', 'Expo SDK 54', 'Laravel 12', 'MySQL', 'Laravel Reverb'],
      features: [
        'Agenda met drag & drop planning',
        'Studietimer met voortgang',
        'Mentor/ouder meekijk-dashboard',
        'Statistieken en leersnelheid analyse',
        'Freemium model',
      ],
    },
    {
      title: 'VPD Update',
      category: 'Prijzen Tool',
      image: '/portfolio/vpdupdate.png',
      url: 'https://vpdupdate.havun.nl',
      status: 'Alleen voor dierenartsen',
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
      title: 'SafeHavun',
      category: 'Crypto Tool',
      image: '/portfolio/safehavun.png',
      url: 'https://safehavun.havun.nl',
      status: 'Onder constructie',
      description: 'Crypto Smart Money Tracker - On-chain analyse om "smart money" (whales) te volgen. Volg grote transacties, exchange flows en sentiment indicators voor marktvoorspellingen.',
      technologies: ['Laravel 12', 'React', 'PWA', 'Tailwind CSS', 'CoinGecko API', 'Whale Alert API'],
      features: [
        'Whale alerts (grote transacties)',
        'Exchange in/outflow tracking',
        'Stablecoin ratio\'s',
        'Fear & Greed Index',
        'Marktrichting voorspellingen',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hero-from)] to-[var(--hero-to)] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-1">Portfolio</h1>
          <p className="text-gray-300">Projecten waar we trots op zijn</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] rounded-xl shadow-lg overflow-hidden border border-[var(--border)]"
              >
                <div className="md:flex">
                  <div className="md:w-48 md:flex-shrink-0 bg-[var(--surface)] flex items-center justify-center p-4">
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
                      <span className="bg-[var(--primary)] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          project.status === 'Onder constructie'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.status}
                        </span>
                      )}
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--primary)] hover:underline">
                          {project.url.replace('https://', '')}
                        </a>
                      )}
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{project.title}</h2>
                    <p className="text-[var(--text-secondary)] text-sm mb-3">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <h3 className="font-semibold text-sm mb-2 text-[var(--text-primary)]">Tech</h3>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-[var(--surface)] text-[var(--text-secondary)] px-2 py-0.5 rounded text-xs border border-[var(--border)]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2 text-[var(--text-primary)]">Features</h3>
                        <ul className="text-xs text-[var(--text-secondary)] space-y-0.5">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <span className="text-[var(--primary)]">✓</span> {feature}
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
          <div className="bg-gradient-to-r from-[var(--hero-from)] to-[var(--hero-to)] rounded-xl p-4 text-white">
            <h2 className="text-lg font-bold mb-2">Uw project hier?</h2>
            <Link href="/contact" className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-colors inline-block text-sm">
              Start uw project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
