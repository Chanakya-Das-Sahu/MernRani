const home=(req,res)=>{
    try {
        res.status(200).send("This is homePage aaaa")
    } catch (error) {
        console.log(error)
    }
}

const register=(req,res)=>{
    try {
        console.log(req.body)
        res.status(200).json({message:req.body})
    } catch (error) {
        res.status(200).json("internal server error")
    }
}

module.exports = {home,register}
