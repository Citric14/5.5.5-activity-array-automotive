//this includes the vehicle class as a module
const { Vehicle }  = require("./vehicle")
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...



class Car extends Vehicle {
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0 
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(){
        if(this.passenger < this.loadPassenger){
            if((num + this.passenger) <= this.maximumPassengers){
                this.passenger = num
                return this.passenger
            } else {
                console.log(`${this.model} ${this.make} does not have enough space in it.`)
            }
        }
        else {
            console.log(`${this.model} ${this.make} is full.`)
        }
    }

    start(){
        if(this.fuel > 0){
            console.log('Engine has started')
            return this.started = true
        } else {
            console.log('Engine has no fuel.')
            return this.started = false
        }
    }

    scheduleService(){
        if(this.mileage > 30000){
            this.scheduleService = true
            return this.scheduleService
        }
    }
}


// let v = new Car.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

let myCar = new Car('Mecury', 'Sedan', '2009', 'Grey', 14000)




loadPassenger(5)
start()
scheduleService()
console.log(myCar)







// maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService