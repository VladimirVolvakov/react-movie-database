// Images:
import RMDBLogo from '../../assets/react-movie-logo.svg';
import TMDBLogo from '../../assets/tmdb_logo.svg';
// Styles:
import { Wrapper, Content, Logo, TheMovieDatabaseLogo } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={RMDBLogo} alt='React movie database logo' />
        <TheMovieDatabaseLogo src={TMDBLogo} alt='TheMovieDataBase logo' />
      </Content>
    </Wrapper>
  );
};

export default Header;