import { render } from '@testing-library/react';
import Restaurants from './Restaurants';
import { restaurants } from '../fixtures/data';

describe('RestaurantsContainer', () => {
  const renderRestaurants = () => render(<Restaurants restaurants={restaurants} />);

  it('식당 리스트가 보인다', () => {
    const { getByText } = renderRestaurants();
    expect(getByText('코코식당')).not.toBeNull();
    expect(getByText('네네식당')).not.toBeNull();
  });
});
