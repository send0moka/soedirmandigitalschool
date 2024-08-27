silabus-da.tsx:
"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "Camp 1",
        description: "Pengenalan Data Analyst",
        time: "15m ago",
        icon: "💸",
        color: "#00C9A7",
    },
    {
        name: "Camp 2",
        description: "Dasar Umum Excel",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
    },
    {
        name: "Camp 3",
        description: "Dasar Fungsi Excel",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
    },
    {
        name: "Camp 4",
        description: "Analisa Excel Dasar",
        time: "2m ago",
        icon: "🗞️",
        color: "#1E86FF",
    },
    {
        name: "Camp 5",
        description: "Analisa Excel Lanjutan",
        time: "1m ago",
        icon: "📈",
        color: "#F24E1E",
    },
    {
        name: "Camp 6",
        description: "Midtest",
        time: "30s ago",
        icon: "📝",
        color: "#00C9A7",
    },
    {
        name: "Camp 7",
        description: "Analisa Excel Expert",
        time: "20s ago",
        icon: "📚",
        color: "#FFB800",
    },
    {
        name: "Camp 8",
        description: "Membuat Dashboard",
        time: "15s ago",
        icon: "💻",
        color: "#FF3D71",
    },
    {
        name: "Camp 9",
        description: "Membuat Report",
        time: "10s ago",
        icon: "📁",
        color: "#1E86FF",
    },
    {
        name: "Camp 10",
        description: "Arahan Final Project",
        time: "5s ago",
        icon: "👥",
        color: "#F24E1E",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative min-h-fit w-full transform cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function SilabusDA() {
    return (
        <div className="w-full lg:w-fit px-6 lg:px-0">
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Silabus🤗</span>
            </div>
            <div className="relative flex h-[29.2rem] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
                <AnimatedList>
                    {notifications.map((item, idx) => (
                        <Notification {...item} key={idx} />
                    ))}
                </AnimatedList>
            </div>
        </div>
    );
}

utils.ts:
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ms from "ms";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

animated-list.tsx:
"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, useEffect, useMemo, useState } from "react";

export const AnimatedList = React.memo(
  ({
    className,
    children,
    delay = 1000,
  }: {
    className?: string;
    children: React.ReactNode;
    delay?: number;
  }) => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      let interval: NodeJS.Timeout;

      if (!isHovered) {
        interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);
      }

      return () => clearInterval(interval);
    }, [childrenArray.length, delay, isHovered]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1).reverse(),
      [index, childrenArray],
    );

    return (
      <div 
        className={`flex flex-col items-center gap-4 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

tailwind.config.js:
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        shimmer: "shimmer 8s infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      boxShadow: {
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
    },
    transparent: 'transparent',
    current: 'currentColor',
    screens: {
      md: '760px',
      lg: '1024px',
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
    require("@headlessui/tailwindcss"),
  ],
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
}

saya ingin kode nextjs diatas dimigrasi menjadi kode astro dan tolong efisiensikan serta beri aos.
informasi tambahan: jangan suruh saya untuk install package, tolong buatkan componentnya secara manual di astro, dan juga jangan buat function didalam --- ---.
untuk framer motion pada next js karena basisnya react maka migrasi menjadi animasi manual dengan css/tailwind/js.

src/components/Silabus.astro:
<!-- isikan disini -->

src/pages/data-analyst.astro:
---
import PageLayout from "@layouts/PageLayout.astro"
import { SITE } from "@config"
import Modal from "@components/Modal.astro"
import Silabus from "@components/Silabus.astro"
---

<PageLayout title="Home" description={SITE.DESCRIPTION}>
  <div class="min-h-screen bg-retro flex flex-col justify-center items-center">
    <div class="relative z-10 container mx-auto -mt-36 px-4">
      <section class="flex flex-col justify-center items-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          class="font-display text-center text-6xl sm:text-8xl md:text-9xl mb-10 lg:leading-[1.15] text-rainbow wave-text"
        >
          Data Analyst
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="900"
          class="sm:text-xl bg-ijo-muda text-balance text-center lg:w-2/3 md:text-hitam font-bold tracking-wide mb-4 py-4 rounded-3xl border-2 border-hitam"
        >
          Data Analyst adalah seorang profesional yang bertugas untuk
          mengumpulkan, mengolah, menganalisis, dan menginterpretasikan data
          untuk membantu perusahaan dalam membuat keputusan yang lebih baik.
          Data Analyst juga bertanggung jawab dalam membuat laporan dan
          visualisasi data agar mudah dipahami.
        </p>
        <button id="daftarBtn" data-aos="fade-up" data-aos-delay="1200" class="btn">
          <div class="btn__content !h-14 !px-8">
            <span class="-mt-1 font-semibold text-xl">Daftar Data Analyst Sekarang</span>
            <svg
              class="btn__arrow h-4 opacity-90 stroke-current bold-stroke"
              width="25"
              height="15"
              fill="currentColor"
            >
              <use href="/ui.svg#arrow"></use>
            </svg>
          </div>
        </button>
      </section>
    </div>
  </div>
  <Modal id="daftarModal">
    <div class="bg-white p-6 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Pilih Jenis Pendaftaran</h2>
      <div class="flex justify-center space-x-4">
        <a href="/daftar-umum" class="btn">
          <div class="btn__content !h-14 !px-8">
            <span class="-mt-1 font-semibold text-xl">Umum</span>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </a>
        <a href="/daftar-gensoed" class="btn">
          <div class="btn__content !h-14 !px-8">
            <span class="-mt-1 font-semibold text-xl">Gensoed</span>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </Modal>
  <div class="min-h-screen">
    <div class="flex overflow-hidden justify-center shadow-lg">
      {
        [1, 2, 3, 4, 5].map((_, index) => (
          <img
            src="chess.webp"
            alt="chess"
            class={`h-20 w-auto object-cover ${index % 2 !== 0 ? "-scale-y-100" : ""}`}
            width="80"
            height="80"
            loading="lazy"
          />
        ))
      }
    </div>
    <section class="flex flex-col justify-center items-center my-20">
      <Silabus />
    </section>
  </div>
</PageLayout>

<script>
  import { initWaveText } from "../scripts/waveText.js"
  import { openModal, initializeModal } from "@scripts/modal.js"

  document.addEventListener("DOMContentLoaded", () => {
    initWaveText()
    initializeModal("daftarModal")
    const daftarBtn = document.getElementById("daftarBtn")
    const daftarModal = document.getElementById("daftarModal")
    if (daftarBtn && daftarModal) {
      daftarBtn.addEventListener("click", () => openModal(daftarModal))
    }
  })

  document.addEventListener("astro:after-swap", () => {
    initWaveText()
    initializeModal("daftarModal")
  })
</script>

contoh pada src/components/BentoGrid.astro:
---
import { cn } from "@/lib/utils"
import { Image } from "astro:assets"
import Container from "./Container.astro"

const { className } = Astro.props

const items = [
  {
    title: "2 Bulan Pelatihan",
    description: "Pelatihan dilakukan secara intensif bersama mentor yang keren.",
    header: "/benefit-1.webp",
    icon: "clipboard-copy",
  },
  {
    title: "Membangun Portofolio",
    description: "Proyek pada pelatihan ini bisa dijadikan portofolio yang menarik.",
    header: "/benefit-2.webp",
    icon: "file-broken",
  },
  {
    title: "LMS Khusus",
    description: "Pemberian tugas dari mentor kepada peserta melalui platform Moodle.",
    header: "/benefit-3.webp",
    icon: "signature",
  },
  {
    title: "Talkshow Karir",
    description:
      "Talkshow akan membahas tentang karir dan pekerjaan yang ditawarkan selama pelatihan, memberikan wawasan mendalam tentang peluang, tantangan, dan keterampilan yang dibutuhkan di berbagai bidang profesional.",
    header: "/benefit-4.webp",
    icon: "table-column",
  },
  {
    title: "Memperluas Networking",
    description: "Bertemu dengan orang-orang hebat dari berbagai latar belakang dan memperluas jaringan untuk berkolaborasi.",
    header: "/benefit-5.webp",
    icon: "arrow-wave-right-up",
  },
]

const aosAnimations = ["fade-up", "fade-down", "fade-left", "fade-right", "zoom-in"]
---

<Container size="xl">
  <div data-aos="fade-up" class="mb-6 font-body uppercase text-5xl md:text-7xl text-center text-kuning tracking-wide title-stroke">
    Benefit🤩
  </div>
  <div
    class={cn(
      "grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr",
      className
    )}
  >
    {items.map((item, i) => (
      <div
        class={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white/50 border flex flex-col",
          i === 3 || i === 6 ? "md:col-span-2" : ""
        )}
        data-aos="fade-up"
        data-aos-md={aosAnimations[i % aosAnimations.length]}
        data-aos-delay={i * 100}
      >
        {item.header && (
          <div class="w-full flex-grow overflow-hidden rounded-lg">
            <Image 
              src={item.header} 
              alt={item.title || "Header image"} 
              width={1200}
              height={800}
              class="size-full object-cover" 
              loading="lazy"
              decoding="async"
              format="webp"
              quality={80}
            />
          </div>
        )}
        <div class="mt-4 group-hover/bento:translate-x-2 transition duration-200">
          <svg class="size-5" aria-hidden="true">
            <use xlink:href={`/ui.svg#${item.icon}`}></use>
          </svg>
          <h2 class="font-bold text-lg my-1">
            {item.title}
          </h2>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</Container>

BaseHead.astro:
---
import { ViewTransitions } from "astro:transitions"
import "aos/dist/aos.css"
import { motion } from "framer-motion"

interface Props {
  title: string
  description: string
  image?: string
}
const { title, description, image = "/open-graph.jpg" } = Astro.props
---

<!-- Global Metadata -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Fonts -->
<link rel="preload" href="/fonts/literata-regular.woff" as="font" type="font/woff" crossorigin>
<link rel="preload" href="/fonts/sugo-bold.woff" as="font" type="font/woff" crossorigin>
<link rel="preload" href="/fonts/sugo-regular.woff" as="font" type="font/woff" crossorigin>
<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.url)} />
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, Astro.url)} />
<!-- Sitemap -->
<link rel="sitemap" href="/sitemap-index.xml" />

