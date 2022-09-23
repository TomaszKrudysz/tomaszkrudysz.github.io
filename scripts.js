////////////////////////////////////// ZMIENNE, ZMIENNE TABLICOWE. ZMIENE JSON


// let my_variable = 123
// console.log(my_variable)
 
// let my_variable2 = 'Adam'
// console.log(my_variable2 + ' Smith')

// let my_variable3 = ['a', 'b', 1,2]
// console.log(my_variable3)

// console.log(my_variable3 [0])

// let my_variable4 = {f_n: 'Adam', l_n: 'Smith', age: 30}
// console.log(my_variable4)
// console.log(my_variable4.age)
// console.log(my_variable4.f_n)
// console.log(my_variable4.f_n)
// console.log('The winner is ' + my_variable4.f_n + '. He is' +my_variable4.age +'  years old')


// let my_variable5 =[
//     {"first_name": "Adam", "last_name": "Smith"},
//     {"first_name": "John", "last_name": "Doe"}
// ]
// console.log(my_variable5[0].first_name)
// console.log(my_variable5[1].last_name)


// let my_variable6 = {
//     "people": [
//         {"first_name": "Adam", "last_name": "Smith"},
//         {"first_name": "John", "last_name": "Doe"}
//     ],
//     "another" : "another",
//     "yet another" : ["and so on"],
//     "yet another" : {"and so on" : "and so one"}

// }

// console.log(my_variable6)
// console.log(my_variable6.people[1].last_name)

////////////////////////////////////////// FUNKCJE

// alert(1)

// function my_alert() {
//     alert("dwa")
// }

// my_alert()

// function my_alert2(whatToAlert) {
//     alert(whatToAlert)
// }
// my_alert2("Argument przekazany do funkcji")

// function multiplication (a,b) {
//     console.log(a*b)
//     return a*b
    
// }


// let resoult = multiplication (10,2)
// console.log(resoult)

// let multiplication = (a,b) => {
//     return a * b
// }

// console.log(multiplication(60,4))


// let my_object = {
//     name: 'my_object',
//     multipication: function(a,b){
//         return a * b
//     },
//     crazy_multiplication: function (a,b){
//         return this.multipication(a,b) * 1000
//     }

// }

// console.log(my_object.multipication(3,3))
// console.log(my_object.crazy_multiplication(2,2))

// let text = "Adam has a cat"
// console.log(text.search('cat'))


// let text = 'Adam has a cat'
// console.log(text.replace('cat', 'dog'))

// let text = 'Adam has a cat'
// console.log(text.toLocaleLowerCase())
// console.log(text.toLocaleUpperCase())

// let text = 'Adam has a cat'
// console.log(text.split("a"))

///////////////////////////////////////PETLE

// let my_age = 17

// if(my_age < 18) {
//     console.log("You are not allowed to enter this website")
// }

let my_age = 17

my_age < 18 ? console.log("Yes") : console.log("no") //ternaty operator