function handler(req,res){
    if (req.method !== 'POST') {
        const userEmail = req.body.email
        const userPassword = req.body.password

        if(!userEmail){
            res.status(422).json({message:"Invalid email address"})
            return
        }

        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    res.status(200).json({message:"form information received", content: req.body})
    // res.status(500).json({message:"failed to receive form information", content: req.body})
}

export default handler