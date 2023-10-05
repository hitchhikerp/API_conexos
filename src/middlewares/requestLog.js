module.exports = (req, res, next) => {
    console.log(`O IP: ${req.ip} acessou a rota: ${req.originalUrl}`);
    next();
}

