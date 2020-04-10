import React from 'react';
import { shallow } from 'enzyme';
import { HomeVanilla as Home } from '../views/Home';

describe('Home component', () => {
  let props;
  let component;
  beforeEach(() => {
    props = {
      className: '',
      feed: [],
    };
    component = shallow(<Home {...props} />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
