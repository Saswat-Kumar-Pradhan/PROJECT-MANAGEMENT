import './App.css';
import Login from './pages/login/login';
import Navbar from './components/navbar/navbar';
import Dashboard from './pages/dashboard/dashboard';
import Project from './pages/project/project';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const isAdmin = JSON.parse(localStorage.getItem('userInfo'))?.role === 'Admin';

  return (
    <Router>
      {isAdmin && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAdmin ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/project" element={isAdmin ? <Project /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
