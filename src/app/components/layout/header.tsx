'use client';

import { Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DropDown } from "../dropdown";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about-me" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact"}
    ];

    const dropdownItems = [
        { name: "Experience", path: "/experience" },
        { name: "Education", path: "/education"},
        { name: "Skills", path: "/skills"}
    ]

    return (
        <header className="flex items-center justify-center py-8 px-10 xl:px-18 bg-muted-background">
            <div className="flex items-center justify-between w-full max-w-6xl">
                <Link href="/" className="flex items-center gap-2">
                    <Palette className="h-6 w-6 text-primary-dark dark:text-primary" />
                    <span className="font-bold text-2xl">Thainá Pires</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 lg:gap-12 relative">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-lg font-medium transition-colors 
                                ${pathname === item.path ? 'text-primary-dark dark:text-primary font-bold' : 'hover:text-primary-dark dark:hover:text-primary'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <DropDown dropdownItems={dropdownItems} />
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
    
}