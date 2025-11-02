{
    // conditional types
   type a1 = null;
   type b1 = undefined;
   type x = a1 extends null ? true : false; 
   type y = a1 extends undefined ? true : b1 extends undefined ? true : false;


   type Sheikh = {
    bike: string;
    car: string;
    ship: string;
   }


   type CheckVehicle<T> = T extends keyof Sheikh ? "Has Bike" : "No Bike";
   type Result1 = CheckVehicle<"bike">; 



}