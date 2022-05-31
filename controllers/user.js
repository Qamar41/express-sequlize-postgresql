const db = require("../models");
const User = db.User

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({user}).status(200);
    } catch (err) {
        const message={'error':err.errors[0].message}
        return res.status(400).send(message);
    }
}