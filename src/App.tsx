import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};