import { Link } from 'react-router';
import { motion } from 'motion/react';
import type { Product } from '../types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {product.featured && (
              <div 
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs tracking-wide flex items-center space-x-1 shadow-md"
                style={{ 
                  backgroundColor: 'var(--luxury-emerald)',
                  color: 'white'
                }}
              >
                <Star className="h-3 w-3 fill-current" />
                <span>Featured</span>
              </div>
            )}
            {/* Overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(10, 22, 40, 0.7)' }}
            >
              <span 
                className="px-6 py-3 rounded-full tracking-wide transition-all duration-300 transform group-hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--luxury-gold)',
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600
                }}
              >
                View Details
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-2">
              <span 
                className="text-xs tracking-widest uppercase opacity-70"
                style={{ color: 'var(--luxury-accent)' }}
              >
                {product.category}
              </span>
            </div>
            <h3 
              className="text-xl mb-2 transition-colors duration-300"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                color: 'var(--luxury-navy)'
              }}
            >
              {product.name}
            </h3>
            <p 
              className="text-sm mb-4 line-clamp-2 opacity-80"
              style={{ color: 'var(--luxury-charcoal)' }}
            >
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span 
                className="text-2xl"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: 'var(--luxury-gold)',
                  fontWeight: 600
                }}
              >
                ${product.price.toFixed(2)}
              </span>
              {product.details?.customization && (
                <span 
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: 'var(--luxury-cream)',
                    color: 'var(--luxury-accent)'
                  }}
                >
                  Customizable
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
