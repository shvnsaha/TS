{
    // type assertion 
    let anything: any;
    anything = "Hello, World!";
    (anything as string).indexOf("World"); 


    const kgToGm = (weight: number | string): string | number | undefined => {
        if (typeof weight === "string") {
            weight = parseFloat(weight);
            return `weight ${weight * 1000} grams`;
        }
      if(typeof weight === "number") {
          return weight * 1000;
      }
    }


    const res1 = kgToGm(70) as number;


    type CustomError = { message: string };

    try {
        throw new Error("Test error");
    } catch (error) {
       console.log((error as CustomError).message); 
    }

}