import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Login from '../../components/loginUser';

describe('<Login/>', () => {
  const div = document.createElement('div');
  const store = configureMockStore([thunk])({
    categories: {},
  });
  const props = {
    login: jest.fn(() => Promise.resolve('login')),
    onSubmit: jest.fn(),
    history: { push: jest.fn() },
    match: {
      param: {
        id: 1,
      },
    },
  };
  const component = shallow(
    <BrowserRouter>
      <Login />
    </BrowserRouter>);
  it('should render without crashing', () => {
    expect(component).toHaveLength(1);
  });
  it('should render without crashing', () => {
    expect(component).toHaveLength(1);
  });
  it('renders fully', () => {
    const tree = renderer.create(
      mount(
        <Provider store={store}>
          <MemoryRouter>
            <Login {...props} />
          </MemoryRouter>
        </Provider>,
      ),
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

