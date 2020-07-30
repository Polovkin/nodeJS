const fs = require('fs') //FileSystem
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw err
//
//     console.log('Папка создана')
// })
const fileData =path.join(__dirname, 'notes', 'mynotes.html');

// fs.writeFile(
//     fileData,
//     '<h1>Hello world</h1>',
//     (err) => {
//         if (err) throw err
//         console.log('File was created')
//
//         fs.appendFile(
//             fileData,
//             '<p>new data</p>',
//             (err) => {
//                 if (err) throw err
//                 console.log('File was changed')
//                 fs.readFile(
//                     fileData,
//                     'utf-8',
//                     ((err, data) => {
//                         if (err) throw err
//                         //console.log(Buffer.from(data).toString())
//                         console.log(data)
//                     })
//                 )
//
//             }
//         )
//     }
// )

fs.rename(
    fileData,
    path.join(__dirname, 'notes', 'notes.html'),
    err => {
        if (err) throw err
        console.log("File was renamed")
    }
)
