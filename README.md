# Soedirman Digital School

import { RiCheckboxCircleFill } from '@remixicon/react';
import { Divider, List, ListItem } from '@tremor/react';
import Link from 'next/link';

const features = [
    {
        id: 1,
        name: <>Mahasiswa aktif S1/Vokasi Universitas Jenderal Soedirman dan <span className="font-medium">terbuka untuk Umum</span></>,
    },
    {
        id: 2,
        name: 'Mengerjakan tugas pretest, upload twibbon, dan mengisi form pendaftaran',
    },
    {
        id: 3,
        name: 'Memiliki minat belajar tentang penggunaan Microsoft Office',
        alt: 'Tertarik untuk belajar cara mengolah dan memahami data',
        other: 'Memiliki minat dalam dunia pemasaran online'
    },
    {
        id: 4,
        name: 'Bersedia mengikuti praktek dasar Microsoft Word, Excel, dan PowerPoint',
        alt: 'Bersedia belajar dasar-dasar analisis data menggunakan Spreadsheet dan Looker Studio',
        other: 'Bersedia belajar tentang berbagai platform media sosial untuk pemasaran'
    },
    {
        id: 5,
        name: 'Memiliki akses ke perangkat komputer untuk mengerjakan tugas',
        alt: 'Memiliki keingintahuan tentang cara membuat visualisasi data',
        other: 'Tertarik untuk belajar membuat konten digital'
    },
];

export default function Course() {
    return (
        <div className="px-6 lg:max-w-[75rem] lg:mx-auto">
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Learning Path📚</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/3 rounded-tremor-default border border-tremor-border bg-white p-6">
                    <div className="flex gap-2 h-20 w-full">
                        <img src="/assets/ignasius.svg" alt="Office" className="w-[72px] object-cover mb-2 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1632239776255-0a7f24814df2" alt="Office" className="w-full object-cover mb-2 rounded-lg" />
                    </div>
                    <div className="flex items-start justify-between space-x-6">
                        <h3 className="font-semibold text-2xl text-tremor-content-strong">
                            Microsoft Office
                        </h3>
                        <p className="flex items-baseline">
                            <span className="font-semibold text-tremor-content-strong">
                                Gratis✨
                            </span>
                        </p>
                    </div>
                    <List className="mt-4 divide-y-0 text-tremor-content-emphasis">
                        {features.map((item, index) => (
                            <ListItem
                                key={item.id}
                                className="justify-start space-x-2 py-2.5"
                            >
                                <RiCheckboxCircleFill
                                    className={`h-5 w-5 shrink-0 ${index < 2 ? 'text-tremor-brand' : 'text-yellow-500'
                                        }`}
                                    aria-hidden={true}
                                />
                                <span>{item.name}</span>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Link
                        href="/microsoft-office"
                        className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis"
                    >
                        Selengkapnya
                    </Link>
                </div>
                <div className="lg:w-1/3 rounded-tremor-default border border-tremor-border bg-white p-6">
                    <div className="flex gap-2 h-20 w-full">
                        <img src="/assets/bima.svg" alt="Data Analyst" className="w-[72px] object-cover mb-2 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Data Analyst" className="w-full object-cover mb-2 rounded-lg" />
                    </div>
                    <div className="flex items-start justify-between space-x-6">
                        <h3 className="font-semibold text-2xl text-tremor-content-strong">
                            Data Analyst
                        </h3>
                        <p className="flex items-baseline">
                            <span className="font-semibold text-tremor-content-strong">
                                Gratis✨
                            </span>
                        </p>
                    </div>
                    <List className="mt-4 divide-y-0 text-tremor-content-emphasis">
                        {features.map((item, index) => (
                            <ListItem
                                key={item.id}
                                className="justify-start space-x-2 py-2.5"
                            >
                                <RiCheckboxCircleFill
                                    className={`h-5 w-5 shrink-0 ${index < 2 ? 'text-tremor-brand' : 'text-yellow-500'
                                        }`}
                                    aria-hidden={true}
                                />
                                <span>{index < 2 ? item.name : (index >= 2 && index <= 4 ? item.alt : item.name)}</span>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Link
                        href="/data-analyst"
                        className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis"
                    >
                        Selengkapnya
                    </Link>
                </div>
                <div className="lg:w-1/3 rounded-tremor-default border border-tremor-border bg-white p-6">
                    <div className="flex gap-2 h-20 w-full">
                        <img src="/assets/agusleo.svg" alt="Market" className="w-[72px] object-cover mb-2 rounded-lg" />
                        <img src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532" alt="Market" className="w-full object-cover mb-2 rounded-lg" />
                    </div>
                    <div className="flex items-start justify-between space-x-6">
                        <h3 className="font-semibold text-2xl text-tremor-content-strong">
                            Digital Marketing
                        </h3>
                        <p className="flex items-baseline">
                            <span className="font-semibold text-tremor-content-strong">
                                Gratis✨
                            </span>
                        </p>
                    </div>
                    <List className="mt-4 mb-[63px] divide-y-0 text-tremor-content-emphasis">
                        {features.map((item, index) => (
                            <ListItem
                                key={item.id}
                                className="justify-start space-x-2 py-2.5"
                            >
                                <RiCheckboxCircleFill
                                    className={`h-5 w-5 shrink-0 ${index < 2 ? 'text-tremor-brand' : 'text-yellow-500'
                                        }`}
                                    aria-hidden={true}
                                />
                                <span>{index < 2 ? item.name : (index >= 2 && index <= 4 ? item.other : item.name)}</span>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Link
                        href="/digital-marketing"
                        className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis"
                    >
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    );
}

saya ingin kode nextjs diatas dimigrasi menjadi kode astro dan tolong efisiensikan serta beri aos.
informasi tambahan: jangan suruh saya untuk install package, tolong buatkan componentnya secara manual di astro.

src/components/Courses.astro:
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
