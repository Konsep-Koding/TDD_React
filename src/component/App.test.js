import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
const app = shallow(<App/>);


describe('App', () => {
  it('Render', () => {
    expect(app).toMatchSnapshot();
    });
     
    it('should showing the List', () => {
      expect(app.state().gifts).toEqual([]) 
    });

    describe('When click button `add-gift`', () => {
      beforeEach(() => {
      // Find By tags
        app.find('.btn-add').simulate('click')
      });

      afterEach(() =>{
        app.setState({ gifts: [] });
      })

      it('Add new  `New Gift On To State` Gift', () => {
        expect(app.state().gifts).toEqual([{id:1}])
      });
      
      it('Add simulate 1', () => {
        expect(app.find('.gift-list').children().length).toEqual(1)
      });
    });
    
 
});

