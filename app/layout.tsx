import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anshuman Mohanty",
  description: "Personal Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-h-[100vh]">
      <Head>
      <link rel="shortcut icon" href="../app/favicon.ico" />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
