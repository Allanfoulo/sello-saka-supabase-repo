import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/brand/svg/logo no background bigger.svg";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy-primary border-b border-gold-800 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <FadeIn direction="right" duration={0.6} viewportMargin="0px">
              <img src={logo} alt="Sello Saka Foundation" className="h-12 w-auto" />
            </FadeIn>
            <FadeIn direction="right" delay={0.1} duration={0.6} viewportMargin="0px">
              <div>
                <div className="text-white font-bold text-lg">Sello Saka</div>
                <div className="text-gold-600 text-sm">Foundation</div>
              </div>
            </FadeIn>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/programs", label: "Programs" },
              { to: "/impact", label: "Impact Stories" },
              { to: "/contact", label: "Contact" },
            ].map((link, index) => (
              <FadeIn key={link.to} direction="down" delay={0.1 * (index + 1)} duration={0.5} viewportMargin="0px">
                <Link to={link.to} className="relative group text-white transition-colors">
                  <span className="relative z-10 group-hover:text-gold-400 transition-colors duration-300">
                    {link.label}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </FadeIn>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <FadeIn direction="left" delay={0.6} duration={0.5} viewportMargin="0px">
              <Button
                asChild
                variant="outline"
                className="border-gold-600 text-gold-600 bg-transparent hover:bg-white hover:text-navy-primary hover:border-white transition-all duration-300 hover:scale-105"
              >
                <Link to="/apply">Apply for Assistance</Link>
              </Button>
            </FadeIn>
            <FadeIn direction="left" delay={0.7} duration={0.5} viewportMargin="0px">
              <Button
                asChild
                className="bg-gold-600 hover:bg-gold-400 text-navy-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gold-600/20"
              >
                <Link to="/donate">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-navy-primary border-b border-gold-800 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/programs", label: "Programs" },
                { to: "/impact", label: "Impact Stories" },
                { to: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="text-white hover:text-gold-400 transition-colors py-2 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gold-800/30">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gold-600 text-gold-600 bg-transparent hover:bg-white hover:text-navy-primary hover:border-white"
                >
                  <Link to="/apply" onClick={() => setIsMenuOpen(false)}>
                    Apply for Assistance
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-gold-600 hover:bg-gold-400 text-navy-primary"
                >
                  <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
