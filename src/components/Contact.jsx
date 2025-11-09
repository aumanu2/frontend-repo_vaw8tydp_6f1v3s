import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Get in Touch with Us
        </motion.h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          We’d love to connect with innovators, investors, and partners passionate about transforming healthcare.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-slate-700"
          >
            <p><span className="font-medium text-slate-800">Email:</span> globalvitaledge@gmail.com</p>
            <p><span className="font-medium text-slate-800">Instagram:</span> @vitaledge_india</p>
            <p className="text-sm text-slate-500">© 2025 VitalEdge. All Rights Reserved.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get('name');
              alert(`Thanks, ${name}! We have received your message.`);
              form.reset();
            }}
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <button type="submit" className="inline-flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 text-white shadow hover:opacity-90">Send Message</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
