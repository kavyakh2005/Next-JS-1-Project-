import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Restro Receipes</h2>
            <p className="text-sm">
              Building modern web apps with React & Tailwind CSS.  
              Fast, responsive, and beautiful.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm">Email: support@example.com</p>
            <p className="text-sm">Phone: +123 456 789</p>
            <p className="text-sm">Location: New York, USA</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} MyLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
