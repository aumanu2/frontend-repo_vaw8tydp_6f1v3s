import { motion } from 'framer-motion';
import { Cpu, Bluetooth, Activity, BatteryCharging } from 'lucide-react';

const features = [
  { icon: Activity, title: 'Real-time monitoring' },
  { icon: Bluetooth, title: 'Seamless Bluetooth connectivity' },
  { icon: Cpu, title: 'AI-based health analytics' },
  { icon: BatteryCharging, title: 'Rechargeable, compact design' },
];

export default function Product() {
  return (
    <section id="product" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          VitalEdge Device
        </motion.h2>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-slate-700"
          >
            <h3 className="text-xl font-semibold text-slate-800">Pocket-sized, multifunctional tool</h3>
            <p>
              A compact device integrating ECG, SpO2, digital stethoscope, temperature sensor, and microphone — powered by the ESP32 microcontroller for reliable on-device processing and connectivity.
            </p>
            <h3 className="text-xl font-semibold text-slate-800">Companion App — Mediesta AI</h3>
            <p>
              Our Mediesta platform processes sensor data to generate clear, comprehensive health reports with actionable insights, enabling proactive care and remote consultations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {features.map(({ icon: Icon, title }, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="rounded-md bg-teal-50 p-2 text-teal-600"><Icon className="h-5 w-5" /></div>
                  <span className="text-slate-800">{title}</span>
                </div>
              ))}
            </div>

            <p className="pt-4 text-slate-800 font-medium">Coming soon — Be part of the health‑tech revolution.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 grid place-items-center text-slate-500">
              <span className="text-center px-4">High‑quality device visuals and renders can be showcased here.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
