const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const updateStatus = (request, res) => {
    const id = parseInt(request.params.id);
    const { status } = request.body
  
    pool.query('UPDATE public.users SET status = $1 WHERE id=$2',[ status , id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"Passenger status has been successfully updated"})
        
      }
    ),handleErr
  }

  module.exports = {
    updateStatus
  }