import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process';
import Brands from './components/Brands';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { PROJECTS } from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProject = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
  };

  // Observe active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'experience', 'work', 'skills', 'process', 'brands'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#241F21] relative selection:bg-[#F4A7C1]/30 selection:text-[#7C284C]">
      {/* Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onExploreExperience={() => scrollToSection('experience')}
        />
        <About />
        <Education />
        <Experience onSelectProject={handleOpenProject} />
        <Projects onSelectProject={handleOpenProject} />
        <Skills />
        <Process />
        <Brands onSelectProject={handleOpenProject} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Mini Case Study Experience Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onSelectOtherProject={handleOpenProject}
        allProjects={PROJECTS}
      />
    </div>
  );
}
