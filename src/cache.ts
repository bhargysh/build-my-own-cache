interface CacheData {
    lastAccessedAt: string,
    data: string[]
}

export class BhargCache {
    timeToLive: number;
    maxItems: number;
    map: Map<string, CacheData>;

    constructor(timeToLive: number, maxItems: number, map: Map<string, CacheData>) {
        this.timeToLive = timeToLive
        this.maxItems = maxItems
        this.map = map
    }

    add(key: string, value: string[]): void {
        let previousCacheData = this.map.get(key)
        let cacheData: CacheData = {
            lastAccessedAt: new Date().toISOString(),
            data: previousCacheData ? [...previousCacheData.data, ...value] : value
        }
        this.map.set(key, cacheData)
    }

    size(): number {
        return this.map.size
    }

    get(key: string): CacheData | undefined {
        return this.map.get(key)
    }

    remove(key: string): void {
        this.map.delete(key)
    }
}
