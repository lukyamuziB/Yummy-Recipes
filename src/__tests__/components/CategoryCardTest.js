import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { CategoryCard } from '../../components/dashboard';

describe('<CategoryCard />', () => {
  const component = shallow(
    <BrowserRouter>
      <CategoryCard />
    </BrowserRouter>,
  );
  it('should render without crashing', () => {
    expect(component).toHaveLength(1);
  });
});

