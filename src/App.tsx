// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MainApp from "./pages/Mainapp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<MainApp />} />
        {/* Nanti tambahkan route ke /app untuk main app */}
      </Routes>
    </Router>
  );
}

export default App;
