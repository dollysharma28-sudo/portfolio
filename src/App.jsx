// App.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiCode, FiLayout, FiCpu, FiStar } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact,   FaWhatsapp, } from 'react-icons/fa';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919911476780"; // 🔴 REPLACE WITH YOUR NUMBER

    const text = `
Hello Dolly 👋

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-transparent border-t-pink-500 border-r-purple-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-transparent border-b-pink-300 border-l-purple-300 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gray-900/90 backdrop-blur-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            Dolly Sharma
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:text-pink-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Hi, I'm <span className="text-pink-400">Dolly</span>
                  <div className="text-4xl md:text-6xl mt-2">Frontend Developer</div>
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-xl">
                  I create beautiful, responsive web interfaces that are both functional and delightful to use. 
                  Passionate about transforming ideas into digital experiences.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-pink-500 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500/10 transition-colors"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-xl"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <FiCode className="text-3xl text-pink-400 mb-2" />
                    <h3 className="font-semibold">Clean Code</h3>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <FiLayout className="text-3xl text-purple-400 mb-2" />
                    <h3 className="font-semibold">Responsive Design</h3>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    <FiCpu className="text-3xl text-pink-400 mb-2" />
                    <h3 className="font-semibold">Performance</h3>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-xl">
                    {/* <FiSparkles className="text-3xl text-purple-400 mb-2" /> */}
                    <h3 className="font-semibold">UI/UX Focus</h3>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl">
                  <p className="text-sm">
                    "Turning design concepts into functional, beautiful interfaces with attention to detail and user experience."
                  </p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
<section id="about" className="py-24 px-6 bg-gray-900/50">
  <div className="container mx-auto max-w-6xl">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A quick overview of who I am, what I do, and what I’m working toward.
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4" />
    </motion.div>

    <div className="grid md:grid-cols-3 gap-12 items-center">

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-start"
      >
        <div className="relative">
          <div className="absolute inset-0  bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-40" />
          <img
            src="/dolly.jpeg" // replace with your image
            alt="Profile"
            className="relative w-64 h-64 object-cover border-4 border-gray-800 shadow-2xl"
          />
        </div>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:col-span-1"
      >
        <h3 className="text-2xl font-semibold mb-4 text-pink-400">
          Frontend Developer
        </h3>

        <p className="text-gray-300 text-lg mb-4">
          I am a motivated Frontend Developer with hands-on experience in building
          responsive, accessible, and visually engaging web interfaces. I enjoy
          transforming complex ideas into clean, intuitive user experiences.
        </p>

        <p className="text-gray-300 text-lg mb-6">
          I focus on writing maintainable code, following modern UI patterns,
          and continuously improving performance and usability across devices.
        </p>

        {/* Highlights */}
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-3 bg-pink-500 rounded-full" />
            <span>Experience with real-world projects and internships</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-3 bg-purple-500 rounded-full" />
            <span>Strong understanding of responsive design principles</span>
          </div>
          <div className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-3 bg-pink-500 rounded-full" />
            <span>Comfortable working in team-based development environments</span>
          </div>
        </div>
      </motion.div>

      {/* Education + Tech Stack */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>

        <div className="relative pl-8 mb-8">
          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded" />
          <h4 className="text-xl font-semibold">
            BTech – Computer Science Engineering
          </h4>
          <p className="text-gray-400">JB Knowledge Park</p>
          <p className="text-pink-400">2024 – Present</p>
        </div>

        {/* Tech Stack */}
        <h4 className="text-lg font-semibold mb-4 text-center text-purple-400">
          Tech Stack
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
            "Figma",
          ].map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

    </div>

    {/* Career Goal */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 text-center max-w-3xl mx-auto"
    >
      <h3 className="text-2xl font-semibold mb-4 text-pink-400">
        Career Objective
      </h3>
      <p className="text-gray-300 text-lg">
        My goal is to grow as a professional frontend developer by working on
        impactful products, learning modern frameworks, and contributing to
        meaningful digital experiences that solve real-world problems.
      </p>
    </motion.div>

  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: 'HTML5', level: 90 },
              { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: 'CSS3', level: 85 },
              { icon: <FaJs className="text-4xl text-yellow-500" />, name: 'JavaScript', level: 75 },
              { icon: <FaReact className="text-4xl text-cyan-500" />, name: 'Responsive Design', level: 88 },
              { icon: <FiLayout className="text-4xl text-pink-500" />, name: 'UI/UX Basics', level: 80 },
              { icon: <FaGithub className="text-4xl text-gray-300" />, name: 'GitHub', level: 70 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
                  ></motion.div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-400">Beginner</span>
                  <span className="text-sm text-gray-400">Expert</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
<section
  id="experience"
  className="py-24 px-6 bg-gradient-to-b from-purple-900 to-gray-900/50"
>
  <div className="container mx-auto max-w-5xl">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Professional Experience
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        Hands-on industry experience building real-world applications and
        learning modern development workflows.
      </p>
      <div className="w-28 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full" />
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-purple-700" />

      {[
        {
          title: "Frontend Developer Intern",
          company: "Graphura India Pvt. Ltd.",
          period: "Oct 2025 – Jan 2026",
          location: "Remote / India",
          responsibilities: [
            "Built responsive UI components using React, HTML, CSS, and JavaScript",
            "Converted Figma designs into pixel-perfect layouts",
            "Optimized UI performance and improved loading speed",
            "Collaborated with backend and design teams for smooth integration",
          ],
          skills: ["React", "JavaScript", "Tailwind CSS", "UI/UX"],
          impact: "Improved UI consistency and reduced layout issues by 30%",
        },
        {
          title: "Software Intern",
          company: "Navodita Infotech",
          period: "Sep 2025 – Oct 2025",
          location: "India",
          responsibilities: [
            "Learned fundamentals of Machine Learning and data handling",
            "Worked on basic Python scripts and ML concepts",
            "Prepared technical documentation and reports",
          ],
          skills: ["Python", "Machine Learning", "Documentation"],
          impact: "Strengthened core understanding of ML workflows",
        },
      ].map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Timeline Dot */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-pink-500 rounded-full ring-4 ring-pink-500/30" />

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`ml-12 md:ml-0 md:w-5/12 ${
              index % 2 === 0
                ? "md:pr-16 md:mr-auto"
                : "md:pl-16 md:ml-auto"
            }`}
          >
            <div className="bg-gray-800/70 backdrop-blur rounded-2xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-pink-400">
                {exp.title}
              </h3>
              <p className="text-lg font-semibold">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">
                {exp.period} • {exp.location}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 mt-2 mr-3 bg-purple-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <p className="mt-4 text-sm text-green-400">
                ✔ {exp.impact}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fresh & Clean Laundry Website',
                description: 'Complete frontend UI for a laundry service website with responsive design',
                tech: ['HTML', 'CSS', 'JavaScript'],
                features: ['Clean design', 'Easy navigation', 'User-friendly interface']
              },
              {
                title: 'Graphura Main Website',
                description: 'Enhanced and maintained company main website with improved UI usability',
                tech: ['HTML', 'CSS', 'JavaScript'],
                features: ['Responsive layouts', 'UI improvements', 'Team collaboration']
              },
              {
                title: 'Email Verifier Website',
                description: 'Frontend UI for an email verification website with form validation',
                tech: ['HTML', 'CSS', 'JavaScript'],
                features: ['Input forms', 'Result sections', 'Responsive design']
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl group"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <FiLayout className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-gray-900/50">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Frontend Project</span>
                    <div className="w-8 h-8 rounded-full border-2 border-pink-500 flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                      <div className="w-2 h-2 bg-pink-500 group-hover:bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
   <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900/30"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-300 mb-8">
                Open to freelance, internships, and full-time opportunities.
                Let’s build something great together!
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FiMail className="text-2xl text-pink-400" />
                  <span>dollysharma1519@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FiLinkedin className="text-2xl text-purple-400" />
                  <a
                    href="https://www.linkedin.com/in/dolly-sharma-63a288325/"
                    target="_blank"
                    className="hover:text-pink-400"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 backdrop-blur rounded-2xl p-8 border border-gray-700"
            >
              <form
                className="space-y-6"
                onSubmit={handleWhatsAppSubmit}
              >
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-green-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-green-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-green-500 outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25"
                >
                  <FaWhatsapp className="text-xl" />
                  Send via WhatsApp
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0"
            >
              Dolly Sharma
            </motion.div>
            <div className="flex space-x-6">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Dolly Sharma. All rights reserved.</p>
            <p className="mt-2 text-sm">Frontend Developer • UI/UX Enthusiast • Problem Solver</p>
          </div>
        </div>
      </footer>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;