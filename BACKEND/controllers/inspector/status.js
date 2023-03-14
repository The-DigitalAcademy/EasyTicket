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

const getStatusDate = (request, res) => {

  pool.query(`SELECT COUNT(status),TO_CHAR(created_at,'yyyy-mm-dd'),status as cat FROM public.users GROUP BY created_at,cat ORDER BY created_at ASC`, (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}

const getAllUsers = (request, res) => {

    // const {status} = request.body
let idvalue=6;
    pool.query('SELECT * FROM public.users WHERE id > $1',[idvalue], (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}


const getAllUsersActive = (request, res) => {

  // const {status} = request.body

  let active='active';
  let idvalue=6;

  pool.query('SELECT * FROM public.users WHERE status=$1 and id > $2',[active,idvalue], (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}


const getAllUsersInActive = (request, res) => {

  // const {status} = request.body

  let active='suspended';
  let idvalue=6;

  pool.query('SELECT * FROM public.users WHERE status=$1 and id > $2',[active,idvalue], (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}

const getDates = (request, res) => {

  // const {status} = request.body

  pool.query('SELECT created_at FROM public.users', (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}



// SELECT COUNT(id)
// 	FROM public.users
// 	WHERE id>6;

module.exports = {
    getUsers,
    getAllUsers,
    getDates,
    getStatusDate,
    getAllUsersActive,
    getAllUsersInActive
  }

