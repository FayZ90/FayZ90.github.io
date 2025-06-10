
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
}

// Easy-to-edit project data - just modify this array to add/remove projects
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    longDescription: "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies for scalability and performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    longDescription: "A powerful task management application with team collaboration features, real-time updates, drag-and-drop functionality, and comprehensive project tracking capabilities.",
    technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-manager-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization",
    longDescription: "A beautiful weather dashboard that provides detailed forecasts, interactive maps, and data visualization. Features location-based weather, historical data, and responsive design.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SCSS"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio site built with React and Tailwind CSS",
    longDescription: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode support, and optimized performance.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio-demo.com",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
    featured: false
  }
];
