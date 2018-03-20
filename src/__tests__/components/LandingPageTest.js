import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';

import LandingPage from '../../components/landingPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<LandingPage/>', () => {
  const component = shallow(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>,

  );
  const div = document.createElement('div');

  it('should render without crashing', () => {
    const { enzymeWrapper } = mount(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>,
    );
  });
  it('should render without crashing', () => {
    expect(component).toHaveLength(1);
  });
});
