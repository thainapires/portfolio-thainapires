import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Poppins, Rubik } from "next/font/google";
import { Header } from "./components/layout/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Thainá Pires - Portfolio",
  description: "Portfolio of Thainá Pires",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${rubik.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}> 
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
