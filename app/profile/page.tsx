'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;
  const initials =
    user.name
      ?.split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'U';
  const joinDate = new Date(user.createdAt || Date.now()).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 animate__animated animate__fadeIn">
      {/* Profile card */}
      <div className="glass-card rounded-3xl shadow-xl overflow-hidden">
        {/* Banner */}
        <div className="h-36 bg-gradient-to-r from-blue-800 via-blue-600 to-orange-500 relative">
          <div className="absolute inset-0 sun-shimmer opacity-40" />
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 500 40" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="white"
                fillOpacity="0.85"
                d="M0,20 C125,40 375,0 500,20 L500,40 L0,40 Z"
              />
            </svg>
          </div>
        </div>

        <div className="px-8 pb-8 -mt-8 relative">
          {/* Avatar */}
          <div className="flex items-end justify-between mb-6">
            <div className="relative">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || 'User'}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                  <span
                    className="text-white text-3xl font-bold"
                    style={{ fontFamily: 'Bebas Neue' }}
                  >
                    {initials}
                  </span>
                </div>
              )}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <Link href="/profile/update" className="btn-sun py-2 px-5 text-sm">
              ✏️ Edit Profile
            </Link>
          </div>

          {/* User info */}
          <div>
            <h1
              className="text-3xl font-bold text-gray-900"
              style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
            >
              {user.name}
            </h1>
            <p className="text-gray-500 mt-1">{user.email}</p>
          </div>

          {/* Details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', value: user.name, icon: '👤' },
              { label: 'Email Address', value: user.email, icon: '📧' },
              { label: 'Member Since', value: joinDate, icon: '📅' },
              { label: 'Account Status', value: 'Active ✅', icon: '🔒' },
            ].map(({ label, value, icon }) => (
              <div
                key={label}
                className="bg-amber-50 rounded-2xl p-4 border border-amber-100"
              >
                <p className="text-xs text-orange-600 font-semibold uppercase tracking-wider mb-1">
                  {icon} {label}
                </p>
                <p className="text-gray-800 font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* Quick links */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link
              href="/products"
              className="flex items-center gap-2 p-3 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors text-sm font-semibold text-orange-700"
            >
              <span>🛍️</span> Browse Products
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-sm font-semibold text-blue-700"
            >
              <span>🏠</span> Home
            </Link>
            <Link
              href="/profile/update"
              className="flex items-center gap-2 p-3 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors text-sm font-semibold text-amber-700"
            >
              <span>⚙️</span> Update Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
