import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";
import FireFliesBackground from "@/components/common/fireFlyBackground/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Yilmaz Bingol is a software engineer and mathematician based on New York",
    default:
      "Yilmaz Bingol is a software engineer and mathematician based on New York",
  },
  description:
    "A unique creative portfolio designed by Yilmaz Bingol with cutting-edge technologies like Next.js-14, Tailwind CSS, Three.js, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
