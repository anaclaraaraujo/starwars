import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import lStarWars from '../../assets/logo/starwars.svg';
import lDiscover from '../../assets/logo/discover.svg';

export function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <Container  onClick={handleLogoClick}>
      <img src={lStarWars} alt="Logo star wars" />
      <img src={lDiscover} alt="Logo discover" />
    </Container>
  )
}