export interface Experience {
  title: string;
  year: string;
  description: string;
  url: string;
}

export const experiences: Experience[] = [
  {
    title: "Errede Web",
    year: "2024",
    description: "Sitio web institucional desarrollado con Next.js, enfocado en diseño responsive y optimización SEO.",
    url: "https://www.errede.com/",
  },
  {
    title: "Feca App",
    year: "2023 - 2024",
    description: "Desarrollo y mantenimiento de plataforma para compartir cafeterías. Stack: Next.js, Tailwind.",
    url: "https://www.feca.app/es",
  },
  {
    title: "Vortex IT",
    year: "2022 - 2023",
    description: "Fullstack Developer. Participación en proyectos internos usando React, Node.js y PostgreSQL.",
    url: "#",
  },
];
