// middleware: function that has access to request response cycles
// docs: https://expressjs.com/en/guide/error-handling.html
// fallback to 404
const notFound = (req,res,next) => { // 'next' moves onto next piece of middleware
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

// triggered through UNformatted MongoDB object ID _id ex: 1
const errorHandler = (err, req, res, next) =>{ // 'err' must be first param of error handler middleware
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode // error 500 - server error // sometimes even errors have 200 OK codes so we alter that
    res.status(statusCode)
    res.json({
        message:err.message
    })
}
export {notFound, errorHandler}
