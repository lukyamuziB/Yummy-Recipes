import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import DeleteCategory from '../../components/deleteResource';

Enzyme.configure({ adapter: new Adapter() });

describe('<DeleteCategory />', () => {
  const store = configureMockStore([thunk])({
    categories: {},
  });

  const props = {
    deleteCategory: jest.fn(() => Promise.resolve('deleteCategory')),
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
          <DeleteCategory{...props} />
        </MemoryRouter>
      </Provider>,
    );
  });
});

