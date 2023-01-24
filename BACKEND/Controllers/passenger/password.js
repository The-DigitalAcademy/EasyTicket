const pool = require("../../Data Access/connection");
const bcrypt = require("bcrypt")

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//searching the destination
const updatePassword = (request, res) => {
    const id = parseInt(request.params.id);
    const { password } = request.body
  
    pool.query('UPDATE public.users SET password = $1 WHERE id=$2',[password, id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"password has been successfully updated"})
        
      }
    )
  }
  
  module.exports = {
    updatePassword
  }

  


