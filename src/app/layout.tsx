import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La candela Dance Academy",
  description: "Welcome to La Candela Dance Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
        {/*{children}*/}
      </body>
    </html>
  );
}
