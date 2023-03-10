const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

//getting the proof of payment
const getProof = (request, res) => {
    const { id } = request.body;
                                                                                     

    pool.query('SELECT user_id,proof FROM public.payment WHERE id = $1', [id], (error, results) => {
    
        res.status(200).json(results.rows)
    }),handleErr

}

const getProofuser = (req, res) => {
  
                                                                                   

  pool.query('SELECT payment.id as id,user_id,proof,fullname,datecreated FROM public.payment,public.users WHERE public.users.id =public.payment.user_id', [], (error, results) => {
  
      res.status(200).json(results.rows)
  }),handleErr

}
//daily
const getDailyProof = (request, res) => {

                                                                                   

  pool.query(`SELECT payment.id as id,user_id,proof,fullname,datecreated FROM public.payment,public.users WHERE datecreated >= date_trunc('day', now()) AND public.users.id =public.payment.user_id`, (error, results) => {
  
      res.status(200).json(results.rows)
  }),handleErr

}
//monthly
const getMonthlyProof = (request, res) => {

                                                                                   

  pool.query(`SELECT payment.id as id,user_id,proof,fullname,datecreated FROM public.payment,public.users WHERE datecreated >= date_trunc('month', now()) AND public.users.id =public.payment.user_id`, (error, results) => {
  
      res.status(200).json(results.rows)
  }),handleErr

}
//weekly
const getweeklyProof = (request, res) => {

                                                                                   

  pool.query(`SELECT payment.id as id,user_id,proof,fullname,datecreated FROM public.payment,public.users WHERE datecreated >= date_trunc('week', now()) AND public.users.id =public.payment.user_id`, (error, results) => {
  
      res.status(200).json(results.rows)
  }),handleErr

}

  module.exports = {
    getProof,getProofuser,
    getMonthlyProof,
    getweeklyProof,
    getDailyProof
  }