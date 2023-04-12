import bcrypt from "bcryptjs/dist/bcrypt";



export const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
}

export const authenticateWithDb = async (url,userInfo) => {
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    })
        .then(res => {
            // setUserEmail("")
            // setUserPassword("")
            return res.json()
        })
        .then(data => console.log("data: ", data))
        .catch(error => console.log(('Error fetching data:', error)))
}