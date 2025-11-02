{
    // generic

    type GenericArray<T> = Array<T>;
    type Person = { name: string; age: number };

    // const rollNumber: number[] = [101, 102, 103];
    const rollNumber: GenericArray<number> = [101, 102, 103];
    const mentors: GenericArray<string> = ["Alice", "Bob", "Charlie"];
    const boolArray: GenericArray<boolean> = [true, false, true];
    const user: GenericArray<Person> = [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 },
    ];


    type GenericTuple<X, Y> = [X, Y];
    const userTuple: GenericTuple<string, number> = ["Alice", 25];










}