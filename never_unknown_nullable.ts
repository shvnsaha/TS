{
    //  nullable types 
    const searchName = (name: string | null) => {
        if (name) {
           console.log("Searching for:", name);
        } else {
           console.log("No name provided");
        }
    }

    searchName("Alice");
    searchName(null);

    // unknown type
    const getSpeedInMeters = (speed: unknown) => {
      if(typeof speed === "number"){
        return speed * 1000
      }else if(typeof speed === "string"){
        const valueInNumber = speed.split(" ")[0];
        return parseFloat(valueInNumber) * 1000;  
      }else{
        return 'Wrong type provided';
      }
    }

    const speed1 = getSpeedInMeters(5);
    const speed2 = getSpeedInMeters("10 km/h");
    const speed3 = getSpeedInMeters(null);
    console.log(speed1);
    console.log(speed2);
    console.log(speed3);



    // never type
    const throwError = (msg:string): never => {
      throw new Error(msg);
    }
    throwError("This is a custom error message");

}