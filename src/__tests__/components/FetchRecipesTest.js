import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import Recipes from '../../components/recipesPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<Recipes />', () => {
  const store = configureMockStore([thunk])({
    recipes: {},
    categoryName: 'name',
    categoryId: 1,
  });
  const props = {
    fetchRecipes: jest.fn(() => Promise.resolve('fetchRecipes')),
    history: { push: jest.fn() },
    match: {
      params: {
        id: 1,
      },
    },
  };

  // test that the componet renders as expected
  it('should render without crashing', () => {
    const { enzymeWrapper } = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Recipes {...props} />
        </MemoryRouter>
      </Provider>,
    );
  });
  it('should render without crashing', () => {
    expect(mount(
      <Provider store={store}>
        <MemoryRouter>
          <Recipes {...props} />
        </MemoryRouter>
      </Provider>,
    )).toHaveLength(1);
  });
  // snapshot test for the recipes page
  it('renders fully', () => {
    const tree = renderer.create(
      mount(
        <Provider store={store}>
          <MemoryRouter>
            <Recipes {...props} />
          </MemoryRouter>
        </Provider>,
      ),
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

