const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 9000;

app.listen(port, function () {
    console.log("Server", "is running!");
});

app.get('/', (req, res) => {
    console.log("GET...");
    res.send('Hello word');
});

app.post('/', (req, res) => {
    console.log("POST...");
    var params = req.body;
    console.log(JSON.stringify(params, null, 2));

    sendRequest(params);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(params, null, 2));
});

app.put('/', (req, res) => {
    console.log("PUT...");
    var params = req.body;
    console.log(JSON.stringify(params, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(params, null, 2));
});

app.delete('/', (req, res) => {
    console.log("DELETE...");
    var params = req.body;
    console.log(JSON.stringify(params, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(params, null, 2));
});

function sendRequest(obj) {
    console.log("Send Request....");
    request.post({
        headers: { 'content-type': 'application/json' },
        url: 'http://10.0.0.22:7770/InpatientHappeningService/',
        body: JSON.stringify(obj, null, 2)
    }, function (error, response, body) {
        console.log(body);
    });
};

