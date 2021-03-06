import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 768px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 25px;
  animation: animateThumbnail 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;