import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Share2, Sparkles } from "lucide-react";

const NewYearWishes = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Happy New Year 2025 🎉",
        text: "Wishing you a beautiful, joyful, and successful New Year 💖",
        url: window.location.href,
      });
    } else {
      alert("✨ Share this wish with your loved ones 💫");
    }
  };

  return (
    <section id="wishes" className="py-24 sm:py-36 relative overflow-hidden">
      
      {/* Floating sparkles background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_60%)] animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main wish card */}
          <Card className="glass p-10 sm:p-14 glow-gold backdrop-blur-md hover:scale-[1.02] transition-all duration-500">
            <p className="text-xl sm:text-2xl font-medium leading-relaxed">
              ✨ As the clock turns and a new chapter begins,
              <br /><br />
              I wish you **peace in your mind**,  
              **strength in your heart**,  
              and **success in everything you chase**.
              <br /><br />
              May your smiles be real,  
              your dreams be bold,  
              and your journey be beautiful. 🌟
            </p>

            <p className="mt-10 text-lg font-semibold flex justify-center items-center gap-2">
              With warmth & hope <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            </p>

            <p className="mt-2 text-base text-muted-foreground">
              — Kevin Samson
            </p>
          </Card>

          {/* Action buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-10 py-6 glow-gold hover:scale-110 transition-all duration-300"
              onClick={() => alert("🎉 May 2025 bring you everything you deserve 💫")}
            >
              Feel the Wish <Sparkles className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 hover:scale-105 transition-all"
              onClick={handleShare}
            >
              Share the Joy <Share2 className="ml-2 w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewYearWishes;
