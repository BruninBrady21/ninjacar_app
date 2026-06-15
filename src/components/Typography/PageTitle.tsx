import styled from "styled-components";

const PageTitle = styled.h1`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 2rem;
  font-family: 'Bahnschrift', sans-serif;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-family: 'Bahnschrift', sans-serif;
  font-size: 1.15rem;
  color: #141414;

  margin-top: 8px;
`;

export { PageTitle, Title, Subtitle };