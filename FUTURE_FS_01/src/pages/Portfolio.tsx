import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <ScrollToTop />
      
      {/* Footer */}
      <footer className="py-8 border-t border-glass-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Shreyas S Poojary. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;