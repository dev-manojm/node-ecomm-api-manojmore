const Product = require('../models/product')

exports.createProd = async (req, res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

exports.readProds = async (req, res) => {
    try {
        const product = await Product.find({})
        res.send(product)
    } catch (e) {
        res.status().send()
    }

}

exports.findProd = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).send()
        }
        res.send(product)
    } catch (e) {
        res.status().send()
    }
}


exports.updateProd = async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'description', 'price']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    const id = req.params.id
    try {
        const product = await Product.findById(id)
        updates.forEach((update) => product[update] = req.body[update])
        await product.save()

        // const product = await Product.findByIdAndUpdate(id, req.body, {new:true, runValidators: true})
        if (!product) {
            return res.status(404).send()
        }
        res.send(product)
    } catch (e) {
        res.status(400).send()
    }

}

exports.deleteProd = async (req, res) => {

    const id = req.params.id
    try {
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).send()
        }
        res.send(product)
    } catch (e) {
        res.status(400).send()
    }

}