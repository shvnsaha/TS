//    constraints

{

     const addCourseToStudent = <T extends { id: number }>(student: T) => {
    const course = "Next Js";
    return { ...student, course };
}


const student1 = addCourseToStudent<{ id: number; name: string; age: number; devType: string }>({ id: 1, name: "Alice", age: 20, devType: "Frontend" });
const student2 = addCourseToStudent<{ id: number; name: string; age: number; email: string }>({ id: 2, name: "Bob", age: 22, email: "bob@example.com" });

// const student3 = addCourseToStudent<{emni:string}>({ emni: "value" })


console.log(student1.course);







}
