// Styles:
import { Wrapper, Content } from './BreadCrumb.styles';
// Routing:
import { Link } from 'react-router-dom';

const BreadCrumb = ({ movieTitle}) => {
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

export default BreadCrumb;
