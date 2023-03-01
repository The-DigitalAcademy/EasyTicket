const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getComplains = (request, res) => {
    pool.query('SELECT fullname,complains FROM public.complains,public.users WHERE public.complains.user_id=public.users.id ', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

//getting the complains for the current week
const getAllComplains = (request, res) => {
  pool.query(`SELECT user_id, complains,date_created FROM public.complains WHERE date_created >= date_trunc('week', now())`, (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}


//getting the complains for the current month.
const ComplainsPerMonth = (request, res) => {
  pool.query(`SELECT user_id, complains,date_created FROM public.complains WHERE date_created >= date_trunc('month', now())`, (error, results) => {
   
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


module.exports = {
    getAllComplains,
    getComplains,
    postComplains,
    ComplainsPerMonth
  }