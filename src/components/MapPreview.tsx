import { MapPin } from "lucide-react";

const MAP_URL = "https://maps.app.goo.gl/bFBAyNu4sHcPr8eD7";
const MAP_EMBED_URL = "https://www.google.com/maps?q=36.730136,3.263746&z=16&output=embed";

export default function MapPreview() {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden border border-border bg-muted rounded-2xl shadow-sm">
        <iframe
          title="Localisation Youli Beauty"
          src={MAP_EMBED_URL}
          className="h-80 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={MAP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <MapPin className="h-4 w-4" />
        Ouvrir l'itinéraire Google Maps
      </a>
    </div>
  );
}
