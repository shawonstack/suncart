import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
          Our Collection
        </span>
        <h1
          className="text-5xl font-bold mt-2"
          style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
        >
          All <span className="text-orange-500">Products</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Browse our full lineup of summer essentials — from eyewear to cooling
          gear.
        </p>
      </div>

      {/* Category filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {[
          'All',
          'Accessories',
          'Cooling',
          'Hydration',
          'Headwear',
          'Clothing',
          'Electronics',
        ].map(cat => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full text-sm font-medium border-2 border-amber-200 bg-white hover:border-orange-500 hover:text-orange-600 transition-all"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
