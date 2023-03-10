const pool = require("../../Data Access/connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const report = (request, res) => {
    pool.query('SELECT u.fullname,h.depart_to,h.createdate,h.tokens FROM public.users u,public.historytrip h WHERE u.id=h.user_id', (error, results) => {
     
      res.status(200).json(results.rows)
    }),handleErr
}

//daily
const dailyreport = (request, res) => {
  pool.query(`SELECT u.fullname,h.depart_to,h.createdate,h.tokens FROM public.users u,public.historytrip h WHERE  h.createdate >= date_trunc('day', now()) AND u.id=h.user_id`, (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}
//monthly

const monthlyreport = (request, res) => {
  pool.query(`SELECT u.fullname,h.depart_to,h.createdate,h.tokens FROM public.users u,public.historytrip h WHERE h.createdate >= date_trunc('month', now()) AND u.id=h.user_id`, (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}
//weekly

const weeklyreport = (request, res) => {
  pool.query(`SELECT u.fullname,h.depart_to,h.createdate,h.tokens FROM public.users u,public.historytrip h WHERE h.createdate >= date_trunc('week', now()) AND u.id=h.user_id`, (error, results) => {
   
    res.status(200).json(results.rows)
  }),handleErr
}

module.exports = {
    report,
    dailyreport,
    weeklyreport,
    monthlyreport
}

