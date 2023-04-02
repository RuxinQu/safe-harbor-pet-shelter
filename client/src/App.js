import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import Pet from "./pages/Pet";
import SearchPage from "./pages/SearchPage";
import PetDetail from "./pages/PetDetail";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
