import bcryptjs from "bcryptjs"
import prisma from "../../../lib/prisma"

async function handler(req,res){
    // receive user email and pw from FE
    // check if email exists in db
    // hash pw and check if it equals to db record
        // if yes, sign user in and send jwt token to client
        // if no, throw some eror
    const {userEmail, userPassword} = req.body

    const user = await prisma.user.findUnique({
        where: {
          email: userEmail
        }
      })
    
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    if(!user) {
        res.status(422).json({message:"email address does not exist on db"})
        return
    }
    bcryptjs.compare(userPassword, user.password, (err, result) => {
        if (err) {
          throw err;
        }
        if (result) {
          console.log('Passwords match');
          res.status(200).json({message:"login successful"})
        } else {
          console.log('Passwords do not match');
          res.status(422).json({message:"Invalid email or password"})
        }
    })

    // res.status(500).json({message:"failed to receive form information", content: req.body})
}

export default handler