
import "../src/index.css";
import Header from './components/core/Header.js';
import ContentImageSection from "./components/home/ContentImageSection";
import HelpSection from './components/home/HelpSection.js';
import Hero from './components/home/Hero.js';

function App() {
  return (
    <main className="bg-main">
      <Header />
      <Hero />
      <HelpSection />
      <ContentImageSection />
    </main>
  );
}

export default App;
