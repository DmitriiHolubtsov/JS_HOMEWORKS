const DeepFreeze = (function () {
  function freezeObject(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (value && typeof value === 'object' && !Object.isFrozen(value)) {
        freezeObject(value);
      }
    });

    return obj;
  }
  return function (obj) {
    return freezeObject(obj);
  };
}());

const user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

DeepFreeze(user);

user.data.a = 10;
console.log(user.data.a);

user.data.d.d1.a2 = 10;
console.log(user.data.d.d1.a2);
