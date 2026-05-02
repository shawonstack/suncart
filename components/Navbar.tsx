'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from '@/lib/auth-client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    toast.success('Logged out successfully!');
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span
                className="text-white text-lg font-bold"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                S
              </span>
            </div>
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              <span className="text-orange-600">Sun</span>
              <span className="text-amber-500">Cart</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Products
            </Link>
            {session && (
              <Link
                href="/profile"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                My Profile
              </Link>
            )}
          </div>

          {/* Auth section */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 p-1 rounded-full hover:bg-amber-100 transition-colors"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-orange-400 object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center border-2 border-orange-400">
                      <span className="text-white font-bold text-sm">
                        {session.user?.name?.[0]?.toUpperCase() || 'U'}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {session.user?.name?.split(' ')[0]}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-amber-100 py-1 animate__animated animate__fadeIn animate__faster">
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span>👤</span> My Profile
                    </Link>
                    <hr className="my-1 border-amber-100" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <span>🚪</span> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-orange-600 font-semibold hover:bg-orange-50 rounded-xl transition-colors"
                >
                  Login
                </Link>
                <Link href="/register" className="btn-sun text-sm py-2 px-5">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-amber-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200 animate__animated animate__fadeInDown animate__faster">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:bg-amber-100 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="px-4 py-2 text-gray-700 hover:bg-amber-100 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              {session ? (
                <>
                  <Link
                    href="/profile"
                    className="px-4 py-2 text-gray-700 hover:bg-amber-100 rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
