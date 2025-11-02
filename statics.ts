{  
    // Static
    class Counter{
       static count: number = 0;
        increment(): number {
           Counter.count++;
            return Counter.count;
        }
        decrement(): number {
            Counter.count--;
            return Counter.count;
        }
    }

    const counter1 = new Counter();
    console.log(counter1.increment());
    const counter2 = new Counter();
    console.log(counter2.increment());


}