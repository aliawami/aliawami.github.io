import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Disciplines from './components/Disciplines';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#040912]">
      <Navbar />
      <main>
        <Hero />
        <Disciplines />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
