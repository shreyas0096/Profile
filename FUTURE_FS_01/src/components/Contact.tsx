import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  MessageCircle,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send the data to your backend
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9980767692",
      href: "tel:+919980767692",
      color: "text-primary"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "shreyu9012004@gmail.com",
      href: "mailto:shreyu9012004@gmail.com",
      color: "text-secondary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Karnataka, India",
      href: "#",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shreyas-poojary-8b700626a",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub", 
      href: "https://github.com/shreyas0096",
      color: "hover:text-gray-400"
    }
  ];

  const openLink = (href: string) => {
    if (href && href !== "#") {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold font-poppins mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to discuss a project, or just want to say hi, 
                I'd love to hear from you!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-center p-4 rounded-lg bg-muted/5 hover:bg-muted/10 transition-colors cursor-pointer"
                    onClick={() => openLink(info.href)}
                  >
                    <div className={`${info.color} mr-4`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={social.label}
                      onClick={() => openLink(social.href)}
                      className={`p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors ${social.color} glow-on-hover`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-secondary mr-3" />
                <h3 className="text-2xl font-bold font-poppins text-foreground">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-muted/10 border-muted/20 focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-muted/10 border-muted/20 focus:border-primary"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-muted/10 border-muted/20 focus:border-primary resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gradient w-full text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Success Message */}
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">I typically respond within 24 hours!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;