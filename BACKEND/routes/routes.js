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
const history = require("../controllers/passenger/history")



//routes for inspector
const proof = require("../controllers/inspector/proof")
const comp_info = require("../controllers/inspector/company")
const tokens = require("../controllers/inspector/tokens")
const status = require("../controllers/inspector/status")
const suspend = require("../controllers/inspector/suspended")
const trip = require("../controllers/inspector/trip")
const report = require("../controllers/inspector/report")

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
  router.get('/allTrips', trip.getTrip)
  router.post('/createTrip', trip.postTrip)
  router.put('/updateTrip/:id', trip.updateTrip)
  router.delete('/deleteTrip/:id', trip.deleteTrip)
  router.post('/searchStation', trip.searchStation)// searchStation


  //routes for searching the destination
  router.get('/seachDestination', search.getTripByName)

  //profile routes
  router.get('/viewProfile', profile.getProfile)
  router.put('/updateProfile/:id', profile.updateProfile)


  //update password
  router.put('/updatePassword', password.updatePassword)
  router.post('/passwordrecover', password.passwordrecover)
  router.post('/checkOtp', password.checkOtp)
  router.put('/upadteEpassword', password.upadteEpassword)
  
  //payment routes
  router.post('/postProof', invoice.postInvoice)
  router.get('/getProof/:id', invoice.getInvoice)
  router.get('/getProofuser', proof.getProofuser)
  // router.get('/rechargeHistory/:id', invoice.rechargeHistory)

  //route for getting proof of payment
  router.get('/proofOfPayment', proof.getProof)

  //loading tokens
  router.put('/loadTokens', tokens.updateTokens)
  //viewing tokens
  router.get('/viewTokens', getTokens.getToken)
  // router.put('/updateTokens/:user_id', getTokens.updateTokens)
  router.get('/viewTokens/:id', getTokens.getToken)
  router.get('/getUserToken/:id', getTokens.getUserUsedTokens)
  router.get('/getUserTransaction/:id', getTokens.getUseTrasactions)
  //paying the trip
  router.put('/payingTrip', tokens.payingTrip)// payingTrip
  router.post('/historyTrip', tokens.Historytrip)// payingTrip


   //routes for company information
   router.get('/getInfo', comp_info.getCompInfo)
   router.post('/postInfo', comp_info.postCompInfo)
   router.put('/updateCompInfo/:id', comp_info.updateCompInfo)
   router.delete('/deleteInfo/:id', comp_info.deleteCompInfo)

   //routes for trip history
   router.get('/getHistory', history.getHistory)
   router.post('/createHistory', history.createHistory)
   router.get('/history/:user_id', history.rechargeHistory) //getting recharge history using user id
   router.get('/userTravelHistory/:user_id', history.userTravelHistory) //getting a specific passenge's travel history


   //history routes
   router.get('/getUserUsertrip/:id', history.getUserUsertrip)
   router.get('/getUserUploads/:id', history.getUserUploads)

   //routes for complains
   router.post('/postComplains', complains.postComplains)
   router.get('/getComplains', complains.getComplains)
   router.get('/getAllComplains', complains.getAllComplains)
   router.get('/getUserComplain/:id', complains.getUserComplain)
   router.get('/getUserComplainByUserid/:id', complains.getUserComplainByUserid)
   router.get('/readComplain/:id', complains.readComplain)
   router.get('/ComplainsPerMonth', complains.ComplainsPerMonth)
   router.delete('/deleteComplain/:id', complains.deleteComplain)
  //  status
  router.get('/getStatus', status.getUsers)
  router.get('/getAllUsers', status.getAllUsers)
  router.get('/getAllUsersActive', status.getAllUsersActive)
  router.get('/getAllUsersInActive', status.getAllUsersInActive)
  

  router.get('/getDates', status.getDates)
  router.get('/getStatusDate', status.getStatusDate)
 
  // report for the inspector
  router.get('/getReport', report.report)

  //routes for suspending a passenger
  router.put('/updateStatus/:id', suspend.updateStatus)
  router.put('/activatePassenger/:id', suspend.activatePassenger)
  //transactions for passenger
  router.get('/getTransactionbyId/:id', history.getTransactionbyId)
 


router.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })