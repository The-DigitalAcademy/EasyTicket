const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//getting the invoice
  const getInvoice = (request, res) => {
    const {id} = request.body
  
    pool.query('SELECT * FROM public.invoice WHERE id = $1', [id], (error, results) => {
    
      res.status(200).json(results.rows)
    }),handleErr
  }
  
  
  const postInvoice = (req, res) => {  

    const { user_id,proof } = req.body

    pool.query('INSERT INTO public.invoice(user_id, proof) VALUES ($1,$2)', [user_id,proof ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"invoice has been successfully added"})
    })
    
  }
  
  module.exports = {
    getInvoice,
    postInvoice
  }

  


