const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
    res.status(400).send({ error: err.message })
  }

const getToken = (req, res) => {  

    //const { user_id } = req.body

    const id=parseInt(req.params.id)

    pool.query('SELECT amount FROM public.users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    }),handleErr
    
}

//get number of tokens used by user

const getUserUsedTokens = (req, res) => {  

  const id=parseInt(req.params.id)

  pool.query('SELECT sum(tokens) as points FROM public.historytrip WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }),handleErr
  
}

//Transction history

const getUseTrasactions = (req, res) => {  

  const id=parseInt(req.params.id)

  pool.query('SELECT * FROM public.historytrip WHERE user_id = $1 LIMIT 5 ', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }),handleErr
  
}



  module.exports = {

    getToken,
    getUserUsedTokens,getUseTrasactions
  }