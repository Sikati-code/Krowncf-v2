import type { Category, Design, Testimonial, Stats, BlogPost, LogoShowcase } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Festivities',
    slug: 'festivities',
    image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?w=400&h=300&fit=crop',
    itemCount: 1250,
    description: 'Celebrate special occasions with stunning festive designs'
  },
  {
    id: '2',
    name: 'Church Flyers',
    slug: 'church-flyers',
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=400&h=300&fit=crop',
    itemCount: 890,
    description: 'Beautiful church and religious event flyers'
  },
  {
    id: '3',
    name: 'Birthday Designs',
    slug: 'birthday-designs',
    image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?w=400&h=300&fit=crop',
    itemCount: 2100,
    description: 'Make birthdays memorable with creative designs'
  },
  {
    id: '4',
    name: 'PNGs',
    slug: 'pngs',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    itemCount: 3500,
    description: 'High-quality transparent PNG images for your projects'
  },
  {
    id: '5',
    name: 'Fonts',
    slug: 'fonts',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    itemCount: 560,
    description: 'Premium typography for professional designs'
  },
  {
    id: '6',
    name: 'Party Flyers',
    slug: 'party-flyers',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
    itemCount: 1680,
    description: 'Eye-catching flyers for all types of parties'
  },
  {
    id: '7',
    name: 'Vector Illustrations',
    slug: 'vector-illustrations',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    itemCount: 2200,
    description: 'Scalable vector graphics for any project'
  },
  {
    id: '8',
    name: 'Nigeria',
    slug: 'nigeria',
    image: 'https://images.unsplash.com/photo-1523527927320-9d13a5a7e0b7?w=400&h=300&fit=crop',
    itemCount: 750,
    description: 'Culturally-inspired Nigerian designs'
  }
];

export const designs: Design[] = [
  {
    id: '1',
    title: 'Christmas Celebration Flyer',
    description: 'Elegant Christmas flyer template with customizable text and colors',
    price: 15,
    originalPrice: 25,
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=400&h=500&fit=crop',
    category: 'Festivities',
    categoryId: '1',
    tags: ['christmas', 'holiday', 'winter', 'celebration'],
    rating: 4.8,
    reviewCount: 128,
    downloads: 2450,
    isFeatured: true,
    isBestseller: true,
    createdAt: '2024-01-15',
    format: ['PSD', 'AI', 'EPS'],
    author: 'KCF Design Team'
  },
  {
    id: '2',
    title: 'Sunday Service Church Flyer',
    description: 'Professional church flyer for Sunday services and special events',
    price: 12,
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=400&h=500&fit=crop',
    category: 'Church Flyers',
    categoryId: '2',
    tags: ['church', 'religious', 'sunday', 'worship'],
    rating: 4.9,
    reviewCount: 89,
    downloads: 1890,
    isFeatured: true,
    createdAt: '2024-01-20',
    format: ['PSD', 'AI'],
    author: 'KCF Design Team'
  },
  {
    id: '3',
    title: 'Birthday Party Invitation',
    description: 'Vibrant birthday invitation template for all ages',
    price: 10,
    originalPrice: 18,
    image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?w=400&h=500&fit=crop',
    category: 'Birthday Designs',
    categoryId: '3',
    tags: ['birthday', 'party', 'invitation', 'celebration'],
    rating: 4.7,
    reviewCount: 156,
    downloads: 3200,
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-01',
    format: ['PSD', 'AI', 'EPS'],
    author: 'KCF Design Team'
  },
  {
    id: '4',
    title: 'Golden Frame PNG Collection',
    description: 'Luxury golden frames in high-resolution PNG format',
    price: 20,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=500&fit=crop',
    category: 'PNGs',
    categoryId: '4',
    tags: ['frame', 'golden', 'luxury', 'decoration'],
    rating: 4.9,
    reviewCount: 234,
    downloads: 4560,
    isBestseller: true,
    createdAt: '2024-01-10',
    format: ['PNG'],
    author: 'KCF Design Team'
  },
  {
    id: '5',
    title: 'Modern Script Font Family',
    description: 'Elegant script font perfect for wedding and luxury designs',
    price: 35,
    originalPrice: 50,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop',
    category: 'Fonts',
    categoryId: '5',
    tags: ['font', 'script', 'typography', 'elegant'],
    rating: 4.8,
    reviewCount: 67,
    downloads: 980,
    isNew: true,
    createdAt: '2024-02-05',
    format: ['OTF', 'TTF', 'WOFF'],
    author: 'KCF Design Team'
  },
  {
    id: '6',
    title: 'Night Club Party Flyer',
    description: 'Dynamic party flyer with neon effects and modern design',
    price: 18,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=500&fit=crop',
    category: 'Party Flyers',
    categoryId: '6',
    tags: ['party', 'club', 'nightlife', 'music'],
    rating: 4.6,
    reviewCount: 112,
    downloads: 2150,
    isFeatured: true,
    createdAt: '2024-01-25',
    format: ['PSD', 'AI'],
    author: 'KCF Design Team'
  },
  {
    id: '7',
    title: 'Business Icon Set',
    description: 'Professional business and corporate icons in vector format',
    price: 25,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=500&fit=crop',
    category: 'Vector Illustrations',
    categoryId: '7',
    tags: ['icons', 'business', 'corporate', 'vector'],
    rating: 4.9,
    reviewCount: 178,
    downloads: 3890,
    isBestseller: true,
    createdAt: '2024-01-12',
    format: ['AI', 'EPS', 'SVG'],
    author: 'KCF Design Team'
  },
  {
    id: '8',
    title: 'African Pattern Collection',
    description: 'Authentic African patterns inspired by Nigerian culture',
    price: 22,
    originalPrice: 30,
    image: 'https://images.unsplash.com/photo-1523527927320-9d13a5a7e0b7?w=400&h=500&fit=crop',
    category: 'Nigeria',
    categoryId: '8',
    tags: ['african', 'pattern', 'culture', 'nigeria'],
    rating: 4.8,
    reviewCount: 95,
    downloads: 1680,
    isNew: true,
    isFeatured: true,
    createdAt: '2024-02-03',
    format: ['AI', 'EPS', 'PNG'],
    author: 'KCF Design Team'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Event Planner',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'Krown Creative Factory has transformed how I create event materials. The designs are stunning and save me hours of work!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Adeyemi',
    role: 'Graphic Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'As a professional designer, I appreciate the quality and attention to detail in every template. KCF is my go-to resource.',
    rating: 5
  },
  {
    id: '3',
    name: 'Pastor David Williams',
    role: 'Church Minister',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content: 'The church flyers are beautifully designed and help us reach more people. Highly recommended for ministries!',
    rating: 5
  },
  {
    id: '4',
    name: 'Chioma Okafor',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'The Nigerian cultural designs are authentic and beautiful. Perfect for our local marketing campaigns.',
    rating: 5
  }
];

