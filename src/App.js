import Router from "./Components/Router/Router";
import { ThemeProvider } from "./Context/Themecontext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

