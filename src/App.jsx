import s from "./App.module.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Questionary from "./components/Questionary/Questionary";

function App() {
  const location = useLocation();

  return (
    <main className={`${location.pathname === "/" ? s.home : s.questionary}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questionary/:id" element={<Questionary />} />
      </Routes>
    </main>
  );
}

export default App;
