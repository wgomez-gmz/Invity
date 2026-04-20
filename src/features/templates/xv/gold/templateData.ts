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
import galleryFour from "@/assets/xv/Gold/galeria4.png";
import galleryFive from "@/assets/xv/Gold/galeria5.png";
import gallerySix from "@/assets/xv/Gold/galeria6.png";
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
      gold: "#c9a13d",
      goldSoft: "#eed79a",
      blush: "#efe0d2",
      blushSoft: "#faf0e5",
      ivory: "#fff8ef",
      black: "#271815",
      ink: "#4b342c",
    },
    accentPrimary: "#a77718",
    shellBackgroundImage: undefined,
    ornamentImageLeft: bellaDecorOne,
    ornamentImageRight: bellaDecorThree,
    ornamentImageTop: bellaDecorTwo,
    ornamentImageBottom: bellaDecorFour,
    ornamentImageAccent: bellaDecorFive,
    heroOverlay:
      "linear-gradient(180deg, rgba(35, 18, 17, 0.22) 0%, rgba(59, 25, 24, 0.74) 100%)",
    sectionBackground:
      "linear-gradient(180deg, rgba(255, 248, 239, 0.98) 0%, rgba(250, 240, 229, 0.98) 100%)",
    sectionBackgroundAlt:
      "linear-gradient(180deg, rgba(250, 240, 229, 0.99) 0%, rgba(255, 248, 239, 0.98) 100%)",
    cardBackground: "rgba(255, 252, 246, 0.8)",
    borderColor: "rgba(201, 161, 61, 0.24)",
  },
  hero: {
    celebrant: "Emma",
    subtitle: "Mis XV Años",
    date: "14 de Noviembre de 2026",
    coverImage: {
      src: photoOne,
      alt: "Quinceañera con inspiración de cuento dorado",
      position: "center top",
    },
    supportLine:
      "Una noche inspirada en la magia de un cuento inolvidable, entre rosas doradas, luz cálida y detalles encantados.",
    openLabel: "Abrir invitación",
  },
  countdown: {
    targetIso: "2026-11-14T20:00:00-06:00",
    title: "Cuenta regresiva",
    note: "Cada instante nos acerca a una celebración llena de encanto, música y momentos mágicos.",
  },
  message: {
    kicker: "Dedicatoria",
    title: "Una noche para recordar siempre",
    body:
      "Con inmensa alegría queremos compartir contigo una celebración inspirada en la belleza, la luz y la magia de esta nueva etapa.",
    signature: "Con cariño, su familia",
  },
  gallery: {
    kicker: "Galería",
    title: "Una colección de escenas doradas, elegantes y llenas de encanto",
    note: "Desliza para descubrir cada imagen de esta historia.",
    images: [
      { src: photoOne, alt: "Retrato principal de la quinceañera", position: "center top" },
      { src: photoTwo, alt: "Sesión inspirada en un cuento clásico", position: "center top" },
      { src: photoThree, alt: "Escena editorial con vestido dorado", position: "center center" },
      { src: galleryOne, alt: "Detalle fotográfico uno", position: "center center" },
      { src: galleryTwo, alt: "Detalle fotográfico dos", position: "center center" },
      { src: galleryThree, alt: "Detalle fotográfico tres", position: "center center" },
      { src: galleryFour, alt: "Detalle fotográfico cuatro", position: "center center" },
      { src: galleryFive, alt: "Detalle fotográfico cinco", position: "center center" },
      { src: gallerySix, alt: "Detalle fotográfico seis", position: "center center" },
    ],
  },
  eventDetails: {
    kicker: "Detalles del evento",
    title: "Una noche dorada para celebrar con quienes más amo",
    cards: [
      {
        icon: "church",
        title: "Ceremonia religiosa",
        venue: "Parroquia Nuestra Señora de la Luz",
        address: "Av. Jardines 140, San Pedro Garza García, N.L.",
        time: "6:00 PM",
      },
      {
        icon: "party",
        title: "Recepción",
        venue: "Salón Château Belle",
        address: "Camino Real 88, Monterrey, N.L.",
        time: "8:00 PM",
      },
      {
        icon: "clock",
        title: "Momentos especiales",
        venue: "Vals, brindis y una celebración llena de encanto",
        address: "Recepción de invitados a partir de las 5:30 PM.",
        time: "Puntualidad sugerida",
      },
    ],
  },
  map: {
    kicker: "Ubicación",
    title: "Cómo llegar",
    venue: "Salón Château Belle",
    address: "Camino Real 88, Monterrey, N.L.",
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
        value: "Vestimenta de gala para una noche de cuento",
        image: {
          src: dressImage,
          alt: "Vestimenta formal inspirada en Bella y la Bestia",
        },
      },
    ],
    note: "Te esperamos con un look elegante y armonioso con la atmósfera dorada de la celebración.",
  },
  music: {
    label: "Música",
  },
  gifts: {
    kicker: "Mesa de regalos",
    title: "Gracias por compartir conmigo esta noche tan especial",
    intro:
      "Tu presencia es mi mejor regalo. Si deseas tener un detalle conmigo, aquí encontrarás algunas opciones.",
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
      "Será un honor compartir esta noche contigo. Por favor confirma con anticipación para preparar cada detalle.",
    formIntro: "Completa y envía el siguiente formulario.",
    familyFieldLabel: "Escribe nombre o apellidos de tu familia:",
    familyFieldPlaceholder: "Familia Beaumont",
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
    dedicationLabel: "Escribe una dedicatoria para Emma:",
    dedicationPlaceholder: "Déjale unas palabras bonitas a Emma.",
    passTitle: "Pase para",
    passGuestName: "Familia Beaumont",
    passGuestCountLabel: "Personas",
    passGuestCountValue: "4",
    passMessage: "Pase único e intransferible",
    passGuests: ["Lucía Beaumont", "Diego Beaumont", "Valeria Beaumont", "María Beaumont"],
    passImage: {
      src: passImage,
      alt: "Imagen principal del pase de XV años gold",
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
    message: "Gracias por ser parte de una noche inspirada en la magia, la elegancia y el encanto.",
    accent: "Te espero con mucho cariño",
  },
};
