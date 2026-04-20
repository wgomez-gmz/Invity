import weddingImagePrimary from "@/assets/boda/rubi/image.png";
import weddingImageSecondary from "@/assets/boda/rubi/image 2.png";
import weddingImageDetail from "@/assets/boda/rubi/image 3.png";
import countdownBackground from "@/assets/boda/rubi/contador.png";
import brideParentIcon from "@/assets/boda/rubi/icon-novia.png";
import groomParentIcon from "@/assets/boda/rubi/icon-novio.png";
import receptionSlideOne from "@/assets/boda/rubi/atrium1.jpg";
import receptionSlideTwo from "@/assets/boda/rubi/atrium2.png";
import padrinosSlideOne from "@/assets/boda/rubi/padrinos 1.png";
import padrinosSlideTwo from "@/assets/boda/rubi/padrinos 2.png";
import formalDressImage from "@/assets/boda/rubi/formalboda.png";
import liverpoolGiftImage from "@/assets/boda/rubi/liverpool.png";
import giftBoxImage from "@/assets/boda/rubi/regalo.png";
import envelopeGiftImage from "@/assets/boda/rubi/sobre.png";
import coupleMonogramLogo from "@/assets/boda/rubi/logo-novios.png";
import churchSlideOne from "@/assets/boda/rubi/parroquia 1.png";
import churchSlideTwo from "@/assets/boda/rubi/parroquia 2.png";
import wallpaperImage from "@/assets/boda/rubi/wallpaper.png";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

const rubySoftSurface = {
  type: "image" as const,
  src: wallpaperImage,
  position: "center center",
  size: "cover",
  repeat: "no-repeat",
};

