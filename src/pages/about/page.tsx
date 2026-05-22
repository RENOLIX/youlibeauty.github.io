import { motion } from "motion/react";
import { CheckCircle, Award, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

const SALON_1 = "https://images.unsplash.com/photo-1633681138600-295fcd688876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const SALON_2 = "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const values = [
  { icon: Award, title: "Excellence", desc: "Nous n'utilisons que les produits professionnels les plus performants du marché." },
  { icon: Heart, title: "Passion", desc: "Chaque cliente est unique. Nous mettons tout notre cœur dans chaque soin." },
  { icon: Users, title: "Expertise", desc: "Notre équipe est certifiée et se forme régulièrement aux dernières tendances." },
  { icon: CheckCircle, title: "Confiance", desc: "Des milliers de clientes nous font confiance depuis plus de 10 ans à Alger." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-28 pb-16 bg-muted text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Notre Histoire</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4">
            À Propos de <em className="italic">Nous</em>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Depuis 2014, Salon Lumière est le sanctuaire beauté des femmes algériennes qui exigent le meilleur pour leurs cheveux.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5"
          >
            <h2 className="font-serif text-4xl font-light text-foreground">
              Une Passion Née de <em className="italic">l'Amour du Cheveu</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Salon Lumière a vu le jour en 2014, fondé par Yasmine Belhadj, coiffeuse passionnée formée entre Alger
              et Paris. Sa vision : créer un espace où chaque femme se sent unique, écoutée et magnifiée.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Spécialisé dans les traitements capillaires de haute technologie - kératine, protéine, lissages
              brésilien et indien - notre salon est aujourd'hui une référence incontournable à Alger.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous sélectionnons rigoureusement chaque produit pour garantir sécurité, efficacité et respect de la
              fibre capillaire. Votre santé capillaire est notre priorité absolue.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={SALON_1} alt="Salon Lumière" className="w-full h-52 object-cover" />
            <img src={SALON_2} alt="Salon Lumière intérieur" className="w-full h-52 object-cover mt-8" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Ce Qui Nous Définit</p>
            <h2 className="font-serif text-4xl font-light text-foreground">
              Nos <em className="italic">Valeurs</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="glass-card p-7 space-y-3 text-center rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-1">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center px-6">
        <h2 className="font-serif text-3xl font-light mb-4">Prête à Nous Rencontrer ?</h2>
        <p className="text-primary-foreground/70 mb-6">Venez vivre l'expérience Salon Lumière.</p>
        <Link
          to="/reservation"
          className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer rounded-full"
        >
          Prendre rendez-vous <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
