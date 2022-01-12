// realize.WebServer = true;
// url ="test.de";

// http://localhost:8844

// const http = require('http');
// const url = require('url');
// const fs = require('fs');

const express = require('express');
const app = express();


app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    if(req.query.search) {
        let searchResults = persistence.tutorials.filter(tutorial => tutorial.name.toLowerCase().includes(req.query.search.toLowerCase()));
        res.render('list.ejs', { tutorials: searchResults, query: req.query.search });
    }
    else {
        let searchResults = persistence.tutorials;
        res.render('list.ejs', { tutorials: searchResults, query: false });
    }

    
})
app.get('/tutorials', (req, res) => {
    res.render('tutorials.ejs');
})
app.get('/tutorial', (req, res) => {
    res.render('tutorial.ejs');
})
app.get('/form', (req, res) => {
    res.render('form.ejs');
})

app.listen(8844);


const persistence = require('./models/persistence');

// http.createServer((req, res) => {
//     const query = url.parse(req.url, true).query;

    // for(let i = 0; i < persistence.tutorials.length; i++) {
    //     if(query.name == persistence.tutorials[i].name)
    //         searchResults.push(persistence.tutorials[i]);
    // }

//     let searchResults = persistence.tutorials.filter(tutorial => query.name == tutorial.name);

// }).listen(8844);