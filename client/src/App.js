import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Shelter/Home";
import Pet from "./pages/Pets/Pet";
import SearchPage from "./pages/Pets/SearchPage";
import PetDetail from "./pages/Pets/PetDetail";
import Adopt from "./pages/Pets/Adopt";
import Contact from "./pages/Shelter/Contact";
import FAQ from "./pages/Shelter/FAQ";

import Login from "./pages/Admin/Login";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  palette: {
    theme: {
      main: "#152238",
      contrastText: "#e1e1e1",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/pet/detail/:id" element={<PetDetail />} />
          <Route path="/pet/adopt/:id" element={<Adopt />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/question/:questionId" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
