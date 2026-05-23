import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle, CalendarDays, Clock, User, Phone, Mail, MessageSquare, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

const CONTACT_PHONE = "0552189640";
const WHATSAPP_PHONE = CONTACT_PHONE.replace(/\D/g, "").replace(/^0/, "213");

const services = [
  { value: "proteine_keratine", label: "Protéine Kératine - 6 000 DZD" },
  { value: "melange_proteine_collagene", label: "Mélange Protéine Collagène - 8 000 DZD" },
  { value: "melange_keratine_collagene", label: "Mélange Kératine Collagène - 9 500 DZD" },
  { value: "lissage_indien", label: "Lissage Indien - 15 000 DZD" },
  { value: "lissage_bresilien", label: "Lissage Brésilien - 15 000 DZD" },
  { value: "proteine_cysteine", label: "Protéine à base de Cystéine - 18 000 DZD" },
  { value: "enzymou_therapie", label: "Enzymou Thérapie - 20 000 DZD" },
  { value: "brushing", label: "Brushing - 500 DZD" },
  { value: "balayage", label: "Balayage - 12 000 DZD" },
  { value: "coloration", label: "Coloration - 3 000 DZD" },
  { value: "shampoing_masque", label: "Shampoing & Masque - 500 DZD" },
  { value: "ondulation", label: "Ondulation - 1 500 DZD" },
  { value: "epilation_corps_complet", label: "Épilation corps complet - 10 000 DZD" },
  { value: "epilation_jambes", label: "Épilation jambes - 2 000 DZD / 1/2" },
  { value: "epilation_bras", label: "Épilation bras - 2 000 DZD / 1/2" },
  { value: "epilation_maillot", label: "Épilation maillot - 4 000 DZD" },
  { value: "epilation_visage", label: "Épilation moustache / visage - 1 000 DZD" },
  { value: "extensions_cils", label: "Extensions de cils - 3 000 DZD" },
  { value: "nettoyage_peau", label: "Nettoyage de peau - 3 000 DZD" },
  { value: "coiffure_invitee", label: "Coiffure invitée - 3 500 DZD" },
  { value: "maquillage_invitee", label: "Maquillage invitée - 2 500 DZD" },
];

const horaires = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00",
];

