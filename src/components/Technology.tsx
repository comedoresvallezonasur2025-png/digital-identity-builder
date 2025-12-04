import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Satellite, MapPin, Wifi, Monitor } from "lucide-react";
import greenhouseTech from "@/assets/greenhouse-tech.png";

const technologies = [
  {
    icon: Satellite,
    title: "Teledetección Satelital y Drones",
    description:
      "Monitoreo constante del vigor de vegetación (NDVI, NDRE) y detección temprana de anomalías, plagas o deficiencias nutricionales con resolución centimétrica.",
  },
  {
    icon: MapPin,
    title: "Análisis Geoespacial",
    description:
      "Procesamiento de mapas de rendimiento, topografía y muestreo de suelos para crear zonas de manejo homogéneas y específicas.",
  },
  {
    icon: Wifi,
    title: "Sensores IoT y Telemetría",
    description:
      "Datos en tiempo real sobre humedad del suelo, clima local y estado de maquinaria, accesible desde nuestra plataforma.",
  },
  {
    icon: Monitor,
    title: "Plataforma de Decisión",
    description:
      "Interfaz intuitiva donde todos los datos se convierten en mapas de prescripción listos para cargar en su maquinaria agrícola.",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tecnologia" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-light rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-light rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nuestra Tecnología
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            El Pilar de la{" "}
            <span className="text-gradient">Precisión</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizamos la convergencia de tecnologías avanzadas para ofrecerle una visión 360° de su cultivo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={greenhouseTech}
                alt="Tecnología en invernadero con robots y sistemas automatizados"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Satellite className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Resolución</div>
                  <div className="text-lg font-bold text-primary">Centimétrica</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Technology Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                className="group flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="icon-container shrink-0">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
