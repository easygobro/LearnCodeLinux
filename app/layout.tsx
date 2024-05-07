import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { getServerSession } from "next-auth";
import Logout from "./logout";
import Link from "next/link";
import Dashboard from "./dashboard/page";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linux Learn",
  description: "Application for learning linux",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" className="font-abc">
      <body className="min-h-screen bg-custom-brown flex flex-col">
        <Nav />
        <main className="flex-1 flex justify-center items-center py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}