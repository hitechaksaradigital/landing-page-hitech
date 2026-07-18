import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  )
}
