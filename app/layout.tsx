import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryan-m-simpson.com"),
  title: {
    default: "Ryan Simpson — Robotics Software Engineer",
    template: "%s — Ryan Simpson",
  },
  description:
    "Robotics software engineer focused on autonomy, perception, SLAM, and sensor fusion. Research Assistant at the Autonomous Vehicle Laboratory, Cal Poly Pomona.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryan-m-simpson.com",
    siteName: "Ryan Simpson",
    title: "Ryan Simpson — Robotics Software Engineer",
    description:
      "Robotics software engineer focused on autonomy, perception, SLAM, and sensor fusion. Research Assistant at the Autonomous Vehicle Laboratory, Cal Poly Pomona.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Simpson — Robotics Software Engineer",
    description:
      "Robotics software engineer focused on autonomy, perception, SLAM, and sensor fusion.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-canvas text-ink font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
