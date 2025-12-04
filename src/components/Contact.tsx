import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Calendar, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import irrigationField from "@/assets/irrigation-field.jpg";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hectares: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: "", email: "", phone: "", hectares: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-golden-light rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-leaf-light rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            El Futuro de su Cosecha{" "}
            <span className="text-gradient">Comienza Hoy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No deje su producción al azar. Agenda una consulta gratuita con nuestros agrónomos expertos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={irrigationField}
                alt="Campo con sistema de riego"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">
                  ¿Listo para una cosecha más eficiente?
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  La agricultura de precisión le da control y certeza sobre su producción.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid gap-4">
              {[
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "+52 (614) 123-4567",
                  href: "tel:+526141234567",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "contacto@agrotech.mx",
                  href: "mailto:contacto@agrotech.mx",
                },
                {
                  icon: MapPin,
                  label: "Oficina",
                  value: "Chihuahua, México",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6" />
                <h4 className="font-display font-bold text-lg">Consulta Gratuita</h4>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Evaluamos el potencial de su campo sin costo ni compromiso.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Agendar ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Solicite su Evaluación
              </h3>

              <div className="grid gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Su nombre"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+52 (XXX) XXX-XXXX"
                    />
                  </div>
                </div>

                {/* Hectares */}
                <div>
                  <label htmlFor="hectares" className="block text-sm font-medium text-foreground mb-2">
                    Hectáreas a Cultivar
                  </label>
                  <select
                    id="hectares"
                    name="hectares"
                    value={formData.hectares}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="0-100">0 - 100 hectáreas</option>
                    <option value="100-500">100 - 500 hectáreas</option>
                    <option value="500-1000">500 - 1,000 hectáreas</option>
                    <option value="1000+">Más de 1,000 hectáreas</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Cuéntenos sobre sus necesidades agrícolas..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Solicitud
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
