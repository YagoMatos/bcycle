module.exports = (req, resp, next) => {
    resp.header('Acess-Control-Allow-Origin','*')
    resp.header('Acess-Control-Allow-Methods','GET,POST,PUT,PATH,DELETE')
    resp.header('Acess-Control-Allow-Headers','Origin, X-Request-With, Content-Type, Accept')
    next()
}