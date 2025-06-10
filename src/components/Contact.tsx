
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github,
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
      description: 'Let\'s connect professionally'
    }
  ];

  return (
    <footer className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about tech, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hover-scale">
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Schedule a Call
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-3">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">your.email@example.com</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="text-2xl mb-3">💬</div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground">Usually within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-all duration-300 hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">{social.name}</span>
              <span className="text-xs text-muted-foreground text-center max-w-24">
                {social.description}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Name. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Open source and available on{' '}
            <a 
              href="https://github.com/yourusername/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
