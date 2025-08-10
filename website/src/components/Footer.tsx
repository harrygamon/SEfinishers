'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SE Finishers</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional print finishing services specializing in foiling and die cutting up to SRA3. 
              Expert finishing by Zoe Axford with personal attention to every project.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-gray-300">
                <span className="font-semibold">Format:</span> Up to SRA3 (450mm × 320mm)
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Zoe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-300">
                <a href="mailto:info@sefinishers.co.uk" className="hover:text-white transition-colors">
                  info@sefinishers.co.uk
                </a>
              </div>
              <div className="text-gray-300">
                <a href="tel:+441234567890" className="hover:text-white transition-colors">
                  01234 567890
                </a>
              </div>
              <div className="text-gray-300 mt-3">
                <span className="font-semibold">Hours:</span><br />
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Services Summary */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">✨ Foiling</div>
              <div>Up to SRA3</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">✂️ Die Cutting</div>
              <div>Precision cuts</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">📄 Duplexing</div>
              <div>Both sides</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">📖 Stitching</div>
              <div>Binding services</div>
            </div>
            <div className="text-gray-300">
              <div className="font-semibold text-white mb-1">👋 Hand Finishing</div>
              <div>Bespoke work</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © {currentYear} SE Finishers. All rights reserved.
          </div>
          <div className="text-gray-300 text-sm mt-2 md:mt-0">
            Professional print finishing services by Zoe Axford
          </div>
        </div>
      </div>
    </footer>
  );
}