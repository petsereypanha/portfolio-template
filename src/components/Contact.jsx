import { useSpring, animated, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import AnimatedInput from "./AnimatedInput.jsx";
import SuccessMessage from "./SuccessMessage.jsx";
import ContactInfo from "./ContactInfo.jsx";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: config.gentle,
  });

  const successSpringProps = useSpring({
    opacity: isSubmitted ? 1 : 0,
    transform: isSubmitted ? "scale(1)" : "scale(0.8)",
    config: { tension: 200, friction: 20 },
  });

  const formSpringProps = useSpring({
    opacity: !isSubmitted ? 1 : 0,
    transform: !isSubmitted ? "scale(1)" : "scale(0.8)",
    config: { tension: 200, friction: 20 },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <animated.div
          ref={ref}
          style={springProps}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ContactInfo />

            {/* Contact Form / Success Message */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 relative min-h-[400px]">
              {isSubmitted ? (
                <SuccessMessage successSpringProps={successSpringProps} />
              ) : (
                <animated.form
                  style={formSpringProps}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <AnimatedInput
                    label="Name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  <AnimatedInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  <AnimatedInput
                    label="Message"
                    type="textarea"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Send Message
                  </button>
                </animated.form>
              )}
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Contact;
