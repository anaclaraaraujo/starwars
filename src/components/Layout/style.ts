import styled from "styled-components";
import imgBG from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-image: url(${imgBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;


export const Context  = styled.div`
  width: 112rem;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  padding: 4rem 0;
`;

export const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  padding-bottom: 7.2rem;
  
`;