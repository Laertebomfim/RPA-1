import type { Metadata } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-Open_Sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${open_sans.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
