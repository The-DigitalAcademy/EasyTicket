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
const destination = require("../controllers/passenger/destination")
const complains = require("../controllers/passenger/complains")


//routes for inspector
const proof = require("../controllers/inspector/proof")
const comp_info = require("../controllers/inspector/company")
const tokens = require("../Controllers/inspector/tokens")
const status = require("../controllers/inspector/status")

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

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
  next();
});

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

   //routes for saving and deleting addresses
   router.post('/postAddress', destination.postDestination)
   router.delete('/deleteAddress/:id', destination.deleteDestination)
   router.get('/getPlaces/:id', destination.getPlaces)
   router.get('/getUserPlaces/:id', destination.getUserPlaces)

  //routes for trips(inspector)
  // router.get('/allTrips', trip.getTrips)
  // router.get('/tripByName', trip.getTripByName)
  // router.post('/createTrip', trip.postTrip)
  // router.put('/updateTrip/:id', trip.updateTrip)
  // router.delete('/deleteTrip/:id', trip.deleteTrip)

  //routes for searching the destination
  router.get('/seachDestination', search.getTripByName)

  //profile routes
  router.get('/viewProfile', profile.getProfile)
  router.put('/updateProfile/:id', profile.updateProfile)

  //update password
  router.put('/updatePassword/:id', password.updatePassword)
  router.post('/passwordrecover', password.passwordrecover)
  //payment routes
  router.post('/postProof', invoice.postInvoice)
  router.get('/getProof/:id', invoice.getInvoice)
  router.get('/getProofuser', proof.getProofuser)

  //route for getting proof of payment
  router.get('/proofOfPayment', proof.getProof)

  //loading tokens
  router.put('/loadTokens', tokens.updateTokens)
  //viewing tokens
  router.get('/viewTokens', getTokens.getToken)
  // router.put('/updateTokens/:user_id', getTokens.updateTokens)
  router.get('/viewTokens/:id', getTokens.getToken)


   //routes for company information
   router.get('/getInfo', comp_info.getCompInfo)
   router.post('/postInfo', comp_info.postCompInfo)
   router.put('/updateCompInfo/:id', comp_info.updateCompInfo)
   router.delete('/deleteInfo/:id', comp_info.deleteCompInfo)

   
   //routes for complains
   router.post('/postComplains', complains.postComplains)
   router.get('/getComplains', complains.getComplains)

  //  status
  router.get('/getStatus', status.getUsers)
  router.get('/getAllUsers', status.getAllUsers)



router.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })