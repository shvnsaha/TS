{
    // Ternary operator 
    const age = 20;
    const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
    console.log(canVote);


    // nullish coalescing operator
    // null and undefined
    const isAuthenticated = '';
    const res1 = isAuthenticated ?? "Guest User";
    const res2 = isAuthenticated ? isAuthenticated : "Guest User";
    console.log({res1});
    console.log({res2});


    // Optional Chaining
    type Employee = {
      name: string;
      age: number;
      department?: {
        name: string;
        location?: string;
      };
    }
  
    const user1: Employee = {
      name: "John Doe",
      age: 30,
      department: {
        name: "Engineering",
         location: "Building A"
      }
    };


    const location = user1?.department?.location ?? "Unknown";
    console.log({location});




}
