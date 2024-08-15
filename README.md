# Soedirman Digital School

components/mui/timeline.tsx:
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CampaignIcon from '@mui/icons-material/Campaign';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <div className="w-fit mx-auto p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Start Timeline📌</span>
            </div>
            <TimelineItem sx={{ '&:before': { display: 'none' }}}>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    14/09/2024 - 17/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'grey.main' }} />
                    <TimelineDot color="grey">
                        <HowToRegIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Open Registration
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    21/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <GroupsIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'warning.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Technical Meeting
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    22/09/2024 - 23/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'warning.main' }} />
                    <TimelineDot color="warning">
                        <HistoryEduIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Pre-Test
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    27/09/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    <TimelineDot color="primary">
                        <CampaignIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'error.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Participant Announcement
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    05/10/2024 - 30/11/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'error.main' }} />
                    <TimelineDot color="error">
                        <LocalLibraryIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Academy
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    07/12/2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                    <TimelineDot color="success">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography marginTop={2} fontStyle={"italic"} fontWeight={600}>
                        Graduation
                    </Typography>
                    <Typography fontSize={12} color={"primary.main"}>
                        <a href="/best-student" className='hover:text-blue-900'>+ Best Student Announcement</a>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <div className="w-fit mx-auto p-2 border bg-white rounded-lg inline-block mt-2">
                <span className="font-display opacity-70">Finish Timeline✅</span>
            </div>
        </Timeline>
    );
}

saya ingin kode nextjs diatas dimigrasi menjadi kode astro dan tolong efisiensikan serta beri aos.
informasi tambahan: jangan suruh saya untuk install material ui, tolong buatkan componentnya secara manual di astro.

src/components/Timeline.astro:
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