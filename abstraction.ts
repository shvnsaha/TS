{
  //    abstraction
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle1 {
    private isEngineRunning: boolean = false;

    startEngine(): void {
      this.isEngineRunning = true;
      console.log("Engine started.");
    }

    stopEngine(): void {
      this.isEngineRunning = false;
      console.log("Engine stopped.");
    }

    move(): void {
      if (this.isEngineRunning) {
        console.log("Car is moving.");
      } else {
        console.log("Start the engine first.");
      }
    }
  }

  const car = new Car();
  car.move();

  //   abstract class

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class toyotaCar extends Vehicle2 {
    startEngine(): void {
      console.log("start");
    }
    stopEngine(): void {
      console.log("stop");
    }
    move(): void {
      console.log("move");
    }
  }

  const car2 = new toyotaCar();
  car2.startEngine();
}
