import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage } from "../../heroes/pages/MarvelPage";
import { DcPage } from "../../heroes/pages/DcPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export const HeroesRouter = () => {
  return (
    <Routes>
      <Route path="/marvel" element={<MarvelPage />} />
      <Route path="/dc" element={<DcPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/hero/:heroId" element={<HeroPage />} />
      <Route path="/*" element={<Navigate to="/marvel" />} />
    </Routes>
  );
};
