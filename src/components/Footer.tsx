import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import youliLogo from "@/assets/youli-beauty-logo.png";

const CONTACT_EMAIL = "Linatahir19ans@gmail.com";
const CONTACT_PHONE = "0552189640";
const MAP_URL = "https://maps.app.goo.gl/bFBAyNu4sHcPr8eD7";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src={youliLogo}
              alt="Youli Beauty"
              width={2000}
              height={756}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm leading-relaxed text-background/80">
            Votre salon de coiffure premium spécialisé dans les traitements kératine,
            protéine et lissages professionnels à Alger.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg text-background font-medium">Navigation</h4>
          <ul className="space-y-2">
            {[
              { label: "Accueil", href: "/" },
              { label: "Services & Tarifs", href: "/services" },
              { label: "À Propos", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Réservation", href: "/reservation" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm hover:text-accent transition-colors cursor-pointer">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg text-background font-medium">Nous Trouver</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
              <a href={MAP_URL} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                Voir la localisation Google Maps
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <a href={`tel:${CONTACT_PHONE}`} className="hover:text-accent transition-colors">
                {CONTACT_PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-accent" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <div className="text-xs text-background/50 pt-2">
            Lun-Sam : 9h00 - 19h00
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 text-center py-4 text-xs text-background/40">
        © {year} Youli Beauty. Tous droits réservés.
      </div>
    </footer>
  );
}
