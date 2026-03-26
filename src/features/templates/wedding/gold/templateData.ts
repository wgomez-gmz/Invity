import weddingImagePrimary from "@/assets/boda/Gold/image.png";
import weddingImageSecondary from "@/assets/boda/Gold/image 2.png";
import weddingImageDetail from "@/assets/boda/Gold/image 3.png";
import countdownBackground from "@/assets/boda/Gold/contador.png";
import brideParentIcon from "@/assets/boda/Gold/icon-novia.png";
import groomParentIcon from "@/assets/boda/Gold/icon-novio.png";
import receptionSlideOne from "@/assets/boda/Gold/atrium1.jpg";
import receptionSlideTwo from "@/assets/boda/Gold/atrium2.png";
import padrinosSlideOne from "@/assets/boda/Gold/padrinos 1.png";
import padrinosSlideTwo from "@/assets/boda/Gold/padrinos 2.png";
import formalDressImage from "@/assets/boda/Gold/formalboda.png";
import liverpoolGiftImage from "@/assets/boda/Gold/liverpool.png";
import giftBoxImage from "@/assets/boda/Gold/regalo.png";
import envelopeGiftImage from "@/assets/boda/Gold/sobre.png";
import coupleMonogramLogo from "@/assets/boda/Gold/logo-novios.png";
import churchSlideOne from "@/assets/boda/Gold/parroquia 1.png";
import churchSlideTwo from "@/assets/boda/Gold/parroquia 2.png";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

export const goldWeddingTemplateData: WeddingTemplateData = {
  key: "gold",
  hero: {
    collectionLabel: "Coleccion Gold",
    names: "Sofia y Daniel",
    date: "24 de Octubre 2026",
    place: "Hacienda Los Olivos · Guadalajara, Jalisco",
    lead: "Una invitacion elegante y armoniosa, pensada para celebrar el amor con un estilo clasico, calido y memorable.",
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
    copy: "Deseamos celebrar el amor y la union con la bendicion de Dios, por eso nos complace que nos acompanes a vivir el inicio de este nuevo viaje.",
    day: "Sabado",
    date: "24 · Octubre · 2026",
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
    venueName: "El Senor de la Misericordia",
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
    title: "Recepcion",
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
      note: "No utilizar color blanco.",
    },
    gifts: {
      kicker: "Mesa de Regalos",
      title: "Con mucho carino",
      copy: "Gracias por su compania en esta nueva etapa que comenzamos. El regalo es opcional, la asistencia es obligatoria.",
      eventCode: "Evento #51000000",
      liverpoolLogo: liverpoolGiftImage,
      giftIllustration: giftBoxImage,
      envelopeIcon: envelopeGiftImage,
    },
  },
  rsvp: {
    kicker: "Acompananos",
    title: "Confirma tu Asistencia",
    photo: weddingImageDetail,
    invitationLabel: "Familia Montiel Leiva",
    familyName: "4 invitados",
    guestCount: "Con inmensa alegria te invitamos a celebrar nuestra boda.",
    note: "",
    intro: "Favor de confirmar su presencia, a mas tardar un mes antes del evento. Muchas gracias.",
    dedicationLabel: "Dedica unas bonitas palabras para Yuliana y Jaime:",
  },
  closing: {
    message: "Nuestra felicidad solo esta completa cuando la compartimos con las personas a las que amamos.",
    accent: "Te esperamos",
    footerText: "S & D · Nuestra Boda",
  },
};
