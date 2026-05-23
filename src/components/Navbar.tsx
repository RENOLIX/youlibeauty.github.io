import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils.ts";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À Propos", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Réservation", href: "/reservation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center group">
          <img
            src="/favicon-512.png"
            alt="Youli Beauty"
            width={64}
            height={64}
            decoding="async"
            className="h-14 w-14 rounded-md object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-white cursor-pointer",
                pathname === link.href ? "text-foreground" : "text-foreground/70",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/reservation"
            className="glass-btn text-foreground text-sm font-medium px-5 py-2 rounded-full cursor-pointer"
          >
            Réserver
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
          <div className="md:hidden bg-background border-b border-border px-6 pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-3 text-sm font-medium border-b border-border/50 last:border-0 cursor-pointer transition-colors hover:text-foreground",
                  pathname === link.href ? "text-foreground" : "text-foreground/70",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
    </header>
  );
}
