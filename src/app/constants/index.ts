import { Metadata } from "next";
import { Inter, Poppins, Rubik } from "next/font/google";

export const appFonts = {
    inter: Inter({
        variable: "--font-inter",
        subsets: ["latin"],
    }),
    rubik: Rubik({
        variable: '--font-rubik',
        subsets: ["latin"],
    }),
    poppins: Poppins({
        variable: '--font-poppins',
        subsets: ['latin'],
        weight: '400'
    })
};

export const appMetadata: Metadata = {
    title: "Thainá Pires - Portfolio",
    description: "Portfolio of Thainá Pires",
};