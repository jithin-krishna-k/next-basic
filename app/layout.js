import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Next.js App — fast & secure',
  description: 'Short pitch',
  openGraph: {
    title: 'Next.js App — fast & secure',
    description: 'Short pitch',
    url: 'https://example.com',
    siteName: 'Next.js App',
    images: [{ url: 'https://example.com/og/default.png', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image', title: 'My App' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
