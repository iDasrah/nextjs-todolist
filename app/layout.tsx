import "./globals.css";
import React from "react";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
        <body className={`${inter.className} antialiased`}>
            {children}
        </body>
      </html>
  );
}
