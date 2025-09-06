import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaborating on AI projects, discussing smart glasses, or just chatting about the future of technology?
          </p>
          
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:pratyush21225@gmail.com"
                className="flex items-center justify-center space-x-3 p-4 bg-primary/10 hover:bg-primary/20 rounded-xl transition-smooth group"
              >
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">@</span>
                </div>
                <span className="text-primary font-medium group-hover:text-primary/90">pratyush21225@gmail.com</span>
              </a>
              
              <a 
                href="tel:+919337070750"
                className="flex items-center justify-center space-x-3 p-4 bg-accent/10 hover:bg-accent/20 rounded-xl transition-smooth group"
              >
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground text-sm font-bold">📞</span>
                </div>
                <span className="text-accent font-medium group-hover:text-accent/90">+91 9337070750</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
              >
                <a href="https://linkedin.com/in/pratyush-patnaik/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 transition-smooth"
              >
                <a href="https://github.com/Pratyush-exe" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          © 2024 Pratyush Kumar Patnaik. Building the future, one algorithm at a time.
        </p>
      </div>
    </section>
  );
};

export default Contact;