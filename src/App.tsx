import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Film } from './pages/Film';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Film />} />
      </Routes>
    </Router>
  );
};