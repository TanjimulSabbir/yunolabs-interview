import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import { HomePageMetaData } from "../data/meta-data";
import "../styles/globals.css";

export const metadata: Metadata = HomePageMetaData;

const roboto = Roboto_Slab({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
