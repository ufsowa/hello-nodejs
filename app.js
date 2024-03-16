const fs = require('fs');

const range = (start, stop) => Array.from({ length: stop - start + 1 }, (_, i) => start + i)

const data = {
    names: {
        female: ['Aga', 'Lucy', 'Anna', 'Dora', 'Bella', 'Xena'],
        male: ['Tom', 'Bob', 'Daniel', 'Hit', 'Rob', 'Pablo'],
    },
    lastName: ['Patton', 'Mieszko', 'Kurnikopolus', 'Kowalski', 'Borrison', 'Dudenko'],
    age: range(24, 40),
    gender: ['M', 'F'],
};

const args = process.argv.slice(2)[0];
const totalNumberOfPersons = args ? parseInt(args) : 20;
let personIndex = 0;
const persons = [];

const randChoice = (arr) => {
    const index = Math.floor(Math.random() * arr.length) 
    return arr[index];
};

const getMail = (user) => {
    return user.firstName + '.' + user.lastName + '@gmail.com';
};

while ( personIndex < totalNumberOfPersons ) {
    const gender = randChoice(data.gender);

    const user = {
        gender,
        firstName: gender === 'M' ? randChoice(data.names.male) : randChoice(data.names.female),
        lastName: randChoice(data.lastName),
        age: randChoice(data.age),
    };

    persons.push({...user, email: getMail(user)});
    personIndex++;
}

fs.writeFile('person.json', JSON.stringify(persons), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})

