import './App.css'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <AppHeader />
      <main className="bg-white text-stone-800 font-sans">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <AppFooter />
    </>
  );
}

export default App
