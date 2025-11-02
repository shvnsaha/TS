{
    // Destructuring 
    const person: { name: {
        firstName: string; lastName: string
    }; age: number; location: string } = {
        name: {
            firstName: "John",
            lastName: "Doe"
        },
        age: 30,
        location: "New York"
    };

    const { name: { firstName, lastName: last }, age, location: loc } = person;


    // array destructuring
    const myFriends: string[] = ["Alice", "Bob", "Charlie", "David"];
    const [friend1, , friend3, ...restFriends] = myFriends;

}