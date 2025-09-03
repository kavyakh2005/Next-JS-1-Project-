import React from 'react'
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-blue-600">Restro Receipies</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link href="/recipes" className="text-gray-700 hover:text-blue-600">Recipes</Link>
                        <Link href="#" className="text-gray-700 hover:text-blue-600">Services</Link>
                        <Link href="#" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </nav>

                    {/* Search box */}
                    <div className="hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button className="text-gray-700 focus:outline-none">
                            ☰
                        </button>

                        

                    </div>
                </div>
            </div> 
        </header>
    );
}

