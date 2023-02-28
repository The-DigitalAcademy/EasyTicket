const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getHistory = (request, res) => {
    pool.query('SELECT * FROM public.history ORDER BY id ASC ', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

  //passenger's trip history
  const createHistory = (req, res) => {  
    
    const { user_id,departing_to,amount } = req.body

    pool.query('INSERT INTO public.history(user_id, departing_to,amount) VALUES ($1, $2,$3)', [user_id,departing_to,amount], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"trip history has been successfully added"})
    })
    
  }
  
  
  module.exports = {
    getHistory,
    createHistory
  }

  
