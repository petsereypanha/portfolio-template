import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import smsImage from "../assets/school_system.png";
import courceImage from "../assets/cource_online.png";
import porfolioImage from "../assets/portfolio_website.png";
import commerceImage from "../assets/e_commerce.png";
import { p } from 'motion/react-client';

// ProjectCard component remains unchanged
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    delay: index * 200,
    config: config.gentle,
  });

  const hoverProps = useSpring({
    transform: isHovered ? 'scale(1.02) translateY(-10px)' : 'scale(1) translateY(0)',
    boxShadow: isHovered 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
      : '0 0 0 0 rgba(0, 0, 0, 0)',
    config: { tension: 300, friction: 20 },
  });

  const imageProps = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 20 },
  });

  const overlayProps = useSpring({
    opacity: isHovered ? 0.3 : 0.6,
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...springProps, ...hoverProps }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <animated.img
          style={imageProps}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <animated.div 
          style={overlayProps}
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-white/5 text-blue-400 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-all duration-300 group/link"
            >
              <svg className="w-5 h-5 transform group-hover/link:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="relative">
                Live Demo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
              </span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-all duration-300 group/link"
            >
              <svg className="w-5 h-5 transform group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="relative">
                Source Code
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
              </span>
            </a>
          )}
        </div>
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: config.gentle,
  });

  const projects = [
    {
      title: "School Management System (Coming Soon)",
      description:
        "A comprehensive platform for managing student records, attendance tracking, grade management, and administrative tasks for educational institutions.",
      image: smsImage,
      technologies: [
        "Node.js",
        "Next.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/nhaserey/nest-sms",
    },
    {
      title: "Course Online API",
      description:
        "An interactive e-learning platform featuring video lectures, quizzes, and progress tracking. Supports both live and self-paced learning with student-instructor interaction.",
      image: courceImage,
      technologies: ["Java", "SpringBoot", "PostgreSQL", "REST APIs"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/nhaserey/schoool",
    },
    {
      title: "E-Commerce API",
      description:
        "A robust RESTful API backend for e-commerce platforms featuring product management, user authentication, order processing, and payment integration.",
      image: commerceImage,
      technologies: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/sereynha/ecommerce",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode.",
      image: porfolioImage,
      technologies: ["React", "Tailwind CSS", "Vite", "React Spring"],
      liveUrl: "https://petsereypanha.it.com",
      githubUrl: "https://github.com/petsereypanha/portfolio-template",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <animated.div ref={ref} style={titleSpring} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </animated.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* More Projects Link */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/petsereypanha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              <span>View More on GitHub</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
