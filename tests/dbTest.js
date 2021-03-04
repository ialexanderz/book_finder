const db = require('./models');

const userTest = async () => {
    try {
        const newUser = await db.user.create({
            userName: "test",
            password: "test"
        })
        console.log('Created a new user!', newUser.userName)


        const foundUser = await db.user.findOne({
            where: {
                userName: "test"
            }
        })
        console.log('Found the user!', foundUser.userName)
    } catch (err) {
        console.log(err)
    }
}
userTest();