const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['C++', 'OCaml']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['JavaScript', 'HTML/CSS', 'SQL']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Python', 'Rust', 'Go', 'Perl', 'Ruby', 'PHP', 'C#']
}

const printInfo = (object) => {
  console.log(`firstName: ${object.firstName}`)
  console.log(`lastName: ${object.lastName}`)
  console.log(`age: ${object.age}`)
}

const canVote = (object) => {
  return object.age >= 18
}

const mostSkilledDev = (object1, object2) => {
  let nbSkill1 = object1.language.length
  let nbSkill2 = object2.language.length
  return nbSkill1 > nbSkill2 ? object1.firstName : nbSkill1 < nbSkill2 ? object2.firstName : "draw"
}

console.log(mostSkilledDev(charlie, charlie))