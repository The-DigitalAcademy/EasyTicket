const  bcrypt  =  require("bcrypt");
const  jwt  =  require("jsonwebtoken");

const pool = require("../../Data Access/connection")

//Registration Function

const registerUser  =  async (req, res) => {
    const { firstname, lastname, email, password,account_type } =  req.body;
    try {
        const  data  =  await pool.query(`SELECT * FROM public.users WHERE email= $1;`, [email]); //Checking if user already exists
        const  arr  =  data.rows;

        if (arr.length  !=  0) {
            return  res.status(400).json({
            error: "Email already there, No need to register again.",
            });
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
            if (err)
            res.status(err).json({
            error: "Server error",
            });
            const  user  = {
                firstname,
                lastname,
                email,
                password: hash,
                account_type

            };
            var  flag  =  1; //Declaring a flag

            //Inserting data into the database
            if(user.firstname !==  null && user.firstname !==  '' && user.lastname !==  null && user.lastname !==  '' && user.email !==  null && user.email !==  ''  && user.password !==  null && user.password !==  '' && user.account_type !==  null && user.account_type !==  '' )
            {
                pool.query(`INSERT INTO public.users(firstname, lastname, email, password,account_type) VALUES ($1,$2,$3,$4,$5);`, [user.firstname, user.lastname, user.email, user.password,user.account_type], (err) => {
                    if (err) {
                        flag  =  0; //If user is not inserted is not inserted to database assigning flag as 0/false.
                        console.error(err);
                        return  res.status(500).json({ error: "Database error"})
                    }
                    else {
                        flag  =  1;
                        res.status(200).send({ message: 'User has been added to database' });
                    }
                })
            }
           
            if (flag) {
            const  token  = jwt.sign( //Signing a jwt token
            {
            email: user.email
            },
            "process.env.SECRET_KEY"
            );
            };
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!", //Database connection error
        });
    };

}

module.exports = {
    registerUser
  }
