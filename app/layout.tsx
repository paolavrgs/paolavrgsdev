import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const BeniBlack = localFont({
  src: [
    {
      path: '../public/fonts/BeniBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-beni-black',
})

const RobotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paola Vargas | Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoMono.variable} ${BeniBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
