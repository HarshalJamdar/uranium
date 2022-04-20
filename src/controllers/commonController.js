
const req = require("express/lib/request")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")
const OrderModel= require("../models/orderModel")

const createProduct= async function(req, res) {
    let product = req.body
    let productCreated = await ProductModel.create(product)
    res.send({data: productCreated})
}

const createUser= async function(req, res) {
    let user = req.body
    let userCreated = await UserModel.create(user)
    res.send({data: userCreated})
}

const createOrder= async function(req, res) {
    let order = req.body
    let freeUser= req.headers["isfreeappuser"]
    console.log(freeUser)

    if(freeUser==="true"){
        order.amount=0;
        order.isFreeAppUser=true;   
        let orderCreated = await OrderModel.create(order)
        res.send({data: orderCreated})
    }else{
        let id=order.userId;
        let id1=order.productId;
        const balanceUser = await UserModel.find({_id:id}).select({_id:0,balance:1})
        console.log(balanceUser)
        let balance =balanceUser.map(element=>element.balance)
         console.log(balance)

        const priceProduct = await ProductModel.find({_id:id1}).select({_id:0,price:1})
        console.log(priceProduct)
        let price =priceProduct.map(element=>element.price)
        console.log(price)

        if(balance[0]>=price[0]){
            order.amount=price[0]
            order.isFreeAppUser=false;   
            let orderCreated = await OrderModel.create(order)
            res.send({data: orderCreated})
        }else{
            res.send({msg: "The user doesn't have enough balance."})
        }
    }
}
module.exports.createProduct=createProduct

module.exports.createUser=createUser

module.exports.createOrder=createOrder
