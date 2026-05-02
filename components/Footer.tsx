import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-950 text-white mt-20">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12"
        >
          <path
            fill="#fff8e1"
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'Bebas Neue' }}
                >
                  S
                </span>
              </div>
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Bebas Neue' }}
              >
                <span className="text-orange-400">Sun</span>
                <span className="text-amber-400">Cart</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your go-to destination for summer essentials. Stay cool, stay
              stylish.
            </p>
            <div className="flex gap-3 mt-4">
              {['facebook', 'instagram', 'twitter'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                >
                  <span className="text-xs font-bold text-white uppercase">
                    {s[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ['Home', '/'],
                ['Products', '/products'],
                ['Login', '/login'],
                ['Register', '/register'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 uppercase tracking-widest text-sm">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Accessories',
                'Cooling',
                'Hydration',
                'Headwear',
                'Clothing',
                'Electronics',
              ].map(c => (
                <li key={c}>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 uppercase tracking-widest text-sm">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📧</span> support@suncartbyshawon.com
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> +88 01798479661
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> mirpur 1, Dhaka 1216
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 mr-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SunCart. All rights reserved. Made with
          for summer lovers.
        </div>
      </div>
    </footer>
  );
}
