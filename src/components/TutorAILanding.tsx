import { useEffect } from "react";
import { motion } from "framer-motion";

const TutorAILanding = () => {
  useEffect(() => {
    // Optional interactivity hooks (API calls, analytics, etc.)
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-2xl font-bold text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          TutorAI
        </motion.h1>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            Log In
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition">
            Join Waitlist
          </button>
        </motion.div>
      </nav>

      {/* Hero */}
      <motion.section
        className="flex flex-col items-center justify-center flex-1 max-w-3xl mx-auto text-center px-6 py-20"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold leading-tight"
          variants={fadeIn}
        >
          Learn Smarter with{" "}
          <span className="text-green-600">TutorAI</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-600"
          variants={fadeIn}
        >
          Your personal AI-powered tutor. Join our waitlist today and be the
          first to experience the future of learning.
        </motion.p>

        {/* Waitlist Form */}
        <motion.form
          className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3"
          variants={fadeIn}
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Handle waitlist form submission (API call)
            alert("Thank you for joining the waitlist!");
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Join Waitlist
          </button>
        </motion.form>
      </motion.section>

      {/* Features */}
      <motion.section
        className="w-full max-w-5xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {[
          { num: "1", title: "Interactive Learning", desc: "Engage with lessons tailored to your needs." },
          { num: "2", title: "AI Insights", desc: "Get feedback and smart recommendations." },
          { num: "3", title: "Learn Anywhere", desc: "Access on any device, anytime." },
        ].map((f, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center"
            variants={fadeIn}
          >
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
              {f.num}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Trusted By */}
      <motion.section
        className="w-full max-w-4xl mx-auto py-20 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Trusted by <span className="text-green-600">13,000+</span> learners
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "Unreal",
            "Amazing!",
            "Incredible",
            "Awesome!",
            "Fantastic",
            "Super!",
          ].map((word, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200"
              variants={fadeIn}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-sm text-gray-500 text-center">
        <p>© {new Date().getFullYear()} TutorAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TutorAILanding;
