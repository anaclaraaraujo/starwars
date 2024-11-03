import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Film } from './pages/Film';
import { People } from './pages/People';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Film />} />
        <Route path="/film" element={<Film />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </Router>
  );
};