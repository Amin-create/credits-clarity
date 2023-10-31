
import "../src/index.css";
import { Home, Footer, Header } from './components';

function App() {
  return (
    <main className="bg-main">
      <Header />
      <Home.Hero />
      <Home.Help />
      <Home.ContentImage />
      <Home.Faq />
      <Home.Cta />
      <Footer />
    </main>
  );
}

export default App;
