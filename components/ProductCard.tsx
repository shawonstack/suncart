import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  category: string;
  badge?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const stars = Array.from(
    { length: 5 },
    (_, i) => i < Math.floor(product.rating),
  );

  const badgeColor =
    {
      'Best Seller': 'from-orange-500 to-red-500',
      'Hot Deal': 'from-red-500 to-pink-500',
      'Top Rated': 'from-blue-600 to-cyan-500',
      'Value Pack': 'from-purple-600 to-pink-500',
      New: 'from-teal-500 to-cyan-400',
      'Staff Pick': 'from-indigo-500 to-blue-500',
    }[product.badge || ''] || 'from-orange-500 to-amber-400';

  return (
    <div className="product-card glass-card rounded-2xl overflow-hidden shadow-md">
      {/* Image */}
      <div className="relative bg-white h-52 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={200}
          className="object-contain h-44 w-auto hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 bg-gradient-to-r ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}
          >
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-amber-50 text-amber-700 text-xs font-semibold px-2 py-1 rounded-lg border border-amber-200">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-orange-600 font-semibold uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {stars.map((filled, i) => (
            <span key={i} className={filled ? 'star-filled' : 'star-empty'}>
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>

        {/* Price & button */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-bold text-orange-600">
              ${product.price}
            </span>
            <span className="text-xs text-gray-400 ml-1">/ item</span>
          </div>
          <Link
            href={`/products/${product.id}`}
            className="btn-sun text-sm py-2 px-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
