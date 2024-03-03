import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Combobox } from "@/components/ui/combobox"
import { Icons } from "@/components/icons"

const images: Option[] = [
  {
    value: "Alpine",
    label: "Alpine",
  },
  {
    value: "nginx",
    label: "nginx",
  },
  {
    value: "busybox",
    label: "busybox",
  },
  {
    value: "ubuntu",
    label: "ubuntu",
  },
  {
    value: "redis",
    label: "redis",
  },
  {
    value: "postgres",
    label: "postgres",
  },
  {
    value: "python",
    label: "python",
  },
  {
    value: "node",
    label: "node",
  },
  {
    value: "mysql",
    label: "mysql",
  },
  {
    value: "httpd",
    label: "httpd",
  },
  {
    value: "mongo",
    label: "mongo",
  },
  {
    value: "golang",
    label: "golang",
  },
  {
    value: "centos",
    label: "centos",
  },
  {
    value: "debian",
    label: "debian",
  },
  {
    value: "wordpress",
    label: "wordpress",
  },
]
export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.container className="h-32 w-32" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-2">
          
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Choose a disk image for your docker container
          </p>
          <Combobox 
            options = {images}
            subject = "images"/> 
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
           Placeholder 
          </p>
          <Combobox 
            options = {images}
            subject = "images"/> 
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Placeholder
          </p>
          <Combobox 
            options = {images}
            subject = "images"/> 
        </div>
      </div>
    </main>
  )
}
