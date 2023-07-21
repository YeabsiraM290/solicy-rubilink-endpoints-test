import { BrowserRouter, Routes, Route } from "react-router-dom";
import Endpoints from "./components/endpoints/Endpoints";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Endpoints />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
