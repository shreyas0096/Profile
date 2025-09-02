import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github, TrendingUp, Bot, Shield, Smartphone } from "lucide-react";
import blockchainImage from "@/assets/blockchain-crowdfunding.jpg";
import agricultureImage from "@/assets/agriculture-prediction.jpg";
import chatbotImage from "@/assets/ai-chatbot.jpg";
import securityImage from "@/assets/mobile-security.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Blockchain-Based Crowdfunding for Education",
      description: "A decentralized platform built on blockchain technology to facilitate transparent and secure crowdfunding for educational purposes.",
      technologies: ["Solidity", "Web3.js", "React.js", "Node.js", "MongoDB", "IPFS", "MetaMask"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-primary to-secondary",
      image: blockchainImage,
      achievements: [
        "Published Paper: IJCRT (2025)",
        "Decentralized & Transparent",
        "Smart Contract Implementation"
      ],
      links: [
        {
          label: "Research Paper",
          url: "https://ijcrt.org/viewfull.php?&p_id=IJCRT2505597",
          icon: <FileText className="w-4 h-4" />
        },
        {
          label: "GitHub",
          url: "https://github.com/shreyas0096/crowdfunding",
          icon: <Github className="w-4 h-4" />
        },
        {
          label: "LinkedIn Post",
          url: "#",
          icon: <ExternalLink className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Price Prediction for Agricultural Products",
      description: "Machine learning model that predicts agricultural product prices with high accuracy to help farmers and traders make informed decisions.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Streamlit", "Flask", "Pandas"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      image: agricultureImage,
      achievements: [
        "85%+ Prediction Accuracy",
        "Streamlit + Flask UI",
        "Real-time Data Processing"
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/shreyas0096/Price-prediction-of-agriculture-products-for-farmer-s",
          icon: <Github className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Generative AI Chatbot",
      description: "GPT-powered intelligent chatbot with natural language processing capabilities and high contextual accuracy for customer support.",
      technologies: ["Python", "Flask", "GPT API", "NLP", "JavaScript", "HTML/CSS"],
      icon: <Bot className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      image: chatbotImage,
      achievements: [
        "90% Contextual Accuracy",
        "Natural Language Processing",
        "Real-time Responses"
      ],
      links: []
    },
    {
      title: "Mobile Application Security (Android & iOS)",
      description: "Comprehensive security implementation for mobile applications including encrypted storage, HTTPS protocols, and OWASP compliance.",
      technologies: ["Android", "iOS", "OWASP", "Encryption", "HTTPS", "Security Protocols"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      image: securityImage,
      achievements: [
        "OWASP Compliance",
        "End-to-end Encryption",
        "Secure Data Storage"
      ],
      links: []
    }
  ];

  const openLink = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 rounded-2xl glow-on-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} shadow-lg`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold font-poppins mb-4 text-foreground">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                <div className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      onClick={() => openLink(link.url)}
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:border-primary hover:bg-primary/10"
                    >
                      {link.icon}
                      <span className="ml-2">{link.label}</span>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto animate-fade-up">
            <h3 className="text-2xl font-bold font-poppins mb-4 text-secondary">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on innovative projects and explore new technologies. 
              Let's build something amazing together!
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gradient"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;