import React  from 'react'
import Enzyme,{shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gift from './Gift'

Enzyme.configure({ adapter: new Adapter() });


describe('Gift', () => {
// Making Mock
 const mockRemove = jest.fn() 
 const id = 1
 const props = {gift:{id}, removeGift: mockRemove}
 const gift = shallow(<Gift {...props}/>)
 it('should render screen', () => {
     expect(gift).toMatchSnapshot();
 });

 it('should initial person in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
 });

 describe('When typing input person', () => {
    const person = 'Uncle'

    beforeEach(() => {
        gift.find('.input-person').simulate('change', {target:{value:person}})
    })

    it('should updates the data person in text input', () => {
        expect(gift.state().person).toEqual(person)
    });
 });

 describe('When typing present', () => {
     const present = 'Car Or Travel Trip'

     beforeEach(() => {
         gift.find('.input-present').simulate('change', {target:{value:present}})
     });

     it('should updates the data present in text input ', () => {
         expect(gift.state().present).toEqual(present)
     });
 });
 
 describe('when clicking the `RemoveGift` Button', () => {
     
     beforeEach(() => {
         gift.find('.btn-remove').simulate('click')
     })

     it('should calss remove Gift', () => {
         expect(mockRemove).toHaveBeenCalledWith(id)
     });
 });

 
});

