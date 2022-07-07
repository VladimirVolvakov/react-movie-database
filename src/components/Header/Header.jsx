// Images:
import RMDBLogo from '../../assets/react-movie-logo.svg';
import TMDBLogo from '../../assets/tmdb_logo.svg';
// Styles:
import { Wrapper, Content, Logo, TheMovieDatabaseLogo } from './Header.styles';
// Routing:
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <Logo src={RMDBLogo} alt='React movie database logo' />
        </Link>
        <TheMovieDatabaseLogo src={TMDBLogo} alt='TheMovieDataBase logo' />
      </Content>
    </Wrapper>
  );
};

export default Header;