function cacheFunction(fn) {
  const cache = new Map();
  const order = [];

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);

    cache.set(key, result);
    order.push(key);

    if (cache.size > 10) {
      const oldestKey = order.shift();
      cache.delete(oldestKey);
    }

    return result;
  };
}

function slowFunction(num) {
  return num * num;
}

const cachedSlowFunction = cacheFunction(slowFunction);

console.log(cachedSlowFunction(2));
console.log(cachedSlowFunction(2));
console.log(cachedSlowFunction(3));
console.log(cachedSlowFunction(3));
console.log(cachedSlowFunction(4));
console.log(cachedSlowFunction(4));
