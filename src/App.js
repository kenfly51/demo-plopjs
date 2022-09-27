import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { Navigation } from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
