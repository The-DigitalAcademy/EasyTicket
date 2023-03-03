const bcrypt = require("bcrypt");
const md5 = require("md5");
const pool = require("../../Data Access/connection")

// const client = require("../config/database");

const jwt = require("jsonwebtoken");

//Login Function
// const passengerLogin = async (req, res) => {
//     const { email, password,fullname } = req.body;
    
//     try {
//     const data = await pool.query(`SELECT * FROM public.users WHERE email= $1;`, [email]) //Verifying if the user exists in the database
//     const user = data.rows;

//     if (user.length === 0) {
//         res.status(400).json({

//         error: "User is not registered, Sign Up first",
//     });
//     }
//     else {
//         bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
//     if (err) {
//         res.status(500).json({
//         error: "Server error",
//     });
//     } else if (result === true) { //Checking if credentials match
//         const token = jwt.sign(
//     {
//     fullname:fullname,    
//     email: email,
//     },
//     "process.env.SECRET_KEY"
// );
//     res.status(200).json({
//     message: "User signed in!",
//     token: token,
//     });
// }
// else {
// //Declaring the errors
//     if (result != true)
//         res.status(400).json({
//         error: "Enter correct login details!",
//         });
//     }
//     })
//     }
// } catch (err) {
//     console.log(err);
//     res.status(500).json({
//     error: "Database error occurred while signing in!", //Database connection error
// });
// };
// };

// module.exports = {
//     passengerLogin
// }



const passengerLogin = (req, res) => {


    let { email, password } = req.body; 
   
  const hashed_password = md5(password.toString())


  pool.query('SELECT * FROM public.users WHERE email= $1 AND password = $2' ,[email,hashed_password],(error, results)=> {
    //console.log(results.length)
    if (results.rowCount > 0) {
    
    //res.send('success')
       let token = jwt.sign({
         data: results 
        }, 'sgdfiuejsncksdncoihfoiwefwkwoidwnw',{
        algorithm: 'HS256',
        expiresIn:120
       })

       
       res.status(200).json({token: token})
      // res.send({ status: 1, data: results, token: token });
  
    }else{
      res.send('invalid login details')
    }
    });


}
module.exports = {
    passengerLogin
}