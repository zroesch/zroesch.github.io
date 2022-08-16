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
app.get('/', function (req, res) {
    var perseveranceLink = "nav-link";
    var curiosityLink = "nav-link";
    var oppurtunityLink = "nav-link";
    var spiritLink = "nav-link";
    res.render('pages/index', {
        // EJS variable and server-side variable
        perseveranceLink: perseveranceLink,
        curiosityLink: curiosityLink,
        oppurtunityLink: oppurtunityLink,
        spiritLink: spiritLink
    });
})

// Perseverance page
app.get('/perseverance', function (req, res) {
    var perseveranceLink = "nav-link active";
    var curiosityLink = "nav-link";
    var oppurtunityLink = "nav-link";
    var spiritLink = "nav-link";
    res.render('pages/perseverance', {
        // EJS variable and server-side variable
        perseveranceLink: perseveranceLink,
        curiosityLink: curiosityLink,
        oppurtunityLink: oppurtunityLink,
        spiritLink: spiritLink
    });
})

// Curiosity page
app.get('/curiosity', function (req, res) {
    var perseveranceLink = "nav-link";
    var curiosityLink = "nav-link active";
    var oppurtunityLink = "nav-link";
    var spiritLink = "nav-link";
    res.render('pages/curiosity', {
        // EJS variable and server-side variable
        perseveranceLink: perseveranceLink,
        curiosityLink: curiosityLink,
        oppurtunityLink: oppurtunityLink,
        spiritLink: spiritLink
    });
})

// Spirit and Oppurtunity page
app.get('/twins', function (req, res) {
    var perseveranceLink = "nav-link";
    var curiosityLink = "nav-link";
    var oppurtunityLink = "nav-link active";
    var spiritLink = "nav-link active";
    res.render('pages/oppurtunity', {
        // EJS variable and server-side variable
        perseveranceLink: perseveranceLink,
        curiosityLink: curiosityLink,
        oppurtunityLink: oppurtunityLink,
        spiritLink: spiritLink
    });
})

app.get('/twins', function (req, res) {
    var perseveranceLink = "nav-link";
    var curiosityLink = "nav-link";
    var oppurtunityLink = "nav-link active";
    var spiritLink = "nav-link active";
    res.render('pages/spirit', {
        // EJS variable and server-side variable
        perseveranceLink: perseveranceLink,
        curiosityLink: curiosityLink,
        oppurtunityLink: oppurtunityLink,
        spiritLink: spiritLink
    });
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