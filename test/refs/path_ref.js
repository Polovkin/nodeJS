const path = require('path')

console.log(path.basename(__filename)) //возвращает имя файла
console.log(path.dirname(__filename)) //возвращает папку файла
console.log(path.extname(__filename)) //возвращает расширение файла
console.log(path.parse(__filename)) //возвращает объект с путями файла

console.log(path.join(__dirname, 'test','second.html')) //генерирует путь, соединяя строки
console.log(path.resolve(__dirname, './test','/second.html')) //генерирует путь, соединяя строки
