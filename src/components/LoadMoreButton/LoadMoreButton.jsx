// Styles:
import { Wrapper } from './LoadMoreButton.styles';
// Props type check:
import PropTypes from 'prop-types';

const LoadMoreButton = ({ text, callback }) => {
  return (
    <Wrapper type='button' onClick={callback}>
      {text}
    </Wrapper>
  );
};

LoadMoreButton.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default LoadMoreButton;