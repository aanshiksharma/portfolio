import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SidebarNav from "@/components/SidebarNav";

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
  title: "Aanshik - Full Stack Web Developer",
  description: "",
  verification: {
    google: "iPBfqR1EI-t3Uzh3k_NoVX8b2mHPeZcaENYOjKdPpoA",
  },
};

import { getProfile } from "@/lib/queries/profile";

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
