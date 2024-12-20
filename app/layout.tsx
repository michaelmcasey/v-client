import "./globals.scss";
import { Inter, Roboto, Montserrat, Poppins, Overpass_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import ThemeSettingsProvider from "@/components/theme-settings-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins"
});

const overpass_mono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-overpass-mono"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV !== "development" ? (
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="c37edc28-ee5f-4c62-9ce3-377fa6f600a8"
        />
      ) : null}
      <body
        className={`${inter.className} ${inter.variable} ${roboto.variable} ${montserrat.variable} ${poppins.variable} ${overpass_mono.variable}`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <ThemeSettingsProvider>{children}</ThemeSettingsProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
