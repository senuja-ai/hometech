import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Team />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
