import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroListPage from "@/pages/HeroListPage";
import HeroDetailPage from "@/pages/HeroDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroListPage />} />
        <Route path="/hero/:id" element={<HeroDetailPage />} />
      </Routes>
    </Router>
  );
}
