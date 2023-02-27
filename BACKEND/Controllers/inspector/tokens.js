const pool = require("../../Data Access/connection");


const updateTokens = (request, res) => {
  //const id = parseInt(request.params.id);
  const { id,input } = request.body
 
try{
  pool.query('UPDATE public.users SET amount=(amount + $1) WHERE id=$2',[input, id], (error, results) => {
    if (error) {
      throw error
    }
    //response.send(JSON.stringify(results));
    res.status(201).send({message:"wallet has been successfully updated"})
    
  }
)

}catch (err) {
  console.log(err);
  res.status(500).json({
  error: "Database error occurred while updating!", //Database connection error
});
};
 
}

const payingTrip = (request, res) => {
  //const id = parseInt(request.params.id);
  const { id,input } = request.body
 
try{
  pool.query('UPDATE public.users SET amount=(amount - $1) WHERE id=$2',[input, id], (error, results) => {
    if (error) {
      throw error
    }
    //response.send(JSON.stringify(results));
    res.status(201).send({message:"Money deducted"})
    
  }
)

}catch (err) {
  console.log(err);
  res.status(500).json({
  error: "Database error occurred while updating!", //Database connection error
});
};
 
}


const Historytrip = (req, res) => {
  //const id = parseInt(request.params.id);
  const { user_id,depart_to,tokens } = req.body
 
try{


  pool.query('INSERT INTO public.historytrip(user_id,depart_to,tokens) VALUES ($1, $2,$3)', [user_id,depart_to,tokens ], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send({message:"information has been successfully added to history"})
  })

}catch (err) {
  console.log(err);
  res.status(500).json({
  error: "Database error occurred while inserting !", //Database connection error
});
};
 
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

  module.exports = {

    updateTokens,
    payingTrip,
    Historytrip
  }