import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import RegisterUser from '../../components/registerUser';

Enzyme.configure({ adapter: new Adapter() });

describe('<RegisterUser />', () => {
  const div = document.createElement('div');
  const store = configureMockStore([thunk])({
    user: {},
  });
  const props = {
    registerUser: jest.fn(() => Promise.resolve('register')),
    validata: jest.fn(),
    onSubmit: jest.fn(),
    history: { push: jest.fn() },
    match: {
      param: {
        id: 1,
      },
    },
  };
  it('should render without crashing', () => {
    <Provider store={store}>
      <MemoryRouter>
        <RegisterUser {...props} />
      </MemoryRouter>
    </Provider>;
  });
  it('renders fully', () => {
    const tree = renderer.create(
      mount(
        <Provider store={store}>
          <MemoryRouter>
            <RegisterUser {...props} />
          </MemoryRouter>
        </Provider>,
      ),
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
