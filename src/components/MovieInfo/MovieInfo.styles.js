import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) => 
    backdrop 
      ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` 
      : '#000000' 
  };
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 0.8s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: #000000;
  opacity: 0.8;
  border-radius: 40px;
  padding: 10px;

  @media all and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 0 40px;
  color: var(--white);
  overflow: hidden;

  .rating-and-directors {
    display: flex;
    justify-content: flex-start;
  }

  .rating {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    border-radius: 18px;
    background: var(--white);
    color: #000000;
    font-weight: 700;
  }

  .directors {
    margin-left: 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media all and (max-width: 768px) {
      font-size: var(--fontLarge);
    }
  }
`;