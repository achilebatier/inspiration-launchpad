
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Tutorial from "@/components/Tutorial";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <section id="tutorial" className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid z-0"></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Noise Grain Effect */}
        <div className="noise"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Follow these simple steps to find out who isn't following you back.
            </p>
          </motion.div>
          
          <Tutorial />
        </div>
      </section>

      <section id="code" className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-background/90">
        {/* Background Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-primary opacity-5"></div>
        
        {/* Noise Grain Effect */}
        <div className="noise"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get The Script</h2>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Copy the code below and follow the instructions in the tutorial.
            </p>
          </motion.div>
          
          {/* The code block component would be rendered here */}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
