"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const links = [
  ["Accueil", "/"],
  ["À propos", "/about"],
  ["Services", "/services"],
  ["Actualités", "/#insights"],
  ["Contact", "/#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ffb3bd]/20 bg-[#571426] text-white shadow-xl shadow-[#571426]/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="rounded-md bg-white px-1.5 py-1">
            <Image src="/tech-plus-logo.jpg" alt="Tech+" width={74} height={38} className="h-7 w-auto object-contain" priority />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-semibold md:flex" aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-[#ffb3bd]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-[#d7263d] px-4 py-2 text-[10px] font-bold transition-transform hover:scale-105">
            Prendre rendez-vous <ArrowUpRight size={13} />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
            aria-label="Navigation mobile"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 pb-5 pt-2">
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-sm font-medium hover:text-[#ffb3bd]">
                  {label}
                </Link>
              ))}
              <Link href="/#contact" onClick={() => setOpen(false)} className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#d7263d] px-4 py-3 text-xs font-bold">
                Prendre rendez-vous <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
