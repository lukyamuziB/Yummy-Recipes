import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Navbar from '../../components/navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  const store = configureMockStore([thunk])({
    login: {},
  });
  const props = {
    luserLogout: jest.fn(() => Promise.resolve('userlogedout')),
    logOutUser: jest.fn(),
    history: { push: jest.fn() },
    match: {
      params: {
        id: 1,
      },
    },
  };
  it('should render without crashing', () => {
    const { enzymeWrapper } = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar{...props} />
        </MemoryRouter>
      </Provider>,
    );
  });
});

