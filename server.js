// Load Node modules
var express = require('express');
// var bodyParser = require('body-parser');
const ejs = require('ejs');
const { response } = require('express');
const fetch = require('node-fetch');
const config = require('dotenv').config({ path: './credentials.env'});
// Initialise Express
var app = express();
// Render static values
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
const hostname = '192.168.254.130';
const port = 8080;
app.listen(port);

const PHOTO_API = "https://api.nasa.gov/mars-photos/api/v1/";
const API_KEY = process.env.NASA_API_KEY;

// const getDate = function (req, res, next) {
//     const dateInput = document.getElementById('dateInput')
//     dateInput.addEventListener('change', event => {
//         const inputDate = new Date(dateInput.value)
//         // Need to add 1 to the date for some reason
//         inputDate.setDate(inputDate.getDate() + 1)
//         // Set variables for day, month, and year

//         // var day = inputDate.getDate();
//         // var month = inputDate.getMonth();
//         // var year = inputDate.getFullYear();
//         // console.log(day.toString() + month.toString() + year.toString());
//     }
// }



var perseveranceCameras = {
    EDL_RUCAM: "dropdown-item",
    EDL_RDCAM: "dropdown-item",
    EDL_DDCAM: "dropdown-item",
    EDL_PUCAM1: "dropdown-item",
    EDL_PUCAM2: "dropdown-item",
    NAVCAM_LEFT: "dropdown-item",
    NAVCAM_RIGHT: "dropdown-item",
    SKYCAM: "dropdown-item",
    MCZ_LEFT: "dropdown-item",
    MCZ_RIGHT: "dropdown-item",
    FRONT_HAZCAM_LEFT_A: "dropdown-item",
    FRONT_HAZCAM_LEFT_B: "dropdown-item",
    REAR_HAZCAM_LEFT: "dropdown-item",
    REAR_HAZCAM_RIGHT: "dropdown-item",
    SHERLOC_WATSON: "dropdown-item"
};

// app.use('/perseverance', (req, res, next) => {
//     let url = (PHOTO_API + "manifests/curiosity/?api_key=" + API_KEY);
//     let settings = { method: "Get" };
//     fetch(url, settings)
//         .then(res => res.json())
//         .then((json) => {
//             // console.log(json.max_date);

//         });
// })


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

app.use('/perseverance', (req, res, next) => {
    console.log('middleware function');
    // perseveranceManifest();
    next();
})

// Perseverance page
app.get('/perseverance', function (req, res) {
    var perseveranceLink = "nav-link active";
    var curiosityLink = "nav-link";
    var oppurtunityLink = "nav-link";
    var spiritLink = "nav-link";
    console.log(req.body);
    console.log(JSON.stringify(req.body));
    // console.log(req.body.dateInput);
    res.render('pages/perseverance', {
        // EJS variable and server-side variable
        perseveranceLink: perseveranceLink,
        curiosityLink: curiosityLink,
        oppurtunityLink: oppurtunityLink,
        spiritLink: spiritLink
    });
})
// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
//   }
// const requireJsonContent = () => {
//     return (req, res, next) => {
//       if (req.headers['content-type'] !== 'application/json') {
//           res.status(400).send('Server requires application/json')
//       } else {
//         next()
//       }
//     }
//   }
//   app.get('/', (req, res, next) => {
//     res.send('Welcome Home');
//   });

//   app.post('/', requireJsonContent(), (req, res, next) => {
//     res.send('You sent JSON');
//   })

//   const availableCameras = function(req, res, next) {
//     req.
//   }
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

// res.render()



/**
 * res
 * res.json()
 */


// Passing variables
/**
    app.get('/', function (req, res) {
    var name = "Louise";
    // Render index page
    res.render('pages/index', {
        res.send('Get User With ID ${req.params.id}');
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

// Middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.get("/", logger, logger, logger, (req, res) => {
    res.render("index", { text: "world" });
})