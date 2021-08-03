// implement your API here ( make sure you have express in the dependencies.  Do an npm install express)

const express = require('express');

const server = express();

server.get('/', (req, res) =>{ //request handler function
    res.send('Hello Noe!');
})

server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee'
        },
        {
            id:2,
            name: 'Frodo Baggins'
        }
    ];

    //200 means the request is ok
    res.status(200).json(hobbits);
})

server.listen(8000, () => console.log('API Running on port 8000'));



