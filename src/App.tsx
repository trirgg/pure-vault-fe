// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Nanti tambahkan route ke /app untuk main app */}
      </Routes>
    </Router>
  );
}

export default App;
