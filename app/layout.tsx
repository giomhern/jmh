import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Link from "next/link";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import NavbarMobileAnimation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Maya Hernandez",
  description: "Created By Best Bro, Gio Maya",
  icons: {
    icon: {
      url: "/head.png",
      type: "image/png",
    },
    shortcut: { url: "/headshot.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen`}>
        {draftMode().isEnabled && (
          <div>
            <Link className="p-4 bg-blue-300 block" href="/api/disable-draft">
              Disable Preview Mode
            </Link>
          </div>
        )}
        <Navbar />
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
