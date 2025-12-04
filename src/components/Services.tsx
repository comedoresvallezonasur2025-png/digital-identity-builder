import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Map, Sliders, Activity, ArrowRight } from "lucide-react";
import precisionFarming from "@/assets/precision-farming.png";

const services = [
  {
    icon: Map,
    title: "Mapeo y Diagnóstico Avanzado",
    description:
      "Diagnóstico integral de su campo identificando el potencial real de cada sección.",
    features: [
      "Muestreo de suelos georreferenciado",
      "Mapas de zonificación por potencial",
      "Análisis de nutrientes, pH y textura",
    ],
    color: "primary",
  },
  {
    icon: Sliders,
    title: "Dosis Variable (VRT)",
    description:
      "Minimice el desperdicio y maximice la eficacia de cada producto aplicado.",
    features: [
      "Fertilización VRT con ahorro 10-15%",
      "Siembra VRT por capacidad del suelo",
      "Mapas de prescripción personalizados",
    ],
    color: "secondary",
  },
  {
    icon: Activity,
    title: "Monitoreo Inteligente",
    description:
      "Asegure la salud de su plantación con vigilancia constante y alertas.",
    features: [
      "Alertas de estrés hídrico en tiempo real",
      "Detección de plagas y malezas focalizada",
      "Riego inteligente automatizado",
    ],
    color: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="section-padding relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={precisionFarming}
          alt="Agricultura de precisión"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Agricultura de Precisión{" "}
            <span className="text-gradient">360°</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra suite de servicios cubre todo el ciclo agrícola, garantizando eficiencia desde la siembra hasta la cosecha.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-service group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "primary"
                    ? "bg-primary/10"
                    : service.color === "secondary"
                    ? "bg-secondary/10"
                    : "bg-accent/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "primary"
                      ? "text-primary"
                      : service.color === "secondary"
                      ? "text-secondary"
                      : "text-accent"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        service.color === "primary"
                          ? "bg-primary"
                          : service.color === "secondary"
                          ? "bg-secondary"
                          : "bg-accent"
                      }`}
                    />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#contacto"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  service.color === "primary"
                    ? "text-primary hover:text-primary/80"
                    : service.color === "secondary"
                    ? "text-secondary hover:text-secondary/80"
                    : "text-accent hover:text-accent/80"
                }`}
              >
                Más información
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
