const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getCompInfo = (request, res) => {
    pool.query('SELECT * FROM public.comp_info ORDER BY id ASC ', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

  
  const postCompInfo = (req, res) => {  

    const { user_id, company_name, company_contact, company_email, company_account } = req.body

    pool.query('INSERT INTO public.comp_info(user_id, company_name, company_contact, company_email, company_account) VALUES ($1, $2,$3,$4,$5)', [user_id, company_name, company_contact, company_email, company_account ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send({message:"company information has been successfully added"})
    })
    
  }
  
  const updateCompInfo = (request, res) => {
    const id = parseInt(request.params.id);
    const { user_id, company_name, company_logo, company_contact, company_email, company_account } = request.body
  
    pool.query('UPDATE public.comp_info SET user_id = $1, company_name = $2, company_logo = $3, company_contact = $4, company_email = $5, company_account = $6 WHERE id=$7',[user_id, company_name, company_logo, company_contact, company_email, company_account, id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        res.status(201).send({message:"information has been successfully updated"})
        
      }
    )
  }

  const deleteCompInfo = (request, res) => {
    const id = parseInt(request.params.id)
   
  
    pool.query('DELETE FROM public.comp_info WHERE id = $1', [id], (error, results) => {
     
      res.status(200).send({message:"Company information has been successfully deleted"})
    }),handleErr
  }
  
  module.exports = {
    getCompInfo,
    postCompInfo,
    updateCompInfo,
    deleteCompInfo
  }

  
