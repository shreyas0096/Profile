import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  BarChart3, 
  Cloud,
  Cpu,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Databases",
      icon: <Code className="w-6 h-6" />,
      color: "text-primary",
      skills: ["Python", "JavaScript", "SQL", "MySQL", "MongoDB"]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "text-secondary", 
      skills: ["HTML", "CSS", "React.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "text-accent",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"]
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-purple-400",
      skills: ["Jupyter Notebook", "Kaggle", "Excel", "Power BI", "Tableau"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "text-green-400",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "Jenkins", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and data solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl glow-on-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full ${category.color.replace('text', 'bg')} mr-3`}></div>
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-muted-foreground">
            Additional Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "TypeScript", "Next.js", "GraphQL", "Redis", "PostgreSQL", "Firebase",
              "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "IPFS", "Solidity"
            ].map((tech, index) => (
              <div
                key={tech}
                className="glass-card p-4 rounded-lg text-center glow-on-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-muted-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;