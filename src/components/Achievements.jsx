import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

const items = [
  { icon: Trophy, title: 'Winner of Futurepreneur Challenge 2024' },
  { icon: Star, title: 'IIT Guwahati and IIT Delhi TechFest Finalist' },
  { icon: Award, title: '₹50 lakh funding term sheet at ₹8 crore valuation' },
  { icon: Star, title: 'Shortlisted for Disrupt’25' },
  { icon: Trophy, title: 'Incubation talks with top IIT incubators' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Achievements & Media
        </motion.h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Milestones, awards, and recognitions along our journey.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-teal-50 p-3 text-teal-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-800">{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
