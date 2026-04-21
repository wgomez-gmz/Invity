const BAPTISM_DATA = {
  hero: {
    babyName: "Ruby Sofia",
    subtitle: "Mi Santo Bautizo",
    phrase:
      "Con alegria en el corazon te invitamos a compartir un dia de fe, ternura y gratitud.",
    eventIso: "2026-08-16T12:30:00-06:00",
  },
  story:
    "Hoy celebramos el inicio de un camino espiritual lleno de luz. Cada abrazo, cada oracion y cada mirada se convertira en un recuerdo eterno para nuestra familia.",
  details: [
    { icon: "✦", label: "Fecha", value: "Domingo 16 de Agosto 2026" },
    { icon: "⏰", label: "Hora", value: "12:30 PM" },
    { icon: "⛪", label: "Iglesia", value: "Parroquia San Gabriel Arcangel" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Parroquia+San+Gabriel+Arcangel+Monterrey",
  family: {
    parents: ["Carolina Martinez", "Eduardo Lopez"],
    godparents: ["Fernanda Ruiz", "Santiago Herrera"],
  },
  reception: {
    title: "Jardin Casa Magnolia",
    time: "2:30 PM",
    note:
      "Despues de la ceremonia te esperamos para celebrar juntos con una tarde llena de alegria, musica y momentos inolvidables.",
    image:
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1600&q=80",
  },
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1543342386-6e53cf46d47f?auto=format&fit=crop&w=1600&q=80",
      alt: "Retrato de bebe en estudio con luz suave",
    },
    {
      src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1600&q=80",
      alt: "Familia abrazando a bebe en exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1600&q=80",
      alt: "Detalle de manos de bebe con luz natural",
    },
    {
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80",
      alt: "Sesion editorial con tonos pastel",
    },
  ],
  rsvp: {
    phone: "528100000000",
    baseMessage:
      "Hola, confirmo mi asistencia al Bautizo de Ruby Sofia. Gracias por la invitacion.",
  },
  footerPhrase: "Gracias por acompanarnos en este dia de fe, amor y bendicion.",
};

const state = {
  currentSlide: 0,
  lightboxOpen: false,
  touchStartX: null,
};

const refs = {
  heroPhrase: document.getElementById("heroPhrase"),
  storyCopy: document.getElementById("storyCopy"),
  detailCards: document.getElementById("detailCards"),
  mapsButton: document.getElementById("mapsButton"),
  familyGrid: document.getElementById("familyGrid"),
  receptionImage: document.getElementById("receptionImage"),
  receptionTitle: document.getElementById("receptionTitle"),
  receptionTime: document.getElementById("receptionTime"),
  receptionNote: document.getElementById("receptionNote"),
  slideLeft: document.getElementById("slideLeft"),
  slideCenter: document.getElementById("slideCenter"),
  slideRight: document.getElementById("slideRight"),
  prevSlide: document.getElementById("prevSlide"),
  nextSlide: document.getElementById("nextSlide"),
  openLightbox: document.getElementById("openLightbox"),
  lightbox: document.getElementById("lightbox"),
  lightboxImage: document.getElementById("lightboxImage"),
  closeLightbox: document.getElementById("closeLightbox"),
  lbPrev: document.getElementById("lbPrev"),
  lbNext: document.getElementById("lbNext"),
  rsvpDynamicText: document.getElementById("rsvpDynamicText"),
  rsvpWhatsApp: document.getElementById("rsvpWhatsApp"),
  footerPhrase: document.getElementById("footerPhrase"),
  heroBg: document.querySelector(".br-hero__bg"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function twoDigits(value) {
  return String(value).padStart(2, "0");
}

function renderHeroPhrase() {
  refs.heroPhrase.innerHTML = "";
  BAPTISM_DATA.hero.phrase.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.className = "char";
    span.style.setProperty("--delay", `${index * 26}ms`);
    span.textContent = char;
    refs.heroPhrase.append(span);
  });
}

function renderDetails() {
  refs.detailCards.innerHTML = BAPTISM_DATA.details
    .map(
      (item, index) => `
      <article class="br-card br-reveal br-stagger" style="--stagger:${index * 120}ms">
        <div class="br-card__icon">${item.icon}</div>
        <p class="br-card__label">${item.label}</p>
        <p class="br-card__value">${item.value}</p>
      </article>
    `,
    )
    .join("");
}

function renderFamily() {
  const createNames = (names) => names.map((name) => `<p class="br-family-name">${name}</p>`).join("");
  refs.familyGrid.innerHTML = `
    <article class="br-family-block br-reveal br-stagger" style="--stagger:0ms">
      <p class="br-family-block__title">Padres</p>
      <div class="br-family-block__divider"></div>
      ${createNames(BAPTISM_DATA.family.parents)}
    </article>
    <article class="br-family-block br-reveal br-stagger" style="--stagger:140ms">
      <p class="br-family-block__title">Padrinos</p>
      <div class="br-family-block__divider"></div>
      ${createNames(BAPTISM_DATA.family.godparents)}
    </article>
  `;
}

