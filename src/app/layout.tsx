import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif_Ahom } from "next/font/google";
import Navbar from "@/components/Navbar";
const notoSerif = Noto_Serif_Ahom({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afshal Maharjan | Portfolio",
  description: "Portfolio website created by Afshal Maharjan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSerif.className}>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
