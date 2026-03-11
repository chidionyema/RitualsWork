import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCH — ritualswork.com",
  description: "You are not an addict. You are being played like a video game character. ARCH is a private programme that removes the cause, not just manages the behaviour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
