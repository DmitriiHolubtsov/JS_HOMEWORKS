// Task 1

// string
const someString: string = 'Alex';
console.log(someString);
// number
const age: number = 20;
console.log(age + 20);
// boolean
const isCompleted: boolean = true;
console.log(isCompleted && false);
// null
const n: null = null;
console.log(n);
// Undfined
const u: undefined = undefined;
console.log(u);
// object
const myObject: object = {key: "value"};
console.log(myObject);
// any
const someArr: [any, any] = ['Hello', 123];
console.log(someArr);
// never
let never: never;
console.log(never);
// unknow
const unknownThing: unknown = "unknown";
console.log(unknownThing);

// Task 2
interface User {
    name: string;
    age: number;
    hobbies: string[];
};

const userObject: User = {
    name: 'Alex',
    age: 21,
    hobbies: ["running", "gym"]
};

// Task 3
const sumNumbers  = (a: number, b: number): number => {
    return a + b;
};
console.log(sumNumbers(1,2));

// Task 4
enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

let currentWeekday: WeekDay = WeekDay.Wednesday;
console.log("Today is", WeekDay[currentWeekday]);
