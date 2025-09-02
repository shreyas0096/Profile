import { Button } from "@/components/ui/button";
import { Download, Eye, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shreyas_S_Poojary_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Shreyas</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 font-inter">
              Full Stack Developer | Data Science Enthusiast | Software Engineer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl font-inter leading-relaxed">
              Passionate about building scalable web applications and turning data into insights. 
              I create modern solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={downloadResume}
                className="btn-gradient text-lg px-8 py-6"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="text-lg px-8 py-6 border-primary/20 hover:border-primary hover:bg-primary/10"
                size="lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="text-lg px-8 py-6 border-secondary/20 hover:border-secondary hover:bg-secondary/10"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-glass-border glow-on-hover">
                <img
                  src="/lovable-uploads/c15d2190-5093-400a-9bd0-9d6bb3ed6b79.png"
                  alt="Shreyas S Poojary - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;