import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <img src={logo} alt="Hope Trust" className="h-14 w-auto bg-white rounded-md p-1" />
          <p className="text-sm text-primary-foreground/80 max-w-xs">
            A registered charitable trust dedicated to medical support, education,
            and community welfare in Vellore.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link to="/volunteer" className="hover:text-white">Volunteer</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5" /> <a href="https://maps.app.goo.gl/jiKyDZm3U3EfHq5C7" target="_blank" rel="noopener noreferrer" className="hover:text-white">First Floor, No. 91, K.R. Complex, Vallimalai Road, opposite Vinayagar Temple, Kumarappan Nagar, KRS Nagar, Katpadi, Vellore, Tamil Nadu 632007</a></li>
            <li className="flex gap-2"><Mail className="size-4" /> contact@hopetrust.org</li>
            <li className="flex gap-2"><Phone className="size-4" /> <a href="tel:+918825500905" className="hover:text-white">+91 88255 00905</a></li>
            <li className="flex gap-2"><Phone className="size-4" /> <a href="tel:+919442756140" className="hover:text-white">+91 94427 56140</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3">Registration</h4>
          <p className="text-sm text-primary-foreground/80">Reg. No. B4/28/2026<br/>Katpadi, Vellore</p>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Hope Trust. All rights reserved.
      </div>
    </footer>
  );
}
