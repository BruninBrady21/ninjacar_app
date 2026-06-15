import styled from "styled-components";
import ninjaFix from '../assets/ninjago_fix.gif';

const FavoritesContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 5px 20px;
  color: #222;
  text-align: center;
`;

const NinjaImage = styled.img`
  max-width: 100%;
  width: 720px;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
`;

const FavoritesTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #111;
  font-family: 'Bahnschrift', sans-serif;
  margin-top: 10px;
`;

const FavoritesText = styled.p`
  max-width: 640px;
  margin: 16px auto 0;
  line-height: 1.7;
  color: #444;
  font-size: 1rem;
`;

const Favorites = () => {
  return (
    <FavoritesContainer>
      <FavoritesTitle>Meus Favoritos</FavoritesTitle>
      <FavoritesText>
        <strong>Eita, a página não tá pronta! 😬</strong>
        <NinjaImage src={ninjaFix} alt="Ninja Fixing" />
        <br />
        Desculpe-me pelo inconveniente, Ninja! A página de favoritos ainda está sendo implementada... mas não desanime! 
        <br />
        Continue cadastrando normalmente teus veículos e aproveite a experiência. 
        <br />
        Em breve, teremos novidades incríveis para personalizar ainda mais o NinjaCar do seu jeito! 
        <br /><br />
        Fique ligado! ;D
      </FavoritesText>
    </FavoritesContainer>
  );
};

export default Favorites;