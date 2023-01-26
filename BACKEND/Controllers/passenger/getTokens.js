const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
    res.status(400).send({ error: err.message })
  }

const getToken = (req, res) => {  

    //const { user_id } = req.body

    const user_id=parseInt(req.params.id)

    pool.query('SELECT amount FROM public.wallet WHERE user_id = $1', [user_id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    }),handleErr
    
}

  module.exports = {

    getToken
  }