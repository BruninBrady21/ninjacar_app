import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/ninja.png';

const HeaderContainer = styled.header`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D2EACC;
  color: white;
  padding: 10px 0;
  gap: 12px;
  box-sizing: border-box;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const BrandName = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Bahnschrift', sans-serif;
`;

const BrandPart = styled.span<{ color?: string }>`
  color: ${({ color }) => color || 'white'};
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: #5c5959;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
  font-family: 'Bahnschrift', sans-serif;

  &:hover {
    color: #00c853;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BrandRow>
        <Logo src={logo} alt="NinjaCar logo" />
        <BrandName>
          <BrandPart color="#000">Ninja</BrandPart>
          <BrandPart color="#00c853">Car</BrandPart>
        </BrandName>
      </BrandRow>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/settings">Configurações</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;