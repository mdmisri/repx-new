import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Instagram, Twitter } from 'lucide-react';
import { VideoBanner } from '../components/VideoBanner';
import Footer from '../components/Footer';

export function Home() {
  const categories = [
    { 
      name: 'Hoodies', 
      color: 'from-purple-800 to-pink-800', 
      pattern: 'bg-gradient-to-br',
    },
    { 
      name: 'T-Shirts', 
      color: 'from-blue-800 to-teal-700', 
      pattern: 'bg-gradient-to-tr',
    },
    { 
      name: 'Vests', 
      color: 'from-orange-700 to-red-800', 
      pattern: 'bg-gradient-to-bl',
    },
    { 
      name: 'Track Pants', 
      color: 'from-green-700 to-emerald-900', 
      pattern: 'bg-gradient-to-r',
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Video Banner */}
      <VideoBanner />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 
          className="text-4xl md:text-5xl font-black text-center mb-12 
          bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 
          animate-pulse">
          REPX
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`rounded-3xl shadow-2xl transform transition-all 
              duration-300 hover:scale-105 hover:rotate-3 
              overflow-hidden relative group ${category.pattern} ${category.color}`}
            >
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
                    {category.name}
                  </h2>
                  <ShoppingBag
                    className="text-white opacity-50 group-hover:opacity-100 
                    transition-opacity duration-300"
                    size={36}
                  />
                </div>
                <Link
                  to={`/shop?category=${category.name}`}
                  className="
                    inline-flex items-center px-4 md:px-6 py-2 md:py-3 
                    bg-white bg-opacity-20 hover:bg-opacity-30 
                    rounded-full text-white font-bold 
                    transition-all duration-300 group
                  "
                >
                  Shop Now
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </Link>
              </div>
              <div
                className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                from-white via-transparent to-transparent z-0"
              ></div>
            </div>
          ))}
        </div>

        {/* Follow Us Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/repx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <Instagram size={40} />
            </a>
            <a
              href="https://twitter.com/repx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Twitter size={40} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-black py-5">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'About Us', path: '/pages/About' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'FAQ', path: '/pages/Faq' },
                { name: 'Shipping Policy', path: '/policies/ShippingPolicy' },
                { name: 'Privacy Policy', path: '/policies/PrivacyPolicy' },
                { name: 'Terms of Service', path: '/policies/termsServices' },
                { name: 'Refund Policy', path: '/policies/RefundPolicy' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
                    flex items-center justify-center
                    w-full text-center
                    py-3 px-4
                    bg-black text-white font-medium
                    border border-white rounded-lg
                    shadow-lg
                    hover:bg-gray-800 hover:text-white
                    active:scale-95
                    transition-all duration-300
                    sm:text-sm md:text-base
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
