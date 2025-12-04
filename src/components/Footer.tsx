import { Sprout, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Mapeo y Diagnóstico", href: "#servicios" },
    { name: "Dosis Variable (VRT)", href: "#servicios" },
    { name: "Monitoreo Inteligente", href: "#servicios" },
    { name: "Consultoría Agrícola", href: "#contacto" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#tecnologia" },
    { name: "Tecnología", href: "#tecnologia" },
    { name: "Resultados", href: "#resultados" },
    { name: "Contacto", href: "#contacto" },
  ],
  legal: [
    { name: "Aviso de Privacidad", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Política de Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-primary-foreground/20">
                  <Sprout className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">
                  AgroTech
                </span>
                <span className="text-xs font-medium text-primary-foreground/70">
                  Precision
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Transformamos la agricultura tradicional en operaciones de alta eficiencia,
              rentabilidad y sostenibilidad.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Boletín</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Recibe tips y novedades sobre agricultura de precisión.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} AgroTech Precision. Todos los derechos reservados.
          </p>
          <ul className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
