import "./App.css";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
