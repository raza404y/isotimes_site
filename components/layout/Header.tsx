'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/categories';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            {/* Top Bar - Date and Subscribe */}
            <div className="border-b border-gray-100">
                <div className="container flex items-center justify-between py-2">
                    <span className="text-xs text-gray-500 hidden sm:block">{currentDate}</span>
                    <div className="flex items-center gap-4 ml-auto">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
                            aria-label="Search"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <Link href="/subscribe" className="btn btn-primary text-xs px-4 py-2">
                            Subscribe
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header - Logo */}
            <div className="border-b border-gray-200">
                <div className="container py-4 md:py-6 flex justify-start">
                    <Link href="/" className="inline-block">
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                            <span className="text-red-700">Iso</span>Times
                        </h1>
                    </Link>
                </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:block">
                <div className="container">
                    <ul className="flex items-center justify-center gap-8 py-3">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link
                                    href={`/news/${category.slug}`}
                                    className="nav-link"
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden border-t border-gray-100">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-full py-3 flex items-center justify-center gap-2 text-sm font-medium"
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                    Sections
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden border-t border-gray-200 bg-white absolute left-0 right-0 shadow-lg">
                    <ul className="divide-y divide-gray-100">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link
                                    href={`/news/${category.slug}`}
                                    className="block px-6 py-4 text-sm font-medium hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg p-4">
                    <form action="/search" method="GET" className="container max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="search"
                                name="q"
                                placeholder="Search articles..."
                                className="w-full py-3 px-4 pr-12 text-lg border border-gray-300 focus:outline-none focus:border-gray-900"
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                                aria-label="Submit search"
                            >
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute top-2 right-4 p-2 hover:bg-gray-100 rounded"
                        aria-label="Close search"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </header>
    );
}
