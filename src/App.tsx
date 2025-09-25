import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboards from "./Pages/Dashboards";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboards />} />
    </Routes>
  );
}

export default App;
