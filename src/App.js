import "./App.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { AppRoutes } from "./Routes";
import { Navigation } from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
