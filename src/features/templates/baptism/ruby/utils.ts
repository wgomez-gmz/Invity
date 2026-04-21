export type CountdownParts = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  completed: boolean;
};

export function createCountdown(targetIso: string): CountdownParts {
  const targetTime = new Date(targetIso).getTime();
  const now = Date.now();
  const distance = Math.max(0, targetTime - now);
  const completed = distance === 0;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    completed,
  };
}

export function createWhatsappLink(phone: string, message: string) {
  const normalizedPhone = phone.replace(/\D+/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

