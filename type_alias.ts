{
    // Type Alias 
    type Student = {
        name: string;
        age: number;
        location: string;
    }
    const student1: Student = {
    name: "Alice",
    age: 20,
    location: "New York"
    }

    type UserName = string;
    const user1: UserName = "john_doe";
    const user2: UserName = "jane_doe2";


    type AddFunc = (a: number, b: number) => number;
    const add: AddFunc = (a, b) => {
        return a + b;
    }

}