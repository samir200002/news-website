"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Newspaper, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

const categories = [
  "General",
  "Business",
  "Technology",
  "Entertainment",
  "Sports",
  "Science",
  "Health",
];

 function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Newspaper className="h-6 w-6" />
            <span className="text-xl font-bold">NewsApp</span>
          </Link>

          {/* Desktop View: Categories + Search (Center) */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/?category=${cat.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md transition"
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Right Side: ModeToggle (Always visible) + Search (Desktop) */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden lg:block relative w-64">
              <Input
                type="search"
                placeholder="Search news..."
                className="w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            {/* Dark Mode Toggle - Always Visible */}
            <ModeToggle />

            {/* Mobile View: Hamburger Menu (For screens < 1024px) */}
            <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center space-y-4 p-4 bg-white shadow-md rounded-md">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="w-full">
              <Input
                type="search"
                placeholder="Search news..."
                className="w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            {/* Mobile Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/?category=${cat.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-md transition"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;