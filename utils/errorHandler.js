module.exports = function (err, req, res, next) {
   // potential switch based on error code or msg

   // log error to monitor

   // for development
   console.error(err.message)
   return  res.redirect('/');
}