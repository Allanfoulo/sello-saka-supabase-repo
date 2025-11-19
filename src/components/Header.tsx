import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-navy-primary border-b border-gold-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gold-600 flex items-center justify-center">
              <Heart className="w-6 h-6 text-navy-primary" fill="currentColor" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">Sello Saka</div>
              <div className="text-gold-600 text-sm">Foundation</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-gold-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gold-400 transition-colors">
              About
            </Link>
            <Link to="/programs" className="text-white hover:text-gold-400 transition-colors">
              Programs
            </Link>
            <Link to="/impact" className="text-white hover:text-gold-400 transition-colors">
              Impact Stories
            </Link>
            <Link to="/contact" className="text-white hover:text-gold-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex border-gold-600 text-white hover:bg-gold-600/10"
            >
              <Link to="/apply">Apply for Assistance</Link>
            </Button>
            <Button asChild className="bg-gold-600 hover:bg-gold-400 text-navy-primary">
              <Link to="/donate">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
