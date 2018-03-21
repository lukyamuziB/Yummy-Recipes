import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import CreateRecipe from '../../components/createRecipes2';

Enzyme.configure({ adapter: new Adapter() });

describe('<CreateRecipe />', () => {
  const store = configureMockStore([thunk])({
    categories: {},
  });
  const props = {
    createRecipes: jest.fn(() => Promise.resolve('fetchRecipes')),
    history: { push: jest.fn() },
    match: {
      param: {
        id: 1,
      },
    },
  };
  it('should render without crashing', () => {
    const { enzymeWrapper } = mount(
      <Provider store={store}>
        <MemoryRouter>
          <CreateRecipe {...props} />
        </MemoryRouter>
      </Provider>,
    );
  });
  it('renders fully', () => {
    const tree = renderer.create(
      mount(
        <Provider store={store}>
          <MemoryRouter>
            <CreateRecipe {...props} />
          </MemoryRouter>
        </Provider>,
      ),
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
