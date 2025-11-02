{
    //  async function example

    const createPromise = (): Promise<string> =>{
        return new Promise<string>((resolve, reject)=>{
            const data: string = "Hello, World!";
            if(data){
                resolve(data);
            }else{
                reject("No data found");
            }
        });
    }



    // calling async function
    const fetchData = async () => {
        try {
            const result: string = await createPromise();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    fetchData();

}