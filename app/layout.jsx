import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import HeroSectionNavbar from "@/components/HeroSectionNavbar";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${playfairDisplay.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <HeroSectionNavbar />
        {children}
      </body>
    </html>
  );
}
