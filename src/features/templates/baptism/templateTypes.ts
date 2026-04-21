export type BaptismMediaImage = {
  src: string;
  alt: string;
  position?: string;
};

export type BaptismRubyTemplateData = {
  key: "ruby";
  hero: {
    babyName: string;
    subtitle: string;
    phrase: string;
    coverImage: BaptismMediaImage;
    eventDateIso: string;
    eventDateLabel: string;
  };
  welcome: {
    title: string;
    signature: string;
    message: string;
  };
  details: {
    date: string;
    time: string;
    church: string;
    mapsUrl: string;
  };
  family: {
    parents: string[];
    godparents: string[];
  };
  reception: {
    venue: string;
    time: string;
    note: string;
    mapsUrl: string;
    image?: BaptismMediaImage;
  };
  gallery: {
    kicker: string;
    title: string;
    note: string;
    images: BaptismMediaImage[];
  };
  dressCode?: {
    title: string;
    note: string;
  };
  gifts?: {
    title: string;
    note: string;
  };
  rsvp: {
    title: string;
    note: string;
    whatsappPhone: string;
    defaultMessage: string;
    guestCountLabel: string;
    passGuestLimit: number;
    dedicationLabel: string;
    dedicationPlaceholder: string;
    passTitle: string;
    passNote: string;
  };
  closing: {
    phrase: string;
    signature: string;
  };
};
