import './App.css';
import Landing1 from './Pages/Landing1';
import ProfilePage from './Pages/ProfilesPages';
import StudentDashboard from './Pages/StudentDashboard';
import SignupForm from './Pages/Signup';
import Login from './Pages/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // v6 syntax

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Landing1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>

  );
}

export default App;
