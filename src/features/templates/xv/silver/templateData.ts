import passImage from "@/assets/xv/Gold/confirm.png";
import dressImage from "@/assets/xv/Gold/dress3.png";
import photoOne from "@/assets/xv/silver/foto1.png";
import liverpoolImage from "@/assets/xv/Ruby/liverpool.png";
import giftBoxImage from "@/assets/xv/Ruby/regalo.png";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

export const xvSilverTemplateData: XvPremiumTemplateData = {
  key: "silver",
  appearance: {
    palette: {
      gold: "#D4AF37",
      goldSoft: "#E7D7A0",
      blush: "#C8C2D8",
      blushSoft: "#EEEAF5",
      ivory: "#F5F1EA",
      black: "#2E2E2E",
      ink: "#2E2E2E",
    },
    accentPrimary: "#9A8FBF",
    shellBackgroundImage: photoOne,
    heroOverlay:
      "linear-gradient(180deg, rgba(154, 143, 191, 0.10) 0%, rgba(245, 241, 234, 0.86) 100%)",
    sectionBackground:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 241, 234, 0.96) 100%)",
    sectionBackgroundAlt:
      "linear-gradient(180deg, rgba(238, 234, 245, 0.92) 0%, rgba(245, 241, 234, 0.98) 100%)",
    cardBackground: "rgba(255, 255, 255, 0.88)",
    borderColor: "rgba(154, 143, 191, 0.24)",
  },
  hero: {
    celebrant: "Sofia Valentina",
    subtitle: "Mis XV anos",
    date: "14 de Noviembre de 2026",
    coverImage: {
      src: photoOne,
      alt: "Retrato principal de la quinceanera",
      position: "center top",
    },
    supportLine:
      "Una invitacion delicada, moderna y luminosa para compartir este momento con las personas mas especiales.",
    openLabel: "Abrir invitacion",
  },
  countdown: {
    targetIso: "2026-11-14T20:00:00-06:00",
    title: "Cuenta regresiva",
    headline: "Cada dia nos acerca a una noche inolvidable",
    labels: {
      days: "Dias",
      hours: "Horas",
      minutes: "Minutos",
    },
    note: "Gracias por acompanarme en esta nueva etapa. Falta muy poco para celebrar juntos.",
  },
  message: {
    kicker: "Mensaje",
    title: "Un recuerdo que quiero vivir contigo",
    body:
      "Hoy comienza una nueva etapa en mi vida. Me llenara de alegria contar con tu presencia para celebrar esta noche tan especial.",
    signature: "Con carino, Sofia Valentina y mi familia",
  },
  gallery: {
    kicker: "Galeria",
    title: "Instantes llenos de luz y emocion",
    note: "Una seleccion de momentos para compartir la esencia de esta celebracion.",
    images: [{ src: photoOne, alt: "Retrato principal de la quinceanera", position: "center top" }],
  },
  eventDetails: {
    kicker: "Detalles del evento",
    title: "Agenda de una noche especial",
    cards: [
      {
        icon: "church",
        title: "Misa",
        venue: "Parroquia San Jose",
        address: "Av. Principal 140, Monterrey, N.L.",
        time: "6:00 PM",
      },
      {
        icon: "party",
        title: "Recepcion",
        venue: "Salon Magnolia",
        address: "Camino Real 88, San Pedro Garza Garcia, N.L.",
        time: "8:00 PM",
      },
      {
        icon: "clock",
        title: "Sugerencia",
        venue: "Llegar 30 minutos antes",
        address: "Nos encantara recibirte con tiempo para disfrutar cada detalle.",
        time: "5:30 PM",
      },
    ],
  },
  map: {
    kicker: "Ubicacion",
    title: "Como llegar",
    venue: "Salon Magnolia",
    address: "Camino Real 88, San Pedro Garza Garcia, N.L.",
    embedUrl:
      "https://www.google.com/maps?q=San+Pedro+Garza+Garcia+Nuevo+Leon&z=14&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=San+Pedro+Garza+Garcia+Nuevo+Leon",
  },
  dressCode: {
    kicker: "Dress code",
    title: "Codigo de vestimenta",
    cards: [
      {
        label: "Etiqueta",
        value: "Formal en tonos suaves",
        image: {
          src: dressImage,
          alt: "Referencia de vestimenta formal",
        },
      },
    ],
    note: "Te sugerimos un estilo elegante y armonico con la celebracion.",
  },
  music: {
    label: "Musica",
  },
  gifts: {
    kicker: "Regalos",
    title: "Tu presencia es el mejor regalo",
    intro: "Si deseas obsequiarme algo, aqui tienes dos opciones practicas.",
    options: [
      {
        title: "Transferencia",
        value: "BBVA - 012345678901234567",
        image: {
          src: giftBoxImage,
          alt: "Regalo transferencia",
        },
      },
      {
        title: "Mesa de regalos",
        value: "Ver sugerencias",
        href: "https://www.liverpool.com.mx",
        actionLabel: "Abrir enlace",
        image: {
          src: liverpoolImage,
          alt: "Mesa de regalos",
        },
      },
    ],
  },
  rsvp: {
    kicker: "RSVP",
    title: "Confirma tu asistencia",
    intro:
      "Me encantara compartir esta noche contigo. Confirma tu respuesta para preparar cada detalle.",
    formIntro: "Completa este formulario rapido para confirmar tu lugar.",
    familyFieldLabel: "Nombre o apellido familiar",
    familyFieldPlaceholder: "Familia Torres",
    relationLabel: "Relacion",
    relationOptions: ["Familiar", "Amigo/a"],
    attendanceLabel: "Respuesta",
    attendanceNameLabel: "Nombre de quien asistira",
    attendanceNamePlaceholder: "Escribe aqui tu nombre",
    guestFieldLabel: "Nombre",
    guestFieldPlaceholder: "Nombre del invitado",
    guestFieldHelp: "Completa con claridad para evitar errores.",
    guestSlots: 1,
    attendanceOptions: ["Asistire", "No podre asistir"],
    dedicationLabel: "Mensaje para Sofia",
    dedicationPlaceholder: "Escribe un mensaje bonito",
    passTitle: "Pase digital",
    passGuestName: "Familia Torres",
    passGuestCountLabel: "Personas",
    passGuestCountValue: "2",
    passMessage: "Pase unico e intransferible",
    passGuests: ["Martha Torres", "Daniel Torres"],
    passImage: {
      src: passImage,
      alt: "Pase digital XV silver",
      position: "center top",
    },
    buttonLabel: "Enviar confirmacion",
    successMessage: "Confirmacion enviada correctamente. Gracias.",
    whatsappUrl:
      "https://wa.me/528100000000?text=Hola%2C%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV.",
    whatsappLabel: "Confirmar por WhatsApp",
  },
  closing: {
    message: "Gracias por ser parte de este momento tan especial",
    accent: "Con carino, Sofia Valentina",
  },
};
