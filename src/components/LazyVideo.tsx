import { useState } from "react";
import { Play } from "lucide-react";
import captions from "@/assets/about/captions.vtt";

type LazyVideoProps = {
  src: string;
  poster: string;
  title: string;
  className?: string;
};

export default function LazyVideo({ src, poster, title, className }: LazyVideoProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <video
        src={src}
        poster={poster}
        className={className}
        controls
        autoPlay
        muted
        playsInline
        preload="metadata"
      >
        <track kind="captions" src={captions} srcLang="fr" label="Français" />
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="relative h-full w-full overflow-hidden bg-foreground/5 text-background"
      aria-label={`Lire la vidéo : ${title}`}
    >
      <img
        src={poster}
        alt=""
        width={360}
        height={450}
        loading="lazy"
        decoding="async"
        className={className}
      />
      <span className="absolute inset-0 flex items-center justify-center bg-foreground/20">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg">
          <Play className="h-6 w-6 fill-current" />
        </span>
      </span>
    </button>
  );
}
