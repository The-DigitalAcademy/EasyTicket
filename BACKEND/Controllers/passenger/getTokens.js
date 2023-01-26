const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
    res.status(400).send({ error: err.message })
  }

const getToken = (req, res) => {  

    const { user_id } = req.body

    pool.query('SELECT amount FROM public.wallet WHERE user_id = $1', [user_id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    }),handleErr
    
}

const updateTokens = (request, res) => {
    const user_id = parseInt(request.params.user_id);
    const { input } = request.body
   
  
    pool.query('UPDATE public.wallet SET amount=(amount + $1) WHERE user_id=$2',[input, user_id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"wallet has been successfully updated"})
        
      }
    )
  }

  module.exports = {

    getToken,
    updateTokens
  }