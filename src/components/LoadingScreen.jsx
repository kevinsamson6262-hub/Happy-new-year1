import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse" />
          <Sparkles className="w-20 h-20 text-primary animate-spin relative z-10" style={{ animationDuration: '3s' }} />
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">2026</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-pulse">
            Loading your experience...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full animate-shimmer" style={{ width: '100%', backgroundSize: '200% 100%' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;