// Styles:
import { Wrapper, Content } from './MovieInfoBar.styles';
// Helper functions:
import { calculateTime, convertMoney } from '../../helpers';

const MovieInfoBar = ({ time, budget, revenue}) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Movie duration: { calculateTime(time) }</p>
        </div>
        <div className="column">
          <p>Budget: { convertMoney(budget) }</p>
        </div>
        <div className="column">
          <p>Revenue: { convertMoney(revenue) }</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;