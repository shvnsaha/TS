{
  

    type Vehicle = {
        bike: string;
        car: string;
        truck: string;
    }

    type Owner = keyof Vehicle; 
    const owner1: Owner = "car";

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
         return obj[key];
    }



    const user = {
        name: "John Doe",
        age: 30,
        address: "123 Main St",
        // 1: "one"
    }

    const res1 = getPropertyValue(user, "name");

    // console.log(user["1"]);








}