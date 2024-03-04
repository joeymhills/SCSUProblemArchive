import { SiteConfig } from "../types"

import { env } from "../env.mjs"

export const siteConfig: SiteConfig = {
  name: "SCSU Problem Archive",
  author: "Joey Hills",
  description:
    "Solution testing for ICPC-style programming problems.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com/joeymhills",
    form:`${env.NEXT_PUBLIC_APP_URL}/form`,
    submit:`${env.NEXT_PUBLIC_APP_URL}/submit`
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
