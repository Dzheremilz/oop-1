const { Pnt } = require('./point')
const { Human } = require('./classInfo')

const p1 = new Pnt(1, 2)
const p2 = new Pnt(10, 11)

console.log('P1 & P2 isEqual: ' + p1.isEqual(p2))
console.log('distance P1 & P2: ' + p1.distance(p2))
console.log()

const alice = new Human('Alice', 'Liddell', 28, ['C++', 'OCaml'])
const bob = new Human('Bob', 'Lemon', 30, ['JavaScript', 'HTML/CSS', 'SQL'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Python', 'Rust', 'Go', 'Perl', 'Ruby', 'PHP', 'C#'])

alice.printInfo()
console.log(alice.canVote())
console.log()
bob.printInfo()
console.log(bob.canVote())
console.log()
charlie.printInfo()
console.log(charlie.canVote())
console.log()
console.log("Who's the best dev: " + charlie.mostSkilledDev(bob))

console.log(`\n\n${p1.distance(p2)}`)