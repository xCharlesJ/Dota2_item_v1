import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroListPage from "@/pages/HeroListPage";
import HeroDetailPage from "@/pages/HeroDetailPage";

const basename = import.meta.env.BASE_URL;

export default function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HeroListPage />} />
        <Route path="/hero/:id" element={<HeroDetailPage />} />
      </Routes>
    </Router>
  );
}
