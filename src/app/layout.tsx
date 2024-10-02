import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/lib/providers/providers";

const delaGothicOne = localFont({
  src: "./fonts/DelaGothicOne-Regular.ttf",
  variable: "--font-dela-gothic-one",
});

export const metadata: Metadata = {
  title: "Catmash",
  description: "Webapp qui permet de trouver le chat le plus mignon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${delaGothicOne.variable} font-sans antialiased bg-primary-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
