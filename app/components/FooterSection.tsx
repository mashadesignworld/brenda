// components/FooterSection/FooterSection.tsx

import Link from 'next/link';
import { Inter } from 'next/font/google'; // Assuming Inter is your main body font

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Define a CSS variable for Inter font
});

export default function FooterSection() {
  return (
    <footer className={`${inter.variable} font-sans`}>
      {/* Top Section: White background with columns */}
      <div className="bg-white py-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-8 lg:gap-12 text-center md:text-left">

          {/* Column 1: Get Started */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Get Started</h3>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto md:mx-0 mb-6"></div> {/* Underline */}
            <ul className="list-none p-0 m-0 space-y-3 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200">Book A 15-Min 1:1 Session</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200">Explore Our Courses</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200">Book A Corporate Workshop</Link></li>
            </ul>
          </div>

          {/* Column 2: Free Resources */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Free Resources</h3>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto md:mx-0 mb-6"></div> {/* Underline */}
            <ul className="list-none p-0 m-0 space-y-3 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200">Attend Free Workshop</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Connect With Us</h3>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto md:mx-0 mb-6"></div> {/* Underline */}
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-4 text-2xl text-gray-600">
              <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors duration-200">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors duration-200">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors duration-200">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-base" />
                <span>+254 720 975 755</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-base" />
                <span>brendakeyacoaching@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Darker background with copyright and policies */}
      <div className="bg-gray-800 text-white py-6 px-6 md:px-8 lg:px-12 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Copyright and Company Info */}
          <div className="text-center md:text-left">
            <p className="mb-2 md:mb-0">© 2025 • BrendaKeya</p>
            <p className="text-xs text-gray-400">
              Presence & Expression Coach, Sustainability Branding Consultant.
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <Link href="#" className="hover:underline transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:underline transition-colors duration-200">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}