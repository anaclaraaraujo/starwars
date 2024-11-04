import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;

  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const CustomButton = styled(Button)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem;

  background: none;
  min-height: 25rem;
  max-width: 16.5rem;
  border: 0;

  color: white;
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;

  img {
    width: auto;
    height: 9rem;
  }

  span {
    font-size: 1.5rem;
    color: white;
  }

  &:hover {
    background: radial-gradient(circle, rgba(0, 0, 0, 0) 100%, rgba(255, 255, 255, 255) 19%) !important;
    color: white  !important;
    transform: scale(1.05);
    border-top: 2px solid #fff   !important;
    border-bottom: 2px solid #fff   !important;
  }
`;