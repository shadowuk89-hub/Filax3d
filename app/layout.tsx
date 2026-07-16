import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PointerEffects from "./PointerEffects";
import { sitePath } from "./site-paths";

const sans = Geist({ variable: "--font-sans", subsets: ["latin", "cyrillic"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shadowuk89-hub.github.io/Filax3d/"),
  title: "FILAX3D — Студія 3D-друку",
  description: "3D-друк, моделювання, прототипування та малі серії. Перетворюємо ідеї на точні фізичні об’єкти.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FILAX3D — Студія 3D-друку",
    description: "3D-друк, моделювання, прототипування та малі серії в Україні.",
    url: "/",
    siteName: "FILAX3D",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FILAX3D — Студія 3D-друку",
    description: "Від ідеї та моделі до готового виробу.",
  },
  robots: { index: true, follow: true },
  icons: { icon: sitePath("/filax3d-logo.png"), apple: sitePath("/filax3d-logo.png") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body className={`${sans.variable} ${mono.variable}`}>
    <img className="siteBackdrop" src={sitePath("/printing-background-still.webp")} alt="" aria-hidden="true" />
    <div className="siteVeil" aria-hidden="true" />
    <PointerEffects />
    {children}
  </body></html>;
}
