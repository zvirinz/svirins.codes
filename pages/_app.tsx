import 'styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { usePanelbear } from "@panelbear/panelbear-nextjs";
import { Analytics } from "components/Analytics";

export default function App({ Component, pageProps }: AppProps) {
    usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    debug: false,
  });
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Analytics />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
