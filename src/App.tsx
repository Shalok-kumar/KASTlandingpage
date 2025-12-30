import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CryptoCard } from './components/CryptoCard';
import { MobileApp } from './components/MobileApp';
import { Security } from './components/Security';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <CryptoCard />
      <MobileApp />
      <Security />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
}