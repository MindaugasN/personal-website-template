import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github } from "lucide-react";
// STEP 1: Add your CV PDF to /src/assets/ and uncomment the line below
// import cvPdf from "@/assets/cv-your-name.pdf";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus("error");

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold">
              {/* STEP 2: Replace with your name */}
              Your Name
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {/* STEP 3: Replace with your professional title/tagline */}
              Your Professional Title
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" asChild>
                <a href="#hire">Hire Me</a>
              </Button>
              <Button size="lg" variant="subtle" asChild>
                <a href="#collaborate">Join Me</a>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* STEP 4: Replace /public/profile.jpg with your photo */}
              <img
                src="/profile.jpg"
                alt="Your Name - Professional headshot"
                className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl border-4 border-muted transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* STEP 5: Optional - Replace /public/profile-opentobitcoin.png with your alternative photo */}
              <img
                src="/profile-opentobitcoin.png"
                alt="Your Name - Open to Bitcoin"
                className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl border-4 border-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-foreground/80">
              {/* STEP 5: Replace with your bio (2-3 paragraphs) */}
              I'm [Your Name], a [Your Profession] with [X years] of experience in [Your Field].
              I specialize in [Your Specialty] and help [Who You Help] with [What You Do].
            </p>

            <p className="text-lg text-foreground/80">
              [Add a second paragraph about your approach, values, or what drives you professionally.]
            </p>
          </div>
        </div>
      </section>

      {/* Skills/Experience Section - Optional */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* STEP 6: Customize these skill categories or remove this section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Category 1</h3>
              <p className="text-foreground/80">
                List your skills, technologies, or tools here
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Category 2</h3>
              <p className="text-foreground/80">
                More skills and expertise
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Category 3</h3>
              <p className="text-foreground/80">
                Additional capabilities
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">Category 4</h3>
              <p className="text-foreground/80">
                More relevant skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV/Resume Section */}
      <section id="cv" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">CV / Resume</h2>
          <div className="bg-background border border-border rounded-lg p-8">
            <p className="text-lg text-foreground/80 mb-6">
              Download my full CV for detailed information about my experience, education, and projects.
            </p>
            <div className="flex gap-4">
              {/* STEP 7: Uncomment when you add your CV PDF */}
              {/* <a href={cvPdf} download="Your-Name-CV.pdf">
                <Button size="lg">
                  Download CV (PDF)
                </Button>
              </a> */}
              <p className="text-sm text-muted-foreground italic">
                (Add your CV PDF and uncomment the button code above)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Let's Work Together</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1: Hire Me */}
            <div id="hire" className="p-8 rounded-lg border-2 border-accent flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">
                <span className="text-accent font-bold">Hire</span> Me For
              </h3>
              <ul className="space-y-3 mb-8 flex-grow">
                {/* STEP 6: Customize what you offer */}
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Service 1</strong> - Description of what you offer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Service 2</strong> - Another service you provide</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Service 3</strong> - Additional offering</span>
                </li>
              </ul>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#contact">Hire</a>
              </Button>
            </div>

            {/* Path 2: Join Me */}
            <div id="collaborate" className="p-8 rounded-lg border-2 border-accent flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">
                <span className="text-accent font-bold">Join</span> Me On
              </h3>
              <ul className="space-y-3 mb-8 flex-grow">
                {/* STEP 7: Customize collaboration opportunities */}
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Project 1</strong> - Your side project or initiative</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Project 2</strong> - Another collaboration opportunity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>Project 3</strong> - Community or open source work</span>
                </li>
              </ul>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#contact">Join</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-background p-8 rounded-lg border border-border flex flex-col">
              <h3 className="mb-6">Quick Message</h3>
              {/* This form requires Resend API setup - see README.md */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={4}
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={formStatus === "submitting"}
                  className="w-full"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {formStatus === "success" && (
                  <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
                )}

                {formStatus === "error" && (
                  <p className="text-red-600 text-sm text-center">Failed to send message. Please try email instead.</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-background p-8 rounded-lg border border-border flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  {/* STEP 8: Replace with your email */}
                  <a href="mailto:your.email@example.com" className="text-accent hover:underline">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Schedule a Call (Optional)
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links - Find me online */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Find me online:</h3>
            <div className="flex flex-wrap gap-4">
              {/* STEP 9: Update social links */}
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-center text-sm text-muted-foreground">
            {/* STEP 11: Replace with your name and customize footer */}
            © 2025 Your Name | Built with React + TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
