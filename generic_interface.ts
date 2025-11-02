{
    //  This is a generic interface 
    interface Developer<T,Q>{
        name: string;
        computer:{
            brand: string;
            model: string;
            year: number;
        }
        smartWatch: T;
        smartPhone?: Q;
    }


    const poorDeveloper: Developer<{ brand: string; model: string; year: number },null> = {
        name: "John",
        computer: {
            brand: "Dell",
            model: "XPS 13",
            year: 2020
        },
        smartWatch: {
            brand: "Apple",
            model: "Series 6",
            year: 2020
        }
    }


    const richDeveloper: Developer<{ brand: string; model: string; year: number },{ brand: string; model: string;}> = {
        name: "John",
        computer: {
            brand: "Dell",
            model: "XPS 13",
            year: 2020
        },
        smartWatch: {
            brand: "Apple",
            model: "Series 6",
            year: 2020
        },
        smartPhone:{
            brand: "Samsung",
            model: "Galaxy S21",
        }
    }


}