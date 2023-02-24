const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getTrip = (request, res) => {
    pool.query('SELECT * FROM public.trip ORDER BY id ASC ', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

  
  const postTrip = (req, res) => {  

    const { departing_from,departing_to,price } = req.body

    pool.query('INSERT INTO public.trip(departing_from,departing_to,price) VALUES ($1, $2,$3)', [departing_from,departing_to,price ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"Trip information has been successfully added"})
    })
    
  }
  
  const updateTrip = (request, res) => {
    const id = parseInt(request.params.id);
    const { departing_from,departing_to,price} = request.body
  
    pool.query('UPDATE public.trip SET departing_from = $1, departing_to = $2, price = $3 WHERE id=$4',[departing_from,departing_to,price, id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"information has been successfully updated"})
        
      }
    )
  }

  const deleteTrip = (request, res) => {
    const id = parseInt(request.params.id)
   
  
    pool.query('DELETE FROM public.trip WHERE id = $1', [id], (error, results) => {
     
      res.status(200).send({message:"Company information has been successfully deleted"})
    }),handleErr
  }
  
  module.exports = {
    getTrip,
    postTrip,
    updateTrip,
    deleteTrip
  }

  
