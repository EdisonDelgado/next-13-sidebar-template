import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Providers from "./Providers";
import { MainWrapper } from "../components/MainWrapper";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex h-screen overflow-hidden`}>
        <Providers>
          <MainWrapper>{children}</MainWrapper>
        </Providers>
      </body>
    </html>
  );
}
