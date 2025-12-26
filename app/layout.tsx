import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/globals.css";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "QuickBite",
  description: "QuickBite is a food delivery app that connects local restaurants with customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        <ToastContainer />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
