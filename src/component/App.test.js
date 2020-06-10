import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
const app = shallow(<App/>);


it('Render', () => {
expect(app).toMatchSnapshot();
});

it('should showing the List', () => {
  expect(app.state().gifts).toEqual([]) 
});

it('Add new Fukin Gift', () => {
  // Find By tags
  app.find('.btn-add').simulate('click')
  expect(app.state().gifts).toEqual([{id:1}])
});


