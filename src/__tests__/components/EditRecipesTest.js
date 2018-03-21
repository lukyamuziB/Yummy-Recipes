import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import EditRecipe from '../../components/deleteRecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('<EditRecipe />', () => {
  const store = configureMockStore([thunk])({
    recipes: {},
  });

  const props = {
    editRecipes: jest.fn(() => Promise.resolve('editCatgeories')),
    onSubmit: jest.fn(),
    validate: jest.fn(),
    renderField: jest.fn(),
    handleInitialize: jest.fn(),
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
          <EditRecipe{...props} />
        </MemoryRouter>
      </Provider>,
    );
  });
});
