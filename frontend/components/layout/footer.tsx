import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Smile } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Smile Please</span>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Your trusted partner for modern dental care. Using advanced technology, we deliver comprehensive treatments for a healthy, confident smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-slate-400 hover:text-white transition text-sm">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-slate-400 hover:text-white transition text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">General Dentistry</li>
              <li className="text-slate-400 text-sm">Teeth Whitening</li>
              <li className="text-slate-400 text-sm">Root Canal Therapy</li>
              <li className="text-slate-400 text-sm">Dental Implants</li>
              <li className="text-slate-400 text-sm">Orthodontics</li>
              <li className="text-slate-400 text-sm">3D Smile Restoration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">123 Dental Street, Medical District, City 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-slate-400">info@smileplease.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 10:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Smile Please. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

