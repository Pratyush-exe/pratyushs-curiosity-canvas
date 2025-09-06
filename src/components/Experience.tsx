const Experience = () => {
  const experiences = [
    {
      company: "JP Morgan & Chase",
      role: "SDE (AI) - 1",
      period: "Jan 2024 – Present",
      location: "Bangalore, IND",
      highlights: [
        "Building TestWeaver: Agentic unit test-case generator in progress for firm-wide adoption",
        "Created ML workflows automating processes across teams",
        "Improved performance of business-critical applications using Java, Python, TypeScript",
        "Hands-on with AWS (ECS, EKS, S3, Lambda, RDS) and Terraform",
        "Earned 'Extra Miler' award for strong performance"
      ]
    },
    {
      company: "Betterhalf.ai",
      role: "AI Engineer",
      period: "July 2023 – Jan 2024",
      location: "Bangalore, IND",
      highlights: [
        "Built real-time image retrieval system using ViT and FAISS",
        "Trained ViT for automated image classification",
        "Developed multi-modal pipeline using InstructBlip-Vicuna 7B",
        "Analyzed user behavior for retention and purchase patterns"
      ]
    },
    {
      company: "SenseBack AI",
      role: "Co-Founder",
      period: "Aug 2022 – Jun 2023",
      location: "Startup",
      highlights: [
        "Developed MVP for cost-effective NPS surveys and user research",
        "Built customizable bot voice system on VoIP calls",
        "Enabled companies to gain quick insights from customer feedback"
      ]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 transition-smooth hover:bg-card/50 hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">{exp.company}</h3>
                  <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">{exp.period}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;