{
    // Union Types
    type frontendDev = 'React' | 'Angular' | 'Vue';
    type backendDev = 'Node.js' | 'Django' | 'Flask';
    type fullStackDev = frontendDev | backendDev;
    const dev1: fullStackDev  = 'React';

    type User = {
        name: string;
        age: number;
        email: string;
        gender: 'male' | 'female' | 'other';
    }

    const userA: User = {
        name: "Alice",
        age: 30,
        email: "alice@example.com",
        gender: "female"
    }

    // Intersection Types
    type FrontendDev = {
        skills: string[]
        designation1: 'Frontend Developer'
    }

    type BackendDev = {
        skills: string[]
        designation2: 'Backend Developer'
    }


    type FullStackDev = FrontendDev & BackendDev & {
        designation: 'Full Stack Developer'
    }


    const dev2: FullStackDev = {
        skills: ['React', 'Node.js'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',
        designation: 'Full Stack Developer'
    }


}
