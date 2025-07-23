import React, { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronsUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { assets } from "../assets/assests";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header");
    const expr = document.querySelector(".expr-section");
    let triggerPoint = 0;
    if (header && expr) {
      const headerBottom = header.getBoundingClientRect().top + window.scrollY + header.offsetHeight;
      const exprBottom = expr.getBoundingClientRect().top + window.scrollY + expr.offsetHeight;
      triggerPoint = Math.max(headerBottom, exprBottom);
    }

    const handleScroll = () => {
      setShowScroll(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full cursor-pointer bg-red-500/90 hover:bg-red-700 text-white shadow-lg transition-all duration-300 group"
          aria-label="Scroll to Top"
        >
          <ChevronsUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}

      <footer
        className="bg-gradient-to-br from-black via-zinc-900 to-red-900 text-white py-14 px-6 md:px-20"
        aria-label="Website Footer"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 perspective-1000">
          {/* Logo & Contact */}
          <address className="not-italic transform transition-transform hover:rotate-y-3 hover:scale-105 duration-300">
            <img
              src={assets.logo}
              alt="Empire-X Marketing logo"
              className="w-36 mb-4 drop-shadow-xl"
            />
            <p className="text-sm text-zinc-300 mb-4">
              Performance Marketing Experts
            </p>
            <p>
              <span className="text-zinc-400">Email:</span>{" "}
              <a
                href="mailto:empirexmarketingsol@gmail.com"
                className="hover:text-white text-zinc-300"
              >
                empirexmarketingsol@gmail.com
              </a>
            </p>
            <p>
              <span className="text-zinc-400">Mobile:</span>{" "}
              <a
                href="tel:+917340462318"
                className="hover:text-white text-zinc-300"
              >
                +91 73404 62318
              </a>
            </p>
          </address>

          {/* Quick Links */}
          <nav aria-label="Quick Site Navigation">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "course", label: "Courses" },
                { id: "about", label: "About Us" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleSmoothScroll(e, id)}
                    className="hover:text-red-400 transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <section aria-label="Social Media Links">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-5">
              {[
                {
                  href: "https://www.facebook.com/people/EmpireX/61575178267211/",
                  icon: <Facebook className="w-6 h-6" />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/empirex_marketing/",
                  icon: <Instagram className="w-6 h-6" />,
                  label: "Instagram",
                },
                {
                  href: "#",
                  icon: <Linkedin className="w-6 h-6" />,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.youtube.com/@Himanshuyadavpm/featured",
                  icon: <Youtube className="w-6 h-6" />,
                  label: "YouTube",
                },
                {
                  href: "https://wa.me/917340462318",
                  icon: <FaWhatsapp className="text-2xl" />,
                  label: "WhatsApp",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-transform duration-300 hover:rotate-[10deg] hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-zinc-800 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Empire-X | All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
