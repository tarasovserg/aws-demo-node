const express = require('express');
const request = require('request');
const app = express();

const DATA_URL = 'https://raw.githubusercontent.com/tarasovserg/aws-demo-data/master/data.json';

app.get('/', (req, res) => {

    request(DATA_URL, function (error, response, body) {
        const data = JSON.parse(body);
        let resultHtml = '';
        for (let i = 0; i < data.users.length; i++) {
            let user = data.users[i];
            resultHtml += `<p>Name : ${user.name}, Date of birth : ${user.date_of_birth}, Email : ${user.email}</p>`;
        }
        res.send(resultHtml);
    });

});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});