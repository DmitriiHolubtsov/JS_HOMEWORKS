export function createStudent(firstName, lastName, birthYear) {
  const student = {
    firstName,
    lastName,
    birthYear,
    grades: [],
    attendance: new Array(25).fill(null),
  };

  student.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  student.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };

  student.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      return 'All 25 classes are already filled.';
    }
  };

  student.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      return 'All 25 classes are already filled.';
    }
  };

  student.summary = function () {
    const averageGrade = this.getAverageGrade();
    const attendedClasses = this.attendance.filter(
      (day) => day === true,
    ).length;
    const totalClasses = this.attendance.filter((day) => day !== null).length;
    const attendanceRate = totalClasses === 0 ? 0 : attendedClasses / totalClasses;

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return 'Well done!';
    }
    if (averageGrade > 90 || attendanceRate > 0.9) {
      return 'Good, but it can be better!';
    }
    return 'Radish!';
  };

  return student;
}
