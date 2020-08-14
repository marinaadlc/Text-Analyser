import {getData} from '../client/js/asyncs'

describe('Check The function', () => {
    it('True if getData is defined', () => {
        expect(getData).toBeDefined();
    });

    it('True if getData is a function', () => {
        expect(typeof getData).toBe('function');
    });
})
