const db = require("../models");
const Asset = db.Asset;
const User = db.Asset;


getAsset = async (req, res) => {
    try {
        const getAsset = await Asset.findAll()
        console.log(getAsset)
        return res.send(getAsset).status(200);
    } catch (err) {
        return res.status(400).send({error :err.errors[0].message});
    }
}


createAsset = async (req, res) => {
    var data = req.body;
    try {
        console.log('1111111')
        console.log('address', data.userAddress);
        const createAsset = await Asset.create(data)  
        console.log(createAsset)
        return res.send(createAsset).status(200);
    } catch (err) {
        return res.status(400).send(err);
    }
}


module.exports= {createAsset,getAsset}