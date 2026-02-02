import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
