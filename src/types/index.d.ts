export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  links: {
    github: string
    form: string
    submit: string
    bipartite: string
  }
  ogImage: string
}
