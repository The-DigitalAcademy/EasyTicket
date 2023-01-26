const pool = require("../../Data Access/connection");


const updateTokens = (request, res) => {
  const id = parseInt(request.params.id);
  const { input } = request.body
 
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

  module.exports = {

    updateTokens
  }