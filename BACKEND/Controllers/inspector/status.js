const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getUsers = (request, res) => {

    // const {status} = request.body

    pool.query('SELECT COUNT(id) FROM public.users GROUP BY status', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

const getAllUsers = (request, res) => {

    // const {status} = request.body

    pool.query('SELECT fullname,status,amount FROM public.users', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

module.exports = {
    getUsers,
    getAllUsers
  }

