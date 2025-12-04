import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Droplets, Clock, Leaf, Quote } from "lucide-react";
import fieldTractor from "@/assets/field-tractor.jpg";

const stats = [
  {
    icon: TrendingUp,
    value: "+15%",
    label: "Aumento en Rendimiento",
    description: "Más producción por hectárea",
  },
  {
    icon: Leaf,
    value: "-12%",
    label: "Ahorro en Fertilizantes",
    description: "Aplicación precisa y eficiente",
  },
  {
    icon: Droplets,
    value: "-20%",
    label: "Ahorro en Agua",
    description: "Riego inteligente optimizado",
  },
  {
    icon: Clock,
    value: "48h",
    label: "Detección de Problemas",
    description: "De 2 semanas a 48 horas",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={fieldTractor}
          alt="Campo de cultivo con tractor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-semibold mb-4 border border-primary-foreground/20">
            Resultados Comprobados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Impacto Real en{" "}
            <span className="relative">
              Sus Cultivos
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="hsl(42 90% 55%)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            ¿Qué puede esperar al trabajar con AgroTech Precision?
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 text-center group hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-4xl font-display font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/60">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/30" />
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 relative z-10">
              "La implementación de la siembra de tasa variable nos permitió invertir más en las zonas productivas y menos en las zonas marginales.{" "}
              <span className="text-primary font-semibold">
                Nuestra rentabilidad por hectárea nunca había sido tan alta.
              </span>{" "}
              Es la mejor inversión que hemos hecho."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">JM</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Juan Martínez</div>
                <div className="text-sm text-muted-foreground">
                  Agricultor de Soya y Trigo, Sonora
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
