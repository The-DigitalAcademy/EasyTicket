const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getTrips = (request, response) => {
    pool.query('SELECT * FROM public.trip ORDER BY id ASC ', (error, results) => {
     
      response.status(200).json(results.rows)
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

    pool.query('INSERT INTO public.TRIP(user_id, departing_from, travelling_to, price) VALUES ($1, $2,$3,$4)', [user_id, departing_from, travelling_to, price ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send()
    })
    
  }
  
  const updateTrip = (request, response) => {
    const id = parseInt(request.params.id);
    const { name,price,image,category,description } = request.body
  
    pool.query('UPDATE public.food SET name=$1, price=$2, image=$3, category=$4, description=$5  WHERE id=$6',[name,price,image,category,description, id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        response.status(200).send()
      }
    )
  }

  const deleteTrip = (request, response) => {
    const id = parseInt(request.params.id)
    console.log(id);
  
    pool.query('DELETE FROM public.trip WHERE id = $1', [id], (error, results) => {
     
      response.status(200).send()
    }),handleErr
  }
  
  module.exports = {
    getTrips,
    getTripByName,
    postTrip,
    updateTrip,
    deleteTrip
  }

  
