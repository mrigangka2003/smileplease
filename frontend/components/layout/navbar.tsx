"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold text-slate-900">DentalCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-indigo-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-indigo-600 transition">
              About
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-indigo-600 transition">
              Services
            </Link>
            <Link href="/doctors" className="text-slate-700 hover:text-indigo-600 transition">
              Doctors
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/book-appointment">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              className="block py-2 text-slate-700 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-slate-700 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 text-slate-700 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/doctors"
              className="block py-2 text-slate-700 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Doctors
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-slate-700 hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/book-appointment">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
