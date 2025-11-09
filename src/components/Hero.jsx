import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-20">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient overlay to improve text readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-10"
          >
            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-700 ring-1 ring-inset ring-teal-200">Medical IoT • AI • India</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Redefining Portable Health Monitoring
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl">
              Empowering healthcare through intelligent, compact, and connected technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#product" className="inline-flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 text-white shadow hover:opacity-90">Explore Product</a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 bg-white px-6 py-3 text-slate-800 hover:bg-slate-50">Contact Us</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="py-10"
          >
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur">
              <p className="text-slate-700">
                VitalEdge is building a compact all‑in‑one medical device that measures ECG, SpO2, temperature, heart rate, and respiratory activity, all powered by AI through the Mediesta platform.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-600">
                <div className="rounded-lg bg-teal-50 px-3 py-2 text-teal-700">Real‑time</div>
                <div className="rounded-lg bg-blue-50 px-3 py-2 text-blue-700">Bluetooth</div>
                <div className="rounded-lg bg-teal-50 px-3 py-2 text-teal-700">AI Reports</div>
                <div className="rounded-lg bg-blue-50 px-3 py-2 text-blue-700">Compact</div>
                <div className="rounded-lg bg-teal-50 px-3 py-2 text-teal-700">Rechargeable</div>
                <div className="rounded-lg bg-blue-50 px-3 py-2 text-blue-700">Accurate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
