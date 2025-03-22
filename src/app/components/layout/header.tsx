'use client';

import { Palette } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
    const [ isConnected, setIsConnected ] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Education", path: "/education"},
        { name: "Contact", path: "/contact"}
    ];

    return (
        <header className="border-b border-gray-700 py-8 px-18">
            <div className="flex items-center justify-between gap-12">
                <div className="flex items-center justify-between w-full gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Palette className="h-6 w-6 text-primary" />
                        <span className="font-bold text-2xl">Thainá Pires</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-lg font-medium transition-colors hover:text-primary ${
                                    location.pathname === item.path
                                        ? "text-primary"
                                        : "text-foreground"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <ThemeToggle />
            </div>
        </header>
    )
    
}