import { createStudent } from './student.js';

const student1 = createStudent('Alex', 'Bro', 2000);
const student2 = createStudent('Cate', 'Hilli', 1999);
const student3 = createStudent('Samanta', 'Tomson', 2001);

// Add grades
student1.grades.push(95, 90, 85);
student2.grades.push(70, 75, 80);
student3.grades.push(85, 90, 95);

// Note the presence and absence
student1.present();
student1.present();
student1.absent();
student2.present();
student2.absent();
student2.absent();
student3.present();
student3.present();
student3.present();

// Methods
console.log(`${student1.firstName} ${student1.lastName}`);
console.log('Age:', student1.getAge());
console.log('Mean grade:', student1.getAverageGrade());
console.log('Visiting:', student1.attendance);
console.log('Result:', student1.summary());

console.log(`${student2.firstName} ${student2.lastName}`);
console.log('Age:', student2.getAge());
console.log('Mean grade:', student2.getAverageGrade());
console.log('Visiting:', student2.attendance);
console.log('Result:', student2.summary());

console.log(`${student3.firstName} ${student3.lastName}`);
console.log('Age:', student3.getAge());
console.log('Mean grade:', student3.getAverageGrade());
console.log('Visiting:', student3.attendance);
console.log('Result:', student3.summary());
