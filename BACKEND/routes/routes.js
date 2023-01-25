const express = require('express')
const bodyParser = require('body-parser')
const router = express()
// require("../database/dotenv");
const cors = require('cors');
const http = require('http')

//routes for passenger
const register = require("../controllers/passenger/register")
const login = require("../controllers/passenger/login")
const search = require("../controllers/passenger/search")
const profile = require("../controllers/passenger/profile")
const password = require("../controllers/passenger/password")
const invoice = require("../controllers/passenger/invoice")
const getTokens = require("../controllers/passenger/getTokens")

//routes for inspector
const trip = require("../controllers/inspector/trip")
const proof = require("../controllers/inspector/proof")
const comp_info = require("../controllers/inspector/company")
const tokens = require("../Controllers/inspector/tokens")

//code for uploading files
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: 'dhtppljex',
  api_key: '259573781321246',
  api_secret: '1O8o4GDLf82SMhjj8yL9kPJRrSE',
});

const storage = new CloudinaryStorage({
cloudinary: cloudinary,
params: {
  folder: "DEV",
},
});

const upload = multer({ storage: storage });

router.post("/newUpload", upload.single("file"), async (req, res) => {
  return res.json({ file: req.file.path});
});

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
router.post('/register', register.registerUser)
 //routes for logging in
 router.post('/login', login.passengerLogin)


  //routes for trips(inspector)
  router.get('/allTrips', trip.getTrips)
  router.get('/tripByName', trip.getTripByName)
  router.post('/createTrip', trip.postTrip)
  router.put('/updateTrip/:id', trip.updateTrip)
  router.delete('/deleteTrip/:id', trip.deleteTrip)

  //routes for searching the destination
  router.get('/seachDestination', search.getTripByName)

  //profile routes
  router.get('/viewProfile', profile.getProfile)
  router.put('/updateProfile/:id', profile.updateProfile)

  //update password
  router.put('/updatePassword/:id', password.updatePassword)

  //invoice routes
  router.post('/postProof', invoice.postInvoice)
  router.get('/getProof', invoice.getInvoice)

  //route for getting proof of payment
  router.get('/proofOfPayment', proof.getProof)

  //loading tokens
  router.post('/loadTokens', tokens.postToken)
  //viewing tokens
  router.get('/viewTokens', getTokens.getToken)


   //routes for company information
   router.get('/getInfo', comp_info.getCompInfo)
   router.post('/postInfo', comp_info.postCompInfo)
   router.put('/updateCompInfo/:id', comp_info.updateCompInfo)
   router.delete('/deleteInfo/:id', comp_info.deleteCompInfo)

 
   
   

router.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })