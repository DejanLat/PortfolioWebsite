import { Image as ImageIcon, Layers3 } from "lucide-react";
const PUBLIC = process.env.PUBLIC_URL || "";
const renderImg = file => PUBLIC + "/" + file;
const WORK_EXAMPLES = [
  {
    key: "phoenix-inside",
    icon: ImageIcon,
    title: "Inside Phoenix Figure Visual",
    tag: "Science Advances Cover",
    image: renderImg("NewWebPhotos/inside-phoenix-web.webp"),
    bullets: [
      "Scientific visualization by Dejan Latkovic / Axivion Studio. Cover art credit: Science Advances, Vol. 12, Issue 21, May 22, 2026.",
      "Depicts a photon extractor in bulk diamond, visualizing photonic nanojet behavior around NV centers.",
      "Cover render credited on the AAAS Science Advances issue page.",
    ],
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" },
    ],
  },
  {
    key: "phoenix-outside",
    icon: ImageIcon,
    title: "Outside Phoenix Figure Visual",
    tag: "Quantum Optics",
    image: renderImg("NewWebPhotos/outside-phoenix-web.webp"),
    bullets: [
      "Companion visual for the Science Advances cover submission.",
      "Visualizes the exterior optical structure of the inverse-designed diamond nanostructure.",
      "Part of the render set commissioned by Behrooz Semnani for the photonic nanojets paper.",
    ],
    links: [
      { label: "Issue", href: "https://www.science.org/toc/sciadv/12/21" },
      { label: "Paper", href: "https://www.science.org/doi/10.1126/sciadv.aea5936" },
      {
        label: "IQC Feature",
        href: "https://uwaterloo.ca/institute-for-quantum-computing/news/new-nanoscale-diamond-structure-better-collects-and-controls",
      },
    ],
  },
  {
    key: "metasurface",
    icon: Layers3,
    title: "Client Metasurface Visual",
    tag: "Client Render",
    image: renderImg("AxivionStudioWorkExperiencePhoto.jpg"),
    bullets: [
      "Project details will be revealed once Behrooz Semnani's paper is published. A link will be provided here.",
    ],
  },
];

const TESTIMONIAL = {
  label: "Client perspective",
  name: "Behrooz Semnani, PhD",
  role: "R&D Team Leader, Flat Optics",
  organization: "imec",
  initials: "BS",
  image: `${renderImg("behrooz-semnani.avif")}?v=2`,
  linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7462984701742575617/",
  quote:
    "He quickly digests the scientific concept and develops a strong visual direction, so we usually converge on the best final image with only a limited amount of back-and-forth. Through discussion and a small number of focused revisions, Dejan transformed a complex scientific concept and rough visual direction into a final render that was both scientifically accurate and visually elegant. Even when working under tight timelines, he remains available, professional, and focused on delivering high-quality results.",
  fullQuote: [
    "I have had the pleasure of working with Dejan on several scientific visualization projects, with the most prominent being the cover image developed for our paper in Science Advances. Across these projects, Dejan consistently demonstrated a strong ability to understand complex scientific ideas and translate them into clear, accurate, and visually compelling images. His background in optics and quantum science is a major advantage, as it allows him to quickly grasp the technical concepts and identify the most important elements to communicate.",
    "What makes working with Dejan particularly easy is his friendly, flexible, and approachable manner. Communication with him is always smooth, and he is responsive whenever questions, changes, or new ideas arise. He quickly digests the scientific concept and develops a strong visual direction, so we usually converge on the best final image with only a limited amount of back-and-forth.",
    "The Science Advances project was the clearest example of these strengths. The work began with a complex scientific concept and only a rough visual direction. Through discussion and a small number of focused revisions, Dejan transformed it into a final render that was both scientifically accurate and visually elegant. The image was ultimately selected for the cover of Science Advances, reflecting both the quality of the work and its ability to communicate complex research in an accessible and engaging way.",
    "I have also been impressed by Dejan's reliability and commitment. Even when working under tight timelines, he remains available, professional, and focused on delivering high-quality results.",
    "I would gladly recommend Dejan to researchers, companies, and institutions looking for high-quality scientific visualization. He combines scientific understanding, artistic skill, excellent communication, and a highly collaborative approach.",
  ],
  isReady: true,
};

const ARTIST_QUOTE = {
  label: "Artist perspective",
  name: "Dejan Latkovic",
  role: "Scientific Visual Artist",
  image: renderImg("Dejan_Lat_Quotepicture.jpg"),
  quote:
    "Scientific visualization sits between technical accuracy and visual clarity. My background in optics, instrumentation, and nanotechnology helps me understand complex systems quickly, communicate with researchers directly, and turn technical ideas into visuals that are accurate, polished, and publication-ready.",
};


export { WORK_EXAMPLES, TESTIMONIAL, ARTIST_QUOTE };
