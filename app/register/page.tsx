'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp, signIn } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    image: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = 'Invalid email address';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6)
      errs.password = 'Password must be at least 6 characters';
    return errs;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
        image: form.image || undefined,
      });
      if (res.error) {
        setErrors({ general: res.error.message || 'Registration failed' });
        toast.error(res.error.message || 'Registration failed');
      } else {
        toast.success('Account created successfully! Please log in.');
        router.push('/login');
      }
    } catch {
      setErrors({ general: 'Something went wrong. Please try again.' });
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      await signIn.social({ provider: 'google', callbackURL: '/' });
    } catch {
      toast.error('Google signup failed.');
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-br from-orange-600 to-blue-900 opacity-10 rounded-b-[60%]" />
      </div>

      <div className="w-full max-w-md animate__animated animate__fadeInUp">
        <div className="glass-card rounded-3xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg">
                <span
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: 'Bebas Neue' }}
                >
                  S
                </span>
              </div>
            </Link>
            <h1
              className="text-3xl font-bold text-gray-900"
              style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
            >
              Join SunCart
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Create your account to start shopping
            </p>
          </div>

          {/* General error */}
          {errors.general && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
              <span>⚠️</span> {errors.general}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
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

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={`summer-input ${errors.email ? 'border-red-400 bg-red-50' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
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
                placeholder="https://example.com/your-photo.jpg"
                className="summer-input"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="At least 6 characters"
                className={`summer-input ${errors.password ? 'border-red-400 bg-red-50' : ''}`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-sun w-full py-3 text-base flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />{' '}
                  Creating account...
                </>
              ) : (
                'Create Account →'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <hr className="flex-1 border-amber-200" />
            <span className="text-gray-400 text-xs font-medium">
              OR CONTINUE WITH
            </span>
            <hr className="flex-1 border-amber-200" />
          </div>

          {/* Google */}
          <button
            onClick={handleGoogle}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all font-semibold text-gray-700 disabled:opacity-60"
          >
            {googleLoading ? (
              <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            )}
            Sign up with Google
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-orange-600 font-semibold hover:underline"
            >
              Log in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
