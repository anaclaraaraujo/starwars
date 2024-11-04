import { Route, Routes } from "react-router-dom";
import { Film } from "../pages/Film";
import { People } from "../pages/People";
import { Home } from "../pages/Home";
import { Planets } from "../pages/Planets";
import { Species } from "../pages/Species";
import { Starships } from "../pages/Starships";
import { Vehicles } from "../pages/Vehicles";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/film" element={<Film />}/>
      <Route path="/people" element={<People />}/>
      <Route path="/planets" element={<Planets />}/>
      <Route path="/species" element={<Species />}/>
      <Route path="/starships" element={<Starships />}/>
      <Route path="/vehicles" element={<Vehicles />}/>
      
    </Routes>
  )
}