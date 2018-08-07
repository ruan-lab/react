// const person = {
//     name: 'Ruan',
//     age: 27,
//     location: {
//         city: 'Recife',
//         temp: 30
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// if (publisherName) {
//     console.log(publisherName)
// }

//
//  Arry - Destructuring
//

const address = [ '20 Rua do Apolo', 'Recife', 'Pernambuco', '19475']

const [ , city, state] = address

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)