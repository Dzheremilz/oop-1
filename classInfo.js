class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    console.log(`firstName: ${this.firstName}`)
    console.log(`lastName: ${this.lastName}`)
    console.log(`age: ${this.age}`)
  }
  canVote() {
    return this.age >= 18
  }
  mostSkilledDev = (object) => {
    let nbSkill1 = this.language.length
    let nbSkill2 = object.language.length
    return nbSkill1 > nbSkill2 ? this.firstName : nbSkill1 < nbSkill2 ? object.firstName : "draw"
  }
}

//exports.Human = Human
module.exports = { Human: Human }