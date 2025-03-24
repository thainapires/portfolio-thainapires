import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { appFonts } from "./constants";
import "./globals.css";
import { queryClient } from "./lib/react-query";

const fonts = appFonts;

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.inter.variable} ${fonts.rubik.variable} ${fonts.poppins.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}> 
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
