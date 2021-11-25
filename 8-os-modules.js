const names = require('./3')
const sayHi = require('./4')
const data = require('./6-alternative')

require('./7-mind_grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)


const os = require('os')

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)