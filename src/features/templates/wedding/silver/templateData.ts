import weddingImagePrimary from "@/assets/boda/Silver/image.png";
import weddingImageSecondary from "@/assets/boda/Silver/image 2.png";
import weddingImageDetail from "@/assets/boda/Silver/image 3.png";
import countdownBackground from "@/assets/boda/Silver/contador.png";
import brideParentIcon from "@/assets/boda/Silver/icon-novia.png";
import groomParentIcon from "@/assets/boda/Silver/icon-novio.png";
import receptionSlideOne from "@/assets/boda/Silver/atrium1.jpg";
import receptionSlideTwo from "@/assets/boda/Silver/atrium2.png";
import padrinosSlideOne from "@/assets/boda/Silver/padrinos 1.png";
import padrinosSlideTwo from "@/assets/boda/Silver/padrinos 2.png";
import formalDressImage from "@/assets/boda/Silver/formalboda.png";
import liverpoolGiftImage from "@/assets/boda/Silver/liverpool.png";
import envelopeGiftImage from "@/assets/boda/Silver/sobre.png";
import coupleMonogramLogo from "@/assets/boda/Silver/logo-novios.png";
import churchSlideOne from "@/assets/boda/Silver/parroquia 1.png";
import churchSlideTwo from "@/assets/boda/Silver/parroquia 2.png";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

export const silverWeddingTemplateData: WeddingTemplateData = {
  key: "silver",
  hero: {
    collectionLabel: "Coleccion Silver",
    names: "Sofia y Daniel",
    date: "24 / Octubre / 2026",
    place: "Hacienda Los Olivos / Guadalajara, Jalisco",
    lead: "Una invitacion refinada, ligera y moderna para quienes buscan una presentacion clara, bonita y funcional.",
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
        alt: "Escena romantica de la sesion de boda",
      },
    ],
    supportImage: weddingImageSecondary,
    detailImage: weddingImageDetail,
  },
  quote: {
    kicker: "Nuestra historia",
    text: "Tantas vidas, tantos siglos, tantos mundos y coincidir.",
    note: "Hoy queremos compartir contigo este momento tan importante de nuestra historia.",
    image: weddingImageSecondary,
  },
  invitation: {
    title: "Invitacion",
    names: ["Sofia", "Daniel"],
    copy: "Con alegria queremos invitarte a celebrar con nosotros el inicio de esta nueva etapa, rodeados del amor de nuestras familias y amigos.",
    day: "Sabado",
    date: "24 / Octubre / 2026",
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
    sectionLabel: "Ceremonia",
    title: "Ceremonia Religiosa",
    slides: [
      {
        image: churchSlideOne,
        alt: "Vista exterior de la iglesia para la ceremonia",
      },
      {
        image: churchSlideTwo,
        alt: "Fachada de la parroquia donde se celebrara la ceremonia",
      },
    ],
    supportImage: weddingImageSecondary,
    venueType: "Parroquia",
    venueName: "El Senor de la Misericordia",
    time: "Hora: 17:00 hrs.",
    addressLines: [
      "Pueblo Serena,",
      "Carr. Nacional #500,",
      "Col. 50, C.P. 67350,",
      "Monterrey, N.L.",
    ],
  },
  reception: {
    sectionLabel: "Recepcion",
    title: "Recepcion",
    slides: [
      {
        image: receptionSlideOne,
        alt: "Vista del salon de recepcion con montaje para el evento",
      },
      {
        image: receptionSlideTwo,
        alt: "Espacio de atrium eventos preparado para la recepcion",
      },
    ],
    supportImage: weddingImageDetail,
    venueType: "Salon",
    venueName: "Atrium Eventos",
    time: "Hora: 19:00 hrs.",
    addressLines: [
      "Plaza Fiesta,",
      "Av. Manuel L. Barragan #325,",
      "Anahuac, C.P. 66457,",
      "San Nicolas de los Garza, N.L.",
    ],
  },
  padrinos: {
    heading: "Nuestros Padrinos",
    kicker: "Con carino",
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
      kicker: "Codigo de Vestimenta",
      title: "Formal",
      image: formalDressImage,
      note: "Agradecemos evitar el color blanco.",
    },
    gifts: {
      kicker: "Mesa de Regalos",
      title: "Con mucho carino",
      copy: "Tu presencia es lo mas importante para nosotros. Si deseas tener un detalle, compartimos estas opciones con mucho agradecimiento.",
      eventCode: "Evento #51000000",
      liverpoolLogo: liverpoolGiftImage,
      envelopeIcon: envelopeGiftImage,
    },
  },
  rsvp: {
    kicker: "Confirmacion",
    title: "Confirma tu Asistencia",
    photo: weddingImagePrimary,
    invitationLabel: "Familia invitada",
    familyName: "Sofia y Daniel",
    guestCount: "Con inmensa alegria te invitamos a celebrar nuestra boda.",
    note: "",
    intro: "Favor de confirmar tu asistencia a mas tardar un mes antes del evento.",
    dedicationLabel: "Dedica unas palabras para los novios:",
    whatsappLink:
      "https://api.whatsapp.com/send?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Sofia%20y%20Daniel.",
    whatsappLabel: "Confirmar",
  },
  closing: {
    message: "Nuestra felicidad estara completa al compartir este dia con las personas que mas queremos.",
    accent: "Te esperamos",
    footerText: "S & D / Nuestra Boda",
  },
};
