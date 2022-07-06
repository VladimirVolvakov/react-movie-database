import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  height: 60px;
  width: 25%;
  min-width: 200px;
  border: 0;
  border-radius: 25px;
  margin: 20px auto;
  color: var(--white);
  font-size: var(--fontLarge);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`;