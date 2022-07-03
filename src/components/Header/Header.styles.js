import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
  max-width: var(--maxWidth);
`;

export const Logo = styled.img`
  width: 200px;

  @media all and (max-width: 768px) {
    width: 150px;
  }
`;

export const TheMovieDatabaseLogo = styled.img`
  width: 100px;

  @media all and (max-width: 768px) {
    width: 70px;
  }
`;