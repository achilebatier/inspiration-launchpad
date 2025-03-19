
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container px-4 py-12 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary mb-6 animate-fade-down">
            Beautifully Crafted Digital Experiences
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up leading-tight">
            Elevate Your Digital Presence with Minimalist Design
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-up animate-delay-100">
            Combining precision, simplicity, and functionality to create digital experiences that delight users and drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
            <Button 
              variant="primary" 
              size="lg"
              className="rounded-full px-8"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl z-[-1] opacity-50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
