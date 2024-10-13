import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Nexx from './Nexx';
import CertificatesPage from './CertificatesPage';
import CoursesPage from './CoursesPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Nexx />} />
        <Route path="/Job" element={<CertificatesPage />} />
        <Route path="/Courseinside" element={<CoursesPage />} />
      </Routes>
    </Router>
  )
}

export default App
