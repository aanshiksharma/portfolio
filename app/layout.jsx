import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SidebarNav from "@/components/SidebarNav";

import { faviconConfig } from "@/config/favicon";
import { getProfile } from "@/lib/queries/profile";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Aanshik - Full Stack Developer",
  description: "Portfolio website of Aanshik Sharma, Full Stack Developer",
  verification: {
    google: "iPBfqR1EI-t3Uzh3k_NoVX8b2mHPeZcaENYOjKdPpoA",
  },

  icons: {
    icon: [
      {
        url: faviconConfig.light.icon16,
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconConfig.light.icon32,
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconConfig.light.icon48,
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: faviconConfig.light.ico,
        media: "(prefers-color-scheme: light)",
      },

      {
        url: faviconConfig.dark.icon16,
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconConfig.dark.icon32,
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconConfig.dark.icon48,
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: faviconConfig.dark.ico,
        media: "(prefers-color-scheme: dark)",
      },
    ],

    apple: faviconConfig.apple,
  },
};

export const revalidate = 120;

export default async function RootLayout({ children }) {
  const profile = await getProfile();

  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${playfairDisplay.variable} antialiased overflow-x-hidden`}
      >
        <Navbar profile={profile} />
        <SidebarNav profile={profile} />

        <main>{children}</main>

        <Footer profile={profile} />
      </body>
    </html>
  );
}
