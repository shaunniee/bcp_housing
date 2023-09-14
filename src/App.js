import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Housing from "./Pages/Housing/Housing";
import Health from "./Pages/Health/Health";
import Income from "./Pages/Income/Income";

function App() {
  return (
    <div className="App">
      <Home/>
        <Routes>
        <Route exact path="/" element={<Housing/>} />
        <Route path="/housing" element={<Housing/>} />
        <Route path="/health" element={<Health/>} />

        <Route path="/income" element={<Income/>} />

      </Routes>
    </div>
  );
}

export default App;
