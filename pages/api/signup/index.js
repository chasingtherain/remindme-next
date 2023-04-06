import { hashPassword } from '../../../lib/auth';
import prisma from '../../../lib/prisma';


async function handler(req,res){
    // connect to db
    // read user input and hash password
    // create entry in db
    // return response to fe

    const {userEmail, userPassword} = req.body

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    if(!userEmail){
        res.status(422).json({message:"Invalid email address"})
        return
    }

    const hashedPassword = await hashPassword(userPassword)

    const newUser = await prisma.user.create({
        data: {
          email: userEmail,
          password: hashedPassword
        },
      })

    // Close the Prisma client to release the connection pool
    await prisma.$disconnect()

    res.status(200).json({message:"signup successful", user: newUser})
    // res.status(500).json({message:"failed to receive form information", content: req.body})
}

export default handler