{
//    mapped type

const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());


type AreaNumber = {
    height: number;
    width: number;
}


// type AreaString = {
//     height: string;
//     width: string;
// }

type AreaString<T> = { 
    [Key in keyof T]: T[Key]
}


// type Height = AreaString["height"];
// type Width = AreaString["width"];


const area1: AreaString <{height: string,width: number}>={
    height:"100px",width: 200
}




}