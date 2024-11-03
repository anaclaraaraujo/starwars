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
      <Button onClick={() => handleNavigate('/film')}>Go to People</Button>
    </div>
  );
}