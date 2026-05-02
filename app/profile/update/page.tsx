'use client';

import { useSession, authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', image: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string }>({});

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
    if (session?.user) {
      setForm({
        name: session.user.name || '',
        image: session.user.image || '',
      });
    }
  }, [session, isPending, router]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setErrors({ name: 'Name is required' });
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await authClient.updateUser({
        name: form.name,
        image: form.image || undefined,
      });
      if (res.error) {
        toast.error(res.error.message || 'Update failed');
      } else {
        toast.success('Profile updated successfully! 🎉');
        router.push('/profile');
      }
    } catch {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (isPending || !session) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-6 py-16 animate__animated animate__fadeIn">
      <div className="mb-6">
        <Link
          href="/profile"
          className="text-orange-600 hover:underline text-sm font-semibold flex items-center gap-1"
        >
          ← Back to Profile
        </Link>
      </div>

      <div className="glass-card rounded-3xl shadow-xl p-8">
        <div className="text-center mb-8">
          {/* Current avatar preview */}
          <div className="relative inline-block mb-4">
            {form.image ? (
              <Image
                src={form.image}
                alt="Preview"
                width={88}
                height={88}
                className="w-22 h-22 rounded-full border-4 border-amber-300 shadow-lg object-cover"
                onError={() => setForm({ ...form, image: '' })}
              />
            ) : (
              <div className="w-20 h-20 rounded-full border-4 border-amber-300 shadow-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center mx-auto">
                <span
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: 'Bebas Neue' }}
                >
                  {session.user.name?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
            )}
          </div>
          <h1
            className="text-3xl font-bold text-gray-900"
            style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
          >
            Update Profile ✏️
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Change your name and profile photo
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className={`summer-input ${errors.name ? 'border-red-400 bg-red-50' : ''}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Profile Photo URL{' '}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="url"
              value={form.image}
              onChange={e => setForm({ ...form, image: e.target.value })}
              placeholder="https://example.com/photo.jpg"
              className="summer-input"
            />
            <p className="text-xs text-gray-400 mt-1">
              Paste a direct image link for your avatar
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-sun w-full py-3 text-base flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />{' '}
                Updating...
              </>
            ) : (
              'Save Changes ✓'
            )}
          </button>

          <Link
            href="/profile"
            className="block text-center text-sm text-gray-500 hover:text-gray-700 mt-2"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
