import { useNavigate } from "react-router-dom";
import filmsIcon from '../../assets/icons/films.png';
import charactersIcon from '../../assets/icons/characters.png';
import planetsIcon from '../../assets/icons/planets.png';
import speciesIcon from '../../assets/icons/species.png';
import starshipsIcon from '../../assets/icons/starships.png';
import vehiclesIcon from '../../assets/icons/vehicles.png';
import { Layout } from "../../components/Layout";
import { Container, CustomButton } from './style'

export function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  }

  return (
    <Layout>
      <Container>
          <CustomButton onClick={() => handleNavigate('/film')}>
            <img src={filmsIcon} alt="Films" />
            <span>Films</span>
          </CustomButton>

          <CustomButton onClick={() => handleNavigate('/people')}>
            <img src={charactersIcon} alt="People" />
            <span>People</span>
          </CustomButton>

          <CustomButton onClick={() => handleNavigate('/planets')}>
            <img src={planetsIcon} alt="Planets" />
            <span>Planets</span>
          </CustomButton>

          <CustomButton onClick={() => handleNavigate('/species')}>
            <img src={speciesIcon} alt="Species" />
            <span>Species</span>
          </CustomButton>

          <CustomButton onClick={() => handleNavigate('/starships')}>
            <img src={starshipsIcon} alt="Starships" />
            <span>Starships</span>
          </CustomButton>

          <CustomButton onClick={() => handleNavigate('/vehicles')}>
            <img src={vehiclesIcon} alt="Vehicles" />
            <span>Vehicles</span>
          </CustomButton>
      </Container>
    </Layout>
  );
}
