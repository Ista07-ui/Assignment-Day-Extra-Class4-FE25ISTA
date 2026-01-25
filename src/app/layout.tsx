import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700", "900"],
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beranda & Menu Hadeon Spot",
  description: "Nikmati kelezatan kuliner tradisional Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${beVietnamPro.variable} antialiased bg-background-light dark:bg-background-dark text-[#1b0d0e] dark:text-[#fcf8f8] min-h-screen`}>
        <div className="layout-container flex h-full grow flex-col">
           {children}
        </div>
      </body>
    </html>
  );
}
