const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const report = (request, res) => {
    pool.query('SELECT u.fullname,h.depart_to,h.created_at,h.tokens FROM public.users u,public.historytrip h WHERE u.id=h.user_id', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

module.exports = {
    report
}

