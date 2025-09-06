const Projects = () => {
  const projects = [
    {
      title: "TestWeaver",
      description: "Agentic unit test-case generator and critic currently in progress for firm-wide adoption at JP Morgan Chase.",
      tech: ["AI", "Java", "Testing"],
      status: "In Progress"
    },
    {
      title: "ai-testweaver",
      description: "A no-code Java unit test generator with a self-healing feedback loop.",
      tech: ["Java", "AI", "No-code"],
      status: "Ongoing"
    },
    {
      title: "text2SQL",
      description: "Building a text-to-SQL pipeline from scratch without pretrained models.",
      tech: ["NLP", "SQL", "Machine Learning"],
      status: "Ongoing"
    },
    {
      title: "lan-compute",
      description: "Distributed ML model training and inference over a local network.",
      tech: ["Distributed Systems", "ML", "Networking"],
      status: "Ongoing"
    },
    {
      title: "rewards.ai",
      description: "A low-code platform for training reinforcement learning agents like AWS DeepRacer.",
      tech: ["Reinforcement Learning", "AWS", "Platform"],
      status: "Completed"
    }
  ];

  const publication = {
    title: "Paradigm shift in Nutritional Science: Using Machine Learning to Predict Macro-nutrient Requirements",
    venue: "CODS-COMAD 2023 (IIT Bombay)",
    description: "A supervised learning-based system to predict macronutrient categories using synthetic data from live user profiles, with LIME for model explanation."
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Projects & Publications</span>
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Projects */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 transition-smooth hover:bg-card/50 hover:border-primary/30"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-accent/20 text-accent'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publication */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Research Publication</h3>
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-xl p-8">
              <h4 className="text-xl font-bold text-foreground mb-2">{publication.title}</h4>
              <p className="text-accent font-medium mb-4">{publication.venue}</p>
              <p className="text-muted-foreground leading-relaxed">{publication.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;