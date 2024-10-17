import { ThemeProvider } from "./context/themeContext";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
