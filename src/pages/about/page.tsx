import { CheckCircle, Award, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import LazyVideo from "@/components/LazyVideo.tsx";
import resultImage1 from "@/assets/about/youli-result-01.jpeg";
import resultImage2 from "@/assets/about/youli-result-02.jpeg";
import resultImage3 from "@/assets/about/youli-result-03.jpeg";
import resultImage4 from "@/assets/about/youli-result-04.jpeg";
import resultImage5 from "@/assets/about/youli-result-05.jpeg";
import resultVideo1 from "@/assets/about/youli-video-01.mp4";
import resultVideo2 from "@/assets/about/youli-video-02.mp4";
import resultVideo3 from "@/assets/about/youli-video-03.mp4";
import resultVideo4 from "@/assets/about/youli-video-04.mp4";

const values = [
  { icon: Award, title: "Excellence", desc: "Nous n'utilisons que les produits professionnels les plus performants du marché." },
  { icon: Heart, title: "Passion", desc: "Chaque cliente est unique. Nous mettons tout notre cœur dans chaque soin." },
  { icon: Users, title: "Expertise", desc: "Notre équipe est certifiée et se forme régulièrement aux dernières tendances." },
  { icon: CheckCircle, title: "Confiance", desc: "Des clientes nous font confiance à Alger pour des résultats visibles et durables." },
];

const gallery = [
  { type: "image", src: resultImage1, title: "Lissage brillant" },
  { type: "video", src: resultVideo1, poster: resultImage1, title: "Résultat fluide" },
  { type: "image", src: resultImage2, title: "Finition naturelle" },
  { type: "video", src: resultVideo2, poster: resultImage2, title: "Cheveux en mouvement" },
  { type: "image", src: resultImage3, title: "Coiffure de soirée" },
  { type: "image", src: resultImage4, title: "Soin kératine" },
  { type: "video", src: resultVideo3, poster: resultImage4, title: "Transformation" },
  { type: "image", src: resultImage5, title: "Brillance profonde" },
  { type: "video", src: resultVideo4, poster: resultImage5, title: "Avant / après" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-28 pb-16 bg-muted text-center px-6">
        <div
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Notre Histoire</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4">
            À Propos de <em className="italic">Nous</em>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Depuis 2018, Youli Beauty accompagne les femmes qui veulent des cheveux brillants, soignés et faciles à porter au quotidien.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div
            className="space-y-5"
          >
            <h2 className="font-serif text-4xl font-light text-foreground">
              Une Passion Née de <em className="italic">l'Amour du Cheveu</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Depuis 2018, notre salon met l'accent sur les soins capillaires précis, les finitions élégantes et les transformations
              visibles. Chaque rendez-vous commence par une écoute attentive pour choisir le soin adapté à vos cheveux.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Kératine, protéine, lissages, brushing, coloration ou coiffure événementielle : nous travaillons chaque
              détail pour obtenir un résultat propre, lumineux et durable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Les photos et vidéos ci-dessous montrent de vraies réalisations du salon, avec des cheveux lissés,
              brillants et mis en valeur dans notre espace beauté.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={resultImage1}
              alt="Résultat lissage Youli Beauty"
              width={400}
              height={520}
              loading="lazy"
              decoding="async"
              className="w-full h-52 object-cover"
            />
            <LazyVideo
              src={resultVideo1}
              poster={resultImage1}
              title="Résultat fluide"
              className="w-full h-52 object-cover mt-8"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Nos Réalisations</p>
            <h2 className="font-serif text-4xl font-light text-foreground">
              Résultats <em className="italic">Youli Beauty</em>
            </h2>
          </div>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {gallery.map((item, i) => (
              <figure
                key={`${item.title}-${i}`}
                className="glass-card snap-start shrink-0 w-[78vw] sm:w-[340px] overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5] bg-foreground/5">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      width={340}
                      height={425}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <LazyVideo
                      src={item.src}
                      poster={item.poster ?? item.src}
                      title={item.title}
                      className="h-full w-full object-cover"
                    />
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

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Ce Qui Nous Définit</p>
            <h2 className="font-serif text-4xl font-light text-foreground">
              Nos <em className="italic">Valeurs</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass-card p-7 space-y-3 text-center rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-1">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center px-6">
        <h2 className="font-serif text-3xl font-light mb-4">Prête à Nous Rencontrer ?</h2>
        <p className="text-primary-foreground/70 mb-6">Venez vivre l'expérience Youli Beauty.</p>
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

