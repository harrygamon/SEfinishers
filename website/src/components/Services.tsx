'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Scissors, 
  FileText, 
  Book, 
  Hand,
  Settings,
  CheckCircle,
  Zap,
  Award,
  Target
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Hot Foil Stamping",
      subtitle: "Up to SRA3 Format",
      description: "Premium hot foil stamping with industry-leading precision. Specializing in metallic and colored foil applications for luxury business cards, invitations, and premium marketing materials.",
      features: [
        "Gold, silver, and copper metallic foils",
        "Full spectrum colored foil options",
        "Multi-color foil applications",
        "SRA3 maximum format (450mm × 320mm)",
        "High-precision registration",
        "Matt and gloss foil finishes"
      ],
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
      specs: {
        format: "Up to SRA3",
        precision: "±0.1mm",
        materials: "Various stocks"
      }
    },
    {
      title: "Precision Die Cutting",
      subtitle: "Custom Shapes & Designs",
      description: "Expert die cutting services with custom die manufacturing. Creating clean, professional edges for complex shapes and intricate designs with exceptional attention to detail.",
      features: [
        "Bespoke die manufacturing",
        "Complex geometric shapes",
        "Kiss cutting capabilities",
        "Through cutting precision",
        "Edge quality assurance",
        "Rapid prototyping available"
      ],
      icon: Scissors,
      color: "from-blue-500 to-cyan-500",
      specs: {
        format: "Up to SRA3",
        precision: "±0.05mm",
        materials: "300gsm+ stocks"
      }
    },
    {
      title: "Professional Duplexing",
      subtitle: "Two-Sided Finishing",
      description: "Specialized two-sided printing finishing with perfect alignment and registration. Ideal for business cards, postcards, and materials requiring premium presentation on both sides.",
      features: [
        "Perfect front-to-back alignment",
        "Multiple paper stock options",
        "Quality control inspection",
        "Consistent color matching",
        "Professional edge finishing",
        "Volume production capable"
      ],
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      specs: {
        format: "Up to SRA3",
        precision: "Registration ±0.1mm",
        materials: "170-400gsm"
      }
    },
    {
      title: "Binding & Stitching",
      subtitle: "Professional Bookbinding",
      description: "Expert stitching and binding services for booklets, brochures, and multi-page documents. Professional finishing techniques ensuring durability and presentation excellence.",
      features: [
        "Saddle stitching expertise",
        "Perfect binding options",
        "Wire-O spiral binding",
        "Multi-page document assembly",
        "Cover attachment services",
        "Quality durability testing"
      ],
      icon: Book,
      color: "from-purple-500 to-pink-500",
      specs: {
        format: "Up to SRA3",
        pages: "4-80 pages",
        materials: "Various weights"
      }
    },
    {
      title: "Bespoke Hand Finishing",
      subtitle: "Artisan Quality Work",
      description: "Specialized hand finishing services for unique and detailed work requiring personal attention. Every project receives individual care to ensure exceptional results.",
      features: [
        "Individual project assessment",
        "Custom finishing techniques",
        "Quality control by hand",
        "Specialty applications",
        "Problem-solving expertise",
        "Artisan-level attention"
      ],
      icon: Hand,
      color: "from-rose-500 to-red-500",
      specs: {
        format: "Variable",
        approach: "Bespoke",
        quality: "Artisan level"
      }
    },
    {
      title: "Technical Consultation",
      subtitle: "Expert Guidance",
      description: "Professional consultation services for complex projects. Technical expertise to help optimize your print finishing requirements and achieve exceptional results.",
      features: [
        "Project feasibility assessment",
        "Technical specification review",
        "Material recommendations",
        "Process optimization",
        "Quality standards guidance",
        "Industry best practices"
      ],
      icon: Settings,
      color: "from-slate-500 to-gray-600",
      specs: {
        experience: "5+ years",
        expertise: "Multi-disciplinary",
        support: "Full project cycle"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Professional Print Finishing Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Specialized Finishing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Industry-leading print finishing with technical precision and artisan quality. 
              Every project benefits from Zoe Axford&apos;s specialized expertise and personal attention to detail.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {service.subtitle}
                  </p>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                    {Object.entries(service.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">
              Technical Capabilities
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our equipment and expertise support comprehensive technical requirements for professional print finishing projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-xl p-6 mb-4">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-2">SRA3</div>
                <div className="text-card-foreground font-medium text-sm">Maximum Format</div>
                <div className="text-muted-foreground text-xs mt-1">450mm × 320mm</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 rounded-xl p-6 mb-4">
                <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent mb-2">±0.1mm</div>
                <div className="text-card-foreground font-medium text-sm">Precision Tolerance</div>
                <div className="text-muted-foreground text-xs mt-1">Industry leading</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 rounded-xl p-6 mb-4">
                <Award className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-500 mb-2">100%</div>
                <div className="text-card-foreground font-medium text-sm">Quality Assured</div>
                <div className="text-muted-foreground text-xs mt-1">Every project</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500/10 rounded-xl p-6 mb-4">
                <Settings className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-500 mb-2">5+</div>
                <div className="text-card-foreground font-medium text-sm">Years Experience</div>
                <div className="text-muted-foreground text-xs mt-1">Specialized expertise</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}