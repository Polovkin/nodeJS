const os = require('os')

console.log(os.platform())  //ось
console.log(os.arch())      //архитектура
console.log(os.cpus())      //инфо
console.log(os.freemem())      //свободная память
console.log(os.totalmem())      //всего памяти
console.log(os.homedir())      //Корневая директория
console.log((os.uptime())/3600)      //Время в рабочем состоянии
