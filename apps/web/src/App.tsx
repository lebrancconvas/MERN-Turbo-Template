import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;