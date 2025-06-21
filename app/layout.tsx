import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda, Pirata_One } from "next/font/google";
import "./globals.css";
import $ from 'jquery';

const bodoniModa = Bodoni_Moda({
  variable: '--font-bodoni-moda',
  subsets: ['latin']
})



const pirataOne = Pirata_One({
  variable: '--font-pirata-one',
  weight:'400',
  subsets: ['latin']
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MR International - A Spirit of Enterprise. An Obsession for Quality",
  description: "A Spirit of Enterprise. An Obsession for Quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    

    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="maindoc"
      >
        {children}
      </body>
    </html>
  );
}
