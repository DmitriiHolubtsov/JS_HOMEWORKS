// Create class Human
class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const person1 = new Person('Alex', 'man');
const person2 = new Person('Kate', 'woman');

// Create class Appartment
class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    if (person instanceof Person) {
      this.residents.push(person);
    } else {
      return 'Only residence can be added';
    }
  }
}

// Create House
class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (apartment instanceof Apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        return 'Cannot add more apartments';
      }
    } else {
      return 'Only instances of Apartment can be added';
    }
  }
}

// Add Apartments
const apartment1 = new Apartment();
const apartment2 = new Apartment();

// Add residents to apartments
apartment1.addResident(person1);
apartment2.addResident(person2);

// Create two houses
const house = new House(2);

// Add apartments with residents to houses
house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house);
