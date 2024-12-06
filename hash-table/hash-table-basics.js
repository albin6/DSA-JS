class HashTable {
  constructor(size = 50) {
    (this.size = size), (this.buckets = new Array(this.size));
  }
  hash(key) {
    let hash = 0;
    const PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = (hash * PRIME + char) % this.size;
    }
    return hash;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey] = bucket[i];
      if (storedKey == key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }
}
