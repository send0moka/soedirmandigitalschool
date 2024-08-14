// Types
export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Link = {
  TEXT: string
  HREF: string
}

export type Social = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}

// Constants
export const SITE: Site = {
  TITLE: "Soedirman Digital School",
  DESCRIPTION: "Situs ini dibawah naungan dari Kementerian Koordinanator Bidang Riset dan Media - Badan Eksekutif Mahasiswa Universitas Jenderal Soedirman Tahun 2024 - Kabinet Bahtera Karsa.",
  AUTHOR: "BEM Unsoed - 2024",
}

export const PAGES: Record<string, Page> = {
  BESTSTUDENTS: {
    TITLE: "Best Students",
    DESCRIPTION: "Peserta Terbaik Soedirman Digital School",
  },
  AFTERMOVIE: {
    TITLE: "After Movie",
    DESCRIPTION: "Video dokumentasi Soedirman Digital School",
  },
  ORGANIZERS: {
    TITLE: "Organizers",
    DESCRIPTION: "Panitia Soedirman Digital School",
  },
  PARTNERS: {
    TITLE: "Partners",
    DESCRIPTION: "Kerja Sama Soedirman Digital School",
  },
  DATAANALYST: {
    TITLE: "Data Analyst",
    DESCRIPTION: "Data Analyst Soedirman Digital School",
  },
  UIUX: {
    TITLE: "UI/UX",
    DESCRIPTION: "UI/UX Soedirman Digital School",
  },
  WEBDEVELOPER: {
    TITLE: "Web Developer",
    DESCRIPTION: "Web Developer Soedirman Digital School",
  },
}

export const LINKS: Link[] = [
  { TEXT: "Best Students", HREF: "/best-students" },
  { TEXT: "After Movie", HREF: "/after-movie" },
  { TEXT: "Organizers", HREF: "/organizers" },
  { TEXT: "Partners", HREF: "/partners" },
]

export const COURSES: Link[] = [
  { TEXT: "Data Analyst", HREF: "/data-analyst" },
  { TEXT: "UI/UX", HREF: "/ui-ux" },
  { TEXT: "Web Developer", HREF: "/web-developer" },
]

export const SOCIALS: Social[] = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "soedirmamdigitalschool@gmail.com",
    HREF: "mailto:soedirmamdigitalschool@gmail.com",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "soedirmandigitalschool",
    HREF: "https://instagram.com/soedirmandigitalschool",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "soedirmandigitalschool",
    HREF: "https://linkedin.com/in/soedirmandigitalschool/",
  },
  { 
    NAME: "WhatsApp",
    ICON: "whatsapp",
    TEXT: "6281226769494",
    HREF: "https://wa.me/6281226769494",
  },
]