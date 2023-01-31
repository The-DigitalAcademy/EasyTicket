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

const getProofuser = (req, res) => {
  
                                                                                   

  pool.query('SELECT invoice.id as id,user_id,proof,fullname,date FROM public.invoice,public.users WHERE public.users.id =public.invoice.user_id', [], (error, results) => {
  
      res.status(200).json(results.rows)
  }),handleErr

}

  module.exports = {
    getProof,getProofuser
  }