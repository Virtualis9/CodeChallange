const cars = [
    {
        name: "Aston Martin",
        price: 50000,
        age: 2012
    },
    {
        name: "BMW",
        price: 30000,
        age: 2014
    },
    {
        name: "Chevrolet",
        price: 20000,
        age: 2013
    },
    {
        name: "Datsun",
        price: 2000,
        age: 2001
    }
];


// const carList = () =>{

    
// }

const calculateAveragePrice = (carArray) => {

    // console.log(carArray);

    const total = carArray.reduce((accumulator, cars) => accumulator + cars.price, 0);

    // console.log(total);

    const averagePrice = total / carArray.length;

    console.log("Average Price: ", averagePrice);

    return averagePrice;
}

const calculateOldestCar = (carArray) => {

    // console.log(carArray);

    const oldest = carArray.reduce((accum, age) => accum < cars.age ? accumulator : age);
    
    // console.log(oldest.name);

    console.log(`${oldest.name} is the oldest in the collection`);

    return oldest.name;
    
}

const calculateMostExpensive = (carArray) => {

    // console.log(carArray)
    const mostExpensive = carArray.reduce((max, min)=> max.price > min.price ? max: min);

    // console.log(mostExpensive)
    console.log(`The most expnsive car in the showroom is the ${mostExpensive.name}`)

}

calculateAveragePrice(cars);
calculateOldestCar(cars);
calculateMostExpensive(cars);
carList(cars)

