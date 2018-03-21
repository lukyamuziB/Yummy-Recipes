import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';

import CreateCategory from '../../components/createCategories';

Enzyme.configure({ adapter: new Adapter() });

describe('<CreateCategory />', () => {
  const store = configureMockStore([thunk])({
    categories: {},
  });
  const props = {
    createCategories: jest.fn(() => Promise.resolve('fetchCategories')),
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
          <CreateCategory {...props} />
        </MemoryRouter>
      </Provider>,
    );
  });
});
