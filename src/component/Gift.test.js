import React  from 'react'
import Enzyme,{shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gift from './Gift'

Enzyme.configure({ adapter: new Adapter() });


describe('Gift', () => {
 const gift = shallow(<Gift/>)
 it('should render screen', () => {
     expect(gift).toMatchSnapshot();
 });

 it('should initial person in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
 });
 
});

