import {getLang} from '../client/js/asyncs'

describe('Check The function', () => {
    it('True if getLang is defined', () => {
        expect(getLang).toBeDefined();
    });

    it('True if getLang is a function', () => {
        expect(typeof getLang).toBe('function');
    });
})
