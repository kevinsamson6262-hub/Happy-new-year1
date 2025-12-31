import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import Fireworks from "./Fireworks";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear = new Date("2026-01-01T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = newYear - now;

      if (difference <= 0) {
        setIsNewYear(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 🎆 FIRECRACKERS */}
      {isNewYear && <Fireworks />}

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">

          {/* Header badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {isNewYear ? "Welcome to 2026 🎉" : "Counting down to 2026"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Happy New Year</span>
            <br />
            <span className="text-foreground">2026</span> 
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            This is not just a wish — it’s a feeling, shared from my heart to yours 🤍
          </p>

          {/* 🌟 HIGHLIGHTED MESSAGE AFTER FIRECRACKERS */}
          {isNewYear && (
            <div className="mt-6 animate-scale-in">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                <span className="gradient-text glow-gold animate-pulse">
                  🎉 Wish You a Happy New Year 🎉
                </span>
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
                May this year bring joy, peace, and beautiful moments ✨
              </p>
            </div>
          )}

          {/* Countdown */}
          {!isNewYear && (
            <div className="flex justify-center gap-4 sm:gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="glass px-4 sm:px-6 py-4 rounded-2xl glow-gold"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 rounded-full glow-gold hover:scale-105 transition"
          >
            Let’s Celebrate Together
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
