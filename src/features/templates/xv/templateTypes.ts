export type XvPalette = {
  gold: string;
  goldSoft: string;
  blush: string;
  blushSoft: string;
  ivory: string;
  black: string;
  ink: string;
};

export type XvMediaImage = {
  src: string;
  alt: string;
  position?: string;
};

export type XvEventCard = {
  icon: "church" | "party" | "clock";
  title: string;
  venue: string;
  address: string;
  time: string;
};

export type XvGiftOption = {
  title: string;
  value: string;
  href?: string;
  actionLabel?: string;
  image?: XvMediaImage;
};

export type XvDressCard = {
  label: string;
  value: string;
  image?: XvMediaImage;
};

export type XvPremiumTemplateData = {
  key: "premium" | "gold";
  appearance: {
    palette: XvPalette;
    accentPrimary: string;
    shellBackgroundImage?: string;
    ornamentImageLeft?: string;
    ornamentImageRight?: string;
    ornamentImageTop?: string;
    ornamentImageBottom?: string;
    ornamentImageAccent?: string;
    heroOverlay: string;
    sectionBackground: string;
    sectionBackgroundAlt: string;
    cardBackground: string;
    borderColor: string;
  };
  hero: {
    celebrant: string;
    subtitle: string;
    date: string;
    coverImage: XvMediaImage;
    supportLine: string;
    openLabel: string;
  };
  countdown: {
    targetIso: string;
    title: string;
    note: string;
  };
  message: {
    kicker: string;
    title: string;
    body: string;
    signature: string;
  };
  gallery: {
    kicker: string;
    title: string;
    note: string;
    images: XvMediaImage[];
  };
  eventDetails: {
    kicker: string;
    title: string;
    cards: XvEventCard[];
  };
  map: {
    kicker: string;
    title: string;
    venue: string;
    address: string;
    embedUrl: string;
    mapsUrl: string;
  };
  dressCode: {
    kicker: string;
    title: string;
    cards: XvDressCard[];
    note: string;
  };
  video?: {
    kicker: string;
    title: string;
    poster: XvMediaImage;
    embedUrl: string;
  };
  music: {
    label: string;
  };
  gifts: {
    kicker: string;
    title: string;
    intro: string;
    options: XvGiftOption[];
  };
  rsvp: {
    kicker: string;
    title: string;
    intro: string;
    formIntro: string;
    familyFieldLabel: string;
    familyFieldPlaceholder: string;
    relationLabel: string;
    relationOptions: string[];
    attendanceLabel: string;
    attendanceNameLabel: string;
    attendanceNamePlaceholder: string;
    guestFieldLabel: string;
    guestFieldPlaceholder: string;
    guestFieldHelp: string;
    guestSlots: number;
    attendanceOptions: string[];
    dedicationLabel: string;
    dedicationPlaceholder: string;
    passTitle: string;
    passGuestName: string;
    passGuestCountLabel: string;
    passGuestCountValue: string;
    passMessage: string;
    passGuests: string[];
    passImage: XvMediaImage;
    buttonLabel: string;
    successMessage: string;
    whatsappUrl?: string;
    whatsappLabel?: string;
  };
  closing: {
    message: string;
    accent: string;
  };
};
