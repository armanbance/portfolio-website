import React from "react";
import { Link } from "react-scroll";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Bhizchat from "./assets/bhizchat.png";
import SCE from "./assets/SCE.png";
import chillguy from "./assets/chillguy.png";
import SpartanFitness from "./assets/SpartanFitness.png";
import EasyBuckets from "./assets/EasyBuckets.png";

const experienceItems = [
  {
    image: Bhizchat,
    title: "Bhizchat",
    description:
      "Software engineer intern at Bhizchat. I worked on backend development using Typescript and Node.js. I engineered a real-time messaging layer for an AI-powered chatbot for Shopify stores using WebSocket APIs and Typescript, reducing end-to-end latency by over 40% and boosting user engagement. I also helped to create a recommendation engine leveraging Pinecone vector database and OpenAI's GPT-4o, enhancing personalized product discovery and increasing store sales by about 15%",
  },
  {
    image: SCE,
    title: "SJSU Software and Computer Engineering Society (SCE)",
    description:
      "Full stack developer at SCE. Designed and optimized RESTful APIs using Node.js and Express for the organization’s website, implementing JSON Web Tokens (JWT) and OAuth 2.0 to enforce robust security protocols and data protection for 500+ users. I also streamlined various deployment processes, including automating CI/CD pipelines with GitHub Actions and adding frontend testing, increasing bug resolution and deployment speed by about 15%.",
  },
];

const projectItems = [
  {
    image: chillguy,
    title: "ChillGuy.ai",
    description:
      "Built an AI-powered voice agent that provides mental health and wellness check-ins via phone calls, winning 2nd place overall at Santa Clara University’s Hack for Humanity 2025 out of over 330 participants. We integrated Twilio for outbound voice calls, and Google Oauth/Calendar to allow users to schedule calls. We also leveraged Eleven Labs natural-sounding voice agents powered by GPT-4o to guide users through calming breathing exercises and affirmations, lowering stress and providing emotional support",
  },
  {
    image: SpartanFitness,
    title: "Spartan Fitness",
    description:
      "Spartan Fitness is a scalable fitness app for San Jose State University (SJSU) students that tracks real-time gym occupancy and help users create workout plans based on machine availability. Built an Express.js server to handle user authentication and storing the user’s workout plans in MongoDB. Incorporated information from various external API’s and SJSU to offer accurate and precise data ",
  },
  {
    image: EasyBuckets,
    title: "Easy Buckets",
    description:
      "Created a full-stack website to streamline cloud-based file uploads for users and businesses. Integrated AWS S3 with a Spring Boot backend to enable seamless and secure uploads to AWS S3 buckets. Dockerized the application to ensure consistent deployment and scalability, leveraging containerization to simplify the setup process and manage dependencies efficiently.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Arman Bance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I'm a Junior at San Jose State University pursuing Computer Science.
            I'm passionate about creating innovative solutions and learning new
            technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">
            Experience
          </h2>
          <Carousel items={experienceItems} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <Carousel items={projectItems} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a driven Computer Science student at San Jose State
              University, currently in my junior year, with a strong passion for
              solving complex problems and building impactful applications. My
              academic journey has equipped me with a solid foundation in
              software engineering, cloud computing, and artificial
              intelligence, while my hands-on experience has allowed me to
              explore cutting-edge technologies. Recently, I demonstrated my
              ability to innovate and collaborate by winning second place at
              Santa Clara University’s Hack for Humanity hackathon, where I
              developed a voice-based intelligent agent using APIs like Twilio
              and ElevenLabs. My goal is to continue creating meaningful
              applications that make a positive difference, combining technical
              expertise with creativity to address real-world challenges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
