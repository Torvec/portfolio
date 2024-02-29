import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="bg-white font-sans text-stone-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
