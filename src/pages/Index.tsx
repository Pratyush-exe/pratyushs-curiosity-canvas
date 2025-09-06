const Index = () => {
  return (
    <div className="flex justify-center w-full min-h-screen bg-gray-50 font-sans text-gray-800 leading-relaxed">
      <div className="max-w-3xl w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4 text-gray-900">Pratyush Kumar Patnaik</h1>
          <p className="text-base text-gray-700 mb-2">
            Turning sci-fi into reality through AI, robotics, and smart glasses.
          </p>
          <p className="text-base text-gray-700">
            <a 
              target="_blank" 
              className="text-gray-800 no-underline border-b border-gray-800 hover:border-b-2 hover:text-gray-900" 
              href="https://github.com/Pratyush-exe"
            >
              GitHub
            </a>
          </p>
        </header>

        {/* About Section */}
        <section className="mb-9">
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Programming and building ML systems since college.</li>
            <li>
              Built ML systems at JP Morgan Chase, led AI at{" "}
              <a target="_blank" href="#" className="text-blue-600 hover:underline">
                betterhalf.ai
              </a>
              , and co-founded{" "}
              <a target="_blank" href="#" className="text-blue-600 hover:underline">
                SenseBackAI
              </a>{" "}
              in college.
            </li>
            <li>
              Work at the intersection of RL and robotics, built{" "}
              <a target="_blank" href="#" className="text-blue-600 hover:underline">
                drones
              </a>
              , almost set house on fire building rockets.
            </li>
            <li>
              Currently building smart glasses to reimagine personal computing and intelligence.
            </li>
            <li>
              <a 
                target="_blank" 
                href="https://linkedin.com/in/pratyush-patnaik/" 
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a 
                href="mailto:pratyush21225@gmail.com" 
                className="text-blue-600 hover:underline"
              >
                pratyush21225@gmail.com
              </a>
            </li>
          </ul>
        </section>

        {/* Experience */}
        <main>
          <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Experience</h2>
          <ul className="space-y-4 mb-12">
            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">JP Morgan & Chase</h3>
              <p className="text-sm text-gray-800 mb-2">SDE (AI) - 1 | Jan 2024 – Present</p>
              <p className="text-sm text-gray-600 mb-2">
                Building TestWeaver: Agentic unit test-case generator in progress for firm-wide adoption.
              </p>
              <p className="text-sm text-gray-600">
                Created ML workflows automating processes across teams. Improved performance of business-critical applications using Java, Python, TypeScript. Earned 'Extra Miler' award.
              </p>
            </li>

            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">Betterhalf.ai (YCW21)</h3>
              <p className="text-sm text-gray-800 mb-2">AI Engineer | July 2023 – Jan 2024</p>
              <p className="text-sm text-gray-600 mb-2">
                Built real-time image retrieval system using ViT and FAISS for Ideabook and Face Profile Detection.
              </p>
              <p className="text-sm text-gray-600">
                Developed multi-modal pipeline using InstructBlip-Vicuna 7B. Analyzed user behavior for retention and purchase patterns.
              </p>
            </li>

            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">SenseBack AI</h3>
              <p className="text-sm text-gray-800 mb-2">Co-Founder | Aug 2022 – Jun 2023</p>
              <p className="text-sm text-gray-600">
                Developed MVP: Cost-effective tool for NPS surveys and user research by analyzing customer feedback through customizable bot voice on VoIP calls.
              </p>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Projects</h2>
          <ul className="space-y-4 mb-12">
            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">TestWeaver</h3>
              <p className="text-sm text-gray-800 mb-2">
                Agentic unit test-case generator and critic. In progress for firm-wide adoption at JP Morgan.
              </p>
              <div className="space-x-2">
                <span className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded">
                  In Progress
                </span>
              </div>
            </li>

            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">ai-testweaver</h3>
              <p className="text-sm text-gray-800 mb-2">
                A no-code Java unit test generator with a self-healing feedback loop.
              </p>
              <div className="space-x-2">
                <a 
                  target="_blank" 
                  className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50" 
                  href="https://github.com/Pratyush-exe"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">lan-compute</h3>
              <p className="text-sm text-gray-800 mb-2">
                Distributed ML model training and inference over a local network.
              </p>
              <div className="space-x-2">
                <a 
                  target="_blank" 
                  className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50" 
                  href="https://github.com/Pratyush-exe"
                >
                  GitHub
                </a>
              </div>
            </li>

            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">rewards.ai</h3>
              <p className="text-sm text-gray-800 mb-2">
                A low-code platform for training reinforcement learning agents like AWS DeepRacer.
              </p>
              <div className="space-x-2">
                <a 
                  target="_blank" 
                  className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50" 
                  href="https://github.com/Pratyush-exe"
                >
                  GitHub
                </a>
              </div>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Publications</h2>
          <ul className="space-y-4 mb-12">
            <li className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                Paradigm shift in Nutritional Science: Using Machine Learning to Predict Macro-nutrient Requirements
              </h3>
              <p className="text-sm text-gray-800 mb-2">CODS-COMAD 2023 (IIT Bombay)</p>
              <p className="text-sm text-gray-600">
                Supervised learning-based system to predict macronutrient categories using synthetic data from live user profiles.
              </p>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Miscellaneous</h2>
          <ul className="list-disc list-inside space-y-2 text-xs text-gray-700">
            <li>
              Contributions to{" "}
              <a target="_blank" href="#" className="text-blue-600 hover:underline">
                deepeval
              </a>
              : Integrated DeepEvalHuggingFaceCallback into Seq2SeqTrainer.
            </li>
            <li>
              Worked across the full development lifecycle with Java, Python, JavaScript, TypeScript.
            </li>
            <li>
              Hands-on with AWS (ECS, EKS, S3, KMS, Lambda, RDS) and Terraform for infrastructure management.
            </li>
            <li>Maintained CI/CD pipelines via Jenkins and Spinnaker.</li>
            <li>Contact: +91 9337070750</li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Index;