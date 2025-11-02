{
    // Object type definition
    const user : {
        firstName: string;
        middleName?: string;
        age: number;
        isAdmin: boolean;
        company: "OpenAI";
        readonly id: number
    } = {
        firstName: "Alice",
        age: 30,
        isAdmin: true,
        company: "OpenAI",
        id: 33
    };

    user.company = "OpenAI";



}