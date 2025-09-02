import { GraduationCap, Code, Database, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about web development, data analytics, and building scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl glow-on-hover">
              <div className="w-80 h-80 rounded-xl overflow-hidden">
                <img
                  src="/lovable-uploads/c15d2190-5093-400a-9bd0-9d6bb3ed6b79.png"
                  alt="Shreyas S Poojary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold font-poppins mb-4 text-primary">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full Stack Developer and Data Science enthusiast currently pursuing 
                my Bachelor's in Information Science & Engineering. I love creating innovative solutions 
                that bridge the gap between technology and real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in both frontend and backend technologies, I specialize in 
                building responsive web applications, implementing data-driven solutions, and exploring 
                the fascinating world of artificial intelligence and blockchain technology.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-xl font-bold font-poppins text-secondary">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">
                  B.E. in Information Science & Engineering
                </h4>
                <p className="text-muted-foreground">Yenepoya Institute of Technology</p>
                <p className="text-muted-foreground">2022 – 2026 | CGPA: 8.13</p>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="glass-card p-6 rounded-xl text-center glow-on-hover">
                <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Full Stack</h4>
              </div>
              <div className="glass-card p-6 rounded-xl text-center glow-on-hover">
                <Database className="w-8 h-8 text-secondary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Data Analytics</h4>
              </div>
              <div className="glass-card p-6 rounded-xl text-center glow-on-hover">
                <Brain className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-sm">AI & ML</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;