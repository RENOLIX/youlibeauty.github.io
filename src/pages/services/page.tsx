import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import heroSalonImage from "@/assets/youli-hero-salon.jpg";

const services = [
  {
    name: "Protéine Kératine",
    price: "6 000",
    duration: "3h/4h",
    tag: "Bestseller",
    desc: "Notre traitement signature alliant protéines végétales et kératine pure pour un résultat lissant intense. Idéal pour les cheveux frisés, crépus ou abîmés.",
    benefits: ["Lissage durable 8-10 mois", "Brillance intense", "Anti-frizz puissant", "Sans formaldéhyde"],
    image: "https://images.unsplash.com/photo-1737085726745-0e408ab9fc8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Mélange Protéine Collagène",
    price: "8 000",
    duration: "3h/4h",
    tag: "Restructurant",
    desc: "Une fusion unique de protéines de soie et de collagène marin qui restaure la structure interne du cheveu tout en le lissant.",
    benefits: ["Renforce la fibre capillaire", "Repulpe les cheveux fins", "Hydratation profonde", "Durabilité 8-10 mois"],
    image: "https://images.unsplash.com/photo-1758315949140-1972ace0644e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Mélange Kératine Collagène",
    price: "9 500",
    duration: "3h/4h",
    tag: "Premium",
    desc: "La synergie parfaite entre la kératine lissante et le collagène régénérateur. Un double bénéfice : lissage et reconstruction capillaire.",
    benefits: ["Double action lissante", "Reconstruction totale", "Toucher soyeux", "Durabilité 8-10 mois"],
    image: "https://images.unsplash.com/photo-1686831889330-b059693080dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Lissage Indien",
    price: "15 000",
    duration: "3h/4h",
    tag: "Naturel",
    desc: "Inspiré des techniques capillaires indiennes ancestrales, ce lissage utilise des huiles précieuses pour un résultat naturel et lumineux.",
    benefits: ["100% naturel & doux", "Nourrit intensément", "Idéal cheveux fragiles", "Durabilité 8-10 mois"],
    image: heroSalonImage,
  },
  {
    name: "Lissage Brésilien",
    price: "15 000",
    duration: "3h/4h",
    tag: "Iconique",
    desc: "Le classique incontournable. La technique brésilienne offre un lissage parfait, une brillance miroir et un toucher incroyablement doux.",
    benefits: ["Lissage ultra-parfait", "Brillance miroir", "Résistant à l'humidité", "Durabilité 8-10 mois"],
    image: "https://images.unsplash.com/photo-1633681122703-3ce20f1e978d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Protéine à base de Cystéine",
    price: "18 000",
    duration: "3h/4h",
    tag: "Haute Performance",
    desc: "La cystéine, acide aminé naturellement présent dans le cheveu, assure un lissage biologique exceptionnel sans altérer la structure capillaire.",
    benefits: ["Lissage biologique", "100% sans formaldéhyde", "Respecte la structure", "Durabilité 8-10 mois"],
    image: "https://images.unsplash.com/photo-1716304859621-f8b80c379228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Enzymou Thérapie",
    price: "20 000",
    duration: "3h/4h",
    tag: "Prestige",
    desc: "Notre traitement le plus luxueux. Les enzymes actives pénètrent le cortex du cheveu pour régénérer, lisser et transformer la chevelure de l'intérieur.",
    benefits: ["Régénération complète", "Résultat spectaculaire", "Soin & lissage combinés", "Durabilité 8-10 mois"],
    image: "https://images.unsplash.com/photo-1749448534695-802fe0cc44e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Extensions de cils",
    price: "3 000",
    duration: "1h-1h30",
    tag: "Regard",
    desc: "Une pose soignée pour intensifier le regard tout en gardant un rendu élégant et harmonieux.",
    benefits: ["Effet naturel ou glamour", "Pose précise", "Regard allongé", "Finition légère"],
    image: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Nettoyage de peau",
    price: "3 000",
    duration: "1h",
    tag: "Soin visage",
    desc: "Un soin visage purifiant pour nettoyer la peau en profondeur, raviver l'éclat et apporter une sensation de fraîcheur.",
    benefits: ["Peau purifiée", "Éclat naturel", "Soin doux", "Teint plus net"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Coiffure invitée",
    price: "3 500",
    duration: "1h-2h",
    tag: "Événement",
    desc: "Une coiffure raffinée pour mariage, fête ou soirée, adaptée à votre tenue et à votre style.",
    benefits: ["Tenue élégante", "Finition professionnelle", "Style personnalisé", "Idéal événements"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Maquillage invitée",
    price: "2 500",
    duration: "45min-1h",
    tag: "Make-up",
    desc: "Un maquillage lumineux et travaillé pour les occasions spéciales, avec un rendu propre et photographique.",
    benefits: ["Teint lumineux", "Regard défini", "Longue tenue", "Rendu élégant"],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-28 pb-16 bg-muted text-center px-6">
        <div
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Catalogue Complet</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4">
            Nos Services <em className="italic">& Tarifs</em>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tous nos prix sont en Dinars Algériens (DZD). Réservez en ligne ou appelez-nous directement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background flex-1">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="glass-card border-0 p-0 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl group grid grid-cols-1 md:grid-cols-3"
            >
              <div className="h-52 md:h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-2 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-sm mb-2">
                        {service.tag}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-foreground">{service.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-serif text-3xl font-semibold text-primary">{service.price}</div>
                      <div className="text-xs text-muted-foreground">DZD</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Durée : {service.duration}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-1.5 text-xs text-foreground">
                        <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <Link
                    to="/reservation"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer rounded-full"
                  >
                    <Sparkles className="w-4 h-4" />
                    Réserver ce soin
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted text-center px-6">
        <h2 className="font-serif text-3xl font-light text-foreground mb-4">
          Besoin d'un Conseil Personnalisé ?
        </h2>
        <p className="text-muted-foreground mb-6">Contactez-nous et nos experts vous guideront vers le soin idéal.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer rounded-full"
        >
          Nous contacter <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}

