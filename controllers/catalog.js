const db = require("../models");
const Catalog = db.Catalog


getCatalog = async (req, res) => {
    try {
        const getCatalog = await Catalog.findAll()
        console.log(getCatalog)
        return res.send(getCatalog).status(200);
    } catch (err) {
        return res.status(400).send({error :err.errors[0].message});
    }
}


createCatalog = async (req, res) => {
    var data = req.body;
    try {
        const createCatalog = await Catalog.create(data)  
        console.log(createCatalog)
        const response={id:createCatalog.id,name:createCatalog.name,description:createCatalog.description,imageUrl:createCatalog.url,price:{cost1:createCatalog.cost1,cost2:createCatalog.cost2,cost3:createCatalog.cost3},req:{req1:createCatalog.req1,req2:createCatalog.req2,req3:createCatalog.req3},category:createCatalog.category}
        return res.send(response).status(200);
    } catch (err) {
        return res.status(400).send({error :err.errors[0].message});
    }
}


module.exports= {createCatalog,getCatalog}   