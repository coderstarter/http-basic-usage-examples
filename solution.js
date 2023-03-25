// const http = require('http');
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     port: 80,
//     path: '/todos/1',
// }

// http.get(options, (res) => {
//     console.log(res.statusCode);
//     res.pipe(process.stdout)
// })

// Now express basic

// const http = require('http');
// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     console.log(request.headers);
//     console.log(request.method);

//     response.write('done\n');
//     response.end();
// });

// server.listen(8080);

// const http = require('http');
// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     console.log(request.headers);
//     console.log(request.method);
//     if (request.url === '/') {
//         if (request.method === 'GET') {
//             response.end('home-get\n');
//         }
//         else {
//             response.end('home-maybe post\n');
//         }
//     }
//     else {
//         response.write('non home page\n')
//         response.end();
//     }

// });

// server.listen(8080);


// Now express starts here
const express = require('express');
const app = express()
// The line const app = express() in the Express framework is used to create a new
// instance of the Express application.

// Here, the express() function creates an Express application object that represents
// the middleware and routing system of the application. The returned object is then
//  assigned to the app constant which can be used to define routes and other middleware
//  functions for the application.
// app.get('/', (req, res) => {
//     res.send('home page --get!')
// });

// app.post('/', (req, res) => {
//     res.send('home page --post!')
// });

// app.listen(8080, () => {
//     console.log('Exmaple app listening at the port')
// });
