{
    // inheritance 

    class Person {
        constructor(public name: string, public age: number) {}
        getSleepHours(numOfHours: number): void {
            console.log(`${this.name} sleeps for ${numOfHours} hours.`);
        }
    }


    class Student extends Person {
      constructor(public name: string, public age: number) {
          super(name, age);
      }

}


    class Teacher extends Person {
      constructor(public name: string, public age: number, public designation: string) {
          super(name, age);
      }

    takeClasses(numOfClasses: number): void {
        console.log(`${this.name} takes ${numOfClasses} classes.`);
    }

}

  const student1 = new Student("Alice", 20);
  const teacher1 = new Teacher("Bob", 40, "Mathematics");


  student1.getSleepHours(8);
  teacher1.takeClasses(5);



}