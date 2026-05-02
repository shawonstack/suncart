import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

const popularProducts = products.slice(0, 3);

const brands = [
  {
    name: 'SunShade',
    icon: '/images/brand-sunshade.png',
    tagline: 'See the world in style',
  },
  {
    name: 'Sukeen',
    icon: '/images/brand-sukeen.png',
    tagline: 'Stay cool, stay active',
  },
  {
    name: 'Raymylo',
    icon: '/images/brand-raymylo.png',
    tagline: 'Hydration redefined',
  },
  {
    name: 'Warmco',
    icon: '/images/brand-warmco.png',
    tagline: 'Breeze on the go',
  },
];

const tips = [
  {
    icon: '/images/tip-sunscreen.png',
    title: 'Apply SPF 30+ Sunscreen',
    tip: "Reapply every 2 hours when outdoors. Don't forget your ears, neck, and the back of your hands.",
  },
  {
    icon: '/images/tip-water.png',
    title: 'Stay Hydrated',
    tip: 'Drink at least 8–10 glasses of water daily in summer. Add lemon or cucumber for a refreshing twist.',
  },
  {
    icon: '/images/tip-sunglass.png',
    title: 'Wear UV-Blocking Sunglasses',
    tip: "Look for sunglasses labeled '100% UV protection' to protect eyes from harmful UVA and UVB rays.",
  },
  {
    icon: '/images/tip-fabric.png',
    title: 'Cover Up with Light Fabrics',
    tip: 'Wear light-colored, loose-fitting, breathable cotton clothes to keep your body temperature regulated.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-orange-600 text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <span className="inline-block bg-amber-400/20 border border-amber-400/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
              Summer Sale is Live
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold leading-none mb-6"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              BEAT THE
              <br />
              <span className="text-amber-400">HEAT</span>
              <br />
              THIS SUMMER
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-md leading-relaxed">
              Discover premium summer essentials — from UV-blocking shades to
              cooling towels. Stay fresh, stylish, and sun-ready all season
              long.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="btn-sun text-base py-3 px-8 inline-block animate__animated animate__pulse animate__infinite animate__slower"
              >
                Shop Now
              </Link>
              <Link
                href="#popular"
                className="px-8 py-3 border-2 border-white/40 text-white rounded-xl hover:bg-white/10 transition-colors font-semibold"
              >
                Browse Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 border-t border-white/20 pt-8">
              {[
                ['50%', 'Off Selected Items'],
                ['200+', 'Happy Customers'],
                ['6', 'Summer Products'],
              ].map(([num, label]) => (
                <div key={label}>
                  <p
                    className="text-2xl font-bold text-amber-400"
                    style={{ fontFamily: 'Bebas Neue' }}
                  >
                    {num}
                  </p>
                  <p className="text-xs text-blue-200">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero product showcase */}
          <div className="hidden md:flex items-center justify-center animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {products.slice(0, 4).map((p, i) => (
                  <div
                    key={p.id}
                    className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 border border-white/20 hover:bg-white/25 transition-colors"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={120}
                      height={100}
                      className="w-full h-24 object-contain"
                    />
                    <p className="text-xs font-semibold text-white mt-1 truncate">
                      {p.name.split(' ').slice(0, 3).join(' ')}
                    </p>
                    <p className="text-amber-400 font-bold text-sm">
                      ${p.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full -mb-1"
          >
            <path
              fill="#fff8e1"
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section id="popular" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Trending Now
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
          >
            Popular <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Top picks loved by our customers — handpicked for this summer
            season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="btn-ocean inline-block">
            View All Products →
          </Link>
        </div>
      </section>

      {/* SUMMER CARE TIPS */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <span className="text-amber-400 font-semibold uppercase tracking-widest text-sm">
              Stay Safe
            </span>
            <h2
              className="text-4xl font-bold mt-2 text-white"
              style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
            >
              Summer Care <span className="text-amber-400">Tips</span>
            </h2>
            <p className="text-blue-200 mt-3 max-w-xl mx-auto">
              Expert tips to keep you healthy, hydrated, and sun-safe all
              season.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:-translate-y-1 duration-300"
              >
                <img
                  src={tip.icon}
                  alt={tip.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="text-white font-bold text-lg mb-2">
                  {tip.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-1">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full -mb-1"
          >
            <path
              fill="#fff8e1"
              d="M0,20 C360,60 720,0 1080,30 C1260,50 1380,15 1440,25 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* TOP BRANDS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Trusted By Many
          </span>
          <h2
            className="text-4xl font-bold mt-2"
            style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
          >
            Top <span className="text-orange-500">Brands</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We partner with the best brands so you get nothing but quality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <img
                src={brand.icon}
                alt={brand.name}
                className="w-16 h-16 object-contain mx-auto mb-3 group-hover:scale-125 transition-transform duration-300"
              />
              <h3 className="font-bold text-gray-900 text-lg">{brand.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{brand.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl">
          <div className="absolute inset-0 sun-shimmer opacity-50" />
          <div className="relative z-10">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.03em' }}
            >
              HOT DEALS UP TO 50% OFF
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-lg mx-auto">
              Limited time summer sale. Don't miss out on our best deals of the
              season!
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition-colors shadow-lg text-lg"
            >
              Grab The Deal →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
