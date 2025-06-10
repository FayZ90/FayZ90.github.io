
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { techStack, TechSkill } from '../data/techStack';

const TechStack = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & Others'
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 5) return 'bg-green-500';
    if (proficiency >= 4) return 'bg-blue-500';
    if (proficiency >= 3) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const groupedTech = Object.entries(categories).map(([key, label]) => ({
    category: key as keyof typeof categories,
    label,
    skills: techStack.filter(skill => skill.category === key)
  }));

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
            Constantly learning and staying up-to-date with the latest trends.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {groupedTech.map(({ category, label, skills }, categoryIndex) => (
            <Card 
              key={category} 
              className="hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-center">{label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      
                      {/* Proficiency Indicator */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.proficiency 
                                ? getProficiencyColor(skill.proficiency)
                                : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              'Responsive Design', 'REST APIs', 'GraphQL', 'Testing (Jest, Cypress)',
              'Agile Methodology', 'CI/CD', 'Performance Optimization', 'Accessibility',
              'Code Review', 'Technical Documentation', 'Open Source Contribution'
            ].map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
