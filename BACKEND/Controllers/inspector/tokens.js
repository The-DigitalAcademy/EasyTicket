const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
    res.status(400).send({ error: err.message })
  }

const postToken = (req, res) => {  

    const { user_id, amount } = req.body

    

    pool.query('INSERT INTO public.wallet(user_id, amount) VALUES ($1, $2)', [user_id, amount], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"Tokens have been successfully loaded"})
    }),handleErr
    
}

  module.exports = {

    postToken
  }