

const cars = [
    {
        make: "Aston Martin",
        model: "DB9",
        price: 50000,
        age: 2012
    },
    {
        make: "Datsun",
        model: "sunrise",
        price: 2000,
        age: 2001
    },
    {
        make: "BMW",
        model: "z3",
        price: 30000,
        age: 2014
    },
    {
        make: "Chevrolet",
        model: "camero",
        price: 20000,
        age: 2013
    }
    
];




const carList = () =>{
 
    const list = document.getElementById("list");

    list.innerHTML = ''; // Clear existing items

    if (!list) {
        console.error('Element with id "list" not found.');
        return;
    }

    cars.forEach((car) => {
        let make = document.createElement('li');
        let modelText = document.createTextNode(`make: ${car.make}`);
        make.appendChild(modelText);
        list.appendChild(make);
    });
}

const sellCar = () => {

    console.log('this function fired')
    
    const make = document.getElementById('makeInput').value
    const model = document.getElementById('modelInput').value
    const age = document.getElementById('ageInput').value
    const price = document.getElementById('priceInput').value
    console.log(make, model, age, price)

    if (make && model && price && age){

        cars.push({
            make: make,
            model: model,
            age: age,
            price: price,
    
        })

        carList()

    } else {

       console.log('Please fill in all fields');

    }
    
}



const calculateAveragePrice = (carArray) => {

    if (carArray.length === 0){
        return 0
    }else{

    const total = carArray.reduce((accumulator, cars) => accumulator + cars.price, 0);

    const averagePrice = total / carArray.length;

    console.log("Average Price: ", averagePrice);

    return averagePrice;

    }
   
   
}

// Separate concerns - func do 1 thing
const calculateOldestCar = (carArray) => {

    // console.log(carArray);

    const oldest = carArray.reduce((oldestCar, car) => {

        console.log(car);

        return oldestCar.age < car.age ? oldestCar : car;
    });
    

    return oldest;
    
}

const calculateMostExpensive = (carArray) => {

    return carArray.reduce((maxPrice, car) => maxPrice.price > car.price ? maxPrice : car);

}




calculateAveragePrice(cars);
calculateOldestCar(cars);
calculateMostExpensive(cars);
carList(cars)



console.log(cars)