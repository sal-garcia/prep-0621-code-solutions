var person = {
  firstName: 'sal',
  lastName: 'garcia',
  hobby: 'music'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log(fullName);

person.job = 'unemployed';

console.log('this persons job is' + ' ' + person.job);

person.previousJob = 'mechanic';

console.log('my previous job was' + ' ' + person.previousJob);

console.log(person);
