
# GitHub Portfolio Site

A clean, professional portfolio website built with React, TypeScript, and Tailwind CSS. Features a responsive design, smooth animations, and easy customization options.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Hero.tsx         # Profile header section
│   ├── Projects.tsx     # Projects showcase
│   ├── TechStack.tsx    # Skills and technologies
│   └── Contact.tsx      # Contact information and footer
├── data/                # Data sources (easy to edit!)
│   ├── projects.ts      # Project information
│   └── techStack.ts     # Skills and technologies
├── pages/
│   └── Index.tsx        # Main page layout
└── components/ui/       # Reusable UI components (shadcn/ui)
```

## ✏️ How to Customize

### 1. Update Your Profile Information

**Edit the Hero component (`src/components/Hero.tsx`):**
- Replace `"Your Name Here"` with your actual name
- Update the tagline and description
- Replace the profile image URL with your own photo

```tsx
// In Hero.tsx
<img 
  src="YOUR_PROFILE_IMAGE_URL" 
  alt="Profile"
  className="w-full h-full object-cover"
/>

<h1>Your Actual Name</h1>
<p>Your Professional Tagline</p>
```

### 2. Add/Remove Projects

**Edit the projects data (`src/data/projects.ts`):**

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief project description",
    longDescription: "Detailed project description",
    technologies: ["React", "TypeScript", "etc"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project-demo.com",
    imageUrl: "https://your-project-image.jpg",
    featured: true  // Shows on main page
  },
  // Add more projects here...
];
```

**Project Image Recommendations:**
- Aspect ratio: 16:9 (600x400px recommended)
- Use high-quality screenshots or mockups
- Consider using services like Unsplash for placeholder images

### 3. Update Tech Stack

**Edit the tech stack data (`src/data/techStack.ts`):**

```typescript
export const techStack: TechSkill[] = [
  {
    name: 'React',
    icon: '⚛️',  // Use emoji or replace with actual icons
    category: 'frontend',
    proficiency: 5  // 1-5 scale
  },
  // Add your technologies here...
];
```

### 4. Update Contact Information

**Edit the Contact component (`src/components/Contact.tsx`):**
- Update email address
- Add your social media links
- Modify contact methods

```tsx
// Update social links
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME',
    icon: Github,
    description: 'Check out my code'
  },
  // Add more social links...
];
```

### 5. Customize Colors and Styling

**The entire design system is defined in:**
- `src/index.css` - CSS custom properties and base styles
- `tailwind.config.ts` - Tailwind theme configuration

**To change the color scheme:**
1. Modify the CSS custom properties in `index.css`
2. Update theme colors in `tailwind.config.ts`
3. All components will automatically use the new colors

## 🎨 Design Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Fade-in effects and hover animations
- **Professional Layout**: Clean, modern design focused on readability
- **Easy Customization**: Well-structured data files for quick updates
- **Performance Optimized**: Built with Vite for fast loading
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🎯 SEO Optimization

- Update meta tags in `index.html`
- Add Open Graph tags for social sharing
- Include structured data for better search results
- Optimize images with proper alt text

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to the main layout in `src/pages/Index.tsx`
3. Update navigation if needed

### Custom Animations
- Animations are defined in `tailwind.config.ts`
- Use the `.animate-fade-in` class for fade effects
- Use the `.hover-scale` utility for hover effects

### Performance Tips
- Optimize images before adding them
- Use webp format for better compression
- Keep the projects array reasonable in size
- Consider lazy loading for images

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

---

**Made with ❤️ using React and Tailwind CSS**
