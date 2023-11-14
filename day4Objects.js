// //////////////DAY 3 ACTIVITY 1//////////////////////////////////
// const factorial = (n)=> {
//     if((n===0)  || (n===1)) 
//  {
//     return 1;
//  }
//  else
//  {
//     return(n* factorial(n - 1 ));
//  }

// } 

// console.log(factorial(4));


///////////////ACTIVITY 1//////////////

// const person = {
//     myName: "Nora",

//     sayHi() {
//         return  `Hello my name is ${this.myName}`;
//     }
    
// };

// console.log(person.sayHi());



/////////////////////// ACTIVITY 2/////////////////////////////

// const pet = {
//      petName: "Lulu",
//      typeOfPet: "Cat",
//      age: "10 months",
//      color: "Multi coloured",

//      eat (){
//           return(`${this.petName} is eating chicken nuggets.`);

//      },

//      drinks (){
//         return (`${this.petName} is drinking milk.`);
//      }
// };

// console.log(pet.eat());
// console.log(pet.drinks());

/////////////////////////////////activity 3////////////////////////////////

// const coffeeShop = {
//     branch: "Manchester",
//     drinks: ["coke", 1.50,
//             "coffee", 2.50,
//             "fanta", 3.50,
//             "tea", 0.50                
//             ],
//     meals: [
//         "sandwich", 2.50,
//         "toastie", 4,
//         "soup", 3,
//         "pie", 2
//     ],
//     drinksOrdered(drink){
//         for (let i = 0; i < this.drinks.length; i++){
//             if (drink == this.drinks[i]){
//                 // console.log(this.drinks[i+1])
//                 console.log(`The drink ${drink} costs ${this.drinks[i+1]}.`)
//             }
//         }
//     },
//     mealOrdered(meal){
//         for (let i = 0 ; i < this.meals.length; i++){
//             if (meal == this.meals[i]){
//                 console.log(`The meal ${meal} costs ${this.meals[i+1]}.`)
//             }
//         }
//     }
 
    
// };
//  coffeeShop.drinksOrdered("tea");
//  coffeeShop.mealOrdered("sandwich");

