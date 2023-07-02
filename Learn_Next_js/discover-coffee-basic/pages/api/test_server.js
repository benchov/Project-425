export default (req, res) => {
    console.log("SERVER LOG ::",req.query.name)
    res.status(200).json({
        message: `Welcome ${req.query.name}!`
    });
}