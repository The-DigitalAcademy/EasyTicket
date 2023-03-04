const pool = require("../../Data Access/connection");
const nodemailer = require("nodemailer");
const  md5  =  require("md5");
const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//update password
const updatePassword = (request, res) => {
  
    const { id,password } = request.body
    const hashed_password = md5(password)
    var newpassword={
      id:id,       
      password:hashed_password
  }

    pool.query('UPDATE public.users SET password = $1 WHERE id=$2',[hashed_password,id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"password has been successfully updated"})
        
      }
    )
  }

  const passwordrecover = (request, res) => {
  
    const { email } = request.body
    const OTP=Math.floor(Math.random()*100000+1);

   // create reusable transporter object using the default SMTP transport
   const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'kabelomighty@gmail.com',
        pass: 'jlenvfjfhzqtxfxf'
    }
});

    pool.query('SELECT *FROM public.users WHERE email=$1',[email], async (error, results) => {
      if (results.rowCount > 0) {

        const msg = {
          from: '"The Exapress App" <theExpressApp@example.com>', // sender address
          to: `${email}`, // list of receivers
          subject: "Forgot your password,OTP code", // Subject line
          text: "your OTP Code is "+ OTP, // plain text body
      }


      pool.query('UPDATE public.users SET otp=$1 WHERE email=$2',[OTP,email],async (error, results) => {
        const info = await transporter.sendMail(msg);    
        res.send('Email Sent!')
    })


      // send mail with defined transport object
    
      
        }else{
          res.send('Email not found');
        }
        
      }
    )
  }
  
  module.exports = {
    updatePassword,
    passwordrecover
  }

  


