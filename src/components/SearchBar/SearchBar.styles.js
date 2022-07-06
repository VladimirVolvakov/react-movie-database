import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--darkGrey);
  height: 100px;
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  background: var(--mediumGrey);
  color: var(--white);
  height: 55px;
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 50px;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    position: absolute;
    left: 10px;
    height: 40px;
    font-size: 28px;
    color: var(--white);
    width: 95%;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    border-radius: 50px;
    background: transparent;
  }
`;