export const rubyWeddingTemplateData: WeddingTemplateData = {
  key: "ruby",
  appearance: {
    palette: {
      sage: "rgba(122, 132, 101, 0.94)",
      sageSoft: "rgba(168, 173, 148, 0.88)",
      ivory: "rgba(250, 246, 240, 0.98)",
      gold: "rgba(190, 172, 133, 0.96)",
      ink: "rgba(64, 66, 58, 0.94)",
    },
    surfaces: {
      shellBaseColor: "rgb(49, 11, 24)",
      shellTopBackground:
        "linear-gradient(180deg, rgba(18, 5, 10, 0.96) 0%, rgba(35, 8, 18, 0.94) 38%, rgba(49, 11, 24, 0.98) 72%, rgba(49, 11, 24, 0.98) 104px, transparent 104px)",
      heroBackground:
        "linear-gradient(135deg, rgba(26, 10, 17, 0.84) 0%, rgba(41, 13, 22, 0.78) 100%)",
      heroOverlay:
        "linear-gradient(90deg, rgba(15, 5, 9, 0.88) 0%, rgba(20, 7, 12, 0.72) 38%, rgba(14, 5, 8, 0.4) 100%), radial-gradient(circle at top, rgba(255, 255, 255, 0.12), transparent 24%)",
      entryModalOverlay:
        "linear-gradient(180deg, rgba(14, 5, 8, 0.28) 0%, rgba(14, 5, 8, 0.74) 100%), radial-gradient(circle at top, rgba(255, 255, 255, 0.12), transparent 22%)",
      entryCardBackground: "rgba(17, 9, 13, 0.48)",
      heroEventCardBackground: "rgba(255, 255, 255, 0.06)",
      heroShotOverlay: "linear-gradient(180deg, transparent 0%, rgba(9, 4, 6, 0.28) 100%)",
      countdownOverlay: "rgba(0, 0, 0, 0.4)",
      countdownCardBackground: "rgba(255, 250, 244, 0.14)",
      locationStageBackground: "rgba(170, 170, 170, 0.72)",
      locationStageOverlay: "linear-gradient(180deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.34) 100%)",
      locationUnderlayFilter: "grayscale(0.08) brightness(0.86)",
      locationCardTopbarBackground:
        "linear-gradient(180deg, rgba(190, 172, 133, 0.96) 0%, rgba(168, 151, 116, 0.96) 100%)",
      locationCardBodyBackground:
        "linear-gradient(180deg, rgba(255, 251, 245, 0.9) 0%, rgba(255, 248, 240, 0.82) 100%)",
      invitationBandBackground: "transparent",
      invitationCardBackground: "transparent",
      invitationOrnamentOpacity: "0",
      padrinosOverlayBackground:
        "linear-gradient(180deg, rgba(34, 28, 22, 0.02) 0%, rgba(34, 28, 22, 0.34) 100%)",
      rsvpCardBackground: "rgba(188, 192, 173, 0.58)",
      rsvpPhotoFrameBackground: "rgba(255, 255, 255, 0.18)",
      closingTopbandBackground: "rgba(176, 181, 159, 0.92)",
      closingFooterBackground: "rgba(168, 173, 148, 0.88)",
    },
    sectionBackgrounds: {
      quote: { type: "color", value: "transparent" },
      invitation: { type: "color", value: "transparent" },
      parents: { type: "color", value: "transparent" },
      location: { type: "color", value: "transparent" },
      padrinos: { type: "color", value: "transparent" },
      details: { type: "color", value: "transparent" },
      rsvp: { type: "color", value: "transparent" },
      closing: { type: "color", value: "transparent" },
    },
    sharedSectionBackground: rubySoftSurface,
  },
  hero: {
    collectionLabel: "Coleccion Ruby",
    names: "Sofia y Daniel",
    date: "24 de Octubre 2026",
    place: "Hacienda Los Olivos - Guadalajara, Jalisco",
    logo: coupleMonogramLogo,
    slides: [
      {
        image: weddingImagePrimary,
        alt: "Pareja abrazandose en una sesion romantica",
      },
      {
        image: weddingImageSecondary,
        alt: "Detalle romantico de la pareja en una toma editorial",
      },
      {
        image: weddingImageDetail,
        alt: "Escena cinematografica de la sesion de boda",
      },
    ],
    supportImage: weddingImageSecondary,
    detailImage: weddingImageDetail,
  },
  quote: {
    kicker: "Nuestra historia",
    text: "Tantas vidas, tantos siglos, tantos mundos y coincidir.",
    note: "Un instante, una mirada y un destino compartido que hoy queremos celebrar contigo.",
    image: weddingImagePrimary,
  },
  invitation: {
    title: "Invitacion",
    names: ["Sofia", "Daniel"],
    copy: "Deseamos celebrar el amor y la unión con la bendición de Dios, por eso nos complace que nos acompañes a vivir el inicio de este nuevo viaje.",
    day: "Sabado",
    date: "24 - Octubre - 2026",
  },
  parents: {
    heading: "Nuestros Padres",
    bride: {
      label: "Novia",
      icon: brideParentIcon,
      lines: ["Sebastian", "Uriarte Varelo", "&", "Abigail", "Gallegos Lino"],
    },
    groom: {
      label: "Novio",
      icon: groomParentIcon,
      lines: ["Juan", "Barrios Diaz", "&", "Dulce", "Ortiz Oliva"],
    },
  },
  countdown: {
    kicker: "Falta muy poco",
    background: countdownBackground,
    items: [
      { value: "128", label: "Dias" },
      { value: "14", label: "Horas" },
      { value: "36", label: "Minutos" },
      { value: "22", label: "Segundos" },
    ],
  },
  ceremony: {
    sectionLabel: "Donde?",
    title: "Ceremonia Religiosa",
    slides: [
      { image: churchSlideOne, alt: "Vista exterior de la iglesia para la ceremonia" },
      { image: churchSlideTwo, alt: "Fachada de la parroquia donde se celebrara la ceremonia" },
    ],
    supportImage: weddingImageSecondary,
    venueType: "Parroquia",
    venueName: "El Señor de la Misericordia",
    time: "Hora: 17:00 hrs.",
    addressLines: [
      "Direccion:",
      "Pueblo Serena,",
      "Carr. Nacional #500,",
      "Col. 50, C.P. 67350,",
      "Monterrey, N.L.",
    ],
  },
  reception: {
    sectionLabel: "Celebracion",
    title: "Recepción",
    slides: [
      { image: receptionSlideOne, alt: "Vista del salon de recepcion con montaje para el evento" },
      { image: receptionSlideTwo, alt: "Espacio de atrium eventos preparado para la recepcion" },
    ],
    supportImage: weddingImageDetail,
    venueType: "Salon",
    venueName: "Atrium Eventos",
    time: "Hora: 19:00 hrs.",
    addressLines: [
      "Direccion:",
      "Plaza Fiesta,",
      "Av. Manuel L. Barragan #325,",
      "Anahuac, C.P. 66457,",
      "San Nicolas de los Garza, N.L.",
    ],
  },
  padrinos: {
    heading: "Nuestros Padrinos",
    kicker: "Con cariño",
    slides: [
      {
        image: padrinosSlideOne,
        title: "Anillos",
        names: "Laura & Bruno",
        alt: "Padrinos de anillos posando juntos",
      },
      {
        image: padrinosSlideTwo,
        title: "Lazo",
        names: "Mariana & Diego",
        alt: "Segunda pareja de padrinos posando juntos",
      },
    ],
  },
  details: {
    dressCode: {
      kicker: "Código de Vestimenta",
      title: "Formal",
      image: formalDressImage,
      note: "No utilizar color blanco.",
    },
    gifts: {
      kicker: "Mesa de Regalos",
      title: "Con mucho cariño",
      copy: "Gracias por su compañía en esta nueva etapa que comenzamos. El regalo es opcional, la asistencia es obligatoria. Si quieres tener un detalle con nosotros dejaremos algunas opciones que recibiremos con mucho cariño.",
      eventCode: "#51000000",
      liverpoolLogo: liverpoolGiftImage,
      giftIllustration: giftBoxImage,
      envelopeIcon: envelopeGiftImage,
    },
  },
  rsvp: {
    kicker: "Acompáñanos",
    title: "Confirma tu Asistencia",
    photo: weddingImageDetail,
    invitationLabel: "Familia Montiel Leiva",
    familyName: "4 invitados",
    guestCount: "Con inmensa alegría te invitamos a celebrar nuestra boda.",
    note: "",
    intro: "Favor de confirmar su presencia, a más tardar un mes antes del evento. Muchas gracias.",
    dedicationLabel: "Dedica unas bonitas palabras para Yuliana y Jaime:",
  },
  closing: {
    message: "Nuestra felicidad solo está completa cuando la compartimos con las personas a las que amamos.",
    accent: "Te esperamos",
    footerText: "S & D · Nuestra Boda",
  },
};
