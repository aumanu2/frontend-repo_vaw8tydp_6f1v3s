import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const metaTheme = document.querySelector('meta[name="theme-color"]');

    if (metaDescription) metaDescription.setAttribute('content', 'VitalEdge — portable health monitor, medical IoT, healthcare AI, Mediesta. Futuristic, compact, intelligent device from Mumbai, India.');
    if (metaKeywords) metaKeywords.setAttribute('content', 'VitalEdge, portable health monitor, medical IoT, healthcare AI, Mediesta, health innovation India, ECG, SpO2, ESP32');
    if (metaTheme) metaTheme.setAttribute('content', '#0f766e');

    document.title = 'VitalEdge — Redefining Portable Health Monitoring';
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
