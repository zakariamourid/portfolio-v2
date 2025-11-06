import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'
import { OFPPTIcon } from '@/components/icons/institutions/ofppt'
import { School1337Icon } from '@/components/icons/institutions/1337'
import { UM6PIcon } from '@/components/icons/institutions/um6p'
import type { IconComponent } from '@/types'
import type React from 'react'

export const AVATAR = {
  name: 'Zakariae Mourid',
  initials: 'ZM'
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/zakariamourid',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zakariae-mourid/',
    icon: LinkedInIcon
  },
  {
    title: 'X (Twitter)',
    url: 'https://x.com/zakariamourid10',
    icon: XIcon
  },
  {
    title: 'Email',
    url: 'mailto:zakariae.mourid@gmail.com',
    icon: MailIcon
  }
  // ,
  // {
  //   title: 'CV App',
  //   url: 'https://cv.emapeire.xyz', //TODO: add cv url
  //   icon: FileTextIcon
  // },
  // {
  //   title: 'Link App',
  //   url: 'https://link.emapeire.xyz', //TODO: add link url
  //   icon: LinkIcon
  // }
]

export const iconMap: Record<string, IconComponent> = {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  OpenAIIcon,
  ReactIcon,
  SWCIcon,
  TypeScriptIcon,
  ViteIcon,
  ShadcnIcon,
  TailwindCSSIcon,
  AstroIcon,
  SvelteIcon,
  NodeJSIcon,
  VitestIcon,
  BootstrapIcon,
  SupabaseIcon,
  ReduxIcon,
  PNPMIcon,
  VercelIcon,
  BasehubIcon,
  GraphQLIcon
}

export const institutionIconMap: Record<string, React.ComponentType<any>> = {
  OFPPTIcon,
  School1337Icon,
  UM6PIcon
}
