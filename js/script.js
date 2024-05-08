// Task 1
// string
const someString = 'Alex';
console.log(someString);
// number
const age = 20;
console.log(age + 20);
// boolean
const isCompleted = true;
console.log(isCompleted && false);
// null
const n = null;
console.log(n);
// Undfined
const u = undefined;
console.log(u);
// object
const myObject = { key: "value" };
console.log(myObject);
// any
const someArr = ['Hello', 123];
console.log(someArr);
// never
let never;
console.log(never);
// unknow
const unknownThing = "unknown";
console.log(unknownThing);
;
const userObject = {
    name: 'Alex',
    age: 21,
    hobbies: ["running", "gym"]
};
// Task 3
const sumNumbers = (a, b) => {
    return a + b;
};
console.log(sumNumbers(1, 2));
// Task 4
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 2] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 3] = "Thursday";
    WeekDay[WeekDay["Friday"] = 4] = "Friday";
    WeekDay[WeekDay["Saturday"] = 5] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 6] = "Sunday";
})(WeekDay || (WeekDay = {}));
;
let currentWeekday = WeekDay.Wednesday;
console.log("Today is", WeekDay[currentWeekday]);
