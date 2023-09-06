import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Questionary from "./components/Questionary/Questionary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="questionary/:id" element={<Questionary />}/>
      </Routes>
    </>
  );
}

export default App;
