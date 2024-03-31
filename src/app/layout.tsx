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
      "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | Yilmaz Bingol",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by Yilmaz Bingol",
  },
  description:
    "A unique creative portfolio designed by Yilmaz Bingol with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
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
