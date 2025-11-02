{

    // Interface
    interface Person {
        name: string;
        age: number;
        email: string;
    }

      const person1: Person = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    }

    type UserWithRoll1 = Person & { rollNo: number };
    const personWithRoll1: UserWithRoll1 = {
        name: "Jane Doe",
        age: 25,
        email: "jane.doe@example.com",
        rollNo: 101
    };


    interface UserWithRoll2 extends Person {
        rollNo: number;
    }

    const personWithRoll2: UserWithRoll2 = {
        name: "Alice Smith",
        age: 28,
        email: "alice.smith@example.com",
        rollNo: 102
    };



    interface Roll {
       [index: number]: number;
    }

    const rollNumbers: Roll = [101, 102, 103, 104];


interface add{
    (a:number, b:number): number;
}

const addNumbers: add = (a, b) => {
    return a + b;
}



}
