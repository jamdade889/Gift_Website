import type { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'luxury',
    name: 'Luxury Collection',
    description: 'Premium gift wrapping with emerald accents and silk ribbons',
    image: 'https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwd3JhcHBpbmclMjBlbWVyYWxkJTIwZ3JlZW58ZW58MXx8fHwxNzcyNjg5ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'luxury'
  },
  {
    id: 'elegant',
    name: 'Elegant Boxes',
    description: 'Sophisticated presentation boxes for any occasion',
    image: 'https://images.unsplash.com/photo-1760804876134-a8089aaeccca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwYm94JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MjY4OTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'elegant'
  },
  {
    id: 'silk',
    name: 'Silk & Satin',
    description: 'Luxurious silk and satin wrapping materials',
    image: 'https://images.unsplash.com/photo-1772127822448-6bbf354b600d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2lsayUyMHJpYmJvbiUyMHdyYXBwaW5nfGVufDF8fHx8MTc3MjY4OTg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'silk'
  },
  {
    id: 'premium',
    name: 'Premium Papers',
    description: 'Hand-selected artisan wrapping papers',
    image: 'https://images.unsplash.com/photo-1726931535415-edbc43d42c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd3JhcHBpbmclMjBwYXBlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNjg5ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'premium'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Emerald Elegance',
    description: 'Luxurious emerald green wrapping with velvet ribbon and gold accents',
    price: 45.00,
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwd3JhcHBpbmclMjBlbWVyYWxkJTIwZ3JlZW58ZW58MXx8fHwxNzcyNjg5ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    details: {
      materials: ['Emerald Velvet Paper', 'Gold Foil Ribbon', 'Wax Seal'],
      dimensions: 'Customizable to gift size',
      customization: true
    }
  },
  {
    id: '2',
    name: 'White & Gold Opulence',
    description: 'Pristine white presentation with gold trim and ribbon details',
    price: 38.00,
    category: 'elegant',
    image: 'https://images.unsplash.com/photo-1512542194577-1db2e4eef915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ2lmdCUyMHdyYXBwaW5nJTIwd2hpdGUlMjBnb2xkfGVufDF8fHx8MTc3MjY4OTg3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    details: {
      materials: ['Premium White Paper', 'Gold Foil Trim', 'Silk Lining'],
      dimensions: '30cm x 20cm x 10cm',
      customization: true
    }
  },
  {
    id: '3',
    name: 'Festive Gold Symphony',
    description: 'Shimmering gold wrapping with emerald ribbon accents',
    price: 52.00,
    category: 'silk',
    image: 'https://images.unsplash.com/photo-1766858845850-1ed4e38c829b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZlJTIwZ2lmdCUyMHdyYXBwaW5nJTIwZ29sZCUyMGFjY2VudHN8ZW58MXx8fHwxNzcyNjg5ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    details: {
      materials: ['Gold Metallic Paper', 'Emerald Silk Ribbon', 'Pearl Pins'],
      dimensions: 'Flexible wrapping',
      customization: true
    }
  },
  {
    id: '4',
    name: 'Botanical Artisan',
    description: 'Handmade paper with botanical imprints and natural twine',
    price: 32.00,
    category: 'premium',
    image: 'https://images.unsplash.com/photo-1765097715915-fad8841addd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGdpZnQlMjB3cmFwcGluZyUyMGJvdGFuaWNhbHxlbnwxfHx8fDE3NzI2ODk4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    details: {
      materials: ['Handmade Paper', 'Natural Twine', 'Dried Flowers'],
      dimensions: 'Custom sizes available',
      customization: true
    }
  },
  {
    id: '5',
    name: 'Emerald Ribbon Box',
    description: 'Premium gift box with luxurious emerald ribbon bow',
    price: 48.00,
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1769805222413-9422a0027c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZ2lmdCUyMGJveCUyMGVtZXJhbGQlMjByaWJib258ZW58MXx8fHwxNzcyNjg5ODczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      materials: ['Rigid Gift Box', 'Velvet Emerald Ribbon', 'Magnetic Closure'],
      dimensions: 'Tailored to item',
      customization: true
    }
  },
  {
    id: '6',
    name: 'Classic Charm',
    description: 'Timeless wrapping with elegant bow detail',
    price: 35.00,
    category: 'elegant',
    image: 'https://images.unsplash.com/photo-1764650909534-ebe7b1206466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcHJlc2VudCUyMGJvdyUyMGRldGFpbHxlbnwxfHx8fDE3NzI2ODk4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      materials: ['Premium Paper', 'Grosgrain Ribbon', 'Gift Tag'],
      dimensions: 'Multiple sizes',
      customization: false
    }
  },
  {
    id: '7',
    name: 'Handcrafted Collection',
    description: 'Artisan wrapping with handmade materials and unique touches',
    price: 40.00,
    category: 'premium',
    image: 'https://images.unsplash.com/photo-1670540805686-a73a025c0dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMGdpZnQlMjB3cmFwcGluZyUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NzI2ODk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      materials: ['Textured Paper', 'Leather Cord', 'Metal Tag'],
      dimensions: 'Variable',
      customization: true
    }
  },
  {
    id: '8',
    name: 'Silk Luxury Wrap',
    description: 'Smooth silk ribbon with exquisite bow presentation',
    price: 42.00,
    category: 'silk',
    image: 'https://images.unsplash.com/photo-1772127822448-6bbf354b600d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2lsayUyMHJpYmJvbiUyMHdyYXBwaW5nfGVufDF8fHx8MTc3MjY4OTg3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    details: {
      materials: ['Satin Fabric', 'Double-faced Silk Ribbon', 'Decorative Pin'],
      dimensions: 'Custom fit',
      customization: true
    }
  },
  {
    id: '9',
    name: 'Heritage Collection',
    description: 'Traditional craftsmanship meets modern elegance',
    price: 55.00,
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1671393759133-781c76bb8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmFwcGVkJTIwcHJlc2VudHMlMjBlbGVnYW50JTIwZGlzcGxheXxlbnwxfHx8fDE3NzI2ODk4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      materials: ['Embossed Paper', 'Vintage Ribbon', 'Wax Seal'],
      dimensions: 'Bespoke sizing',
      customization: true
    }
  },
  {
    id: '10',
    name: 'Signature Presentation',
    description: 'Our signature luxury presentation box',
    price: 50.00,
    category: 'elegant',
    image: 'https://images.unsplash.com/photo-1760804876134-a8089aaeccca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwYm94JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3MjY4OTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    details: {
      materials: ['Rigid Box', 'Magnetic Closure', 'Brand Seal'],
      dimensions: '25cm x 25cm x 8cm',
      customization: true
    }
  },
  {
    id: '11',
    name: 'Velvet Dreams',
    description: 'Plush velvet ribbon with crystal embellishments',
    price: 44.00,
    category: 'silk',
    image: 'https://images.unsplash.com/photo-1765283039352-773e8cc42ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjByaWJib24lMjBnaWZ0JTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzI2ODk4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      materials: ['Velvet Ribbon', 'Crystal Detail', 'Organza Layer'],
      dimensions: 'Standard & Large',
      customization: false
    }
  },
  {
    id: '12',
    name: 'Artisan Textured Paper',
    description: 'Hand-selected textured wrapping with natural elements',
    price: 46.00,
    category: 'premium',
    image: 'https://images.unsplash.com/photo-1726931535415-edbc43d42c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwd3JhcHBpbmclMjBwYXBlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNjg5ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      materials: ['Textured Artisan Paper', 'Natural Fibers', 'Eco-friendly Materials'],
      dimensions: 'Made to measure',
      customization: true
    }
  }
];
