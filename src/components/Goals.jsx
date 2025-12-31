import React from "react";
import { Card } from "./ui/card";
import {
  Heart,
  Sparkles,
  Music,
  Coffee,
  Smile,
  PartyPopper
} from "lucide-react";

const moments = [
  {
    icon: Sparkles,
    title: "A Fresh Beginning",
    description:
      "A quiet pause where the past stays behind, and hope gently walks into a brand-new year.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Warm Wishes",
    description:
      "May your days be filled with love, your nights with peace, and your heart with calm happiness.",
    color: "text-accent"
  },
  {
    icon: Smile,
    title: "Little Joys",
    description:
      "Unexpected smiles, shared laughter, and happiness hidden in the smallest moments.",
    color: "text-primary"
  },
  {
    icon: Coffee,
    title: "Slow Mornings",
    description:
      "Gentle mornings, deep breaths, and time to enjoy life without rushing ahead.",
    color: "text-accent"
  },
  {
    icon: Music,
    title: "Memorable Nights",
    description:
      "Music, lights, conversations, and moments that stay long after the night fades.",
    color: "text-primary"
  },
  {
    icon: PartyPopper,
    title: "Celebrate Being Here",
    description:
      "Another year lived. Another chapter written. And that alone is worth celebrating.",
    color: "text-accent"
  }
];

const NewYearExperience = () => {
  return (
    <section id="new-year-feel" className="py-20 sm:py-32 relative overflow-hidden">
      
      {/* Soft glowing background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Feel the <span className="gradient-text">New Year</span> ✨
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Not plans. Not promises. Just moments, emotions, and joy we share together.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {moments.map((item, index) => (
              <Card
                key={index}
                className="glass p-6 sm:p-8 hover:scale-105 transition-all duration-500 glow-gold group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer feeling */}
                <div className="mt-6 pt-4 border-t border-border text-sm text-muted-foreground">
                  A moment for 2025 ✨
                </div>
              </Card>
            ))}
          </div>

          {/* Closing emotional note */}
          <Card className="glass mt-14 p-8 sm:p-12 text-center glow-gold">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
              May this year be gentle with you,  
              kind to your heart,  
              and beautiful in ways you never expected 💫
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              — Wishing you a truly Happy New Year
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default NewYearExperience;
