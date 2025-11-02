{
//    generic function
const createArray =(param: string) =>{
    return [param];
}


const createArrayGeneric = <T>(param: T) : T[] => {
    return [param];
}


const res1 = createArray("Hello");
const res2 = createArrayGeneric<string>("Hello");
const res3 = createArrayGeneric<number>(42);
const res4 = createArrayGeneric<{ name: string; age: number }>({ name: "John", age: 30 });


const createArrayWithTuple = <T1, T2>(param1: T1, param2: T2): [T1, T2] => {
    return [param1, param2];
}

const res5 = createArrayWithTuple<string, number>("Age", 30);


const addCourseToStudent = <T>(student: T) => {
    const course = "Next Js";
    return { ...student, course };
}


const student1 = addCourseToStudent<{ name: string; age: number; devType: string }>({ name: "Alice", age: 20, devType: "Frontend" });


}