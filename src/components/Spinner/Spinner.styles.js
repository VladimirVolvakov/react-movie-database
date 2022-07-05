import styled from 'styled-components';

export const Spinner = styled.div`
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--mediumGrey);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 20px auto;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;