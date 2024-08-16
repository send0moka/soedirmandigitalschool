# Soedirman Digital School

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
    return (
        <div className='space-y-4 px-6 lg:px-48'>
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Need More Help?🤔</span>
            </div>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Apakah acara ini gratis?
                </AccordionSummary>
                <AccordionDetails>
                    Ya, acara ini gratis dan terbuka untuk umum.
                </AccordionDetails>
            </Accordion>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Kapan pendaftaran Soedirman Digital School dibuka?
                </AccordionSummary>
                <AccordionDetails>
                    Dari tanggal 14 September - 17 September 2024.
                </AccordionDetails>
            </Accordion>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Komunikasi utama antara panitia dan pendaftar/calon pendaftar akan dilakukan dimana?
                </AccordionSummary>
                <AccordionDetails>
                    Terdapat WhatsApp Community untuk memfasilitasi pertanyaan dan komunikasi pendaftar/calon pendaftar Soedirman Digital School.
                </AccordionDetails>
            </Accordion>
            <Accordion className='rounded-lg'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    Bagaimana sistem pendaftaran tiap pelatihan?
                </AccordionSummary>
                <AccordionDetails>
                    Pendaftaran dilakukan secara online melalui website Soedirman Digital School.
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

saya ingin kode nextjs diatas dimigrasi menjadi kode astro dan tolong efisiensikan serta beri aos.
informasi tambahan: jangan suruh saya untuk install package, tolong buatkan componentnya secara manual di astro.

src/components/Faq.astro:
<!-- isikan disini -->

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
