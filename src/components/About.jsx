import React from 'react';
import { Card } from './ui/card';
import { Code, Palette, Rocket, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building modern web applications with React, Node.js, and Python',
    color: 'text-primary'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user experiences',
    color: 'text-accent'
  },
  {
    icon: Rocket,
    title: 'Problem Solving',
    description: 'Tackling complex challenges with innovative solutions',
    color: 'text-primary'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency',
    color: 'text-accent'
  }
];

const technologies = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
  'Python', 'C++', 'MongoDB', 'Git', 'Tailwind CSS'
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and beautiful experiences
            </p>
          </div>

          {/* Introduction Card */}
          <Card className="glass p-8 sm:p-12 mb-12 glow-gold">
            <div className="space-y-6 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Computer Science Engineer & Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless digital experiences. With expertise in modern web technologies, I transform ideas 
                into elegant, scalable solutions that make a real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we step into 2025, I'm excited to embrace new challenges, learn emerging technologies, 
                and build projects that push the boundaries of what's possible on the web.
              </p>
            </div>
          </Card>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="glass p-6 sm:p-8 hover:scale-105 transition-all duration-300 glow-gold group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-foreground">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          <div className="glass p-8 sm:p-12 rounded-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Tech <span className="gradient-text">Stack</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 rounded-full text-foreground hover:text-primary transition-all duration-300 cursor-pointer hover:scale-110 glow-gold"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;