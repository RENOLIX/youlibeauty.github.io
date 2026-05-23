import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import MapPreview from "@/components/MapPreview.tsx";
import heroSalonImage from "@/assets/youli-hero-salon.jpg";
import epilationImage from "@/assets/youli-epilation.jpg";
import storySalonImage from "@/assets/youli-story-salon.jpg";
import resultImage1 from "@/assets/about/youli-result-01.jpeg";
import resultImage2 from "@/assets/about/youli-result-02.jpeg";
import resultImage3 from "@/assets/about/youli-result-03.jpeg";
import resultImage4 from "@/assets/about/youli-result-04.jpeg";
import resultImage5 from "@/assets/about/youli-result-05.jpeg";
import resultVideo1 from "@/assets/about/youli-video-01.mp4";
import resultVideo2 from "@/assets/about/youli-video-02.mp4";
import resultVideo3 from "@/assets/about/youli-video-03.mp4";
import resultVideo4 from "@/assets/about/youli-video-04.mp4";
import captions from "@/assets/about/captions.vtt";

const HERO_IMAGE = heroSalonImage;
const SALON_IMAGE = storySalonImage;

const categories = [
  {
    title: "Soins Cheveux",
    img: heroSalonImage,
    services: [
      { name: "Protéine", price: "6 000 DA" },
      { name: "Mélange Protéine Collagène", price: "8 000 DA" },
      { name: "Lissage Indien / Brésilien", price: "15 000 DA" },
      { name: "Cystéine", price: "18 000 DA" },
      { name: "Enzimo Thérapie", price: "20 000 DA" },
    ],
  },
  {
    title: "Cheveux Servis",
    img: resultImage2,
    services: [
      { name: "Brushing", price: "500 DA" },
      { name: "Balayage", price: "12 000 DA" },
      { name: "Coloration", price: "3 000 DA" },
    ],
  },
  {
    title: "Shampoing & Masque Capillaire",
    img: resultImage4,
    services: [
      { name: "Shampoing & Masque", price: "500 DA" },
      { name: "Ondulation", price: "1 500 DA" },
    ],
  },
  {
    title: "Épilation",
    img: epilationImage,
    services: [
      { name: "Corps Complet", price: "10 000 DA" },
      { name: "Jambes", price: "2 000 DA / 1/2" },
      { name: "Les Bras", price: "2 000 DA / 1/2" },
      { name: "Maillot", price: "4 000 DA" },
      { name: "Moustache / Visage", price: "1 000 DA" },
    ],
  },
  {
    title: "Beauté & Mise en beauté",
    img: resultImage3,
    services: [
      { name: "Extensions de cils", price: "3 000 DA" },
      { name: "Nettoyage de peau", price: "3 000 DA" },
      { name: "Coiffure invitée", price: "3 500 DA" },
      { name: "Maquillage invitée", price: "2 500 DA" },
    ],
  },
];

const testimonials = [
  { name: "Amira B.", text: "Le lissage brésilien a transformé mes cheveux. Résultat impeccable, je recommande !", stars: 5 },
  { name: "Lina K.", text: "Salon magnifique, personnel très professionnel. L'enzymou thérapie vaut chaque dinar !", stars: 5 },
  { name: "Samia M.", text: "Meilleur salon d'Alger pour les soins protéine. Je suis cliente depuis 2 ans.", stars: 5 },
];

const realizations = [
  { type: "image", src: resultImage1, title: "Brillance miroir" },
  { type: "video", src: resultVideo1, poster: resultImage1, title: "Résultat en mouvement" },
  { type: "image", src: resultImage2, title: "Lissage lumineux" },
  { type: "video", src: resultVideo2, poster: resultImage2, title: "Finition soyeuse" },
  { type: "image", src: resultImage3, title: "Coiffure élégante" },
  { type: "image", src: resultImage4, title: "Soin profond" },
  { type: "video", src: resultVideo3, poster: resultImage4, title: "Transformation" },
  { type: "image", src: resultImage5, title: "Cheveux sublimés" },
  { type: "video", src: resultVideo4, poster: resultImage5, title: "Avant / après" },
];

