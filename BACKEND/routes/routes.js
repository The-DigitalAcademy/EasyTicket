const express = require('express')
const bodyParser = require('body-parser')
const router = express()
// require("../database/dotenv");
const cors = require('cors');
const http = require('http')

const register = require("../controllers/passenger/register")
const login = require("../controllers/passenger/login")

const trip = require("../controllers/inspector/trip")

router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 3001;

var corsOptions = {
  origin:"http://localhost:4200"
}

router.use(cors(corsOptions));

router.use(bodyParser.json())
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

router.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

   //routes for registering
router.post('/passenger/register', register.registerUser)
 //routes for logging in
 router.post('/passenger/login', login.passengerLogin)


  //routes for trips
  router.get('/allTrips', trip.getTrips)
  router.get('/trip/byName', trip.getTripByName)
  router.post('/create/trip', trip.postTrip)
  router.put('/update/trip', trip.updateTrip)
  router.delete('/delete/trip', trip.deleteTrip)

router.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })