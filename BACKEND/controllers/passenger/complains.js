const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getComplains = (request, res) => {
    pool.query('SELECT fullname,complains FROM public.complains,public.users WHERE public.complains.user_id=public.users.id ', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

const getAllComplains = (request, res) => {
  pool.query('SELECT user_id, complains FROM public.complains ', (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}

  
  const postComplains = (req, res) => {  

    const { user_id, complains } = req.body

    pool.query('INSERT INTO public.complains(user_id, complains) VALUES ($1, $2)', [user_id, complains], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"Your complain has been successfully lodged"})
    })
    
  }
//count no of complains per passenger
const getUserComplain = (req, res) => {  

  const id=parseInt(req.params.id)

  pool.query('SELECT count(user_id) as complaincount FROM public.complains WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }),handleErr
  
}
 
module.exports = {
    getAllComplains,
    getComplains,
    postComplains,getUserComplain
  }