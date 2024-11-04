import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => { 
    navigate(path)
  }

  return (
    <div>
      <h1>Welcome to Star Wars Discover</h1>

      <Button onClick={() => handleNavigate('/film')}>Go to Films</Button>
      <Button onClick={() => handleNavigate('/people')}>Go to People</Button>
      <Button onClick={() => handleNavigate('/planets')}>Go to Planets</Button>

      <Button onClick={() => handleNavigate('/species')}>Go to Species</Button>
      <Button onClick={() => handleNavigate('/starships')}>Go to Starships</Button>
      <Button onClick={() => handleNavigate('/Vehicles')}>Go to Vehicles</Button>
    </div>
  );
}