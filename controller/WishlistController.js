import Wishlist from "../model/WishModel.js";

//untuk menampilkan semua wish
async function getWish(req,res) {
    try {
        const item = await Wishlist.findAll()
        return res.status(200).json({
            status:"Success",
            message: "Wishlist Retrieved",
            data: item
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            status: "error",
            message : error.message
        })
    }  
}

async function getWishById(req, res) {
  try {
    const item = await Wishlist.findOne({ where: { id: req.params.id } });
    if (!item) {
      return res.status(404).json({
        status: "Error",
        message: " Wishlist not found 😮",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Wishlist retrieved",
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
}

//function untuk menambah wishlist ke apps
async function createWish(req,res) {
    try {
        const item = await Wishlist.create(req.body)
        return res.status(200).json({
            status:"Success",
            message: "Wishlist Added",
            data: item
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            status: "error",
            message : error.message
        })
    }   
}

//update wish
async function updateWish(req,res) {
    try {
        await Wishlist.update(req.body,{
            where:{
            id: req.params.id
        }})
        return res.status(200).json({
            status:"Success",
            message:"Wish Updated",
        })
        
    } catch (error) {
        console.log(error.message)
    }   
}

//DELETE 
async function deleteWish(req,res) {
    try {
       await Wishlist.destroy({
        where:{
            id: req.params.id
          } 
       })
       res.status(200).json({
        status:"Success",
        msg: "Wish Deleted"});
    } catch (error) {
        console.log(error.message)
    }  
}

async function acquired(req,res) {
    try{
    const item = await Wishlist.findByPk(req.params.id)
    if(!item){
        return res.status(404).json({ message: 'Item not found' });}

    item.acquired = !item.acquired
    await item.save()
    res.json(item) 
    } catch(error){
        console.log(error)
    }
}

export {getWish,updateWish,createWish,deleteWish,acquired}
