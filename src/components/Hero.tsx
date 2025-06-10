
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Picture Placeholder */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-border flex items-center justify-center overflow-hidden">
            {/* Replace this div with your profile image */}
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Tagline */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your Name Here
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer & Open Source Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Building innovative solutions with modern technologies. 
            Passionate about clean code, user experience, and collaborative development.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="hover-scale">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="hover-scale">
            Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToProjects}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
