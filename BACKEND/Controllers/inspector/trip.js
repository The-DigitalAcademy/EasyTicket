const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getTrips = (request, res) => {
    pool.query('SELECT * FROM public.trip ORDER BY id ASC ', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

  const getTripByName = (request, res) => {
    const {travelling_to} = request.body
  
    pool.query('SELECT * FROM public.trip WHERE travelling_to = $1', [travelling_to], (error, results) => {
    
      res.status(200).json(results.rows)
    }),handleErr
  }
  
  const postTrip = (req, res) => {  

    const { user_id, departing_from, travelling_to, price } = req.body

    pool.query('INSERT INTO public.trip(user_id, departing_from, travelling_to, price) VALUES ($1, $2,$3,$4)', [user_id, departing_from, travelling_to, price ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"route has been successfully added"})
    })
    
  }
  
  const updateTrip = (request, res) => {
    const id = parseInt(request.params.id);
    const { user_id, departing_from, travelling_to, price } = request.body
  
    pool.query('UPDATE public.trip SET user_id = $1, departing_from = $2, travelling_to = $3, price = $4 WHERE id=$5',[user_id, departing_from, travelling_to, price, id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"route has been successfully updated"})
        
      }
    )
  }

  const deleteTrip = (request, res) => {
    const id = parseInt(request.params.id)
   
  
    pool.query('DELETE FROM public.trip WHERE id = $1', [id], (error, results) => {
     
      res.status(200).send({message:"trip has been successfully deleted"})
    }),handleErr
  }
  
  module.exports = {
    getTrips,
    getTripByName,
    postTrip,
    updateTrip,
    deleteTrip
  }

  
