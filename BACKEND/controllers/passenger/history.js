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

  const rechargeHistory = (req, res) => {
    
    const user_id=parseInt(req.params.user_id)
    // const { user_id } = req.body
  
    try{
      pool.query('SELECT user_id,date FROM public.payment WHERE user_id = $1 ORDER BY user_id ASC', [user_id], (error, results) => {
      
        if (error) {
          throw error
        }
         return res.status(200).json(results.rows[0])
       })

    }catch (error) {
      console.log(error);
      res.status(500).json({
      error: "Database error occurred while updating!", //Database connection error
  });
  //  ,handleErr
  }}

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

  //travel history
  const travelHistory = (req, res) => {  

    const id=parseInt(req.params.id)
  
    pool.query('SELECT count(user_id) as paymentcount FROM public.payment WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    }),handleErr
    
  }

  const userTravelHistory = (request, res) => {
    const user_id=parseInt(request.params.user_id)

    pool.query('SELECT u.fullname,h.depart_to,h.created_at,h.tokens FROM public.users u,public.historytrip h WHERE u.id=h.user_id AND h.user_id=$1',[user_id], (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

  
  
  module.exports = {
    getHistory,
    createHistory,
    rechargeHistory,// recharge history
    getUserUsertrip,
    getUserUploads,
    travelHistory,
    userTravelHistory
  }

  
