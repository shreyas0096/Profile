import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Web Development Fundamentals",
      issuer: "CERDAILIN",
      date: "2024",
      description: "Comprehensive certification covering HTML, CSS, JavaScript, and modern web development practices.",
      color: "from-blue-500 to-indigo-500",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "2024",
      description: "Hands-on experience with real-world data analytics challenges and business intelligence solutions.",
      color: "from-green-500 to-emerald-500",
      skills: ["Data Analysis", "Business Intelligence", "Excel", "Power BI"]
    },
    {
      title: "Rapid Development for AI Services",
      issuer: "IBM",
      date: "2024",
      description: "Advanced certification in building and deploying AI-powered applications and services rapidly.",
      color: "from-purple-500 to-pink-500",
      skills: ["AI Development", "Machine Learning", "Cloud Services", "API Integration"]
    },
    {
      title: "Data Analytics",
      issuer: "NoviTech R&D Pvt Limited",
      date: "2024",
      description: "Comprehensive training in data analytics, statistical analysis, and data visualization techniques.",
      color: "from-orange-500 to-red-500",
      skills: ["Data Analysis", "Statistical Methods", "Data Visualization", "Analytics Tools"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 gradient-text">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card p-8 rounded-2xl glow-on-hover animate-fade-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Certificate Info */}
              <h3 className="text-xl font-bold font-poppins mb-3 text-foreground group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center text-muted-foreground mb-2">
                <Building className="w-4 h-4 mr-2" />
                <span className="font-medium">{cert.issuer}</span>
              </div>

              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{cert.date}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Badge */}
              <div className="border-t border-glass-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Verified Credential</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs text-green-400 font-medium">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-up">
            <div className="text-3xl font-bold font-poppins text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold font-poppins text-secondary mb-2">100+</div>
            <div className="text-muted-foreground">Hours Learning</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold font-poppins text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold font-poppins text-primary mb-2">2024</div>
            <div className="text-muted-foreground">Recent Year</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto animate-fade-up">
            <h3 className="text-xl font-bold font-poppins mb-4 text-secondary">
              Committed to Continuous Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in staying updated with the latest technologies and industry best practices. 
              These certifications represent my dedication to professional growth and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;