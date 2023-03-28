import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./components/AppNavbar";

import Home from "./pages/Home";
import { FAQ } from "./components/FAQ";
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
          <Route path="/question/:questionId" element={<FAQ />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
