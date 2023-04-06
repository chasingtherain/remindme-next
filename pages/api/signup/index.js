function handler(req,res){
    const {userEmail, userPassword} = req.body
    
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    if(!userEmail){
        res.status(422).json({message:"Invalid email address"})
        return
    }
    console.log(req.body, userEmail, userPassword)
    res.status(200).json({message:"signup successful", email: req.body.email, pw: req.body.password})
    // res.status(500).json({message:"failed to receive form information", content: req.body})
}

export default handler