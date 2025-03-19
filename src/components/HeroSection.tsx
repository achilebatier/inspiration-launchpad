
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToTutorial = () => {
    const tutorialSection = document.getElementById("tutorial");
    tutorialSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-radial z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-primary opacity-10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Noise Grain Effect */}
      <div className="noise"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block">Find Who's</span>
              <span className="gradient-text">Not Following</span>
              <span className="block">You Back</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-foreground/70 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover who unfollowed you, who's not following back, and manage your social media presence more effectively.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="group" onClick={scrollToTutorial}>
                Get Started
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToTutorial}>
                Learn More
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
              <div className="glass-card rounded-xl p-6 relative">
                <div className="aspect-video w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Social Media Analytics Dashboard" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
