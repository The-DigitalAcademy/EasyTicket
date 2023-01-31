const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//getting the invoice
  const getInvoice = (req, res) => {
    
    const id=parseInt(req.params.id)
  
    pool.query('SELECT * FROM public.invoice WHERE id = $1', [id], (error, results) => {
    
      res.status(200).json(results.rows)
    }),handleErr
  }
  
  
  const postInvoice = (req, res) => {  

    const { user_id,proof } = req.body

  
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    pool.query('INSERT INTO public.invoice(user_id, proof,date) VALUES ($1,$2,$3)', [user_id,proof,date], (error, results) => {
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

  


