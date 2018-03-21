import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import DeleteRecipe from '../../components/deleteRecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('DeleteRecipe />', () => {
  const store = configureMockStore([thunk])({
    recipes: {},
  });

  const props = {
    deleteRecipe: jest.fn(() => Promise.resolve('deleteRecipe')),
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
          <DeleteRecipe{...props} />
        </MemoryRouter>
      </Provider>,
    );
  });
});

