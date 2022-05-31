const db = require("../models");
const User = db.User
const Catalog=db.Catalog
const Product=db.Product

exports.buyProduct = async (req, res) => {
    const data = req.body;
    const catalogId=data.id;
    const UserWalletAddress=data.address;
    const response={}
                    
    try {
        // get catalog
            const catalog =await Catalog.findByPk(catalogId)
            console.log(catalog)
        // get user
            const user =await User.findByPk(UserWalletAddress)
            console.log(user)
            if (catalog!==null && user !==null){
                const case_1=user.cash1<=catalog.cost1 && user.cash2<=catalog.cash2 && user.cash3 <=catalog.cash3
                if (case_1){
                    console.log('Case_1 ',case_1)
                    response['success']=false
                    response['errorMessage']='error occured'
                
                }
                if( user.cash1>catalog.cost1 && user.cash2>catalog.cost2 && user.cash3 >catalog.cost3){
                    user.cash1=user.cash1-catalog.cost1
                    user.cash2=user.cash2-catalog.cost2
                    user.cash3=user.cash3-catalog.cost3
                    await user.save()
                    
                    const product=await Product.create({address:user.address,id:4})
                    console.log(product)
                    await product.save()


                }
            
            }
            
        
        return res.send(user).status(200);
    } catch (err) {
        console.log(err)
        return res.status(400).send(err);
    }
}