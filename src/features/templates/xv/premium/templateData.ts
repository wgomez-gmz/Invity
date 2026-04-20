import heroImage from "@/assets/xv/Ruby/Galeria/xv1.png";
import heroSupportImage from "@/assets/xv/Ruby/Galeria/xv.png";
import galleryImageOne from "@/assets/xv/Ruby/Galeria/Galeria 1.png";
import galleryImageTwo from "@/assets/xv/Ruby/Galeria/Geleria 2.png";
import galleryImageThree from "@/assets/xv/Ruby/Galeria/galeria 3.png";
import galleryImageFour from "@/assets/xv/Ruby/Galeria/xv3.png";
import galleryImageFive from "@/assets/xv/Ruby/Galeria/xv4.png";
import shellBackgroundImage from "@/assets/xv/Ruby/Galeria/fondo.png";
import formalDressImage from "@/assets/xv/Ruby/formalboda.png";
import liverpoolImage from "@/assets/xv/Ruby/liverpool.png";
import giftBoxImage from "@/assets/xv/Ruby/regalo.png";
import envelopeImage from "@/assets/xv/Ruby/sobre.png";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

export const xvPremiumTemplateData: XvPremiumTemplateData = {
  key: "premium",
  appearance: {
    palette: {
      gold: "#d8b15e",
      goldSoft: "#f0d69c",
      blush: "#f3d7df",
      blushSoft: "#fff4f7",
      ivory: "#fffaf7",
      black: "#2a1c25",
      ink: "#3a2b33",
    },
    accentPrimary: "#9d248d",
    shellBackgroundImage,
    ornamentImageLeft: undefined,
    ornamentImageRight: undefined,
    heroOverlay:
      "linear-gradient(180deg, rgba(27, 19, 24, 0.18) 0%, rgba(27, 19, 24, 0.76) 100%)",
    sectionBackground:
      "linear-gradient(180deg, rgba(255, 250, 247, 0.98) 0%, rgba(255, 244, 247, 0.98) 100%)",
    sectionBackgroundAlt:
      "linear-gradient(180deg, rgba(255, 245, 248, 0.99) 0%, rgba(255, 250, 247, 0.98) 100%)",
    cardBackground: "rgba(255, 255, 255, 0.78)",
    borderColor: "rgba(216, 177, 94, 0.22)",
  },
  hero: {
    celebrant: "Regina",
    subtitle: "Mis XV Años",
    date: "14 de Noviembre de 2026",
    coverImage: {
      src: heroImage,
      alt: "Retrato editorial de quinceañera con vestido brillante",
      position: "center top",
    },
    supportLine:
      "Una noche dorada, delicada y luminosa para celebrar una etapa que quedará en el corazón para siempre.",
    openLabel: "Abrir invitación",
  },
  countdown: {
    targetIso: "2026-11-14T20:00:00-06:00",
    title: "Cuenta regresiva",
    note: "Cada instante nos acerca a una noche llena de magia, vals y recuerdos inolvidables.",
  },
  message: {
    kicker: "Dedicatoria",
    title: "Con amor para una noche inolvidable",
    body:
      "Hoy celebramos con inmensa alegría el inicio de una nueva etapa. Gracias por acompañarnos en este sueño vestido de luz, elegancia y amor.",
    signature: "Con cariño, su familia",
  },
  gallery: {
    kicker: "Galería",
    title: "Brillos, detalles y momentos que ya se sienten eternos",
    note: "Desliza para descubrir cada escena de esta historia.",
    images: [
      {
        src: heroSupportImage,
        alt: "Sesión editorial de quince años",
        position: "center center",
      },
      {
        src: heroImage,
        alt: "Retrato principal de la quinceañera",
        position: "center top",
      },
      {
        src: galleryImageFour,
        alt: "Escena editorial con fondo elegante",
        position: "center center",
      },
      {
        src: galleryImageFive,
        alt: "Retrato final de la colección",
        position: "center center",
      },
      {
        src: galleryImageOne,
        alt: "Detalle elegante de la sesión de fotos",
        position: "center center",
      },
      {
        src: galleryImageTwo,
        alt: "Retrato con presencia sofisticada",
        position: "center top",
      },
      {
        src: galleryImageThree,
        alt: "Momento delicado de la celebración",
        position: "center center",
      },
    ],
  },
  eventDetails: {
    kicker: "Detalles del evento",
    title: "Acompáñame en una noche llena de brillo y emoción",
    cards: [
      {
        icon: "church",
        title: "Ceremonia religiosa",
        venue: "Parroquia San Miguel Arcángel",
        address: "Av. Rosales 245, Col. Del Valle, Monterrey, N.L.",
        time: "6:00 PM",
      },
      {
        icon: "party",
        title: "Recepción",
        venue: "Salón Aurora",
        address: "Camino de las Flores 128, San Pedro Garza García, N.L.",
        time: "8:00 PM",
      },
      {
        icon: "clock",
        title: "Momentos especiales",
        venue: "Vals, brindis y celebración durante toda la velada",
        address: "Recepción de invitados a partir de las 5:30 PM.",
        time: "Puntualidad sugerida",
      },
    ],
  },
  map: {
    kicker: "Ubicación",
    title: "Cómo llegar",
    venue: "Salón Aurora",
    address: "Camino de las Flores 128, San Pedro Garza García, N.L.",
    embedUrl:
      "https://www.google.com/maps?q=San+Pedro+Garza+Garcia+Nuevo+Leon&z=14&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=San+Pedro+Garza+Garcia+Nuevo+Leon",
  },
  dressCode: {
    kicker: "Dress Code",
    title: "Código de vestimenta",
    cards: [
      {
        label: "Etiqueta",
        value: "Vestimenta de gala para una noche especial",
        image: {
          src: formalDressImage,
          alt: "Referencia visual de vestimenta formal",
        },
      },
    ],
    note: "Queremos una atmósfera armoniosa, refinada y muy especial para esta noche.",
  },
  music: {
    label: "Música",
  },
  gifts: {
    kicker: "Mesa de regalos",
    title: "Gracias por compartir conmigo este momento",
    intro:
      "Tu presencia es lo más importante. Si deseas tener un detalle conmigo, aquí encontrarás algunas opciones.",
    options: [
      {
        title: "Transferencia",
        value: "BBVA - 012345678901234567",
        image: {
          src: giftBoxImage,
          alt: "Ícono de regalo para opción de transferencia",
        },
      },
      {
        title: "Enlace externo",
        value: "Ver mesa de regalos",
        href: "https://www.liverpool.com.mx",
        actionLabel: "Abrir enlace",
        image: {
          src: liverpoolImage,
          alt: "Logo de Liverpool para mesa de regalos",
        },
      },
      {
        title: "Lluvia de sobres",
        value: "Si lo prefieres, podrás entregarlo el día del evento",
        image: {
          src: envelopeImage,
          alt: "Ícono de sobre para lluvia de sobres",
        },
      },
    ],
  },
  rsvp: {
    kicker: "RSVP",
    title: "Confirma tu asistencia",
    intro:
      "Tu compañía hará esta noche aún más especial. Por favor confirma con anticipación para celebrarlo juntos.",
    formIntro: "Completa y envía el siguiente formulario.",
    familyFieldLabel: "Escribe nombre o apellidos de tu familia:",
    familyFieldPlaceholder: "Familia Hernández López",
    relationLabel: "Eres mi:",
    relationOptions: ["Familiar", "Amigo/a"],
    attendanceLabel: "Confirmar asistencia:",
    attendanceNameLabel: "Escribe el nombre de quien asistirá (4 Adultos):",
    attendanceNamePlaceholder: "Escribe aquí los nombres de quienes asistirán.",
    guestFieldLabel: "Nombre",
    guestFieldPlaceholder: "Escribe el nombre del invitado.",
    guestFieldHelp: "Escribe el nombre del invitado.",
    guestSlots: 1,
    attendanceOptions: [
      "4 Adultos",
      "3 Adultos",
      "2 Adultos",
      "1 Adulto",
      "Lo siento, no podremos asistir",
    ],
    dedicationLabel: "Escribe una dedicatoria para Regina:",
    dedicationPlaceholder: "Déjale unas palabras bonitas a Regina.",
    passTitle: "Pase especial",
    passGuestName: "Familia Hernández López",
    passGuestCountLabel: "Personas",
    passGuestCountValue: "3",
    passMessage:
      "Pase único e intransferible",
    passGuests: ["Maribel Hernández", "José López", "Ximena López"],
    passImage: {
      src: heroSupportImage,
      alt: "Imagen principal del pase de XV años",
      position: "center top",
    },
    buttonLabel: "Enviar confirmación",
    successMessage:
      "Confirmación enviada. Gracias por ser parte de esta noche tan importante.",
    whatsappUrl:
      "https://wa.me/528100000000?text=Hola%2C%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV.",
    whatsappLabel: "Confirmar por WhatsApp",
  },
  closing: {
    message: "Gracias por ser parte de una noche que brillará para siempre en mi memoria.",
    accent: "Te espero con mucha ilusión",
  },
};
