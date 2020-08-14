import {checkInput} from '../client/js/textHandler'

describe('Check The function', () => {
    it('True if checkInput is defined', () => {
        expect(checkInput).toBeDefined();
    });

    it('True if checkInput is a function', () => {
        expect(typeof checkInput).toBe('function');
    });
})
