import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Login from '../../components/loginUser';


describe('<Login/>', () => {
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
});

