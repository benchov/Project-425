// Borrow method with call() and apply()
const charachter = {
    name: "Jensen",
    age: 24,
    addAge (num) {
     return this.age = this.age + num
    }
  }
  
  const charachter2 = {
    name: "Wolf",
    age:20
  }
  
  console.log("charachter", charachter.age)
  // 24
  charachter.addAge(110)
  console.log("charachter", charachter.age)
  // 134
  charachter.addAge.call(charachter2, 20)
  console.log("charachter2", charachter2.age)
  // 40
  
  
  // Bind and Currying
  const multiplyBy = (a,b) => a * b
  
  const multiTwo = multiplyBy.bind(this, 2)
  console.log(multiTwo(4))
  // 8
  const multiFive = multiplyBy.bind(this, 5)
  console.log(multiFive(5))
  // 25