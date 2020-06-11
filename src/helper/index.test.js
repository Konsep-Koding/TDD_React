import {max_number} from './index'
describe('max_number', () => {
    describe('Given array empty', () => {
        it('should return 0', () => {
            expect(max_number([])).toEqual(0)
        });
    });
    describe('given an array max number', () => {
        it('should return max number', () => {
            expect(max_number([1,2,3])).toEqual(3)
        });
    })
    
});