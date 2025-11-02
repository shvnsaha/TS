{
    //  utility. type

    type Person = {
        id: number;
        name: string;
        age: number;
        email?: string;
    }
    type Name = Pick<Person, "name">;

    type ContactInfo = Omit<Person, "age" | "id">;

    type PersonRequired = Required<Person>;
    type PersonPartial = Partial<Person>;

    type PersonReadonly = Readonly<Person>;
    type PersonRecord = Record<string, unknown>;


}