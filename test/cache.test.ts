import { BhargCache } from '../src/cache';

describe('BhargCache', () => {
    let cache = new BhargCache(10, 5, new Map())
    it('should add a new entry with latest date', () => {
        cache.add('test', ['blah'])
        expect(cache.get('test')?.data).toEqual(['blah'])
        expect(cache.size()).toEqual(1)
    })
    it('should remove an existing entry', () => {
        cache.add('test', ['blah'])
        cache.add('fun', ['blah'])
        cache.add('amazing', ['blah'])
        cache.add('rainbow', ['blah'])
        expect(cache.size()).toEqual(4)
        cache.remove('test')
        expect(cache.size()).toEqual(3)
    })
})
