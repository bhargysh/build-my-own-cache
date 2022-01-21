import { BhargCache } from '../src/cache';

describe('BhargCache', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    // https://jestjs.io/docs/timer-mocks

    let cache = new BhargCache(1000, 5, new Map())

    it('should add a new entry with latest date', () => {
        cache.add('test', ['blah'])
        expect(cache.get('test')?.data).toEqual(['blah'])
        expect(cache.size()).toEqual(1)
    })

    it('should remove an existing entry', () => {
        cache.add('fun', ['blah'])
        cache.add('amazing', ['blah'])
        cache.add('rainbow', ['blah'])
        expect(cache.size()).toEqual(4)
        cache.remove('test')
        expect(cache.size()).toEqual(3)
    })

    test('should clear the cache after 1s', () => {
        cache.clear()
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
        expect(cache.size()).toEqual(0)
    })
})
