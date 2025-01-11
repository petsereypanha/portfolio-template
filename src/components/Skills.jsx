import { useSpring, animated, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 100,
    config: config.gentle,
  });

  const hoverProps = useSpring({
    transform: isHovered
      ? "scale(1.03) translateY(-5px)"
      : "scale(1) translateY(0px)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
      : "0 0 0 0 rgba(0, 0, 0, 0)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...springProps, ...hoverProps }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {skill.name}
          </h3>
          <span className="text-blue-400">{skill.level}%</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <animated.div
            style={{
              width: inView ? `${skill.level}%` : "0%",
              background: isHovered
                ? "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)"
                : "linear-gradient(90deg, #60A5FA 0%, #A78BFA 100%)",
              transition: "all 0.3s ease",
            }}
            className="h-full rounded-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

const TechIcon = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = useSpring({
    transform: isHovered
      ? "scale(1.1) translateY(-10px)"
      : "scale(1) translateY(0px)",
    rotateZ: isHovered ? "10deg" : "0deg",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={hoverProps}
      className="group flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-3xl mb-2">{tech.icon}</span>
      <span className="text-gray-300 text-sm group-hover:text-blue-400 transition-colors duration-300">
        {tech.name}
      </span>
    </animated.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  });

  const skills = [
    {
      name: "Frontend Development",
      level: 60,
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      name: "Backend Development",
      level: 70,
      tags: [
        "Node.js",
        "Express",
        "Nest.js",
        "Spring",
        "SpringBoot",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
      ],
    },
    {
      name: "UI/UX Design",
      level: 50,
      tags: ["Figma", "Responsive Design", "Prototyping"],
    },
    {
      name: "DevOps & Tools",
      level: 65,
      tags: ["Git", "Docker", "Kubernetes", "CI/CD", "Linux"],
    },
  ];

  const technologies = [
    { name: "TypeScript", icon: "📘" },
    { name: "Java", icon: "☕" },
    { name: "Node.js", icon: "🟢" },
    { name: "Spring", icon: "🍃" },
    { name: "Kubernetes", icon: "⎈" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <animated.div
            ref={ref}
            style={titleSpring}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </animated.div>

          {/* Main Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Technologies Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <TechIcon key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300">
              Always learning and exploring new technologies to stay at the
              forefront of web development. Currently exploring Web3
              technologies and AI integration in web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
