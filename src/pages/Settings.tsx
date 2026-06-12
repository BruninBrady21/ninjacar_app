import styled from "styled-components";
import ninjaFix from '../assets/ninjago_fix.gif';

const SettingsContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 40px 20px;
  background-color: #f9f9f9;
  color: #222;
  text-align: center;
`;

const NinjaImage = styled.img`
  max-width: 100%;
  width: 320px;
  height: auto;
  margin: 24px 0;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
`;

const SettingsTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #111;
`;

const SettingsText = styled.p`
  max-width: 640px;
  margin: 16px auto 0;
  line-height: 1.7;
  color: #444;
  font-size: 1rem;
`;

const Settings = () => {
  return (
    <SettingsContainer>
      <SettingsTitle>Configurações</SettingsTitle>
      <NinjaImage src={ninjaFix} alt="Ninja Fixing" />
      <SettingsText>
        Eita meu ninja! A página de configurações ainda está sendo implementada... mas não desanime! 
        Continue cadastrando normalmente teus veículos e aproveite a experiência. 
        Em breve, teremos novidades incríveis para personalizar ainda mais o NinjaCar do seu jeito! Fique ligado!
      </SettingsText>
    </SettingsContainer>
  );
};

export default Settings;
