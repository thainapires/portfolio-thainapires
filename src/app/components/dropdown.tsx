'use client';

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface DropDownProps {
    dropdownItems: { name: string; path: string; }[];
}

export function DropDown({ dropdownItems }: DropDownProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    return (
        <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)} 
        >
            <button
                className="flex items-center gap-1 text-sm lg:text-md xl:text-lg font-base lg:font-medium transition-colors text-gray-200 hover:text-primary cursor-pointer"
                onClick={toggleDropdown} 
            >
                More <ChevronDown className="h-4 w-4" />
            </button>

            {dropdownOpen && (
                <div
                    className="absolute left-0 w-40 bg-muted-background border border-gray-700 shadow-lg rounded-lg py-2"
                    onMouseEnter={() => setDropdownOpen(true)} 
                    onMouseLeave={() => setDropdownOpen(false)} 
                >
                    {dropdownItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-sm lg:text-md xl:text-lg font-base lg:font-medium text-gray-200 hover:bg-gray-700 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}