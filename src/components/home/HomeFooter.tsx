import { Camera, MessagesSquare, Send } from "lucide-react";

const links = ["Diseños", "Categorías", "Testimonios", "Contacto"];

export function HomeFooter() {
  return (
    <footer className="rounded-[2rem] border border-white/70 bg-white/80 px-6 py-8 shadow-lg shadow-slate-950/5 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl text-[#1A2A44]">Invity</p>
          <p className="mt-2 text-sm text-slate-500">
            Invitaciones digitales premium para eventos inolvidables.
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-slate-600">
          {links.map((link) => (
            <a key={link} href="/" className="transition-colors hover:text-[#1F7A7A]">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[Camera, MessagesSquare, Send].map((Icon, index) => (
            <a
              key={index}
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:-translate-y-0.5 hover:border-[#D4AF37]/40 hover:text-[#1F7A7A]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
