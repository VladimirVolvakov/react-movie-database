// Styles:
import { Wrapper } from './LoadMoreButton.styles';

const LoadMoreButton = ({ text, callback }) => {
  return (
    <Wrapper type='button' onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default LoadMoreButton;