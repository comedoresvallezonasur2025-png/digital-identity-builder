import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sprout } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Tecnología", href: "#tecnologia" },
  { name: "Servicios", href: "#servicios" },
  { name: "Resultados", href: "#resultados" },
  { name: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-card border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Sprout className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                AgroTech
              </span>
              <span className={`text-xs font-medium transition-colors ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                Precision
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors link-underline ${
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-hero !px-6 !py-3 !text-base"
            >
              Consulta Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="btn-hero text-center mt-2"
              >
                Consulta Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
