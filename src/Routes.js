import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
// IMPORT_PAGE_HERE

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export { AppRoutes };
