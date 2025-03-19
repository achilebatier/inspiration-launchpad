
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Tutorial from "@/components/Tutorial";
import { motion } from "framer-motion";
import { PlatformSelector } from "@/components/PlatformSelector";
import CodeBlock from "@/components/CodeBlock";
import { usePlatform } from "@/contexts/PlatformContext";

const Index: React.FC = () => {
  const { platform } = usePlatform();
  
  // Script content based on selected platform
  const getScriptContent = () => {
    if (platform === "instagram") {
      return `// Instagram Script
// Copy and paste this into your browser console while on Instagram
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async function() {
  console.log("Starting Instagram follower analysis...");
  
  // Code for Instagram follower analysis
  // This is a sample script
  
  console.log("Analysis complete!");
})();`;
    } else {
      return `// Twitter Script
// Copy and paste this into your browser console while on Twitter
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async function() {
  console.log("Starting Twitter follower analysis...");
  
  // Code for Twitter follower analysis
  // This is a sample script
  
  console.log("Analysis complete!");
})();`;
    }
  };

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
            
            <div className="mt-6 flex justify-center">
              <PlatformSelector className="mb-8" />
            </div>
          </motion.div>
          
          <CodeBlock code={getScriptContent()} language="javascript" className="max-w-4xl mx-auto" />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