export const stats: Stats = {
  designsCount: 15000,
  happyClients: 8500,
  downloadsCount: 125000,
  categoriesCount: 8
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Design Trends to Watch in 2024',
    excerpt: 'Discover the latest design trends that are shaping the creative industry this year. From bold typography to immersive 3D elements.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    date: '2024-01-15',
    author: 'KCF Team',
    category: 'Design Trends',
    link: 'https://krowncreativefactory.blogspot.com/2024/01/design-trends-2024.html'
  },
  {
    id: '2',
    title: 'How to Create Stunning Church Flyers',
    excerpt: 'Learn the essential tips and techniques for designing eye-catching church flyers that engage your congregation.',
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&h=400&fit=crop',
    date: '2024-01-10',
    author: 'KCF Team',
    category: 'Tutorial',
    link: 'https://krowncreativefactory.blogspot.com/2024/01/church-flyers-guide.html'
  },
  {
    id: '3',
    title: 'The Power of Color in Brand Identity',
    excerpt: 'Explore how color psychology can elevate your brand and create lasting impressions on your audience.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
    date: '2024-01-05',
    author: 'KCF Team',
    category: 'Branding',
    link: 'https://krowncreativefactory.blogspot.com/2024/01/color-psychology.html'
  }
];

export const logoShowcase: LogoShowcase[] = [
  { id: '1', name: 'Royal Events', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop', category: 'Events' },
  { id: '2', name: 'TechNova', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop', category: 'Technology' },
  { id: '3', name: 'Grace Church', image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=300&h=300&fit=crop', category: 'Religious' },
  { id: '4', name: 'AfroBeat FM', image: 'https://images.unsplash.com/photo-1523527927320-9d13a5a7e0b7?w=300&h=300&fit=crop', category: 'Media' },
  { id: '5', name: 'Luxe Beauty', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop', category: 'Beauty' },
  { id: '6', name: 'FastBite', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop', category: 'Food' },
  { id: '7', name: 'EduPrime', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop', category: 'Education' },
  { id: '8', name: 'FitLife Gym', image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=300&h=300&fit=crop', category: 'Fitness' },
  { id: '9', name: 'NaijaMart', image: 'https://images.unsplash.com/photo-1523527927320-9d13a5a7e0b7?w=300&h=300&fit=crop', category: 'E-commerce' },
  { id: '10', name: 'Star Music', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop', category: 'Entertainment' },
  { id: '11', name: 'GreenEarth', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop', category: 'Environment' },
  { id: '12', name: 'MedCare', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop', category: 'Healthcare' },
];
