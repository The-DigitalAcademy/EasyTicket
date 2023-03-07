const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//searching the destination
const getTripByName = (request, res) => {
    const {travelling_to} = request.body
  
    pool.query('SELECT * FROM public.trip WHERE travelling_to = $1', [travelling_to], (error, results) => {
    
      res.status(200).json(results.rows)
    }),handleErr
}
  
  module.exports = {

    getTripByName
  }

  
