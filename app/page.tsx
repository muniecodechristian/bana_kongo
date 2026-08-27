"use client";

import {
  ArrowUpRight,
  BarChart3,
  CircleCheck,
  Handshake,
  Phone,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    icon: Users,
    title: "Next-gen human\nresources",
    text: "We provide expert business consulting services to help companies grow.",
    style: "bg-white text-[#38131b]",
  },
  {
    icon: BarChart3,
    title: "Market growth\nconsulting",
    text: "Identify new opportunities and accelerate sustainable business growth.",
    style: "bg-[#ffb3bd] text-[#571426]",
  },
  {
    icon: Handshake,
    title: "Business process\nimprovement",
    text: "Optimize workflows to increase efficiency, productivity, and performance.",
    style: "bg-[#571426] text-white",
  },
];

function AccentButton({ children }: { children: ReactNode }) {
  return (
    <motion.a
      href="#contact"
      className="group inline-flex items-center gap-3 rounded-full bg-[#d7263d] px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      <span className="grid size-6 place-items-center rounded-full bg-[#571426] text-[#ffb3bd] transition-transform group-hover:rotate-45">
        <ArrowUpRight size={14} />
      </span>
    </motion.a>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fff7f7] text-[#38131b]">
      <div className="bg-[#ffb3bd] px-6 py-2 text-[10px] font-medium text-[#571426]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>● We&apos;re top business consulting agency</span>
          <span className="hidden sm:inline">✉ contact@techplus.cd</span>
          <span className="hidden sm:inline">Follow Us　—　f　𝕏　◎</span>
        </div>
      </div>
      <SiteHeader />

      <section className="relative min-h-[650px] bg-[#571426]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(87,20,38,.98) 0%, rgba(87,20,38,.88) 39%, rgba(87,20,38,.15) 75%), url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-7xl items-center px-6 pb-28 pt-24">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .12, delayChildren: .25 } } }} className="max-w-xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px]">
              <span className="text-[#ffb3bd]">4.9　★★★★★</span> 5K+ avis
            </div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .7 }} className="text-5xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-7xl">
              Des solutions <span className="text-[#ffb3bd]">stratégiques</span> pour la RDC
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .6 }} className="mt-6 max-w-md text-sm leading-6 text-white/70">
              We provide expert business consulting services to help companies grow, optimize operations, and achieve sustainable success.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .6 }} className="mt-8 flex flex-wrap items-center gap-6">
              <AccentButton>Prendre rendez-vous</AccentButton>
              <div className="flex items-center gap-3 text-[10px] text-white/70">
                <span className="grid size-10 place-items-center rounded-full bg-[#d7263d] text-white"><Phone size={16} /></span>
                APPELEZ-NOUS<br /><b className="text-white">+243 81 000 00 00</b>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6 }} className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">✦ Notre approche</p>
            <h2 className="max-w-md text-3xl font-semibold leading-tight sm:text-4xl">Les clés d&apos;une croissance durable</h2>
          </div>
          <p className="max-w-sm text-xs leading-5 text-[#38131b]/60">Des méthodes concrètes pour améliorer vos processus, renforcer votre organisation et développer votre activité en RDC.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .14 } } }} className="grid gap-4 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .6 }} whileHover={{ y: -8 }} className={`group flex min-h-[250px] flex-col justify-between rounded-xl p-7 shadow-sm ${service.style}`}>
                <Icon className="size-8 stroke-[1.3]" />
                <div>
                  <h3 className="whitespace-pre-line text-lg font-medium leading-tight">{service.title}</h3>
                  <p className="mt-3 max-w-xs text-xs leading-5 opacity-60">{service.text}</p>
                </div>
                <a href="#contact" className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#fff1f2] px-3 py-2 text-[10px] font-semibold text-[#571426]">En savoir plus <ArrowUpRight size={13} /></a>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section id="about" className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7 }} className="grid grid-cols-2 gap-3">
            <motion.div whileHover={{ scale: 1.02 }} className="col-span-2 h-64 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85')" }} />
            <div className="grid h-32 place-items-center rounded-xl bg-[#ffb3bd] text-center">
              <div><CircleCheck className="mx-auto mb-1 size-5" /><strong className="text-2xl">10K+</strong><p className="text-[10px]">Completed works</p></div>
            </div>
            <div className="h-32 rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=85')" }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7 }} >
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">✦ Qui sommes-nous ?</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">Votre partenaire pour l&apos;excellence professionnelle</h2>
            <p className="mt-5 text-sm leading-6 text-[#38131b]/60">Nous aidons les entrepreneurs et organisations congolaises à clarifier leur vision, améliorer leur performance et construire une croissance solide.</p>
            <div className="mt-7 flex flex-wrap items-center gap-5"><AccentButton>À propos de nous</AccentButton><span className="text-xs"><b>Moris S. Barbar</b><br /><small className="text-[#38131b]/50">Directeur — Tech+ RDC</small></span></div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#fff1f2] p-5"><span className="text-4xl font-semibold">4.9</span><span className="text-xs"> /5.0</span><p className="mt-3 text-xs text-[#38131b]/60">Note moyenne</p></div>
              <div className="rounded-xl bg-[#fff1f2] p-5"><p className="text-xs font-semibold">Nos expertises</p><p className="mt-5 text-[10px] leading-5 text-[#38131b]/60">STRATÉGIE　 CONSEIL<br />CROISSANCE　 FORMATION<br />ORGANISATION</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
