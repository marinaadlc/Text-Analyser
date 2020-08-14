import {postData} from '../client/js/asyncs'

describe('Check The function', () => {
    it('True if postData is defined', () => {
        expect(postData).toBeDefined();
    });

    it('True if postData is a function', () => {
        expect(typeof postData).toBe('function');
    });
})
