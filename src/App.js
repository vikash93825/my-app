import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Containers/Footer";
import HomePage from "./Containers/HomePage";
import NavLink from "./Containers/NavLink";

function App() {
  return (
    <div className="App">
      <NavLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
