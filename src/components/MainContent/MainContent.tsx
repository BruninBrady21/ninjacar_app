import React from "react";
import styled from "styled-components";

const MainContentContainer = styled.main`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e1edde;
`;

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainContentContainer>
      {children}
    </MainContentContainer>
  );
};

export default MainContent;