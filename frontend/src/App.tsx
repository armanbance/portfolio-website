import { Link } from "react-scroll";
import Navbar from "./components/Navbar";
import ExperienceCard from "./components/ExperienceCard";
import Tiltable from "./components/Tiltable";
import "./animations.css";
import Typewriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";

const experienceItems = [
  {
    image: "./Bhizchat.png",
    title: "Bhizchat",
    description:
      "I worked as a Software Engineer intern at Bhizchat, specifically on the backend team where I coded with Typescript and Node.js. I engineered a real-time messaging layer for an AI-powered chatbot for Shopify stores using WebSocket APIs, reducing end-to-end latency by over 40% and boosting user engagement. I also helped to create a recommendation engine leveraging Pinecone vector database and OpenAI's GPT-4o, enhancing personalized product discovery and increasing store sales by about 15%",
    tags: ["Typescript", "Node.js"],
  },
  {
    image: "./SCE.png",
    title: "SJSU Software and Computer Engineering Society (SCE)",
    description:
      "Worked as a Software Engineer intern at SCE over the summer in 2024. I designed and optimized RESTful APIs using Node.js and Express for the organization's website, implementing JSON Web Tokens (JWT) and OAuth 2.0 to enforce robust security protocols and data protection for 500+ users. I also streamlined various deployment processes, including automating CI/CD pipelines with GitHub Actions and adding frontend testing, increasing bug resolution and deployment speed by about 15%.",
  },
];

const projectItems = [
  {
    image: "./chillguy.png",
    title: "ChillGuy.ai",
    description:
      "Built an AI-powered voice agent that provides mental health and wellness check-ins via phone calls, winning 2nd place overall at Santa Clara University's Hack for Humanity 2025 out of over 330 participants. We integrated Twilio for outbound voice calls, and Google Oauth/Calendar to allow users to schedule calls. We also leveraged Eleven Labs natural-sounding voice agents powered by GPT-4o to guide users through calming breathing exercises and affirmations, lowering stress and providing emotional support",
    tags: ["Twilio", "Google Cloud", "Eleven Labs", "GPT-4o"],
    link: "#",
  },
  {
    image: "./SpartanFitness.png",
    title: "Spartan Fitness",
    description:
      "Spartan Fitness is a scalable fitness app for San Jose State University (SJSU) students that tracks real-time gym occupancy and help users create workout plans based on machine availability. Built an Express.js server to handle user authentication and storing the user's workout plans in MongoDB. Incorporated information from various external API's and SJSU to offer accurate and precise data ",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    link: "#",
  },
  {
    image: "./EasyBuckets.png",
    title: "Easy Buckets",
    description:
      "Created a full-stack website to streamline cloud-based file uploads for users and businesses. Integrated AWS S3 with a Spring Boot backend to enable seamless and secure uploads to AWS S3 buckets. Dockerized the application to ensure consistent deployment and scalability, leveraging containerization to simplify the setup process and manage dependencies efficiently.",
    tags: ["Java", "Spring Boot", "AWS S3", "Docker"],
    link: "#",
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
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Tiltable>
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 animate-fade-scale animate-delay-200">
                <img
                  src="./ArmanProfilePic.png"
                  alt="Arman Bance"
                  className="w-full h-full object-cover"
                />
              </div>
            </Tiltable>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-slide-left font-heading">
              Hi, I'm Arman Bance
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-left animate-delay-200">
              I'm a junior Computer Science at San Jose State University, and
              I'm passionate about creating innovative solutions and learning
              new technologies!
            </p>
            <div className="text-2xl font-semibold text-gray-700 mb-8 animate-slide-left animate-delay-300 font-mono">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full Stack Developer",
                    "Building the future of AI",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
            </div>
            <div className="flex space-x-4 animate-slide-left animate-delay-400">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer select-none"
              >
                Check Out My Work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12 animate-slide-down animate-delay-600 font-heading">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experienceItems.map((item, index) => (
              <div key={index} className={`animate-card-${index + 1}`}>
                <ExperienceCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-right animate-delay-800 font-heading">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectItems.map((item, index) => (
              <div key={index} className={`animate-card-${index + 1}`}>
                <ExperienceCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-left animate-delay-1000 font-heading">
            About Me
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-up animate-delay-1000">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a driven Computer Science student at San Jose State
              University, currently in my junior year, with a strong passion for
              solving complex problems and building impactful applications. My
              academic journey has equipped me with a solid foundation in
              software engineering, cloud computing, and artificial
              intelligence, while my hands-on experience has allowed me to
              explore cutting-edge technologies. Recently, I demonstrated my
              ability to innovate and collaborate by winning second place at
              Santa Clara University's Hack for Humanity hackathon, where I
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
