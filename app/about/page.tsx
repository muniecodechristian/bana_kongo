"use client";

import { ArrowUpRight, Check, HeartHandshake, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const values = [
  {
    icon: Target,
    title: "Clarté stratégique",
    text: "Nous transformons vos objectifs en décisions simples, concrètes et mesurables.",
  },
  {
    icon: HeartHandshake,
    title: "Proximité humaine",
    text: "Nous avançons à vos côtés avec écoute, respect et une compréhension réelle de votre contexte.",
  },
  {
    icon: Lightbulb,
    title: "Innovation utile",
    text: "Nous créons des solutions modernes qui répondent aux besoins du terrain en RDC.",
  },
  {
    icon: Users,
    title: "Impact collectif",
    text: "Nous croyons aux projets qui renforcent les équipes, les communautés et l'économie locale.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff7f7] text-[#38131b]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-6">
        <div
          className="relative flex min-h-[330px] items-center overflow-hidden rounded-2xl bg-[#571426] bg-cover bg-center px-8 text-white sm:px-16"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(87,20,38,.98), rgba(87,20,38,.48)), url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1800&q=85')",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#ffb3bd]">
              ✦ Tech+ RDC
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              À propos de nous
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
              Une équipe congolaise engagée à faire grandir les idées, les entreprises et les talents.
            </p>
          </motion.div>
        </div>
        <p className="mt-3 text-right text-[10px] text-[#38131b]/50">
          <Link href="/">Accueil</Link>　/　<span className="text-[#d7263d]">À propos</span>
        </p>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28"
      >
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">
            ✦ Notre histoire
          </p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Une communication qui crée de la valeur en RDC.
          </h2>
        </div>
        <div className="text-sm leading-7 text-[#38131b]/70">
          <p>
            Tech+ est une agence de communication et de conseil basée en République démocratique du Congo. Nous accompagnons les marques, institutions et entrepreneurs qui veulent mieux raconter leur histoire et accélérer leur croissance.
          </p>
          <p className="mt-5">
            Notre approche associe stratégie, créativité et connaissance du terrain pour construire des communications authentiques, visibles et utiles.
          </p>
          <div className="mt-7 grid gap-3 text-xs sm:grid-cols-2">
            {["Stratégie de marque", "Communication digitale", "Contenus qui engagent", "Accompagnement local"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="size-4 text-[#d7263d]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="min-h-[430px] rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(87,20,38,.05), rgba(87,20,38,.35)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85')",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">
            ✦ Notre mission
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Donner aux organisations congolaises une voix forte.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#38131b]/65">
            Nous rendons la communication plus claire, plus humaine et plus proche des réalités africaines. Chaque projet est une occasion de connecter une vision à son public.
          </p>
          <Link
            href="/services"
            className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#d7263d] px-5 py-3 text-[11px] font-bold text-white transition-transform hover:scale-105"
          >
            Découvrir nos services <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">
            ✦ Ce qui nous guide
          </p>
          <h2 className="text-3xl font-semibold sm:text-5xl">Nos valeurs au quotidien</h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              variants={reveal}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="grid size-11 place-items-center rounded-full bg-[#ffb3bd] text-[#571426]">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-6 text-base font-bold">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-[#38131b]/60">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-6 mb-20 overflow-hidden rounded-2xl bg-[#571426] px-6 py-14 text-center text-white sm:px-12">
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#ffb3bd]">✦ Parlons de votre projet</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Votre prochaine histoire commence ici.</h2>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d7263d] px-5 py-3 text-[11px] font-bold text-white"
          >
            Échangeons ensemble <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
