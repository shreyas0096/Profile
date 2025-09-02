import { Briefcase, Calendar, MapPin, TrendingUp, Code2, Shield, Zap } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Built responsive React.js applications",
      description: "Developed modern, mobile-first web applications"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Optimized REST APIs & MongoDB",
      description: "Achieved 25% faster query performance"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Developed reusable components",
      description: "Improved development speed by 20%"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enhanced authentication systems",
      description: "Reduced login errors by 15%"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions and gaining valuable experience in the tech industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {/* Experience Card */}
            <div className="relative flex items-start mb-12 animate-slide-in-left">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center border-4 border-background shadow-glow">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              {/* Content Card */}
              <div className="ml-8 glass-card p-8 rounded-2xl flex-1 glow-on-hover">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold font-poppins text-foreground">
                    Web Developer
                  </h3>
                  <div className="flex items-center text-secondary font-semibold">
                    <Calendar className="w-4 h-4 mr-2" />
                    Dec 2024 – Jan 2025
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  Prodigy Infotech
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Contributed to building responsive web applications and optimizing backend systems. 
                  Worked with modern technologies to deliver high-quality solutions and improve user experience.
                </p>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-lg bg-muted/5 hover:bg-muted/10 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <div className="text-primary">
                          {achievement.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Used */}
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js", "Node.js", "MongoDB", "REST APIs", "JavaScript", 
                      "HTML/CSS", "Git", "Authentication"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto animate-fade-up">
            <h3 className="text-xl font-bold font-poppins mb-4 text-secondary">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently seeking opportunities to contribute to innovative projects and work with 
              cutting-edge technologies. I'm passionate about continuous learning and staying 
              updated with the latest industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;