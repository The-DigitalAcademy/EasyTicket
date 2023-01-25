const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//searching the destination
const getProfile = (request, res) => {
    const { email } = request.body;
                                                                                     

    pool.query('SELECT firstname,lastname,email FROM public.users WHERE email = $1', [email], (error, results) => {
    
        res.status(200).json(results.rows)
    }),handleErr

}

const updateProfile = (request, res) => {
    const id = parseInt(request.params.id);
    const { firstname,lastname} = request.body
  
try{
   
    pool.query('UPDATE public.users SET firstname = $1,lastname = $2 WHERE id=$3',[firstname,lastname, id], (error, results) => {
        // if (error) {
        //   throw error
        // }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"user details have been successfully updated"})
        
      }
    )
}catch (err) {
    console.log(err);
    res.status(500).json({
    error: "Database error occurred while updating!", //Database connection error
});
};

    
}
  
  module.exports = {
    getProfile,
    updateProfile
  }

  


