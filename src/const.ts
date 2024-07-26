import type { Site, Page, Links, Socials } from "@types"

export const SITE: Site = {
  TITLE: "Soedirman Digital School",
  DESCRIPTION: "Soedirman Digital School adalah program pelatihan digital yang diselenggarakan oleh BEM Unsoed 2024. Program ini bertujuan untuk memberikan pengetahuan dan keterampilan digital kepada mahasiswa Unsoed.",
  AUTHOR: "BEM Unsoed - 2024",
}

export const BESTSTUDENTS: Page = {
  TITLE: "Best Students",
  DESCRIPTION: "Peserta Terbaik Soedirman Digital School",
}

export const AFTERMOVIE: Page = {
  TITLE: "After Movie",
  DESCRIPTION: "Video dokumentasi Soedirman Digital School",
}

export const ORGANIZERS: Page = {
  TITLE: "Organizers",
  DESCRIPTION: "Panitia Soedirman Digital School",
}

export const PARTNERS: Page = {
  TITLE: "Partners",
  DESCRIPTION: "Kerja Sama Soedirman Digital School",
}

export const DATAANALYST: Page = {
  TITLE: "Data Analyst",
  DESCRIPTION: "Data Analyst Soedirman Digital School",
}

export const UIUX: Page = {
  TITLE: "UI/UX",
  DESCRIPTION: "UI/UX Soedirman Digital School",
}

export const WEBDEVELOPER: Page = {
  TITLE: "Web Developer",
  DESCRIPTION: "Web Developer Soedirman Digital School",
}

export const LINKS: Links = [
  { 
    TEXT: "Best Students", 
    HREF: "/best-students", 
  },
  { 
    TEXT: "After Movie", 
    HREF: "/after-movie", 
  },
  { 
    TEXT: "Organizers", 
    HREF: "/organizers", 
  },
  { 
    TEXT: "Partners", 
    HREF: "/partners", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "markhorn.dev@gmail.com",
    HREF: "mailto:markhorn.dev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
]

