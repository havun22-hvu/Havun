import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-white sticky bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Havun" width={24} height={24} />
            <span className="font-semibold">Havun</span>
            <span className="text-gray-400 text-sm hidden sm:inline">havun22@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-white">Diensten</Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>

          <div className="text-xs text-gray-400">
            KVK: 98516000 | BTW: NL002995910B70
          </div>
        </div>
      </div>
    </footer>
  );
}
