import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/ninja.png';
import { FaHome } from 'react-icons/fa';
import { BsGearFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #009739;
  color: white;
  padding: 10px 0;
  gap: 12px;
  box-sizing: border-box;
  width: 100%;
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
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #c8c8c8;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
  font-family: 'Bahnschrift', sans-serif;

  display: inline-flex;
  align-items: center;
  gap: 5px;
  line-height: 1;
  margin-top: 10px;

  &:hover {
    color: #33f383;
  }

  svg {
    vertical-align: middle;
    position: relative;
    top: -1.5px;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BrandRow>
        <Logo src={logo} alt="NinjaCar logo" />
        <BrandName>
          <BrandPart color="#000">Ninja</BrandPart>
          <BrandPart color="#33f383">Car</BrandPart>
        </BrandName>
      </BrandRow>
      <Nav>
        <StyledLink to="/"> <FaHome /> Home</StyledLink>
        <StyledLink to="/favorites"> <AiFillStar /> Favoritos</StyledLink>
        <StyledLink to="/settings"> <BsGearFill /> Configurações</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;