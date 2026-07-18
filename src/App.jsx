import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}