const marqueeItems = [
  "Kératine Professionnelle",
  "Lissage Brésilien",
  "Protéine Collagène",
  "Enzymou Thérapie",
  "Lissage Indien",
  "Cystéine Pure",
  "Salon Premium Alger",
  "Réservation en Ligne",
  "Résultats Garantis",
  "Produits Certifiés",
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative min-h-screen flex items-center pt-16">
        <img
          src={HERO_IMAGE}
          alt=""
          width={1831}
          height={859}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/60 via-foreground/40 to-foreground/25" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div
            className="max-w-2xl"
          >
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Salon de Coiffure Premium - Alger
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-background leading-[1.1] mb-6 text-balance">
              L'Art du <em className="italic font-semibold">Cheveu</em> Sublime
            </h1>
            <p className="text-background/80 text-lg leading-relaxed mb-10 max-w-xl">
              Spécialistes des traitements kératine, protéine et lissages professionnels.
              Révélez la beauté naturelle de vos cheveux avec nos soins d'exception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservation"
                className="glass-btn inline-flex items-center justify-center gap-2 text-foreground px-8 py-3.5 text-sm font-medium tracking-wide cursor-pointer rounded-full"
              >
                Réserver maintenant
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="glass-btn inline-flex items-center justify-center gap-2 text-background px-8 py-3.5 text-sm font-medium tracking-wide cursor-pointer rounded-full"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 glass-dark py-4 overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`} className="text-background/90 text-sm font-medium tracking-widest whitespace-nowrap px-8">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Nos Soins</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Nos Services <em className="italic">& Tarifs</em>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des traitements capillaires professionnels, soigneusement sélectionnés pour sublimer chaque type de cheveu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 rounded-3xl"
              >
                <div className="h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.services.map((s) => (
                      <li key={s.name} className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0">
                        <span className="text-sm text-foreground/80">{s.name}</span>
                        <span className="text-sm font-semibold text-primary whitespace-nowrap ml-3">{s.price}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/reservation" className="mt-5 inline-flex items-center gap-1 text-xs text-primary hover:underline cursor-pointer">
                    Réserver
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer rounded-full"
            >
              Tous nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="mb-10"
          >
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Réalisations</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
              Quelques <em className="italic">Résultats</em>
            </h2>
          </div>

          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {realizations.map((item, i) => (
              <figure
                key={`${item.title}-${i}`}
                className="glass-card snap-start shrink-0 w-[78vw] sm:w-[360px] overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5] bg-foreground/5">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      width={360}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="h-full w-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="none"
                    >
                      <track kind="captions" src={captions} srcLang="fr" label="Français" />
                    </video>
                  )}
                </div>
                <figcaption className="px-5 py-4 font-serif text-lg text-foreground">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <img
          src={SALON_IMAGE}
          alt=""
          width={1831}
          height={859}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="glass-dark rounded-2xl p-8 space-y-5"
          >
            <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase">Notre Histoire</p>
            <h2 className="font-serif text-4xl font-light text-background">
              Un Espace Dédié à <em className="italic">Votre Beauté</em>
            </h2>
            <p className="text-background/75 leading-relaxed text-sm">
              Depuis 2018, Youli Beauty est le rendez-vous des femmes algériennes qui recherchent
              l'excellence en matière de soins capillaires. Notre équipe maîtrise les techniques les plus avancées.
            </p>
            <ul className="space-y-2">
              {["Produits professionnels certifiés", "Coiffeuses expertes & certifiées", "Résultats durables garantis", "Ambiance élégante & chaleureuse"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-background/90">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all cursor-pointer"
            >
              En savoir plus <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div
            className="grid grid-cols-2 gap-4"
          >
            {[
              { val: "8+", label: "Services Premium" },
              { val: "500+", label: "Clientes Satisfaites" },
              { val: "5 ★", label: "Note Moyenne" },
              { val: "2018", label: "Depuis" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                <div className="font-serif text-3xl font-semibold text-background">{stat.val}</div>
                <div className="text-xs text-background/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Témoignages</p>
            <h2 className="font-serif text-4xl font-light text-foreground">
              Ce Que Disent Nos <em className="italic">Clientes</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="glass-card p-7 space-y-4 rounded-2xl"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">{`"${t.text}"`}</p>
                <div className="font-medium text-sm text-foreground">- {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          width={1831}
          height={859}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div
          className="relative z-10 max-w-2xl mx-auto text-center space-y-6 px-6"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-background">
            Prête à Sublimer <em className="italic">Vos Cheveux ?</em>
          </h2>
          <p className="text-background/75">
            Réservez votre séance dès aujourd'hui et bénéficiez d'un soin capillaire d'exception.
          </p>
          <Link
            to="/reservation"
            className="glass-btn inline-flex items-center gap-2 text-background px-8 py-3.5 text-sm font-medium cursor-pointer rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            Réserver mon rendez-vous
          </Link>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Nous Trouver</p>
            <h2 className="font-serif text-4xl font-light text-foreground mb-4">
              Venez chez <em className="italic">Youli Beauty</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ouvrez l'itinéraire Google Maps pour rejoindre directement le salon.
            </p>
          </div>
          <MapPreview />
        </div>
      </section>

      <Footer />
    </div>
  );
}

