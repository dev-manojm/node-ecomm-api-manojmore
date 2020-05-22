const User = require('../models/user')

exports.signUp = async (req, res) => {
    const user = new User(req.body)
    try {

        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.logIn = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })

    } catch (e) {
        res.status(400).send()
    }
}

exports.logOut = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send('Logged Out')
    } catch (e) {
        res.status(500).send()
    }
}

exports.logOutAll = async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        // await Order.deleteMany({ buyer: user._id })(this functionaltiy can be used if we cont want to save the cart for the next time)
        res.send('Logged Out of all Sessions')
    } catch (e) {
        res.status(500).send()
    }
}


exports.getMyInfo = async (req, res) => {
    res.send(req.user)
}

exports.updateUser = async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))


    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    const id = req.params.id
    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }

}

exports.deleteUser = async (req, res) => {

    const id = req.user._id
    try {
        const user = await User.findByIdAndDelete(req.user._id)
        if(!user){
            return res.status(404).send()
        }

        res.send('User Deleted Succesfully! Sad to see you go.')
    } catch (e) {
        res.status(400).send()
    }

}


