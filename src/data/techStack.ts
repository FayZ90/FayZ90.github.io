
export interface TechSkill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // 1-5 scale
}

// Easy-to-edit tech stack data - modify this array to update your skills
export const techStack: TechSkill[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend', proficiency: 5 },
  { name: 'TypeScript', icon: '🔷', category: 'frontend', proficiency: 4 },
  { name: 'Vue.js', icon: '💚', category: 'frontend', proficiency: 4 },
  { name: 'Next.js', icon: '▲', category: 'frontend', proficiency: 4 },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend', proficiency: 5 },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend', proficiency: 4 },
  { name: 'Python', icon: '🐍', category: 'backend', proficiency: 4 },
  { name: 'Express.js', icon: '🚀', category: 'backend', proficiency: 4 },
  { name: 'Django', icon: '🎯', category: 'backend', proficiency: 3 },
  
  // Database
  { name: 'PostgreSQL', icon: '🐘', category: 'database', proficiency: 4 },
  { name: 'MongoDB', icon: '🍃', category: 'database', proficiency: 4 },
  { name: 'Redis', icon: '🔴', category: 'database', proficiency: 3 },
  
  // Tools
  { name: 'Git', icon: '📝', category: 'tools', proficiency: 5 },
  { name: 'Docker', icon: '🐳', category: 'tools', proficiency: 3 },
  { name: 'AWS', icon: '☁️', category: 'tools', proficiency: 3 },
  { name: 'Figma', icon: '🎨', category: 'tools', proficiency: 4 },
];
