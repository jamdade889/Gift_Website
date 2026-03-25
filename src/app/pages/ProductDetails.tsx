import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Star, Package, Sparkles, Shield } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4" style={{ color: 'var(--luxury-navy)' }}>
            Product not found
          </h2>
          <button
            onClick={() => navigate('/collections')}
            className="px-6 py-3 rounded-full"
            style={{ 
              backgroundColor: 'var(--luxury-gold)',
              color: 'white'
            }}
          >
            Back to Collections
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-sm transition-all duration-300 hover:translate-x-[-4px] opacity-70 hover:opacity-100"
          style={{ color: 'var(--luxury-navy)' }}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-28">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.featured && (
                    <div 
                      className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm tracking-wide flex items-center space-x-2 shadow-lg"
                      style={{ 
                        backgroundColor: 'var(--luxury-gold)',
                        color: 'white'
                      }}
                    >
                      <Star className="h-4 w-4 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Category Badge */}
              <div>
                <span 
                  className="inline-block px-4 py-1 rounded-full text-xs tracking-widest uppercase"
                  style={{ 
                    backgroundColor: 'var(--luxury-cream)',
                    color: 'var(--luxury-accent)'
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* Title & Price */}
              <div>
                <h1 
                  className="text-4xl md:text-5xl mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: 'var(--luxury-navy)'
                  }}
                >
                  {product.name}
                </h1>
                <div className="flex items-baseline space-x-4">
                  <span 
                    className="text-5xl"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--luxury-gold)',
                      fontWeight: 600
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  <span 
                    className="text-sm opacity-60"
                    style={{ color: 'var(--luxury-charcoal)' }}
                  >
                    per service
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <p 
                  className="text-lg leading-relaxed opacity-80"
                  style={{ color: 'var(--luxury-charcoal)' }}
                >
                  {product.description}
                </p>
              </div>

              {/* Details */}
              {product.details && (
                <div className="space-y-6">
                  {/* Materials */}
                  <div>
                    <h3 
                      className="text-xl mb-3"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--luxury-navy)'
                      }}
                    >
                      Premium Materials
                    </h3>
                    <ul className="space-y-2">
                      {product.details.materials.map((material, index) => (
                        <li 
                          key={index}
                          className="flex items-start space-x-3"
                        >
                          <Check 
                            className="h-5 w-5 mt-0.5 flex-shrink-0"
                            style={{ color: 'var(--luxury-gold)' }}
                          />
                          <span 
                            className="opacity-80"
                            style={{ color: 'var(--luxury-charcoal)' }}
                          >
                            {material}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <h3 
                      className="text-xl mb-3"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--luxury-navy)'
                      }}
                    >
                      Dimensions
                    </h3>
                    <p 
                      className="opacity-80"
                      style={{ color: 'var(--luxury-charcoal)' }}
                    >
                      {product.details.dimensions}
                    </p>
                  </div>

                  {/* Customization */}
                  {product.details.customization && (
                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: 'var(--luxury-cream)' }}
                    >
                      <div className="flex items-start space-x-4">
                        <Sparkles 
                          className="h-6 w-6 mt-1 flex-shrink-0"
                          style={{ color: 'var(--luxury-gold)' }}
                        />
                        <div>
                          <h4 
                            className="text-lg mb-2"
                            style={{ 
                              fontFamily: "'Playfair Display', serif",
                              color: 'var(--luxury-navy)'
                            }}
                          >
                            Fully Customizable
                          </h4>
                          <p 
                            className="text-sm opacity-80"
                            style={{ color: 'var(--luxury-charcoal)' }}
                          >
                            This wrapping style can be personalized to match your specific preferences 
                            and requirements. Contact us to discuss custom options.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg border"
                  style={{ borderColor: 'var(--luxury-gold)' }}
                >
                  <Package 
                    className="h-8 w-8 mx-auto mb-2"
                    style={{ color: 'var(--luxury-gold)' }}
                  />
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--luxury-charcoal)' }}
                  >
                    Premium Packaging
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg border"
                  style={{ borderColor: 'var(--luxury-gold)' }}
                >
                  <Sparkles 
                    className="h-8 w-8 mx-auto mb-2"
                    style={{ color: 'var(--luxury-gold)' }}
                  />
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--luxury-charcoal)' }}
                  >
                    Handcrafted
                  </p>
                </div>
                <div className="text-center p-4 rounded-lg border"
                  style={{ borderColor: 'var(--luxury-gold)' }}
                >
                  <Shield 
                    className="h-8 w-8 mx-auto mb-2"
                    style={{ color: 'var(--luxury-gold)' }}
                  />
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--luxury-charcoal)' }}
                  >
                    Quality Assured
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-8 py-5 rounded-full text-lg tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  style={{ 
                    backgroundColor: 'var(--luxury-gold)',
                    color: 'white',
                    fontWeight: 600
                  }}
                >
                  Request This Service
                </Link>
                <p 
                  className="text-center text-sm mt-4 opacity-70"
                  style={{ color: 'var(--luxury-charcoal)' }}
                >
                  Contact us for pricing on bulk orders
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section 
          className="py-20"
          style={{ backgroundColor: 'var(--luxury-cream)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 
              className="text-3xl md:text-4xl mb-12 text-center"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                color: 'var(--luxury-navy)'
              }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
