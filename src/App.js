import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  var isLoggedIn = false;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register isLoggedIn />} />
          <Route path="/login" element={<Login isLoggedIn />} />
          <Route path="/dashboard" element={<Dashboard isLoggedIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
