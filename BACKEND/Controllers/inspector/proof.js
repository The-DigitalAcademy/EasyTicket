const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//getting the proof of payment
const getProof = (request, res) => {
    const { id } = request.body;
                                                                                     

    pool.query('SELECT user_id,proof FROM public.invoice WHERE id = $1', [id], (error, results) => {
    
        res.status(200).json(results.rows)
    }),handleErr

}

  module.exports = {
    getProof
  }