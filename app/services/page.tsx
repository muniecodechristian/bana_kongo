"use client";

import { ArrowUpRight, Check, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  ["Planification financière", "Des stratégies sur mesure pour construire et préserver votre patrimoine.", "photo-1554224155-6726b3ff858f"],
  ["Optimisation fiscale", "Réduisez vos charges et maximisez vos opportunités d’investissement.", "photo-1551836022-d5d88e9218df"],
  ["Planification retraite", "Préparez sereinement votre avenir et celui de votre famille.", "photo-1573496359142-b8d87734a5a2"],
  ["Conseil en investissement", "Des décisions éclairées pour faire grandir votre portefeuille.", "photo-1556761175-b413da4baf72"],
  ["Équilibre de vie", "Retrouvez une organisation durable entre vie professionnelle et personnelle.", "photo-1521737711867-e3b97375f902"],
  ["Objectifs & réussite", "Transformez vos ambitions en étapes concrètes et mesurables.", "photo-1556761175-5973dc0f32e7"],
  ["Développement personnel", "Renforcez votre confiance et votre capacité à passer à l’action.", "photo-1542744173-8e7e53415bb0"],
  ["Gestion du stress", "Des outils pratiques pour avancer avec calme et constance.", "photo-1552664730-d307ca884978"],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fff7f7] text-[#38131b]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6">
        <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl bg-[#571426] bg-cover bg-center text-center text-white" style={{ backgroundImage: "linear-gradient(#571426aa,#571426cc),url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85')" }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="text-5xl font-semibold tracking-tight sm:text-7xl">Nos services</motion.h1>
        </div>
        <p className="mt-3 text-right text-[10px] text-[#38131b]/50"><Link href="/">Accueil</Link>　/　<span className="text-[#d7263d]">Services</span></p>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} transition={{ duration: .7 }} className="mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">✦ Ce que nous faisons</p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Des solutions pensées pour votre <span className="text-[#d7263d]">réussite</span></h2>
        </div>
        <div className="text-sm leading-6 text-[#38131b]/65">
          <p>Chez Tech+ RDC, nous croyons que chaque organisation mérite une stratégie claire, humaine et adaptée à sa réalité.</p>
          <p className="mt-4">Nous accompagnons les entrepreneurs, entreprises et familles congolaises avec des conseils concrets, accessibles et orientés résultats.</p>
          <div className="mt-5 grid gap-2 text-xs sm:grid-cols-2">
            {["Croissance durable", "Stratégie personnalisée", "Expertise locale", "Accompagnement humain"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-4 text-[#d7263d]" />{item}</span>)}
          </div>
        </div>
      </motion.section>

      <section className="mx-auto grid max-w-6xl gap-12 rounded-2xl bg-white px-6 py-12 sm:px-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">✦ Pourquoi nous choisir ?</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Votre vision mérite un partenaire de confiance.</h2>
          <div className="mt-7 h-64 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85')" }} />
        </motion.div>
        <div className="grid content-center gap-3">
          {[
            ["Accompagnement certifié", "Des conseils structurés, confidentiels et adaptés à vos objectifs."],
            ["Une expertise locale", "Une compréhension concrète du marché et des réalités de la RDC."],
            ["Des résultats mesurables", "Chaque recommandation se traduit par un plan d’action clair."],
            ["Un espace sans jugement", "Un dialogue ouvert pour avancer avec confiance."],
          ].map(([title, text], index) => (
            <motion.div key={title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="flex gap-4 rounded-xl bg-[#f8f8f1] p-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ffb3bd]"><CircleCheck className="size-4 text-[#571426]" /></span>
              <div><h3 className="text-sm font-bold">{title}</h3><p className="mt-1 text-xs leading-5 text-[#38131b]/60">{text}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto mb-10 max-w-lg text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">✦ Nos services</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Des services adaptés à vos ambitions</h2>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .08 } } }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, text, image]) => (
            <motion.article key={title} variants={reveal} whileHover={{ y: -7 }} transition={{ duration: .45 }} className="overflow-hidden rounded-xl bg-white p-3 shadow-sm">
              <div className="h-36 rounded-lg bg-cover bg-center" style={{ backgroundImage: `linear-gradient(#57142633,#57142633),url('https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=80')` }} />
              <div className="p-3"><h3 className="text-sm font-bold">{title}</h3><p className="mt-2 text-[11px] leading-4 text-[#38131b]/60">{text}</p><Link href="/#contact" className="mt-3 inline-flex items-center text-[10px] font-bold text-[#d7263d]">En savoir plus <ArrowUpRight className="ml-1 size-3" /></Link></div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}
