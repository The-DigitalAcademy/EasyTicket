const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
    res.status(400).send({ error: err.message })
  }

  const getPlaces = (req, res) => {  

    //const { user_id } = req.body

    const id=parseInt(req.params.id)

    pool.query('SELECT * FROM public.destination WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    }),handleErr
    
}

const getUserPlaces = (req, res) => {  

    

    const id=parseInt(req.params.id)
    //const { user_id } = req.body

    pool.query('SELECT * FROM public.destination WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    }),handleErr
    
}

  const postDestination = (req, res) => {  

    const { user_id,address } = req.body

    

    pool.query('INSERT INTO public.destination(user_id,address) VALUES ($1, $2)', [user_id,address ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"address has been successfully added"})
    })
    
  }

  const deleteDestination = (request, res) => {
    const id = parseInt(request.params.id)
   
  
    pool.query('DELETE FROM public.destination WHERE id = $1', [id], (error, results) => {
     
      res.status(200).send({message:"Address has been successfully deleted"})
    }),handleErr
  }

  module.exports = {
    postDestination,
    deleteDestination,
    getPlaces,
    getUserPlaces
  }