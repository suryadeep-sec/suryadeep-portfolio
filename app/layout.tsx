import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suryadeep Jadeja | MERN Stack Developer",
  description: "Suryadeep Jadeja’s developer portfolio: React interfaces, Node.js and Express APIs, MongoDB projects and an application security foundation. Based in Jamnagar, India.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
