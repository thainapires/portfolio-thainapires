'use client';

import { ChevronDown, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
                        <Palette className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg lg:text-2xl">Thainá Pires</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-3 lg:gap-8 xl:gap-12 relative">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm lg:text-md xl:text-lg font-base lg:font-medium transition-colors 
                                    ${pathname === item.path ? 'text-primary font-bold' : 'text-gray-200 hover:text-primary'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div 
                            className="relative"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-sm lg:text-md xl:text-lg font-base lg:font-medium transition-colors text-gray-200 hover:text-primary">
                                More <ChevronDown className="h-4 w-4" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-muted-background border border-gray-700 shadow-lg rounded-lg py-2">
                                    {dropdownItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            href={item.path}
                                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-primary"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <ThemeToggle />
                    </nav>
            </div>
        </header>
    )
    
}