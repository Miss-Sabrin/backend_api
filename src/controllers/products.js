//  const Product=require('../models/products');

const Product = require('../models/products');
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      desc,
      images,
      price,
      salePrice,
      salePriceDate,
      isTrending,
      units,
      catID,
    } = req.body;
    const product = new Product({
      name,
      desc,
      images,
      price,
      salePrice,
      salePriceDate,
      isTrending,
      units,
      catID,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//todo all prodects
exports.fetchProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("catID");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

 //todo find by id
  exports.getProduct=async(req,res)=>{
        try{
            const product=await Product.findById(req.params.id)


            res.status(200).json({status:"success",data:product})

        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    }

         ///todo delete product
  exports.deleteProduct=async(req,res)=>{
        try{
            const product=await Product.findByIdAndDelete(req.params.id);


            res.status(200).json({status:"success",data:'succesfullay deleted'})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    },
    
//      //todo update product
   exports.updateProduct=async(req,res)=>{
        try{
            const product=await Product.findByIdAndUpdate(req.params.id, req.body,{
                new:true,
        });


            res.status(200).json({status:"success",data:product})



        }catch(e){
            res.status(401).json({status:"fail",message:e.toString()});
        }

    }





















