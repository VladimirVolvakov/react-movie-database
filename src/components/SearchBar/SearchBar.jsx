// Hooks:
import { useEffect, useState } from 'react';
// Image:
import searchIcon from '../../assets/search-icon.svg';
// Styles:
import { Wrapper, Content } from './SearchBar.styles';
// Props type check:
import PropTypes from 'prop-types';

const SearchBar = ({ setSearchQuery }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(state);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setSearchQuery, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='Search movie' />
        <input
          type='text' 
          placeholder='Enter movie title' 
          onChange={event => setState(event.target.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func,
};

export default SearchBar;