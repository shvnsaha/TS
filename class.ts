{
    class Person {
        // name: string;
        // age: number;
        // email: string;
        // constructor(name: string, age: number, email: string) {
        //     this.name = name;
        //     this.age = age;
        //     this.email = email;
        // }
        constructor(public name: string, public age: number, public email: string) {}

        getDetails(): string {
            return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
        }
    }

    const person1 = new Person("Buddy", 3, "buddy@example.com");
    person1.age
    console.log(person1.getDetails());






}