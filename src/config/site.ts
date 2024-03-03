import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "DockaBox",
  author: "Joey Hills",
  description:
    "A Docker container Generator.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com/joeymhills",
    form:`${env.NEXT_PUBLIC_APP_URL}/form`
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
