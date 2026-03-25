# Upahaarix - Luxury Gift Wrapping Website

## 🎁 Project Overview

A modern, premium, and authentic luxury gift wrapping website frontend built with React, TypeScript, and Tailwind CSS. Features elegant typography, smooth animations, and a fully responsive design.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header with responsive menu
│   │   ├── Footer.tsx              # Footer with contact info and links
│   │   ├── ProductCard.tsx         # Reusable product display card
│   │   └── CategorySection.tsx     # Category grid component
│   │
│   ├── pages/
│   │   ├── Layout.tsx              # Main layout wrapper
│   │   ├── Home.tsx                # Homepage with hero, categories, trust section
│   │   ├── Collections.tsx         # Product grid with filters and sorting
│   │   ├── ProductDetails.tsx      # Individual product page
│   │   ├── About.tsx               # About us page with story and values
│   │   ├── Contact.tsx             # Contact form and information
│   │   └── NotFound.tsx            # 404 error page
│   │
│   ├── data/
│   │   └── products.ts             # Static product and category data
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   │
│   ├── App.tsx                     # Main app component with router
│   └── routes.ts                   # React Router configuration
│
└── styles/
    ├── fonts.css                   # Google Fonts imports
    ├── theme.css                   # Custom CSS variables and luxury colors
    ├── tailwind.css                # Tailwind imports
    └── index.css                   # Global styles and custom scrollbar
```

## 🎨 Design Features

### Color Palette
- **Navy**: `#0a1628` - Primary dark color
- **Gold**: `#d4af37` - Accent and CTAs
- **Cream**: `#f5f5f0` - Backgrounds
- **Charcoal**: `#2c2c2c` - Text
- **Silver**: `#c0c0c0` - Secondary accents
- **Accent**: `#8b7355` - Tertiary color

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Montserrat (Sans-serif)

### Key Features
- Smooth scroll behavior
- Custom luxury scrollbar
- Hover animations with scale and shadow effects
- Motion animations using motion/react
- Fully responsive grid layouts
- Mobile-friendly navigation

## 📄 Pages

### Home
- Hero section with gradient background
- Featured image showcase
- Category grid
- Featured products
- Trust badges
- CTA section

### Collections
- Filter by category
- Sort by name, price, or featured
- Responsive product grid
- Mobile filter toggle

### Product Details
- Large product image
- Detailed information
- Material list
- Customization options
- Related products

### About
- Company story
- Statistics
- Core values
- Team information

### Contact
- Contact form with validation
- Business information cards
- Map placeholder
- Success/loading states

## 🔧 Technical Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React

## 🚀 Features

- ✅ Fully responsive design
- ✅ TypeScript for type safety
- ✅ React Router for navigation
- ✅ Smooth animations and transitions
- ✅ Static/dummy data
- ✅ Clean component architecture
- ✅ Accessible design
- ✅ Modern ES6+ code
- ✅ SEO-friendly structure

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Component Reusability

All components are designed to be reusable:
- `ProductCard` - Display any product
- `CategorySection` - Show categories in a grid
- `Header` - Consistent navigation
- `Footer` - Site-wide footer

## 💎 Luxury Design Elements

1. **Premium Animations**: Subtle hover effects, smooth transitions
2. **Elegant Typography**: Serif headings with sans-serif body
3. **Sophisticated Colors**: Navy, gold, and cream palette
4. **Quality Imagery**: High-resolution product photos
5. **Spacious Layouts**: Generous padding and margins
6. **Professional Feel**: Clean, minimalist design with luxury touches

## 🔍 Data Structure

Products include:
- ID, name, description
- Price
- Category
- Featured status
- Materials, dimensions
- Customization options

Categories include:
- ID, name, description
- Image, slug

---

**Built with ❤️ for Upahaarix - Elevating the art of gift presentation**
