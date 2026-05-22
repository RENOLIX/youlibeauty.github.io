import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-28 pb-16 bg-muted text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Nous Joindre</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4">
            <em className="italic">Contact</em>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Une question, un conseil personnalisé ou une demande spéciale ? Nous sommes à votre écoute.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-background flex-1">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl font-light text-foreground mb-6">
              Nos <em className="italic">Coordonnées</em>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Adresse</div>
                  <div className="text-muted-foreground text-sm">123 Rue Didouche Mourad</div>
                  <div className="text-muted-foreground text-sm">Alger Centre, Algérie 16000</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Téléphone</div>
                  <a href="tel:+213555000000" className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                    +213 555 00 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Email</div>
                  <a href="mailto:contact@salonlumiere.dz" className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                    contact@salonlumiere.dz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Horaires d'ouverture</div>
                  <div className="text-muted-foreground text-sm space-y-0.5">
                    <div>Lundi - Vendredi : 9h00 - 19h00</div>
                    <div>Samedi : 9h00 - 18h00</div>
                    <div>Dimanche : Fermé</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-light text-foreground">
              Nous <em className="italic">Trouver</em>
            </h2>
            <div className="bg-muted border border-border h-72 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-8 h-8 text-primary mx-auto" />
                <p className="font-serif text-lg text-foreground">Salon Lumière</p>
                <p className="text-muted-foreground text-sm">123 Rue Didouche Mourad, Alger</p>
              </div>
            </div>
            <div className="glass-card border-0 p-6 space-y-2 rounded-sm">
              <h3 className="font-serif text-lg text-foreground">Comment venir ?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nous sommes situés en plein cœur d'Alger Centre, à 2 minutes à pied de la Grande Poste.
                Parking disponible à proximité. Accessible en métro (station Tafourah) et en bus.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
