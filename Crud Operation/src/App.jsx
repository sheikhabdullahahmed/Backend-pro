import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './From/Form';
import Read from './Read/Read';
// import Home from './Pages/Home'; // Ek example page
// import About from './Pages/About'; // Dusra example page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/read" element={<Read />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
