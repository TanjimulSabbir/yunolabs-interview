import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";
import { HomePageMetaData } from "../data/meta-data";
import Navbar from "@/components/Navigation/Navbar";

export const metadata: Metadata = HomePageMetaData;

const roboto = Roboto({
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
      </body>
    </html>
  );
}
