const db = require("../models");
const User = db.User
const Catalog=db.Catalog
const Product=db.Product
const Asset=db.Asset

exports.buyProduct = async (req, res) => {
    const data = req.body;
    const catalogId=data.id;
    const UserWalletAddress=data.address;
    const response={}                  
    try {
        // get catalog
            const catalog =await Catalog.findByPk(catalogId)
            if (!catalog) {
                response['message']='catalog not found'
                return res.send(response).status(404);
            }
            console.log(catalog)
        // get user
            const user =await User.findByPk(UserWalletAddress)
            if (!user) {
                response['message']='user not found'
                return res.send(response).status(404);
            }
            if (catalog!==null && user !==null){
                const case_1=user.cash1<=catalog.cost1 && user.cash2<=catalog.cash2 && user.cash3 <=catalog.cash3
                if (case_1){
                    const reqCheck= catalog.req1 !== null && catalog.req2 !==null && catalog.req3 !==null
                    if (reqCheck){
                        const checkAsset=Asset.findOne({ where: { address: user.address } })
                    }
                    console.log('Case_1 ',case_1)
                    response['success']=false
                    response['errorMessage']='error occured'
                }
                if( user.cash1>catalog.cost1 && user.cash2>catalog.cost2 && user.cash3 >catalog.cost3){
                    user.cash1=user.cash1-catalog.cost1
                    user.cash2=user.cash2-catalog.cost2
                    user.cash3=user.cash3-catalog.cost3
                    await user.save()
                    const product=await Product.create({address:user.address,id:67,userAddress:user.address})
                    response['success']=true
                    response['data']={resources:{cash1:user.cash1 , cash2:user.cash2 , cash3:user.cash3}}
                }
                else{
                    response['message']="you are out of ballance"
                    return res.send(response).status(404);
                }
            }
        return res.send(response).status(200);
    } catch (err) {
        console.log(err)
        return res.status(400).send(err);
    }
}