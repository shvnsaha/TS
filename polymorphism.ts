{
  // Polymorphism in TypeScript
  class Person {
    getSleep() {
      console.log("Person sleeps for 8 hours.");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("Student sleeps for 6 hours.");
    }
  }

  class Teacher extends Person {
    getSleep() {
      console.log("Teacher sleeps for 7 hours.");
    }
  }

  const getSleepHours = (person: Person) => {
    person.getSleep();
  };

  const person1 = new Person();
  const student1 = new Student();
  const teacher1 = new Teacher();

  getSleepHours(person1);
  getSleepHours(student1);
  getSleepHours(teacher1);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
}