<ViewTransitions />

<script>
  import type { TransitionBeforeSwapEvent } from "astro:transitions/client"
  document.addEventListener("astro:before-swap", (e) =>
    [
      ...(e as TransitionBeforeSwapEvent).newDocument.head.querySelectorAll(
        "link[as=\"font\"]"
      ),
    ].forEach((link) => link.remove())
  )
</script>

<script>
  import { aosInit } from "@lib/utils"
  document.addEventListener('DOMContentLoaded', function() {
    aosInit()
  })
  document.addEventListener("astro:after-swap", aosInit)
</script>

utils.ts:
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import AOS from "aos"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date)
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "")
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

export function aosInit() {
  AOS.init({
    disable: function() {
      return window.innerWidth < 1024
    },
  } as AOS.AosOptions)
  window.addEventListener("load", function () {
    AOS.refresh()
  })
}

tailwind.config.mjs:
import defaultTheme from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ijo-tua": "#43594B",
        "ijo-muda": "#DFDDAE",
        "kuning": "#F9A402",
        "oren": "#FB6500",
        "bata": "#992800",
        "hitam": "#252525",
      },
      fontFamily: {
        "sans": ["Literata", ...defaultTheme.fontFamily.sans],
        "display": ["Sugo Bold", ...defaultTheme.fontFamily.sans],
        "body": ["Sugo Regular", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
      textShadow: {
        sm: "1px 1px var(--tw-shadow-color)",
        DEFAULT: "2px 2px var(--tw-shadow-color)",
        md: "3px 3px var(--tw-shadow-color)",
        lg: "4px 4px var(--tw-shadow-color)",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          })
        },
        { values: theme("textShadow") }
      )
    })
  ],
}