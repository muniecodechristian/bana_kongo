import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#571426] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center rounded-md bg-white px-2 py-1">
            <Image src="/tech-plus-logo.jpg" alt="Tech+ RDC" width={88} height={44} className="h-9 w-auto object-contain" />
          </Link>
          <p className="mt-2 text-xs text-white/60">Grandir avec stratégie. Réussir avec impact.</p>
        </div>
        <div className="space-y-2 text-xs text-white/70">
          <p><MapPin className="mr-2 inline size-4 text-[#ffb3bd]" />Kinshasa, République démocratique du Congo</p>
          <p><Phone className="mr-2 inline size-4 text-[#ffb3bd]" />+243 81 000 00 00</p>
        </div>
        <a href="mailto:contact@techplus.cd" className="text-sm text-[#ffb3bd]">
          <Mail className="mr-2 inline size-4" />contact@techplus.cd
        </a>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl justify-between border-t border-white/10 pt-5 text-[10px] text-white/40">
        <span>© 2025 Tech+ RDC</span>
        <span>Kinshasa · Lubumbashi · Goma</span>
      </div>
    </footer>
  );
}