const schema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  telephone: z.string().min(9, "Numéro de téléphone invalide"),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  date: z.string().min(1, "Veuillez sélectionner une date"),
  heure: z.string().min(1, "Veuillez sélectionner un horaire"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function buildWhatsAppMessage(data: FormData) {
  const selectedService = services.find((service) => service.value === data.service)?.label ?? data.service;
  const lines = [
    "Bonjour Youli Beauty, je souhaite réserver un rendez-vous.",
    "",
    "Détails de la réservation :",
    `Nom : ${data.nom}`,
    `Prénom : ${data.prenom}`,
    `Téléphone : ${data.telephone}`,
    `Email : ${data.email || "Non renseigné"}`,
    `Service souhaité : ${selectedService}`,
    `Date souhaitée : ${data.date}`,
    `Horaire préféré : ${data.heure}`,
    `Message : ${data.message || "Aucune précision"}`,
    "",
    "Merci de me confirmer la disponibilité du rendez-vous.",
  ];

  return lines.join("\n");
}

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      service: "",
      date: "",
      heure: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const reservations = JSON.parse(localStorage.getItem("youli-reservations") || "[]") as FormData[];
      localStorage.setItem("youli-reservations", JSON.stringify([...reservations, data]));
      const message = buildWhatsAppMessage(data);
      window.location.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    } catch {
      toast.error("Une erreur s'est produite. Veuillez réessayer ou nous appeler.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div
            className="text-center max-w-md space-y-5"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-serif text-4xl font-light text-foreground">
              Demande <em className="italic">Envoyée !</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Merci pour votre réservation. Notre équipe vous contactera dans les plus brefs délais
              pour confirmer votre rendez-vous.
            </p>
            <p className="text-sm text-muted-foreground">
              Pour toute urgence, appelez-nous au <strong className="text-foreground">{CONTACT_PHONE}</strong>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-primary text-sm hover:underline cursor-pointer"
            >
              Faire une autre réservation
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-28 pb-16 bg-muted text-center px-6">
        <div
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3">Prenez Rendez-vous</p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-4">
            <em className="italic">Réservation</em>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choisissez votre service, votre date et votre horaire. Nous vous confirmerons rapidement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background flex-1">
        <div className="max-w-3xl mx-auto px-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card p-8 md:p-12 space-y-8 rounded-3xl"
          >
            <div>
              <div className="flex items-center gap-2 mb-5">
                <User className="w-4 h-4 text-primary" />
                <h2 className="font-serif text-xl font-medium text-foreground">Vos Informations</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input id="nom" placeholder="Tahir" {...register("nom")} className={errors.nom ? "border-destructive" : ""} />
                  {errors.nom && <p className="text-xs text-destructive">{errors.nom.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input id="prenom" placeholder="Lina" {...register("prenom")} className={errors.prenom ? "border-destructive" : ""} />
                  {errors.prenom && <p className="text-xs text-destructive">{errors.prenom.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="telephone">
                    <Phone className="inline w-3.5 h-3.5 mr-1" />Téléphone *
                  </Label>
                  <Input id="telephone" placeholder={CONTACT_PHONE} {...register("telephone")} className={errors.telephone ? "border-destructive" : ""} />
                  {errors.telephone && <p className="text-xs text-destructive">{errors.telephone.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">
                    <Mail className="inline w-3.5 h-3.5 mr-1" />Email (optionnel)
                  </Label>
                  <Input id="email" type="email" placeholder="yasmine@email.com" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
            </div>

            <div className="border-t border-border" />

            <div>
              <div className="flex items-center gap-2 mb-5">
                <Scissors className="w-4 h-4 text-primary" />
                <h2 className="font-serif text-xl font-medium text-foreground">Choix du Service</h2>
              </div>
              <div className="space-y-1.5">
                <Label>Service souhaité *</Label>
                <Select onValueChange={(val) => setValue("service", val, { shouldValidate: true })}>
                  <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                    <SelectValue placeholder="Sélectionnez votre traitement..." />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
              </div>
            </div>

            <div className="border-t border-border" />

            <div>
              <div className="flex items-center gap-2 mb-5">
                <CalendarDays className="w-4 h-4 text-primary" />
                <h2 className="font-serif text-xl font-medium text-foreground">Date & Horaire</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="date">Date souhaitée *</Label>
                  <Input id="date" type="date" min={today} {...register("date")} className={errors.date ? "border-destructive" : ""} />
                  {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label>
                    <Clock className="inline w-3.5 h-3.5 mr-1" />Horaire préféré *
                  </Label>
                  <Select onValueChange={(val) => setValue("heure", val, { shouldValidate: true })}>
                    <SelectTrigger className={errors.heure ? "border-destructive" : ""}>
                      <SelectValue placeholder="Choisir un horaire..." />
                    </SelectTrigger>
                    <SelectContent>
                      {horaires.map((h) => (
                        <SelectItem key={h} value={h}>{h}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.heure && <p className="text-xs text-destructive">{errors.heure.message}</p>}
                </div>
              </div>
            </div>

            <div className="border-t border-border" />

            <div>
              <div className="flex items-center gap-2 mb-5">
                <MessageSquare className="w-4 h-4 text-primary" />
                <h2 className="font-serif text-xl font-medium text-foreground">Message (optionnel)</h2>
              </div>
              <Textarea
                placeholder="Précisions sur vos cheveux, allergies, demandes particulières..."
                rows={4}
                {...register("message")}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 text-sm font-medium tracking-wide"
            >
              {isSubmitting ? "Préparation du message..." : "Envoyer ma réservation sur WhatsApp"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Un message WhatsApp organisé sera préparé automatiquement. Pour toute urgence : {CONTACT_PHONE}
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

