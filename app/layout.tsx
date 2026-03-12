import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";

/* ── Fonts ── */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/* ── Metadata ── */
export const metadata: Metadata = {
  title: "Doddipalli Deepthi — Frontend Developer",
  description:
    "Frontend Developer & B.Tech CSE graduate passionate about building clean, responsive, and intuitive web interfaces.",
  keywords: ["Frontend Developer", "React", "Next.js", "JavaScript", "Portfolio"],
  authors: [{ name: "Doddipalli Deepthi" }],
  openGraph: {
    title: "Doddipalli Deepthi — Frontend Developer",
    description: "Building fast, accessible & pixel-perfect web experiences.",
    type: "website",
  },
};

/* ── Layout ── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmMono.variable}`}
    >
      <body>
        {/* <PageBackground> */}
          {children}
        {/* </PageBackground> */}
      </body>
    </html>
  );
}