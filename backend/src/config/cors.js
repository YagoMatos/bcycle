module.exports = (req, resp, next) => {
    resp.header('Access-Control-Allow-Origin','*')
    resp.header('Access-Control-Allow-Methods','GET, POST, PUT, PATH, DELETE, OPTIONS')
    resp.header('Access-Control-Allow-Headers','Origin, X-Request-With, Content-Type, Accept, Authorization')
    next()
}