function renderReception() {
  refs.receptionImage.src = BAPTISM_DATA.reception.image;
  refs.receptionTitle.textContent = BAPTISM_DATA.reception.title;
  refs.receptionTime.textContent = BAPTISM_DATA.reception.time;
  refs.receptionNote.textContent = BAPTISM_DATA.reception.note;
}

function getLoopIndex(index) {
  const total = BAPTISM_DATA.gallery.length;
  return (index + total) % total;
}

function renderCarousel() {
  const left = BAPTISM_DATA.gallery[getLoopIndex(state.currentSlide - 1)];
  const center = BAPTISM_DATA.gallery[getLoopIndex(state.currentSlide)];
  const right = BAPTISM_DATA.gallery[getLoopIndex(state.currentSlide + 1)];

  refs.slideLeft.src = left.src;
  refs.slideLeft.alt = left.alt;
  refs.slideCenter.src = center.src;
  refs.slideCenter.alt = center.alt;
  refs.slideRight.src = right.src;
  refs.slideRight.alt = right.alt;

  refs.lightboxImage.src = center.src;
  refs.lightboxImage.alt = center.alt;
}

function nextSlide() {
  state.currentSlide = getLoopIndex(state.currentSlide + 1);
  renderCarousel();
}

function prevSlide() {
  state.currentSlide = getLoopIndex(state.currentSlide - 1);
  renderCarousel();
}

function openLightbox() {
  state.lightboxOpen = true;
  refs.lightbox.classList.add("is-open");
  refs.lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  state.lightboxOpen = false;
  refs.lightbox.classList.remove("is-open");
  refs.lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindCarousel() {
  refs.prevSlide.addEventListener("click", prevSlide);
  refs.nextSlide.addEventListener("click", nextSlide);
  refs.openLightbox.addEventListener("click", openLightbox);

  refs.closeLightbox.addEventListener("click", closeLightbox);
  refs.lbPrev.addEventListener("click", prevSlide);
  refs.lbNext.addEventListener("click", nextSlide);

  refs.lightbox.addEventListener("click", (event) => {
    if (event.target === refs.lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (!state.lightboxOpen) {
      return;
    }
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
  });

  refs.openLightbox.addEventListener("touchstart", (event) => {
    state.touchStartX = event.touches[0]?.clientX ?? null;
  });
  refs.openLightbox.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0]?.clientX ?? 0;
    if (state.touchStartX === null) return;
    const delta = endX - state.touchStartX;
    if (Math.abs(delta) > 40) {
      if (delta < 0) nextSlide();
      else prevSlide();
    }
    state.touchStartX = null;
  });

  let timer = window.setInterval(nextSlide, 4500);
  const restart = () => {
    window.clearInterval(timer);
    timer = window.setInterval(nextSlide, 4500);
  };
  refs.prevSlide.addEventListener("click", restart);
  refs.nextSlide.addEventListener("click", restart);
}

function updateCountdown() {
  const target = new Date(BAPTISM_DATA.hero.eventIso).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  refs.days.textContent = twoDigits(days);
  refs.hours.textContent = twoDigits(hours);
  refs.minutes.textContent = twoDigits(minutes);
  refs.seconds.textContent = twoDigits(seconds);
}

function applyRsvp() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("guest") || params.get("nombre") || "Invitado especial";
  const message = [BAPTISM_DATA.rsvp.baseMessage, `Invitado: ${guest}`].join("\n");
  refs.rsvpDynamicText.textContent = `${guest}, sera un honor contar con tu presencia en este dia tan especial.`;
  refs.rsvpWhatsApp.href = `https://wa.me/${BAPTISM_DATA.rsvp.phone}?text=${encodeURIComponent(message)}`;
}

function createRevealObserver() {
  const nodes = Array.from(document.querySelectorAll(".br-reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );
  nodes.forEach((node) => observer.observe(node));
}

function bindParallax() {
  let ticking = false;
  function update() {
    const y = Math.min(window.scrollY * 0.16, 60);
    refs.heroBg.style.transform = `scale(1.08) translateY(${y}px)`;
    ticking = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
}

function initTemplate() {
  refs.storyCopy.textContent = BAPTISM_DATA.story;
  refs.mapsButton.href = BAPTISM_DATA.mapsUrl;
  refs.footerPhrase.textContent = BAPTISM_DATA.footerPhrase;

  renderHeroPhrase();
  renderDetails();
  renderFamily();
  renderReception();
  renderCarousel();
  bindCarousel();
  applyRsvp();
  createRevealObserver();
  bindParallax();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

initTemplate();
