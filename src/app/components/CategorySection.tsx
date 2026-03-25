import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { Category } from '../types';

interface CategorySectionProps {
  categories: Category[];
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--luxury-cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: 'var(--luxury-emerald-dark)'
            }}
          >
            Our Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto opacity-80"
            style={{ color: 'var(--luxury-charcoal)' }}
          >
            Discover our curated selection of premium gift wrapping styles
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link 
                to={`/collections?category=${category.slug}`}
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    />
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 
                        className="text-2xl mb-2"
                        style={{ 
                          fontFamily: "'Playfair Display', serif",
                          color: 'white'
                        }}
                      >
                        {category.name}
                      </h3>
                      <p 
                        className="text-sm mb-4 opacity-90"
                        style={{ color: 'white' }}
                      >
                        {category.description}
                      </p>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span 
                          className="text-sm tracking-wide"
                          style={{ 
                            color: 'var(--luxury-gold)',
                            fontWeight: 600
                          }}
                        >
                          Explore Collection
                        </span>
                        <ArrowRight 
                          className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                          style={{ color: 'var(--luxury-gold)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
