// Styles:
import { Wrapper, Content } from './BreadCrumb.styles';
// Routing:
import { Link } from 'react-router-dom';
// Props type check:
import PropTypes from 'prop-types';

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{ movieTitle }</span>
      </Content>
    </Wrapper>
  );
};

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default BreadCrumb;