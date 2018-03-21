import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';


import Dashboard from '../../components/dashboard';

Enzyme.configure({ adapter: new Adapter() });

describe('<Dashboard/>', () => {
  const div = document.createElement('div');
  const store = configureMockStore([thunk])({
    categories: {},
  });
  const props = {
    fetchCategories: jest.fn(() => Promise.resolve('categories')),
    history: { push: jest.fn() },
    match: {
      param: {
        id: 1,
      },
    },
  };

  // test that the componet renders as expected
  it('should render without crashing', () => {
    const { enzymeWrapper } = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard {...props} />
        </MemoryRouter>
      </Provider>);
  });
  // snapshot test for the recipes page
  it('renders fully', () => {
    const tree = renderer.create(
      mount(
        <Provider store={store}>
          <MemoryRouter>
            <Dashboard {...props} />
          </MemoryRouter>
        </Provider>,
      ),
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
