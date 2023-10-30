
import "../src/index.css";
import Header from './components/core/Header.js';
import ContentImage from "./components/home/ContentImage";
import Cta from "./components/home/Cta";
import Faq from "./components/home/faq/Faq";
import Help from './components/home/Help.js';
import Hero from './components/home/Hero.js';

function App() {
  return (
    <main className="bg-main">
      {/* <Header />
      <Hero />
      <Help /> */}
      {/* <ContentImage /> */}
      {/* <Faq /> */}
      <Cta />
    </main>
  );
}

export default App;
