import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom, rgba(0, 0, 0, 0)
      41%, rgba(0, 0, 0, .65)
      100%
    ),
    url(${props => props.image}),
    var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const Text = styled.div`
  color: var(--darkGrey);  
  max-width: 700px;
  min-height: 100px;
  z-index: 1;
  position: absolute;
  bottom: 25px;
  margin-right: 20px;

  h1 {
    font-size: var(--fontExtraLarge);

    @media all and (max-width: 768px) {
      font-size: var(--fontLarge);
    }
  }

  p {
    font-size: var(--fontMedium);

    @media all and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }

  @media all and (max-width: 768px) {
    max-width: 100%;
  }
`;