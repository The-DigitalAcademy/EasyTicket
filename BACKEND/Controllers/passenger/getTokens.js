const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
    res.status(400).send({ error: err.message })
  }

const getToken = (req, res) => {  

    const { id } = req.body

    pool.query('SELECT user_id, amount FROM public.wallet WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    }),handleErr
    
}

  module.exports = {

    getToken
  }