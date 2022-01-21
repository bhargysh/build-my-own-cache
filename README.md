# Build a caching mechanism

## Requirements
- If item does not exist in cache, add to it
- Cache invalidation / cleanup must be done regularly so things that haven't been used recently can be erased from the cache to free up memory
- Cache should not grow over time
- Any errors should be feeded back
- Should be unit tested

## How
1. Use a key-value data structure like a Map or LRUMap as an in memory cache
2. Each item added to the cache will have a last accessed at datetime
3. The cache will have a time-to-live (TTL), when `TTL=0` cache is cleared
4. To stop the cache from growing exponentially, remove least recently used items from cache by using `lastAccessedAt`

## Interface

```typescript
// TTL = 60 seconds
// Max items = 5
const cache = new BhargCache(60, 5)

cache.add('alana', ['ice cream', 'nutella'])
cache.add('bob', ['mozarella', 'pizza'])
cache.add('cardi', ['burgers', 'milkshakes'])
cache.add('daniel', ['yoghurt', 'smoothies'])
cache.add('emmanual', ['cherries', 'pies'])
cache.add('fernando', ['chips'])
cache.size()

cache.get('alana')
cache.get('fernando')
cache.size()

cache.remove('alana')
cache.size()
```

