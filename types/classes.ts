class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('blue');
console.log(vehicle.color);


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'orange');
car.startDrivingProcess();


// public:    can be called anytime anywhere
// private:   can only be called within the class itself
// protected: can be called within the class or child classes
