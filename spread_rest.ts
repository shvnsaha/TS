{
    // Spread operator 
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    array1.push(...array2);

    const mentor1={
        typescript:"Excellent",
        javascript:"Good",
        python:"Average"
    }
    const mentor2={
        typescript:"Good",
        javascript:"Average",
        python:"Excellent",
        java:"Good"
    }
    const combinedMentor={...mentor1,...mentor2};



    // Rest operator
    const greetFriends = (...fnd:string[])=>{
        fnd.forEach(friend => {
            console.log(`Hello, ${friend}!`);
        });
    }

}