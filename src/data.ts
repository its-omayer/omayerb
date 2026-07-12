import { WorkItem, GalleryItem, ServiceItem, TestimonialItem, AwardItem, InstagramPost } from './types';

// Real ESM Imports for Image Assets to ensure proper Vite compilation and resolution
// @ts-ignore
import photographerPortrait from './assets/images/omayer_portrait.png';
// @ts-ignore
import vintageCamera from './assets/images/sleek_laptop_terminal_1783776743567.jpg';
// @ts-ignore
import handWithCamera from './assets/images/hand_typing_keyboard_1783776755690.jpg';
// @ts-ignore
import swimmerHero from './assets/images/coding_hero_1783789180374.jpg';

// Asset Paths
export const ASSETS = {
  photographerPortrait,
  vintageCamera,
  handWithCamera,
  swimmerHero,
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 'work-1',
    year: '2025',
    title: 'Fedora Ricing Workspace',
    description: 'An elegant, customized Fedora Linux desktop ricing environment crafted with custom window managers, status bars, and high-contrast color palettes.',
    category: 'Linux Customization',
    image: ASSETS.vintageCamera,
  },
  {
    id: 'work-2',
    year: '2025',
    title: 'Aether Web Application',
    description: 'A modern, lightning-fast React and Node.js full-stack platform featuring seamless state updates, elegant layouts, and minimal micro-animations.',
    category: 'Full-Stack Development',
    image: ASSETS.photographerPortrait,
  },
  {
    id: 'work-3',
    year: '2024',
    title: 'Ethereal IDE UI/UX',
    description: 'A conceptual dark-mode development environment designed for maximum focus, showcasing premium editorial typography, generous whitespace, and responsive layouts.',
    category: 'UI/UX Design',
    image: ASSETS.handWithCamera,
  },
  {
    id: 'work-4',
    year: '2024',
    title: 'Custom Dotfiles Hub',
    description: 'An open-source hub of dotfiles and shell configurations, optimizing terminal-first workflows, custom tiling window manager keybinds, and automated system setups.',
    category: 'Linux Customization',
    image: ASSETS.swimmerHero,
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Monochromatic Syntax',
    category: 'Programming',
    image: ASSETS.handWithCamera,
    year: '2025'
  },
  {
    id: 'gal-2',
    title: 'Fedora Rice Setup',
    category: 'Linux',
    image: ASSETS.vintageCamera,
    year: '2025'
  },
  {
    id: 'gal-3',
    title: 'Aura UI Design',
    category: 'UI/UX Design',
    image: ASSETS.swimmerHero,
    year: '2024'
  },
  {
    id: 'gal-4',
    title: 'Neovim Editor Config',
    category: 'Programming',
    image: ASSETS.photographerPortrait,
    year: '2024'
  },
  {
    id: 'gal-5',
    title: 'Aesthetic Tiling WM',
    category: 'Linux',
    image: ASSETS.vintageCamera,
    year: '2024'
  },
  {
    id: 'gal-6',
    title: 'Sleek Code Workspace',
    category: 'Programming',
    image: ASSETS.photographerPortrait,
    year: '2025'
  },
  {
    id: 'gal-7',
    title: 'Digital Interface Layout',
    category: 'UI/UX Design',
    image: ASSETS.handWithCamera,
    year: '2025'
  },
  {
    id: 'gal-8',
    title: 'Responsive Grid Mockup',
    category: 'UI/UX Design',
    image: ASSETS.swimmerHero,
    year: '2024'
  },
  {
    id: 'gal-9',
    title: 'Glow Terminal Setup',
    category: 'Linux',
    image: ASSETS.vintageCamera,
    year: '2025'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Full-Stack Web Development',
    description: 'Building high-performance, responsive web applications using React, Next.js, and modern backends with a focus on clean modular code.',
    features: ['Modular component architectures', 'TypeScript type-safe pipelines', 'API integrations & proxy endpoints', 'Optimized fast loading builds'],
    icon: 'Sparkles'
  },
  {
    id: 'srv-2',
    title: 'UI/UX & Interactive Design',
    description: 'Crafting visually stunning, professional digital interfaces utilizing modern typography, perfect grid spacing, and subtle micro-animations.',
    features: ['Tailored wireframes & high-fi prototypes', 'Interactive micro-animations (motion)', 'High contrast accessible color palettes', 'Responsive desktop-to-mobile layout grids'],
    icon: 'Box'
  },
  {
    id: 'srv-3',
    title: 'Linux Ricing & Customization',
    description: 'Developing ultra-customized desktop setups on Fedora Linux, fine-tuning window managers, configuration files, and custom terminal environments.',
    features: ['Window manager scripting (WM/compositors)', 'Custom bar & shell themes (polybar/waybar)', 'Consistent system color-schemes (ricing)', 'Dotfile management with Git/GitHub'],
    icon: 'Compass'
  },
  {
    id: 'srv-4',
    title: 'Creative Graphic & Logo Design',
    description: 'Designing elegant brand guidelines, custom vector graphics, sleek typographic layouts, and professional digital branding collateral.',
    features: ['Sleek logo & branding guidelines', 'Vector illustration & icon design', 'High-fidelity asset export sets', 'Digital typography coordination'],
    icon: 'User'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    occupation: 'Senior Engineer, TechCorp Labs',
    rating: 5,
    review: 'Omayer is an exceptionally talented college student. He revamped our web application interface with pristine attention to spacing, colors, and typography. A true creative programmer.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't-2',
    name: 'Alex Rivera',
    occupation: 'Founder, OpenSource Initiative',
    rating: 5,
    review: 'Working with Omayer on our interface was seamless. His passion for Fedora Linux, custom configurations, and attention to detail shines through in every line of TypeScript code he delivers.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 't-3',
    name: 'Evelyn Vance',
    occupation: 'Art Director, Creative Agency',
    rating: 5,
    review: 'Omayer brings an artistic eye to programming. His blend of clean UI/UX mockups with robust frontend development created an outstanding, highly performant showcase for our launch.',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80'
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'aw-1',
    name: 'Outstanding Student Developer Award',
    year: '2025',
    description: 'Honored for exceptional creativity in building responsive, open-source web solutions and custom Linux setups.',
    category: 'Programming'
  },
  {
    id: 'aw-2',
    name: 'Awwwards Creative Developer Nominee',
    year: '2025',
    description: 'Nominated for outstanding visual layout, smooth interactive page transitions, and elegant code craftsmanship.',
    category: 'Web Design'
  },
  {
    id: 'aw-3',
    name: 'National Open-Source Tech Highlight',
    year: '2024',
    description: 'Featured in digital blogs for an outstanding custom Fedora desktop setup, achieving maximum performance with creative style.',
    category: 'Linux Ricing'
  }
];

export const INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: 'ig-1',
    likes: 1240,
    comments: 48,
    caption: 'Debugging late night terminal themes. Fedora Linux running smoothly.',
    image: ASSETS.vintageCamera,
  },
  {
    id: 'ig-2',
    likes: 980,
    comments: 32,
    caption: 'Prismatic geometry inside a newly customized web layout.',
    image: ASSETS.handWithCamera,
  },
  {
    id: 'ig-3',
    likes: 1562,
    comments: 73,
    caption: 'Designing custom tiling windows and custom status bars. Aesthetic Linux desktops.',
    image: ASSETS.swimmerHero,
  },
  {
    id: 'ig-4',
    likes: 812,
    comments: 19,
    caption: 'Perfect layouts and responsive grids. Coding is a form of design.',
    image: ASSETS.photographerPortrait,
  }
];
