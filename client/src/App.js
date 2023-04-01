import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import FAQ from "./pages/FAQ";
import AdoptPet from "./pages/AdoptPet";
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
          <Route path="/adopt-a-pet" element={<AdoptPet />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/question/:questionId" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
