import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "PHELA | Africa's Entertainment OS",
  description: "Premium events, ticketing, and entertainment platform for Africa and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-midnight text-white">{children}</body>
    </html>
  );
}