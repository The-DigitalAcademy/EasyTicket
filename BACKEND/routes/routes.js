const express = require('express')
const bodyParser = require('body-parser')
const router = express()
// require("../database/dotenv");
const cors = require('cors');
const http = require('http')

const register = require("../controllers/passenger/register")
const login = require("../controllers/passenger/login")
const search = require("../controllers/passenger/search")
//const profile = require("../controllers/passenger/profile")

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


  //routes for trips(inspector)
  router.get('/allTrips', trip.getTrips)
  router.get('/tripByName', trip.getTripByName)
  router.post('/createTrip', trip.postTrip)
  router.put('/updateTrip/:id', trip.updateTrip)
  router.delete('/deleteTrip/:id', trip.deleteTrip)

  //routes for searching the destination
  router.get('/seachDestination', search.getTripByName)

  //profile routes
  //router.get('/viewProfile', profile.getProfile)



router.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })