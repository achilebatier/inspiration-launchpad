
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Index = () => {
  // Simulate content load animations
  useEffect(() => {
    document.body.classList.add('js-loaded');
    
    return () => {
      document.body.classList.remove('js-loaded');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1 animate-fade-up">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-primary">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Design that puts<br />function first
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe that great design solves problems. Our approach focuses on creating digital experiences that are not only beautiful but also functional, intuitive, and accessible.
              </p>
              <p className="text-lg text-muted-foreground">
                By combining precision engineering with minimalist aesthetics, we create digital products that stand the test of time.
              </p>
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2 animate-fade-up animate-delay-200">
              <div className="aspect-square bg-secondary rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-black/30 w-3/4 h-3/4 rounded-xl shadow-lg flex items-center justify-center">
                    <div className="w-3/5 h-3/5 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="w-2/5 h-2/5 bg-primary/20 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              Ready to create something exceptional?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/80 animate-fade-up animate-delay-100">
              Let's transform your vision into reality with our precision-crafted design approach.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="rounded-full px-8 animate-fade-up animate-delay-200 bg-white text-primary hover:bg-white/90"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
