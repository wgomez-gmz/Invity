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
      gold: "#d6b15b",
      goldSoft: "#f3dfaa",
      blush: "#f5cddd",
      blushSoft: "#fff4f8",
      ivory: "#fffaf8",
      black: "#2f1630",
      ink: "#4c2d46",
    },
    accentPrimary: "#d45f9a",
    shellBackgroundImage,
    ornamentImageLeft: undefined,
    ornamentImageRight: undefined,
    heroOverlay:
      "linear-gradient(180deg, rgba(212, 95, 154, 0.08) 0%, rgba(76, 28, 62, 0.36) 100%)",
    sectionBackground:
      "linear-gradient(180deg, rgba(255, 248, 252, 0.98) 0%, rgba(255, 243, 248, 0.98) 100%)",
    sectionBackgroundAlt:
      "linear-gradient(180deg, rgba(255, 241, 248, 0.99) 0%, rgba(255, 249, 252, 0.98) 100%)",
    cardBackground: "rgba(255, 255, 255, 0.82)",
    borderColor: "rgba(216, 177, 94, 0.28)",
  },
  hero: {
    celebrant: "Regina",
    subtitle: "Mis XV A\u00f1os",
    date: "14 de Noviembre de 2026",
    coverImage: {
      src: heroImage,
      alt: "Retrato editorial de quincea\u00f1era con vestido brillante",
      position: "center top",
    },
    supportLine:
      "Una celebraci\u00f3n concebida como una noche de revista: luz suave, destellos dorados y recuerdos que permanecer\u00e1n para siempre.",
    openLabel: "Abrir invitaci\u00f3n",
  },
  countdown: {
    targetIso: "2026-11-14T20:00:00-06:00",
    title: "Cuenta regresiva",
    headline: "La noche que imagin\u00e9 est\u00e1 cada vez m\u00e1s cerca",
    labels: {
      days: "D\u00edas",
      hours: "Horas",
      minutes: "Minutos",
    },
    note: "Cada instante nos acerca a una velada hecha de luz, elegancia y momentos dignos de permanecer en la memoria.",
  },
  message: {
    kicker: "Dedicatoria",
    title: "Una noche so\u00f1ada, compartida con quienes m\u00e1s quiero",
    body:
      "Hoy comienza una etapa nueva, luminosa y profundamente especial. Gracias por acompa\u00f1arme en una celebraci\u00f3n pensada para atesorar belleza, emoci\u00f3n y recuerdos inolvidables.",
    signature: "Con cari\u00f1o, Regina y mi familia",
  },
  gallery: {
    kicker: "Galer\u00eda",
    title: "Escenas, destellos y detalles de una noche que ya se siente eterna",
    note: "Recorre cada imagen como si hojeases una edici\u00f3n especial de esta celebraci\u00f3n.",
    images: [
      {
        src: heroSupportImage,
        alt: "Sesi\u00f3n editorial de quince a\u00f1os",
        position: "center center",
      },
      {
        src: heroImage,
        alt: "Retrato principal de la quincea\u00f1era",
        position: "center top",
      },
      {
        src: galleryImageFour,
        alt: "Escena editorial con fondo elegante",
        position: "center center",
      },
      {
        src: galleryImageFive,
        alt: "Retrato final de la colecci\u00f3n",
        position: "center center",
      },
      {
        src: galleryImageOne,
        alt: "Detalle elegante de la sesi\u00f3n fotogr\u00e1fica",
        position: "center center",
      },
      {
        src: galleryImageTwo,
        alt: "Retrato con presencia sofisticada",
        position: "center top",
      },
      {
        src: galleryImageThree,
        alt: "Momento delicado de la celebraci\u00f3n",
        position: "center center",
      },
    ],
  },
  eventDetails: {
    kicker: "Detalles del evento",
    title: "Cada momento fue pensado para vivirse con emoci\u00f3n, elegancia y presencia",
    cards: [
      {
        icon: "church",
        title: "Ceremonia religiosa",
        venue: "Parroquia San Miguel Arc\u00e1ngel",
        address: "Av. Rosales 245, Col. Del Valle, Monterrey, N.L.",
        time: "6:00 PM",
      },
      {
        icon: "party",
        title: "Recepci\u00f3n",
        venue: "Sal\u00f3n Aurora",
        address: "Camino de las Flores 128, San Pedro Garza Garc\u00eda, N.L.",
        time: "8:00 PM",
      },
      {
        icon: "clock",
        title: "Momentos especiales",
        venue: "Vals, brindis y celebraci\u00f3n durante toda la velada",
        address: "Recepci\u00f3n de invitados a partir de las 5:30 PM.",
        time: "Puntualidad sugerida",
      },
    ],
  },
  map: {
    kicker: "Ubicaci\u00f3n",
    title: "El camino hacia una noche inolvidable",
    venue: "Sal\u00f3n Aurora",
    address: "Camino de las Flores 128, San Pedro Garza Garc\u00eda, N.L.",
    embedUrl:
      "https://www.google.com/maps?q=San+Pedro+Garza+Garcia+Nuevo+Leon&z=14&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=San+Pedro+Garza+Garcia+Nuevo+Leon",
  },
  dressCode: {
    kicker: "Dress Code",
    title: "C\u00f3digo de vestimenta",
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
    note: "Nos encantar\u00e1 compartir esta noche en una atm\u00f3sfera armoniosa, refinada y visualmente memorable.",
  },
  music: {
    label: "M\u00fasica",
  },
  gifts: {
    kicker: "Mesa de regalos",
    title: "Gracias por acompa\u00f1ar este recuerdo tan especial",
    intro:
      "Tu presencia es el regalo m\u00e1s importante. Si deseas acompa\u00f1arme con un detalle, aqu\u00ed encontrar\u00e1s opciones elegantes y sencillas.",
    options: [
      {
        title: "Transferencia",
        value: "BBVA - 012345678901234567",
        image: {
          src: giftBoxImage,
          alt: "Icono de regalo para opci\u00f3n de transferencia",
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
        value: "Si lo prefieres, podr\u00e1s entregarlo el d\u00eda del evento",
        image: {
          src: envelopeImage,
          alt: "Icono de sobre para lluvia de sobres",
        },
      },
    ],
  },
  rsvp: {
    kicker: "RSVP",
    title: "Confirma tu asistencia",
    intro:
      "Tu presencia dar\u00e1 sentido a esta noche. Confirma con anticipaci\u00f3n para prepararlo todo con el cuidado que merece esta celebraci\u00f3n.",
    formIntro:
      "Comp\u00e1rtenos tu confirmaci\u00f3n y ay\u00fadanos a preparar cada detalle con el cuidado que esta fecha merece.",
    familyFieldLabel: "Escribe el nombre o apellido de tu familia:",
    familyFieldPlaceholder: "Familia Hernandez Lopez",
    relationLabel: "Tu relaci\u00f3n conmigo:",
    relationOptions: ["Familiar", "Amigo/a"],
    attendanceLabel: "Confirma tu asistencia:",
    attendanceNameLabel: "Escribe el nombre de quienes asistir\u00e1n (3 adultos):",
    attendanceNamePlaceholder: "Escribe aqu\u00ed los nombres de quienes asistir\u00e1n.",
    guestFieldLabel: "Nombre",
    guestFieldPlaceholder: "Escribe el nombre del invitado.",
    guestFieldHelp: "Escribe el nombre del invitado.",
    guestSlots: 1,
    attendanceOptions: [
      "3 Adultos",
      "2 Adultos",
      "1 Adulto",
      "Lo siento, no podremos asistir",
    ],
    dedicationLabel: "Dedica unas palabras para Regina:",
    dedicationPlaceholder: "Escribe un mensaje bonito para una noche tan especial.",
    passTitle: "Pase especial",
    passGuestName: "Familia Hernandez Lopez",
    passGuestCountLabel: "Personas",
    passGuestCountValue: "3",
    passMessage: "Pase \u00fanico e intransferible",
    passGuests: ["Maribel Hernandez", "Jose Lopez", "Ximena Lopez"],
    passImage: {
      src: heroSupportImage,
      alt: "Imagen principal del pase de XV a\u00f1os",
      position: "center top",
    },
    buttonLabel: "Enviar confirmaci\u00f3n",
    successMessage:
      "Confirmaci\u00f3n enviada. Gracias por formar parte de una noche tan especial.",
    whatsappUrl:
      "https://wa.me/528100000000?text=Hola%2C%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV.",
    whatsappLabel: "Confirmar por WhatsApp",
  },
  closing: {
    message: "Gracias por acompa\u00f1ar una noche pensada para quedarse siempre en la memoria.",
    accent: "Te espero para celebrar esta historia conmigo",
  },
};
