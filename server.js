// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static values
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
const hostname = '192.168.254.130';
const port = 8080;
app.listen(port, '0.0.0.0');

// *** GET Routes - display pages ***
// Root Route
app.get('/', function(req, res) {
    res.render('pages/index');
})

// Perseverance page
app.get('/perseverance', function(req, res) {
    res.render('pages/perseverance');
})

// Curiosity page
app.get('/curiosity', function(req, res) {
    res.render('pages/curiosity');
})

// Spirit and Oppurtunity page
app.get('/twins', function(req, res) {
    res.render('pages/oppurtunity');
})

app.get('/twins', function(req, res) {
    res.render('pages/spirit');
})






// Passing variables
/**
    app.get('/', function (req, res) {
    var name = "Louise";
    // Render index page
    res.render('pages/index', {
        // EJS variable and server-side variable
        name: name
    } );
});
 *
 */
//  index.ejs
// <h2>My name is <%= name %></h2>

/**
 * app.get('/', function (req, res) )
 */
// app.get('/', function (req, res) {
//     var listnames = ["Louise", "Sadie", "Erik", "Raph", "Gina"];
//     //Render index page
//     res.render('pages/index', {
//         // EJS variable and server-side variable
//         listnames: listnames
//     });
// });
// index.ejs
/**
 * <% listnames.forEach(function(name) {  %>
 *      <p><%= name%></p>
 *      <% }); %>
 */