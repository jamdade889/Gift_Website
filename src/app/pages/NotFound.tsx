import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, var(--luxury-navy) 0%, var(--luxury-charcoal) 100%)`
      }}
    >
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--luxury-gold) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-9xl mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: 'var(--luxury-gold)',
              fontWeight: 700
            }}
          >
            404
          </h1>
          <h2 
            className="text-3xl md:text-4xl mb-6"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: 'white'
            }}
          >
            Page Not Found
          </h2>
          <p 
            className="text-lg mb-10 max-w-md mx-auto opacity-90"
            style={{ color: 'var(--luxury-cream)' }}
          >
            The page you're looking for seems to have been wrapped up and moved elsewhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="group inline-flex items-center space-x-2 px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ 
                backgroundColor: 'var(--luxury-gold)',
                color: 'white',
                fontWeight: 600
              }}
            >
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full text-base tracking-wide border-2 transition-all duration-300 hover:bg-white/10"
              style={{ 
                borderColor: 'white',
                color: 'white',
                fontWeight: 600
              }}
            >
              <span>Browse Collections</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
