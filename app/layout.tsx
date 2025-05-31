import { inter } from "@/components/layout/font";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dodcars LBG",
  description:
    "Achieving Sustainable Development Goal 9 and Facilitating Community Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased selection:bg-[#228b22] selection:text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
