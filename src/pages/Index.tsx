import { useState } from "react";
import prof_image from "./profile-vertical.jpg";

const AboutBlock = ({ imageSrc = "/profile-vertical.jpg" }) => {
  return (
    <section className="mb-8 border-b border-gray-200 pb-6">
      <div className="flex flex-col sm:flex-row items-center w-full p-6 gap-6">
        {/* Left: vertical image - hidden on narrow/vertical screens */}
        <div className="hidden sm:block flex-shrink-0 h-48 w-36 sm:w-40 sm:h-56 lg:w-48 lg:h-64 overflow-hidden rounded-s">
          <img
            src={imageSrc}
            alt="Pratyush Kumar Patnaik"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Right: name, bio, about, links */}
        <div className="flex-1">
          {/* Top: name + links */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Pratyush Kumar Patnaik
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm mb-4">
              <a
                href="https://github.com/Pratyush-exe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 underline hover:underline"
              >
                github
              </a>
              <a
                href="https://linkedin.com/in/pratyush-patnaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 underline hover:underline"
              >
                linkedIn
              </a>
              <a
                href="https://x.com/pratyush21225"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 underline hover:underline"
              >
                twitter
              </a>
              <a
                href="mailto:pratyush21225@gmail.com"
                className="flex items-center gap-1 text-blue-600 underline hover:underline"
              >
                pratyush21225@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom: always left-aligned points */}
          <div className="prose prose-sm text-gray-700 max-w-none mb-3 text-left text-sm">
            <br />
            {/* <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>
                Turning sci-fi into reality through AI, robotics, and smart
                glasses.
              </li>
              <li>
                Writing code and building things since school days — from scrappy
                scripts to full ML systems.
              </li>
              <li>
                Passionate about reinforcement learning and robotics; built a
                clone of DeepRacer in college.
              </li>
              <li>Worked on drones, rockets, and voice agents.</li>
              <li>
                Currently building smart glasses to reimagine personal computing
                and intelligence.
              </li>
            </ul> */}
            I’m Pratyush, I’ve built ML systems at JPMC, led AI at
            betterhalf.ai, and co-founded SenseBackAI back in college. I’ve
            worked in the intersection of RL and robotics, built drones, almost
            set my house on fire building rockets, and spent countless hours
            just chasing curiosity. At heart, I love turning sci-fi into reality
            and now, building smart glasses to reimagine personal computing and
            intelligence.
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="flex justify-center w-full min-h-screen bg-gray-50 font-sans text-gray-800 leading-relaxed">
      <div className="max-w-3xl w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* New non-collapsible About block with vertical image on the left */}
        <AboutBlock imageSrc={prof_image} />

        {/* Experience */}
        <main>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-left">
            Experience
          </h2>
          <ul className="space-y-4 mb-12 ">
            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                JP Morgan & Chase
              </h3>
              <p className="text-sm text-gray-800 mb-2">Jan 2024 - Sept 2025</p>
              <p className="text-sm text-gray-800 mb-2">SDE (AI)-I</p>
              <p className="text-sm text-gray-600 mb-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>built testWeaver, an agentic unit test generator reducing dev turnaround time</li>
                  <li>
                    designed chat tools for faster access to business data
                  </li>
                  <li>
                    automated pipelines for application and infra deployment
                  </li>
                  <li>
                    engineered business-critical applications in Java, Python,
                    and TypeScript
                  </li>
                  <li>
                    received the Extra Miler award for performance and
                    collaboration
                  </li>
                </ul>
              </p>
            </li>
            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                Betterhalf.ai (YCW21)
              </h3>
              <p className="text-sm text-gray-800 mb-2">July 2023 - Jan 2024</p>
              <p className="text-sm text-gray-800 mb-2">AI Engineer</p>
              <p className="text-sm text-gray-600 mb-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    led AI research, development, and deployment across products
                  </li>
                  <li>
                    built a real-time image retrieval system with ViT and FAISS
                    powering Ideabook and Face Profile Detection
                  </li>
                  <li>
                    trained ViT for automated image tagging reducing manual
                    effort
                  </li>
                  <li>
                    developed a multi-modal pipeline with InstructBlip-Vicuna 7B
                    integrated via Hugging Face and Replicate
                  </li>
                  <li>
                    analyzed user retention for AstroZodiac and purchase
                    patterns for MatchMaking
                  </li>
                </ul>
              </p>
            </li>
            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                Listed (OpenInApp)
              </h3>
              <p className="text-sm text-gray-800 mb-2">Jan 2022 - Mar 2023</p>
              <p className="text-sm text-gray-800 mb-2">
                Jr. AI Engineer
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Colaborated in DubME: A video-to-video translation product that seamlessly translates videos from one language to
another while accurately preserving the lip movements
                  </li>
                  <li>
                    Created StoryBucks: A product that generates captivating Instagram-ready videos for affiliate marketing purposes,
utilizing Amazon links as input.
                  </li>
                </ul>
              </p>
            </li>
            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                NuGenomics (AnswerGenomics)
              </h3>
              <p className="text-sm text-gray-800 mb-2">Jan 2022 - Mar 2023</p>
              <p className="text-sm text-gray-800 mb-2">
                Machine Learning Intern
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    developed VariantInfoMaker, an automated tool using
                    statistical filtering to map RSIDs for human traits
                  </li>
                  <li>
                    generated ontology-driven results in Excel for
                    bioinformatics analysis
                  </li>
                  <li>
                    researched macronutrient prediction from blood and genomics
                    data
                  </li>
                  <li>
                    published findings at IIT Bombay, aiding dietitians in
                    personalized diet planning
                  </li>
                </ul>
              </p>
            </li>
            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                SenseBack AI
              </h3>
              <p className="text-sm text-gray-800 mb-2">Aug 2022 - Jun 2023</p>
              <p className="text-sm text-gray-800 mb-2">Co-Founder</p>
              <p className="text-sm text-gray-600 mb-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    developed an MVP for a cost-effective NPS and user research
                    tool
                  </li>
                  <li>
                    product was based on voice agents on call, when voice agents were not flourished properly
                  </li>
                  <li>
                    enabled companies to gather quick, actionable insights at
                    scale
                  </li>
                </ul>
              </p>
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-left">
            Projects
          </h2>
          <ul className="space-y-4 mb-12">
            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                testweaver
              </h3>
              <p className="text-sm text-gray-800 mb-2">
                A no-code Java unit-test generator with a self-healing feedback
                loop. Ongoing active commits available on GitHub.
              </p>
              {/* <div className="space-x-2">
                <a
                  target="_blank"
                  className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50"
                  href="https://github.com/Pratyush-exe"
                >
                  GitHub
                </a>
              </div> */}
            </li>

            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                lan-compute
              </h3>
              <p className="text-sm text-gray-800 mb-2">
                Distributed ML model training and inference over a local
                network. Designed for low-latency experimentation across edge
                machines.
              </p>
              {/* <div className="space-x-2">
                <a
                  target="_blank"
                  className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50"
                  href="https://github.com/Pratyush-exe"
                >
                  GitHub
                </a>
              </div> */}
            </li>

            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                text2SQL
              </h3>
              <p className="text-sm text-gray-800 mb-2">
                Built a text-to-SQL pipeline without pretraining
                focused on compact, efficient models and reliable SQL
                generation.
              </p>
            </li>

            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                rewards.ai
              </h3>
              <p className="text-sm text-gray-800 mb-2">
                A low-code platform for training reinforcement-learning agents
                developer-friendly DeepRacer-style workflows.
              </p>
              {/* <div className="space-x-2">
                <a
                  target="_blank"
                  className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50"
                  href="https://github.com/Pratyush-exe"
                >
                  GitHub
                </a>
              </div> */}
            </li>

            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                deepeval (contributed)
              </h3>
              <p className="text-sm text-gray-800 mb-2">
                Integrated <em>DeepEvalHuggingFaceCallback</em> into
                Seq2SeqTrainer to evaluate models during training with deepeval
                metrics.
              </p>
              {/* <div className="space-x-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="text-blue-600 hover:underline text-xs"
                >
                  More
                </a>
              </div> */}
            </li>

            {/* <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                drone FC
              </h3>
              <p className="text-sm text-gray-800 mb-2">
                Integrated <em>DeepEvalHuggingFaceCallback</em> into
                Seq2SeqTrainer to evaluate models during training with deepeval
                metrics.
              </p>
            </li> */}
          </ul>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-left">
            Publications
          </h2>
          <ul className="space-y-4 mb-12">
            <li className="border border-gray-200 p-4 rounded-l">
              <h3 className="text-lg font-semibold mb-2 text-gray-950">
                Paradigm shift in Nutritional Science: Using Machine Learning to
                Predict Macro-nutrient Requirements
              </h3>
              <p className="text-sm text-gray-800 mb-2">
                CODS-COMAD 2023 (IIT Bombay)
              </p>
              <p className="text-sm text-gray-600">
                Supervised learning-based system to predict macronutrient
                categories using synthetic data from live user profiles.
              </p>
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-left">
            Miscellaneous
          </h2>
          <ul className="list-disc list-inside space-y-2 text-xs text-gray-700">
            <li>
              Contributions to{" "}
              <a
                target="_blank"
                href="#"
                className="text-blue-600 hover:underline"
              >
                deepeval
              </a>
              : Integrated DeepEvalHuggingFaceCallback into Seq2SeqTrainer.
            </li>
            <li>won several hackathons; including one at JPMC using voice agents for calls</li>
            <li>was part of GDSC in college, held several hackathon, including one hosted on my platform, rewards.ai</li>
            <li>built drones, robots, and solid-fuel rockets</li>
            <li>gold honours at IAAC (International Astronomy & Astrophysics Competition)</li>
            <li>hands-on with AWS (ECS, EKS, S3, KMS, Lambda, RDS) and Terraform for infrastructure management.</li>
            <li>maintained CI/CD pipelines via Jenkins and Spinnaker.</li>
            <li>love to speedcube in free time</li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Index;

// const Index = () => {
//   return (
//     <div className="flex justify-center w-full min-h-screen bg-gray-50 font-sans text-gray-800 leading-relaxed">
//       <div className="max-w-3xl w-full px-4 py-8 sm:px-6 lg:px-8">
//         {/* Header */}
//         <header className="text-center mb-8">
//           <h1 className="text-3xl font-semibold mb-4 text-gray-900">Pratyush Kumar Patnaik</h1>
//           <p className="text-base text-gray-700 mb-2">
//             Turning sci-fi into reality through AI, robotics, and smart glasses.
//           </p>
//           <p className="text-base text-gray-700">
//             <a
//               target="_blank"
//               className="text-gray-800 no-underline border-b border-gray-800 hover:border-b-2 hover:text-gray-900"
//               href="https://github.com/Pratyush-exe"
//             >
//               GitHub
//             </a>
//           </p>
//         </header>

//         {/* About Section */}
//         <section className="mb-9">
//           <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
//             <li>Writing code and building things since school days; from scrappy scripts to full ML systems.</li>
//             <li>
//               Passionate about reinforcement learning and robotics; built a clone of DeepRacer in college
//             </li>
//             <li>
//               Built drones, rockets, voice agents; participated in various competitions nation-wide
//             </li>
//             <li>
//               Currently building smart glasses to reimagine personal computing and intelligence.
//             </li>
//             <li>
//               <a
//                 target="_blank"
//                 href="https://linkedin.com/in/pratyush-patnaik/"
//                 className="text-blue-600 hover:underline"
//               >
//                 LinkedIn
//               </a>{" "}
//               |{" "}
//               <a
//                 target="_blank"
//                 href="https://linkedin.com/in/pratyush-patnaik/"
//                 className="text-blue-600 hover:underline"
//               >
//                 Twitter
//               </a>{" "}
//               | {" "}
//               <a
//                 href="mailto:pratyush21225@gmail.com"
//                 className="text-blue-600 hover:underline"
//               >
//                 pratyush21225@gmail.com
//               </a>
//             </li>
//           </ul>
//         </section>

//         {/* Experience */}
//         <br/>
//         <main>
//           <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Experience</h2>
//           <ul className="space-y-4 mb-12">
//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">JP Morgan & Chase</h3>
//               <p className="text-sm text-gray-800 mb-2">Jan 2024 - Sept 2025</p>
//               <p className="text-sm text-gray-800 mb-2">SDE (AI)-I</p>
//               <p className="text-sm text-gray-600 mb-2">
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>built testWeaver, an agentic unit test generator reducing dev turnaround time</li>
//                   <li>designed chat tools for faster access to business data</li>
//                   <li>automated pipelines for application and infra deployment</li>
//                   <li>engineered business-critical applications in Java, Python, and TypeScript</li>
//                   <li>received the Extra Miler award for performance and collaboration</li>
//                 </ul>
//               </p>
//             </li>

//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">Betterhalf.ai (YCW21)</h3>
//               <p className="text-sm text-gray-800 mb-2">July 2023 - Jan 2024</p>
//               <p className="text-sm text-gray-800 mb-2">AI Engineer</p>
//               <p className="text-sm text-gray-600 mb-2">
//               <ul className="list-disc list-inside space-y-1">
//                 <li>led AI research, development, and deployment across products</li>
//                 <li>built a real-time image retrieval system with ViT and FAISS powering Ideabook and Face Profile Detection</li>
//                 <li>trained ViT for automated image tagging reducing manual effort</li>
//                 <li>developed a multi-modal pipeline with InstructBlip-Vicuna 7B integrated via Hugging Face and Replicate</li>
//                 <li>analyzed user retention for AstroZodiac and purchase patterns for MatchMaking</li>
//               </ul>
//             </p>
//             </li>

//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">NuGenomics (AnswerGenomics)</h3>
//               <p className="text-sm text-gray-800 mb-2">Jan 2022 - Mar 2023</p>
//               <p className="text-sm text-gray-800 mb-2">Machine Learning Intern · Remote</p>
//               <p className="text-sm text-gray-600 mb-2">
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>developed VariantInfoMaker, an automated tool using statistical filtering to map RSIDs for human traits</li>
//                   <li>generated ontology-driven results in Excel for bioinformatics analysis</li>
//                   <li>researched macronutrient prediction from blood and genomics data</li>
//                   <li>published findings at IIT Bombay, aiding dietitians in personalized diet planning</li>
//                 </ul>
//               </p>
//             </li>

//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">SenseBack AI</h3>
//               <p className="text-sm text-gray-800 mb-2">Aug 2022 - Jun 2023</p>
//               <p className="text-sm text-gray-800 mb-2">Co-Founder</p>
//               <p className="text-sm text-gray-600 mb-2">
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>developed an MVP for a cost-effective NPS and user research tool</li>
//                   <li>analyzed customer feedback through customizable bot voices on VoIP calls</li>
//                   <li>enabled companies to gather quick, actionable insights at scale</li>
//                 </ul>
//               </p>
//             </li>
//           </ul>

//           <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Projects</h2>
//           <ul className="space-y-4 mb-12">
//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">TestWeaver</h3>
//               <p className="text-sm text-gray-800 mb-2">
//                 Agentic unit test-case generator and critic. In progress for firm-wide adoption at JP Morgan.
//               </p>
//               <div className="space-x-2">
//                 <span className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded">
//                   In Progress
//                 </span>
//               </div>
//             </li>

//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">ai-testweaver</h3>
//               <p className="text-sm text-gray-800 mb-2">
//                 A no-code Java unit test generator with a self-healing feedback loop.
//               </p>
//               <div className="space-x-2">
//                 <a
//                   target="_blank"
//                   className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50"
//                   href="https://github.com/Pratyush-exe"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </li>

//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">lan-compute</h3>
//               <p className="text-sm text-gray-800 mb-2">
//                 Distributed ML model training and inference over a local network.
//               </p>
//               <div className="space-x-2">
//                 <a
//                   target="_blank"
//                   className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50"
//                   href="https://github.com/Pratyush-exe"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </li>

//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">rewards.ai</h3>
//               <p className="text-sm text-gray-800 mb-2">
//                 A low-code platform for training reinforcement learning agents like AWS DeepRacer.
//               </p>
//               <div className="space-x-2">
//                 <a
//                   target="_blank"
//                   className="inline-block text-gray-800 text-xs border border-gray-800 px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-gray-50"
//                   href="https://github.com/Pratyush-exe"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </li>
//           </ul>

//           <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Publications</h2>
//           <ul className="space-y-4 mb-12">
//             <li className="border-b border-gray-200 pb-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-950">
//                 Paradigm shift in Nutritional Science: Using Machine Learning to Predict Macro-nutrient Requirements
//               </h3>
//               <p className="text-sm text-gray-800 mb-2">CODS-COMAD 2023 (IIT Bombay)</p>
//               <p className="text-sm text-gray-600">
//                 Supervised learning-based system to predict macronutrient categories using synthetic data from live user profiles.
//               </p>
//             </li>
//           </ul>

//           <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">Miscellaneous</h2>
//           <ul className="list-disc list-inside space-y-2 text-xs text-gray-700">
//             <li>
//               Contributions to{" "}
//               <a target="_blank" href="#" className="text-blue-600 hover:underline">
//                 deepeval
//               </a>
//               : Integrated DeepEvalHuggingFaceCallback into Seq2SeqTrainer.
//             </li>
//             <li>
//               Worked across the full development lifecycle with Java, Python, JavaScript, TypeScript.
//             </li>
//             <li>
//               Hands-on with AWS (ECS, EKS, S3, KMS, Lambda, RDS) and Terraform for infrastructure management.
//             </li>
//             <li>Maintained CI/CD pipelines via Jenkins and Spinnaker.</li>
//             <li>Contact: +91 9337070750</li>
//           </ul>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Index;
