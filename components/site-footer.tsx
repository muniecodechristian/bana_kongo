import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="contact" className="w-full bg-[#fff7f7] pt-10">
      <div className="w-full overflow-hidden bg-[#171518] text-white">
        <div className="border-b border-white/10 px-6 py-14 text-center sm:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffb3bd]">
            {" "}
            Parlons de votre projet
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Donnons à votre communication une histoire qui compte.
          </h2>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d7263d] px-5 py-3 text-[11px] font-bold transition-transform hover:scale-105"
          >
            Échanger avec Tech+ <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-10 px-6 py-12 sm:px-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-white px-2 py-1"
            >
              <Image
                src="/tech-plus-logo.jpg"
                alt="Tech+ RDC"
                width={100}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xs text-xs leading-5 text-white/55">
              Agence de communication stratégique pour les marques, entreprises
              et institutions en RDC.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid size-8 place-items-center rounded-md bg-white/10 text-[11px] font-bold transition-colors hover:bg-[#d7263d]"
              >
                in
              </a>
              <a
                href="#"
                aria-label="X"
                className="grid size-8 place-items-center rounded-md bg-white/10 text-xs font-bold transition-colors hover:bg-[#d7263d]"
              >
                𝕏
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-8 place-items-center rounded-md bg-white/10 text-xs font-bold transition-colors hover:bg-[#d7263d]"
              >
                ◎
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">Navigation</h3>
            <div className="mt-5 flex flex-col gap-3 text-xs text-white/55">
              <Link href="/">Accueil</Link>
              <Link href="/about">À propos</Link>
              <Link href="/services">Services</Link>
              <Link href="/#insights">Actualités</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold">Expertises</h3>
            <div className="mt-5 flex flex-col gap-3 text-xs text-white/55">
              <span>Stratégie de marque</span>
              <span>Communication digitale</span>
              <span>Création de contenu</span>
              <span>Relations publiques</span>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold">Nous trouver</h3>
            <div className="mt-5 flex flex-col gap-3 text-xs leading-5 text-white/55">
              <p>
                <MapPin className="mr-1 inline size-3 text-[#ffb3bd]" />
                Kinshasa, RDC
              </p>
              <p>
                <Phone className="mr-1 inline size-3 text-[#ffb3bd]" />
                +243 81 000 00 00
              </p>
              <a href="mailto:contact@techplus.cd" className="text-[#ffb3bd]">
                <Mail className="mr-1 inline size-3" />
                contact@techplus.cd
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 px-6 py-5 text-[10px] text-white/35 sm:flex-row sm:px-12">
          <span>© 2025 Tech+ RDC. Tous droits réservés.</span>
          <div className="flex gap-5">
            <a href="#">Confidentialité</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
