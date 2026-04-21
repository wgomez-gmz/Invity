import bebeImageOne from "@/assets/bautizo/ruby/bebe1.png";
import bebeImageTwo from "@/assets/bautizo/ruby/bebe2.png";
import bebeImageThree from "@/assets/bautizo/ruby/bebe3.png";
import bebeImageFour from "@/assets/bautizo/ruby/bebe4.png";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";

export const baptismRubyTemplateData: BaptismRubyTemplateData = {
  key: "ruby",
  hero: {
    babyName: "Mateo",
    subtitle: "Mi Santo Bautizo",
    phrase:
      "Con amor y gratitud, te invitamos a compartir la bendicion de este dia tan especial.",
    coverImage: {
      src: bebeImageOne,
      alt: "Retrato principal de bautizo",
      position: "center center",
    },
    eventDateIso: "2026-08-16T12:30:00-06:00",
    eventDateLabel: "Domingo 16 de Agosto 2026",
  },
  welcome: {
    title: "Bienvenidos a una celebracion de fe, luz y amor",
    signature: "Familia Martinez Lopez",
    message:
      "Hoy celebramos con alegria el inicio del camino espiritual de nuestro hijo. Nos encantara compartir este momento con quienes forman parte de nuestra historia.",
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
    note: "Despues de la ceremonia te esperamos para celebrar en familia.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jardin+Casa+Magnolia+Monterrey",
    image: {
      src: bebeImageTwo,
      alt: "Espacio de recepcion para celebracion familiar",
      position: "center center",
    },
  },
  gallery: {
    kicker: "Galeria",
    title: "Instantes de ternura que queremos compartir contigo",
    note: "",
    images: [
      {
        src: bebeImageOne,
        alt: "Retrato de bautizo 1",
        position: "center center",
      },
      {
        src: bebeImageTwo,
        alt: "Retrato de bautizo 2",
        position: "center center",
      },
      {
        src: bebeImageThree,
        alt: "Retrato de bautizo 3",
        position: "center center",
      },
      {
        src: bebeImageFour,
        alt: "Retrato de bautizo 4",
        position: "center center",
      },
    ],
  },
  dressCode: {
    title: "Codigo de vestimenta",
    note: "Formal en tonos claros o pastel.",
  },
  gifts: {
    title: "Mesa de regalos",
    note:
      "Tu presencia es nuestro mejor regalo. Si deseas tener un detalle adicional, habra lluvia de sobres.",
  },
  rsvp: {
    title: "Confirma tu asistencia",
    note:
      "Nos ayudara mucho recibir tu confirmacion para prepararlo todo con carino.",
    whatsappPhone: "528100000000",
    defaultMessage:
      "Hola, confirmo mi asistencia al bautizo de Mateo. Gracias por la invitacion.",
    guestCountLabel: "Cantidad de personas que asistiran",
    passGuestLimit: 5,
    dedicationLabel: "Dedica unas bonitas palabras para Mateo",
    dedicationPlaceholder: "Escribe aqui un mensaje bonito para Mateo.",
    passTitle: "Pase especial de invitacion",
    passNote: "Pase unico e intransferible",
  },
  closing: {
    phrase: "Gracias por acompanarnos en este dia de fe y alegria.",
    signature: "Con amor, Familia Martinez Lopez",
  },
};
