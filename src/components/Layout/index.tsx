import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Container, Context, Main } from './style';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Context>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Context>
    </Container>
  );
};