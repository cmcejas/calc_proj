import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Ultimate Calc Review",
  description: "by Carlos and Joey",
  openGraph: {
    images: 'https://calc-proj.vercel.app/meta.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
