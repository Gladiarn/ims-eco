import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <TooltipProvider delayDuration={100}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TooltipProvider>
    </ThemeProvider>
  );
}
