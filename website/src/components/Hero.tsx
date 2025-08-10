'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Shield, Star } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Professional Print Finishing Specialists
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                SE Finishers
                <span className="block text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Professional Print Finishing
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Professional foiling, die cutting, duplexing, stitching, and hand finishing services. 
              Delivering exceptional quality for premium print projects with industry-leading precision 
              up to SRA3 format (450mm × 320mm).
            </motion.p>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Professional Quote
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-background hover:bg-muted"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Professional Credentials */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-primary mb-2">SRA3</div>
                  <div className="text-card-foreground text-sm font-medium">Maximum Format</div>
                  <div className="text-muted-foreground text-xs mt-1">450mm × 320mm</div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-card-foreground text-sm font-medium">Years Experience</div>
                  <div className="text-muted-foreground text-xs mt-1">Industry expertise</div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-card-foreground text-sm font-medium">Quality Assured</div>
                  <div className="text-muted-foreground text-xs mt-1">Professional standards</div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-card-foreground text-sm font-medium">Fast Turnaround</div>
                  <div className="text-muted-foreground text-xs mt-1">Reliable delivery</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                Professional Trade Service
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Quality Guaranteed
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                Fast Response Time
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}