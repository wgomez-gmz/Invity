import bebeImageOne from "@/assets/bautizo/esencial/bebe1.png";
import bebeImageTwo from "@/assets/bautizo/esencial/bebe2.png";
import type { BaptismEssentialTemplateData } from "@/features/templates/baptism/templateTypes";

export const baptismEssentialTemplateData: BaptismEssentialTemplateData = {
  key: "essential",
  hero: {
    babyName: "Mateo",
    subtitle: "Mi Santo Bautizo",
    phrase: "Con mucha alegria te invitamos a compartir este dia especial para nuestra familia.",
    coverImage: {
      src: bebeImageOne,
      alt: "Retrato de bautizo",
      position: "center center",
    },
    eventDateIso: "2026-08-16T12:30:00-06:00",
    eventDateLabel: "Domingo 16 de Agosto 2026",
  },
  welcome: {
    title: "Bienvenidos a esta celebracion de fe",
    message:
      "Gracias por acompanarnos en un momento tan importante. Tu presencia hara aun mas especial este dia.",
  },
  details: {
    date: "Domingo 16 de Agosto 2026",
    time: "12:30 PM",
    church: "Parroquia San Gabriel Arcangel",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Parroquia+San+Gabriel+Arcangel+Monterrey",
  },
  family: {
    parents: ["Carolina Martinez", "Eduardo Lopez"],
    godparents: ["Fernanda Ruiz", "Santiago Herrera"],
  },
  reception: {
    venue: "Jardin Casa Magnolia",
    time: "2:30 PM",
    note: "Despues de la ceremonia te esperamos para convivir y celebrar en familia.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jardin+Casa+Magnolia+Monterrey",
    image: {
      src: bebeImageTwo,
      alt: "Espacio de recepcion de bautizo",
      position: "center center",
    },
  },
  rsvp: {
    title: "Confirma tu asistencia",
    note: "Tu confirmacion nos ayuda a preparar todo con carino.",
    whatsappPhone: "528100000000",
    defaultMessage: "Hola, confirmo mi asistencia al bautizo de Mateo. Gracias por la invitacion.",
  },
  closing: {
    phrase: "Gracias por ser parte de este dia tan especial.",
    signature: "Con amor, Familia Martinez Lopez",
  },
};
