import { QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Poppins, Rubik } from "next/font/google";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import "./globals.css";
import { queryClient } from "./lib/react-query";

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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}> 
          <QueryClientProvider client={queryClient}>
            <Header />
            {children}
            <Footer />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
