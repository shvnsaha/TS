{
    // Function implementation goes here
    // Normal Function
    function add(a:number,b:number =10):number{
        return a + b;
    }

    // Arrow Function
    const addArrow = (a:number,b:number =10):number => a + b;


    // Method in Object
    const poorUser = {
        name: "Bob",
        balance: 100,
        addBalance(amount: number):string{
           this.balance += amount;
           return `New balance: ${this.balance}`;
        }
    }


    const arr: number[] = [1,2,3,4,5];
    const newArr: number[] = arr.map((item:number):number => item * item);
}