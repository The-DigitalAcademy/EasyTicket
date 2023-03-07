const  bcrypt  =  require("bcrypt");
const  md5  =  require("md5");
const  jwt  =  require("jsonwebtoken");

const pool = require("../../Data Access/connection")

//Registration Function

// const registerUser  =  async (req, res) => {
//     const { fullname, email, password } =  req.body;
//     const pass_hash=   md5(password.toString());
//     try {
//         const  data  =  await pool.query(`SELECT * FROM public.users WHERE email= $1;`, [email]); //Checking if user already exists
//         const  arr  =  data.rows;

//         if (arr.length  !=  0) {
//             return  res.status(400).json({
//             error: "Email already there, No need to register again.",
//             });
//         }
//         else {
         
//             md5(password.toString(), (err, hash) => {
//             if (err)
//             res.status(err).json({
//             error: "Server error",
//             });
//             const  user  = {
//                 fullname,
//                 email,
//                 password: pass_hash

//             };
//             var  flag  =  1; //Declaring a flag

//             //Inserting data into the database
//             if(user.fullname !==  null && user.fullname !==  '' && user.email !==  null && user.email !==  ''  && user.password !==  null && user.password !==  ''  )
//             {
//                 pool.query(`INSERT INTO public.users(fullname, email, password) VALUES ($1,$2,$3);`, [user.fullname, user.email, user.password], (err) => {
//                     if (err) {
//                         flag  =  0; //If user is not inserted is not inserted to database assigning flag as 0/false.
//                         console.error(err);
//                         return  res.status(500).json({ error: "Database error"})
//                     }
//                     else {
//                         flag  =  1;
//                        //res.status(200).send({ message: 'User has been added to database' });
//                      res.send('User has been added to database')
//                     }
//                 })
//             }
           
//             if (flag) {
//             const  token  = jwt.sign( //Signing a jwt token
//             {
//             email: user.email
//             },
//             "process.env.SECRET_KEY"
//             );
//             };
//             });
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({
//             error: "Database error while registring user!", //Database connection error
//         });
//     };

// }


const registerUser = (req, res) => {
    
    const {fullname,email,password} = req.body; 
  
     const hashed_password = md5(password.toString())
    
  
    if(fullname && email && password){
  
  
  
      pool.query('SELECT * FROM public.users WHERE email =$1',[email],function (error, results, fields){
  
        if(results.rowCount > 0)
        { 
            res.send('Email exists already')
        }
        else{
        
            const points=0;
            const active="active";
          var user={
  
            "fullname":fullname,
            "email":email,          
            "password":hashed_password,
            "amount":points,
            "status":active

         
        }
         pool.query('INSERT INTO public.users(fullname, email, password,amount,status) VALUES ($1,$2,$3,$4,$5);', [user.fullname, user.email, user.password,user.amount,user.status], function (error, results, fields) 
          {
               if(error){
                res.send('data not sent')
  
               }else{
                res.send('Account created succesfully!')
               }
  
          })
  
  
          
        }
    
      });
  
    }
    
  };
module.exports = {
    registerUser
  }
