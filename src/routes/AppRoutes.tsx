import { Route, Routes } from "react-router-dom";
import { Film } from "../pages/Film";
import { People } from "../pages/People";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/film" element={<Film />}/>
      <Route path="/people" element={<People />}/>
    </Routes>
  )
}