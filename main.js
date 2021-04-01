const { Point } = require('./point')
const { Human } = require('./classInfo')

const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

console.log('P1 & P2 isEqual: ' + p1.isEqual(p2))
console.log('distance P1 & P2: ' + p1.distance(p2))
console.log()

const alice = new Human('Alice', 'Liddell', 28, ['C++', 'OCaml'])
const bob = new Human('Bob', 'Lemon', 30, ['JavaScript', 'HTML/CSS', 'SQL'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Python', 'Rust', 'Go', 'Perl', 'Ruby', 'PHP', 'C#'])

alice.printInfo()
console.log(alice.canVote())
bob.printInfo()
console.log(bob.canVote())
charlie.printInfo()
console.log(charlie.canVote())
console.log(charlie.mostSkilledDev(bob))