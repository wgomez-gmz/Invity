import weddingIcon from "@/assets/icons/anillo-de-bodas.png";
import xvIcon from "@/assets/icons/XV años.png";
import baptismIcon from "@/assets/icons/bautizo.png";
import birthdayIcon from "@/assets/icons/cumpleaños.png";
import babyIcon from "@/assets/icons/babyshower.png";

export type PackageTier = {
  name: "Ruby" | "Gold" | "Silver" | "Plus" | "Esencial";
  subtitle: string;
  price: string;
  accent: "ruby" | "gold" | "silver";
  features: string[];
};

export type CategoryEntry = {
  slug: string;
  shortName: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  packages: PackageTier[];
};

const sharedPackages: PackageTier[] = [
  {
    name: "Ruby",
    subtitle: "La experiencia mas exclusiva",
    price: "$3,000",
    accent: "ruby",
    features: [
      "12 meses en linea",
      "Diseno premium personalizado",
      "Video o cancion especial",
      "Mensaje de bienvenida",
      "Cuenta regresiva",
      "Ceremonia y recepcion",
      "Codigo de vestimenta",
      "Mesa de regalos",
      "Confirmacion por formulario",
      "Enlace personalizado",
    ],
  },
  {
    name: "Gold",
    subtitle: "Elegancia equilibrada",
    price: "$2,200",
    accent: "gold",
    features: [
      "8 meses en linea",
      "Diseno elegante personalizado",
      "Galeria de fotos",
      "Mensaje de bienvenida",
      "Cuenta regresiva",
      "Ceremonia y recepcion",
      "Codigo de vestimenta",
      "Mesa de regalos",
      "Confirmacion por formulario",
      "Enlace personalizado",
    ],
  },
  {
    name: "Silver",
    subtitle: "Esencia fina y funcional",
    price: "$1,500",
    accent: "silver",
    features: [
      "6 meses en linea",
      "Diseno base personalizado",
      "Mensaje de bienvenida",
      "Cuenta regresiva",
      "Ceremonia",
      "Codigo de vestimenta",
      "Mapa o ubicacion",
      "Confirmacion por formulario",
    ],
  },
];

const baptismPackages: PackageTier[] = [
  {
    name: "Plus",
    subtitle: "Experiencia premium para bautizo",
    price: "$2,200",
    accent: "ruby",
    features: [
      "12 meses en linea",
      "Diseno premium personalizado",
      "Mensaje de bienvenida",
      "Cuenta regresiva",
      "Ceremonia y recepcion",
      "Galeria premium",
      "RSVP con pase digital",
      "Enlace personalizado",
    ],
  },
  {
    name: "Esencial",
    subtitle: "Presentacion elegante y funcional",
    price: "$1,500",
    accent: "silver",
    features: [
      "6 meses en linea",
      "Diseno base personalizado",
      "Mensaje de bienvenida",
      "Cuenta regresiva",
      "Ceremonia",
      "Ubicacion",
      "Confirmacion por formulario",
    ],
  },
];

export const catalogEntries: CategoryEntry[] = [
  {
    slug: "boda",
    shortName: "Boda",
    title: "Invitaciones digitales para boda",
    description: "Colecciones romanticas, sofisticadas y pensadas para presentar tu gran dia con elegancia y emocion.",
    icon: weddingIcon,
    accent: "cat-wedding",
    packages: sharedPackages,
  },
  {
    slug: "xv-anos",
    shortName: "XV Años",
    title: "Invitaciones digitales para XV Años",
    description: "Disenos memorables y delicados para una celebracion unica, llena de estilo, luz y personalidad.",
    icon: xvIcon,
    accent: "cat-xv",
    packages: sharedPackages,
  },
  {
    slug: "bautizo",
    shortName: "Bautizo",
    title: "Invitaciones digitales para bautizo",
    description: "Propuestas serenas y elegantes para compartir un momento familiar con calidez y significado.",
    icon: baptismIcon,
    accent: "cat-baptism",
    packages: baptismPackages,
  },
  {
    slug: "cumpleanos",
    shortName: "Cumpleanos",
    title: "Invitaciones digitales para cumpleanos",
    description: "Opciones modernas y estilizadas para celebraciones especiales con caracter, alegria y buena presencia.",
    icon: birthdayIcon,
    accent: "cat-birthday",
    packages: sharedPackages,
  },
  {
    slug: "baby-shower",
    shortName: "Baby Shower",
    title: "Invitaciones digitales para baby shower",
    description: "Invitaciones suaves, encantadoras y refinadas para anunciar una celebracion dulce y memorable.",
    icon: babyIcon,
    accent: "cat-baby",
    packages: sharedPackages,
  },
];

export function getCategoryBySlug(slug?: string) {
  return catalogEntries.find((entry) => entry.slug === slug);
}

export function getPackageByTier(
  category: CategoryEntry | undefined,
  tier?: string,
) {
  if (!category) {
    return undefined;
  }

  return category.packages.find(
    (pkg) => pkg.name.toLowerCase() === (tier ?? "").toLowerCase(),
  );
}
