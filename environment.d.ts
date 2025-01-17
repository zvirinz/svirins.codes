declare global {
  interface Window {
    goatcounter: any
  }
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      VERCEL_ENV: 'development' | 'production'
      SPOTIFY_CLIENT_SECRET: string
      SPOTIFY_CLIENT_ID: string
      SPOTIFY_REFRESH_TOKEN: string
    }
  }
}

export {}

declare module '*.svg' {
  import type { ReactElement, SVGProps } from 'react'

  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}
