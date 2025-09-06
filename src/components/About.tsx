const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              I'm Pratyush, and I've dedicated my career to pushing the boundaries of what's possible with AI and technology. 
              From building ML systems at <span className="text-primary font-semibold">JP Morgan Chase</span> to leading AI initiatives at 
              <span className="text-primary font-semibold"> betterhalf.ai</span>, I've always been driven by curiosity and the desire to innovate.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              My journey has taken me through the fascinating intersection of <span className="text-accent font-semibold">reinforcement learning and robotics</span>, 
              where I've built drones, experimented with rocket propulsion (with some explosive results!), and spent countless hours 
              chasing the next breakthrough.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Currently, I'm working on what I believe will be the next major leap in personal computing: 
              <span className="text-gradient font-semibold"> smart glasses that reimagine how we interact with intelligence and information</span>. 
              It's not just about building technology—it's about creating the future we've always imagined.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;