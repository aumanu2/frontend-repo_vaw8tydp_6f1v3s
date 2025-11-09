import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          About Us
        </motion.h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate max-w-none"
          >
            <p>
              VitalEdge began as a student innovation from Mumbai with a simple goal: make health monitoring simpler and more accessible for everyone. Today, we are building intelligent, portable tools that put clinical-grade insights in your pocket.
            </p>
            <p>
              Our mission is to make healthcare accessible, intelligent, and portable using advanced IoT and AI technology. We believe the future of care is proactive, data-driven, and universally available.
            </p>
            <p>
              Driven by a young and ambitious team, we blend engineering rigor with human-centered design to deliver products that inspire trust and empower action.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-800">Vision & Core Values</h3>
            <ul className="mt-4 grid gap-3 text-slate-700">
              <li className="rounded-lg bg-teal-50 px-4 py-3">Innovation — pushing boundaries with IoT and AI</li>
              <li className="rounded-lg bg-blue-50 px-4 py-3">Accessibility — healthcare for everyone</li>
              <li className="rounded-lg bg-teal-50 px-4 py-3">Accuracy — reliable, clinically-aligned results</li>
              <li className="rounded-lg bg-blue-50 px-4 py-3">Trust — privacy, security, and transparency</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
