import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
