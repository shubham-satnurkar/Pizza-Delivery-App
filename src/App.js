import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
