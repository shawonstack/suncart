'use client';

import { useSession } from '@/lib/auth-client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/products.json';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (!isPending && !session) {
      toast.error('Please login to view product details!');
      router.push(`/login?redirect=/products/${id}`);
    }
  }, [session, isPending, router, id]);

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">😕</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <Link href="/products" className="btn-sun inline-block mt-4">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const stars = Array.from(
    { length: 5 },
    (_, i) => i < Math.floor(product.rating),
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate__animated animate__fadeIn">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-orange-500">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="bg-white rounded-3xl p-10 shadow-md flex items-center justify-center min-h-[380px]">
          <Image
            src={product.image}
            alt={product.name}
            width={380}
            height={360}
            className="object-contain max-h-80 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
            {product.badge && (
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-1">
            {product.brand}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-0.5">
              {stars.map((filled, i) => (
                <span
                  key={i}
                  className={`text-xl ${filled ? 'star-filled' : 'star-empty'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {product.rating} / 5.0
            </span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 mb-6">
            <span
              className="text-5xl font-bold text-orange-600"
              style={{ fontFamily: 'Bebas Neue' }}
            >
              ${product.price}
            </span>
            <span className="text-gray-400 text-sm mb-2">Per item</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Stock */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-700 font-medium">
              {product.stock} units in stock
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => toast.success(`${product.name} added to cart! 🛒`)}
              className="btn-sun flex-1 text-center py-3 text-base"
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={() => toast.success('Order placed successfully! 🎉')}
              className="btn-ocean flex-1 text-center py-3 text-base"
            >
              ⚡ Buy Now
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 p-5 bg-amber-50 rounded-2xl border border-amber-200">
            <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider">
              Why SunCart?
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                '✅ Free shipping on orders over $50',
                '🔒 Secure checkout with SSL',
                '↩️ 30-day hassle-free returns',
                '⭐ Quality guaranteed',
              ].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related products suggestion */}
      <div className="mt-16">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
        >
          You Might Also <span className="text-orange-500">Like</span>
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {products
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map(p => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="flex-shrink-0 w-48 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow border border-amber-100"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={130}
                  height={100}
                  className="w-full h-24 object-contain mb-3"
                />
                <p className="text-xs font-semibold text-gray-700 line-clamp-2">
                  {p.name}
                </p>
                <p className="text-orange-600 font-bold mt-1">${p.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
