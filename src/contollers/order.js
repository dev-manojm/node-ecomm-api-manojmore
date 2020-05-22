const Order = require('../models/order')

exports.createOrder = async (req,res)=>{
    const order=new Order({
        ...req.body,
        buyer : req.user._id
    })

    try{
        await order.save()
        res.status(201).send(order)
    }catch(e){
        res.status(400).send(e)
    }
}

exports.listOrders = async (req, res)=>{
    try{
        const order = await Order.find({buyer: req.user._id})
        res.send(order)    
    }catch(e){
        res.status().send()
    }
    
}