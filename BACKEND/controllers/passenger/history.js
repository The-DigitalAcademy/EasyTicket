const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getHistory = (request, res) => {
    pool.query('SELECT * FROM public.historytrip ORDER BY id ASC ', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

  //passenger's trip history
  const createHistory = (req, res) => {  
    
    const { user_id,depart_to,tokens } = req.body

    pool.query('INSERT INTO public.historytrip(user_id, depart_to,tokens) VALUES ($1, $2,$3)', [user_id,depart_to,tokens], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"trip history has been successfully added"})
    })
    
  }

  //trips take by passenger

  
const getUserUsertrip = (req, res) => {  

  const id=parseInt(req.params.id)

  pool.query('SELECT count(user_id) as notrip FROM public.historytrip WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }),handleErr
  
}

//uploads made
const getUserUploads = (req, res) => {  

  const id=parseInt(req.params.id)

  pool.query('SELECT count(user_id) as paymentcount FROM public.payment WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }),handleErr
  
}
  
  module.exports = {
    getHistory,
    createHistory,getUserUsertrip,getUserUploads
  }

  
