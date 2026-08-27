"use client";

import {
  ArrowUpRight,
  BarChart3,
  CircleCheck,
  Handshake,
  Megaphone,
  Globe2,
  ShieldCheck,
  Sparkles,
  Phone,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useEffect, useState } from "react";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}

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
              Nous aidons les marques et organisations congolaises à mieux se positionner, mieux communiquer et obtenir des résultats durables.
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

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="border-b border-[#571426]/10 bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
          {[
            ["Projets accompagnés", 120, "+"],
            ["Villes couvertes", 8, ""],
            ["Taux de satisfaction", 95, "%"],
            ["Années d'expérience", 6, "+"],
          ].map(([label, value, suffix]) => (
            <div key={label} className="text-center sm:text-left">
              <p className="text-3xl font-semibold tracking-tight text-[#d7263d] sm:text-4xl">
                <CountUp value={value as number} suffix={suffix as string} />
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[#38131b]/55">{label}</p>
            </div>
          ))}
        </div>
      </motion.section>

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

      <section className="bg-[#fff1f2] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }}>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">✦ Notre expertise</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">La communication qui fait avancer les idées.</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#38131b]/65">De la stratégie au contenu, nous construisons une présence de marque cohérente pour créer de la confiance et générer des opportunités.</p>
            <a href="/about" className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#d7263d]">Découvrir notre approche <ArrowUpRight size={14} /></a>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .1 } } }} className="grid gap-3 sm:grid-cols-2">
            {[
              [Megaphone, "Stratégie de communication", "Un cap clair, un message fort et une identité qui vous ressemble."],
              [Globe2, "Présence digitale", "Des contenus pensés pour toucher les publics congolais et africains."],
              [ShieldCheck, "Réputation de marque", "Une image crédible qui inspire confiance à vos clients et partenaires."],
              [Sparkles, "Créativité utile", "Des idées originales au service de vos objectifs business."],
            ].map(([Icon, title, text]) => {
              const ServiceIcon = Icon as typeof Megaphone;
              return (
                <motion.article key={title as string} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rounded-xl bg-white p-5">
                  <ServiceIcon className="size-6 text-[#d7263d]" />
                  <h3 className="mt-5 text-sm font-bold">{title as string}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#38131b]/60">{text as string}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">✦ Notre méthode</p>
            <h2 className="text-3xl font-semibold sm:text-5xl">Du premier échange à l&apos;impact.</h2>
          </div>
          <p className="max-w-sm text-xs leading-5 text-[#38131b]/60">Un processus simple pour transformer vos enjeux de communication en résultats visibles.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Écouter & comprendre", "Nous commençons par vos objectifs, votre public et votre réalité terrain."],
            ["02", "Construire & créer", "Nous concevons une stratégie et des contenus alignés à votre identité."],
            ["03", "Mesurer & améliorer", "Nous suivons les résultats et faisons évoluer les actions avec agilité."],
          ].map(([number, title, text], index) => (
            <motion.article key={number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .12 }} className="rounded-xl border border-[#571426]/10 bg-white p-7">
              <span className="text-4xl font-semibold text-[#ffb3bd]">{number}</span>
              <h3 className="mt-8 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-[#38131b]/60">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-6 mb-20 overflow-hidden rounded-2xl bg-[#571426] px-6 py-14 text-center text-white sm:px-12">
        <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .6 }} className="mx-auto max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#ffb3bd]">✦ Votre prochain chapitre</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Prêt à donner plus d&apos;impact à votre communication ?</h2>
          <a href="#contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d7263d] px-5 py-3 text-[11px] font-bold">Parlons de votre projet <ArrowUpRight size={14} /></a>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}
