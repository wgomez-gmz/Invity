export type WeddingSlide = {
  image: string;
  alt: string;
};

export type WeddingBackgroundSpec =
  | {
      type: "color";
      value: string;
    }
  | {
      type: "gradient";
      value: string;
    }
  | {
      type: "layers";
      value: string;
    }
  | {
      type: "image";
      src: string;
      overlay?: string;
      position?: string;
      size?: string;
      repeat?: string;
      attachment?: string;
    };

export type WeddingPadrinoSlide = WeddingSlide & {
  title: string;
  names: string;
};

export type WeddingCountdownItem = {
  value: string;
  label: string;
};

export type WeddingPartySide = {
  label: string;
  icon: string;
  lines: string[];
};

export type WeddingLocationSection = {
  sectionLabel: string;
  title: string;
  slides: WeddingSlide[];
  supportImage: string;
  venueType: string;
  venueName: string;
  time: string;
  addressLines: string[];
  mapUrl?: string;
};

export type WeddingTemplateData = {
  key: "ruby" | "gold" | "silver";
  appearance?: {
    palette?: {
      sage?: string;
      sageSoft?: string;
      ivory?: string;
      gold?: string;
      ink?: string;
    };
    surfaces?: {
      shellBaseColor?: string;
      shellTopBackground?: string;
      heroBackground?: string;
      heroOverlay?: string;
      entryModalOverlay?: string;
      entryCardBackground?: string;
      heroEventCardBackground?: string;
      heroShotOverlay?: string;
      countdownOverlay?: string;
      countdownCardBackground?: string;
      locationStageBackground?: string;
      locationStageOverlay?: string;
      locationUnderlayFilter?: string;
      locationCardTopbarBackground?: string;
      locationCardBodyBackground?: string;
      invitationBandBackground?: string;
      invitationCardBackground?: string;
      invitationOrnamentOpacity?: string;
      padrinosOverlayBackground?: string;
      rsvpCardBackground?: string;
      rsvpPhotoFrameBackground?: string;
      closingTopbandBackground?: string;
      closingFooterBackground?: string;
    };
    sectionBackgrounds?: {
      quote?: WeddingBackgroundSpec;
      invitation?: WeddingBackgroundSpec;
      parents?: WeddingBackgroundSpec;
      location?: WeddingBackgroundSpec;
      padrinos?: WeddingBackgroundSpec;
      details?: WeddingBackgroundSpec;
      rsvp?: WeddingBackgroundSpec;
      closing?: WeddingBackgroundSpec;
    };
    sharedSectionBackground?: WeddingBackgroundSpec;
  };
  hero: {
    collectionLabel: string;
    names: string;
    date: string;
    place: string;
    lead?: string;
    logo: string;
    slides: WeddingSlide[];
    supportImage: string;
    detailImage: string;
  };
  quote: {
    kicker: string;
    text: string;
    note: string;
    image: string;
  };
  invitation: {
    title: string;
    names: [string, string];
    copy: string;
    day: string;
    date: string;
  };
  parents: {
    heading: string;
    bride: WeddingPartySide;
    groom: WeddingPartySide;
  };
  countdown: {
    kicker: string;
    background: string;
    items: WeddingCountdownItem[];
    targetDateISO?: string;
  };
  ceremony: WeddingLocationSection;
  reception: WeddingLocationSection;
  padrinos: {
    heading: string;
    kicker: string;
    slides: WeddingPadrinoSlide[];
  };
  details: {
    dressCode: {
      kicker: string;
      title: string;
      image: string;
      note: string;
    };
    gifts: {
      kicker: string;
      title: string;
      copy: string;
      eventCode: string;
      liverpoolLogo: string;
      giftIllustration?: string;
      envelopeIcon: string;
      transferLabel?: string;
      transferDetails?: string[];
    };
  };
  rsvp: {
    kicker: string;
    title: string;
    photo: string;
    invitationLabel: string;
    familyName: string;
    guestCount: string;
    note: string;
    intro: string;
    dedicationLabel: string;
    whatsappLink?: string;
    whatsappLabel?: string;
  };
  closing: {
    message: string;
    accent: string;
    footerText: string;
  };
};

export type WeddingTemplateRuntime = {
  activeWeddingSlide: number;
  activeChurchSlide: number;
  activeReceptionSlide: number;
  activePadrinosSlide: number;
  setActiveWeddingSlide: (index: number) => void;
  setActivePadrinosSlide: (updater: number | ((current: number) => number)) => void;
};
