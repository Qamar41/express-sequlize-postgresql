const db = require("../models");
const User = db.User
const { verifyToken } = require("../utils/jwt")

 exports.authentication = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = await verifyToken(token)
        const user = await User.findOne({
        where: {
            id: decoded.id
        }
    })
        if (!user) {
            throw new Error()
        }

        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}