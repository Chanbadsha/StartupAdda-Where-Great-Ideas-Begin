import { Outfit, Roboto } from "next/font/google";

import "./globals.css";

const inter = Roboto({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "StartupAdda — Share Startup Ideas, Get Feedback & Build Together",
  description:
    "StartupAdda is a modern startup idea-sharing platform where creators and entrepreneurs can share ideas, explore innovative concepts, and get real feedback from a global community. Validate your startup ideas before building and connect with future founders.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
