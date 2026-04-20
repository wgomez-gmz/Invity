import bellaDecorOne from "@/assets/xv/Gold/bella1.png";
import bellaDecorTwo from "@/assets/xv/Gold/bella2.png";
import bellaDecorThree from "@/assets/xv/Gold/bella3.png";
import bellaDecorFour from "@/assets/xv/Gold/bella4.png";
import bellaDecorFive from "@/assets/xv/Gold/bella5.png";
import passImage from "@/assets/xv/Gold/confirm.png";
import dressImage from "@/assets/xv/Gold/dress3.png";
import galleryOne from "@/assets/xv/Gold/galeria1.png";
import galleryTwo from "@/assets/xv/Gold/galeria2.png";
import galleryThree from "@/assets/xv/Gold/galeria3.png";
import photoOne from "@/assets/xv/Gold/foto.png";
import photoTwo from "@/assets/xv/Gold/foto2.png";
import photoThree from "@/assets/xv/Gold/foto3.png";
import liverpoolImage from "@/assets/xv/Ruby/liverpool.png";
import giftBoxImage from "@/assets/xv/Ruby/regalo.png";
import envelopeImage from "@/assets/xv/Ruby/sobre.png";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

export const xvGoldTemplateData: XvPremiumTemplateData = {
  key: "gold",
  appearance: {
    palette: {
      gold: "#D4AF37",
      goldSoft: "#E8D6A0",
      blush: "#6D82A3",
      blushSoft: "#E7EEF7",
      ivory: "#FDF6EC",
      black: "#1A2A44",
      ink: "#2E3F58",
    },
    accentPrimary: "#35537A",
    shellBackgroundImage: photoThree,
    ornamentImageLeft: bellaDecorOne,
    ornamentImageRight: bellaDecorThree,
    ornamentImageTop: bellaDecorTwo,
    ornamentImageBottom: bellaDecorFour,
    ornamentImageAccent: bellaDecorFive,
    heroOverlay:
      "linear-gradient(180deg, rgba(13, 26, 45, 0.20) 0%, rgba(13, 26, 45, 0.82) 100%)",
    sectionBackground:
      "linear-gradient(180deg, rgba(253, 246, 236, 0.98) 0%, rgba(249, 236, 227, 0.98) 100%)",
    sectionBackgroundAlt:
      "linear-gradient(180deg, rgba(26, 42, 68, 0.96) 0%, rgba(43, 65, 99, 0.98) 100%)",
    cardBackground: "rgba(255, 251, 245, 0.88)",
    borderColor: "rgba(212, 175, 55, 0.24)",
  },
  hero: {
    celebrant: "Emma Sof\u00eda",
    subtitle: "Mis XV A\u00f1os",
    date: "14 de noviembre de 2026",
    coverImage: {
      src: photoOne,
      alt: "Quincea\u00f1era con vestido dorado e inspiraci\u00f3n de cuento",
      position: "center top",
    },
    supportLine:
      "Una noche m\u00e1gica donde la dulzura, la luz c\u00e1lida y los detalles dorados acompa\u00f1an el inicio de una nueva historia.",
    openLabel: "Abrir invitaci\u00f3n",
  },
  countdown: {
    targetIso: "2026-11-14T20:00:00-06:00",
    title: "Cuenta regresiva",
    headline: "Falta muy poco para una noche llena de encanto",
    labels: {
      days: "D\u00edas",
      hours: "Horas",
      minutes: "Minutos",
    },
    note: "Cada instante nos acerca a una celebraci\u00f3n delicada, luminosa y pensada para recordar siempre.",
  },
  message: {
    kicker: "Mensaje especial",
    title: "Hoy dejo atr\u00e1s mi ni\u00f1ez para comenzar una nueva etapa",
    body:
      "Con enorme ilusi\u00f3n quiero compartir contigo esta noche inspirada en la magia, la elegancia y la alegr\u00eda de cumplir uno de los sue\u00f1os m\u00e1s especiales de mi vida.",
    signature: "Con cari\u00f1o, Emma Sof\u00eda y mi familia",
  },
  gallery: {
    kicker: "Galer\u00eda",
    title: "Una colecci\u00f3n de instantes dorados, delicados y llenos de luz",
    note: "Desliza y descubre cada escena de esta celebraci\u00f3n inspirada en la magia de un cuento.",
    images: [
      { src: photoOne, alt: "Retrato principal de la quincea\u00f1era", position: "center top" },
      { src: photoTwo, alt: "Escena inspirada en un cuento encantado", position: "center top" },
      { src: photoThree, alt: "Vestido dorado con luz c\u00e1lida", position: "center center" },
      { src: galleryOne, alt: "Detalle fotogr\u00e1fico uno", position: "center center" },
      { src: galleryTwo, alt: "Detalle fotogr\u00e1fico dos", position: "center center" },
      { src: galleryThree, alt: "Detalle fotogr\u00e1fico tres", position: "center center" },
    ],
  },
  eventDetails: {
    kicker: "Detalles del evento",
    title: "Una noche pensada para compartir magia, alegr\u00eda y elegancia",
    cards: [
      {
        icon: "church",
        title: "Misa",
        venue: "Parroquia Nuestra Se\u00f1ora de la Luz",
        address: "Av. Jardines 140, San Pedro Garza Garc\u00eda, N.L.",
        time: "6:00 PM",
      },
      {
        icon: "party",
        title: "Recepci\u00f3n",
        venue: "Sal\u00f3n Ch\u00e2teau Belle",
        address: "Camino Real 88, Monterrey, N.L.",
        time: "8:00 PM",
      },
      {
        icon: "clock",
        title: "Momentos especiales",
        venue: "Vals, brindis y una celebraci\u00f3n llena de encanto",
        address: "Recepci\u00f3n de invitados a partir de las 5:30 PM.",
        time: "Puntualidad sugerida",
      },
    ],
  },
  map: {
    kicker: "Ubicaci\u00f3n",
    title: "C\u00f3mo llegar",
    venue: "Sal\u00f3n Ch\u00e2teau Belle",
    address: "Camino Real 88, Monterrey, N.L.",
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
        value: "Vestimenta formal para una noche de cuento",
        image: {
          src: dressImage,
          alt: "Vestimenta formal inspirada en un cuento elegante",
        },
      },
    ],
    note: "Nos encantar\u00e1 compartir esta noche con un estilo elegante, juvenil y arm\u00f3nico con la atm\u00f3sfera del evento.",
  },
  music: {
    label: "M\u00fasica",
  },
  gifts: {
    kicker: "Regalos",
    title: "Gracias por acompa\u00f1arme en este momento tan especial",
    intro:
      "Tu presencia es el detalle m\u00e1s valioso. Si deseas obsequiarme algo, aqu\u00ed encontrar\u00e1s opciones sencillas y pr\u00e1cticas.",
    options: [
      {
        title: "Transferencia",
        value: "BBVA - 012345678901234567",
        image: {
          src: giftBoxImage,
          alt: "Regalo para transferencia",
        },
      },
      {
        title: "Mesa de regalos",
        value: "Ver sugerencias",
        href: "https://www.liverpool.com.mx",
        actionLabel: "Abrir enlace",
        image: {
          src: liverpoolImage,
          alt: "Liverpool mesa de regalos",
        },
      },
      {
        title: "Lluvia de sobres",
        value: "Si lo prefieres, podr\u00e1s entregarlo el d\u00eda del evento",
        image: {
          src: envelopeImage,
          alt: "Sobre para lluvia de sobres",
        },
      },
    ],
  },
  rsvp: {
    kicker: "RSVP",
    title: "Confirma tu asistencia",
    intro:
      "Ser\u00e1 un honor compartir esta noche contigo. Confirma con anticipaci\u00f3n para preparar cada momento con cuidado.",
    formIntro: "Completa tu confirmaci\u00f3n y ay\u00fadanos a cuidar cada detalle de esta celebraci\u00f3n.",
    familyFieldLabel: "Nombre o apellido de tu familia:",
    familyFieldPlaceholder: "Familia Beaumont",
    relationLabel: "Tu relaci\u00f3n conmigo:",
    relationOptions: ["Familiar", "Amigo/a"],
    attendanceLabel: "Tu respuesta:",
    attendanceNameLabel: "Escribe el nombre de quienes asistir\u00e1n (4 adultos):",
    attendanceNamePlaceholder: "Escribe aqu\u00ed los nombres de quienes asistir\u00e1n.",
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
    dedicationLabel: "Dedica unas palabras para Emma Sof\u00eda:",
    dedicationPlaceholder: "D\u00e9jale un mensaje bonito para esta noche especial.",
    passTitle: "Pase para",
    passGuestName: "Familia Beaumont",
    passGuestCountLabel: "Personas",
    passGuestCountValue: "4",
    passMessage: "Pase \u00fanico e intransferible",
    passGuests: ["Luc\u00eda Beaumont", "Diego Beaumont", "Valeria Beaumont", "Mar\u00eda Beaumont"],
    passImage: {
      src: passImage,
      alt: "Pase de acceso para XV a\u00f1os gold",
      position: "center top",
    },
    buttonLabel: "Enviar confirmaci\u00f3n",
    successMessage:
      "Confirmaci\u00f3n enviada. Gracias por formar parte de esta noche tan importante.",
    whatsappUrl:
      "https://wa.me/528100000000?text=Hola%2C%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV.",
    whatsappLabel: "Confirmar por WhatsApp",
  },
  closing: {
    message: "Te espero para compartir una noche m\u00e1gica, luminosa y llena de recuerdos inolvidables.",
    accent: "Con cari\u00f1o, Emma Sof\u00eda",
  },
};
