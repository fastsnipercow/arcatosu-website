/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div id="app-root" className="min-h-screen bg-background text-on-background font-sans flex flex-col">
        {/* Simple Header */}
        <header className="border-b border-outline-variant/20 sticky top-0 bg-surface/80 backdrop-blur-md z-50">
          <nav className="max-w-[1200px] mx-auto px-6 h-16 flex justify-between items-center">
            <div className="flex items-center gap-2 md:gap-3">
              <Link to="/" className="flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl font-display font-bold tracking-tight">
                <img src="/ArcEmblem.png" alt="ARC Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                Alpine Race Club at OSU 
              </Link>
              <a 
                href="https://www.instagram.com/osu.alpine/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors shrink-0 ml-2"
                aria-label="Instagram"
              >
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
              <Link to="/donate" className="bg-primary text-on-primary px-5 py-2 text-sm font-bold rounded-sm">
                Donations Page
              </Link>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-surface border-b border-outline-variant/20 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">Home</Link>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium">Contact</Link>
              <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-primary">Donations Page</Link>
            </div>
          )}
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Simple Footer */}
        <footer className="py-12 border-t border-outline-variant/20 mt-auto">
          <div className="max-w-[1200px] mx-auto px-6 text-center md:text-left">
            <p className="text-sm text-on-surface-variant">
              
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

