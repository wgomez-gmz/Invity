import weddingIcon from "@/assets/icons/anillo-de-bodas.png";
import xvIcon from "@/assets/icons/VX años.png";
import baptismIcon from "@/assets/icons/bautizo.png";
import birthdayIcon from "@/assets/icons/cumpleaños.png";
import babyIcon from "@/assets/icons/babyshower.png";

export type PackageTier = {
  name: "Ruby" | "Gold" | "Silver";
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
    subtitle: "Una invitacion premium",
    price: "$3,000",
    accent: "ruby",
    features: [
      "12 meses visible",
      "Diseno de invitacion premium",
      "Video o cancion",
      "Mensaje de presentacion",
      "Cuenta regresiva",
      "Ceremonia y recepcion",
      "Codigo de vestimenta",
      "Mesa de regalos",
      "Confirmacion por formulario",
      "Link de invitacion personalizado",
    ],
  },
  {
    name: "Gold",
    subtitle: "Una invitacion estandar",
    price: "$2,200",
    accent: "gold",
    features: [
      "8 meses visible",
      "Diseno elegante estandar",
      "Galeria de fotos",
      "Mensaje de bienvenida",
      "Cuenta regresiva",
      "Ceremonia y recepcion",
      "Codigo de vestimenta",
      "Mesa de regalos",
      "Confirmacion por formulario",
      "Link de invitacion personalizado",
    ],
  },
  {
    name: "Silver",
    subtitle: "Una invitacion esencial",
    price: "$1,500",
    accent: "silver",
    features: [
      "6 meses visible",
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

export const catalogEntries: CategoryEntry[] = [
  {
    slug: "boda",
    shortName: "Boda",
    title: "Invitaciones para boda",
    description: "Colecciones romanticas, refinadas y pensadas para presentar tu gran dia con una presencia inolvidable.",
    icon: weddingIcon,
    accent: "cat-wedding",
    packages: sharedPackages,
  },
  {
    slug: "xv-anos",
    shortName: "XV Anos",
    title: "Invitaciones para XV Anos",
    description: "Disenos memorables y sofisticados para celebrar una noche unica con estilo y personalidad.",
    icon: xvIcon,
    accent: "cat-xv",
    packages: sharedPackages,
  },
  {
    slug: "bautizo",
    shortName: "Bautizo",
    title: "Invitaciones para bautizo",
    description: "Presentaciones delicadas y limpias para un momento familiar especial y lleno de significado.",
    icon: baptismIcon,
    accent: "cat-baptism",
    packages: sharedPackages,
  },
  {
    slug: "cumpleanos",
    shortName: "Cumpleanos",
    title: "Invitaciones para cumpleanos",
    description: "Opciones modernas y frescas para eventos divertidos, elegantes o totalmente personalizados.",
    icon: birthdayIcon,
    accent: "cat-birthday",
    packages: sharedPackages,
  },
  {
    slug: "baby-shower",
    shortName: "Baby Shower",
    title: "Invitaciones para baby shower",
    description: "Invitaciones encantadoras y suaves para compartir una celebracion dulce, cercana y memorable.",
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
