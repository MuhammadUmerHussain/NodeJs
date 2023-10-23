const Products=require('../models/product')


const getAllProducts = async (req, res) => {

 const results=await Products.find({})
  res.status(200).json({ results });
};
const getAllProductsStatic = async (req, res) => {

  const {featured,name,company,sort}=req.query
  const queryObjects={}
  if(featured){
    queryObjects.featured=featured=='true'?true:false;
  }
  if(name){
    console.log(name,"name");
    queryObjects.name={$regex:name, $options :'i'};
  }
  if(company){
    queryObjects.company=company
  }
  
  console.log(queryObjects);
  let result=  Products.find(queryObjects)
  if(sort){
    console.log(result)
   const sortlist=sort.split(',').join(' ');
   result=result.sort(sortlist)
      
  }
  const products= await result
  res.status(200).json({products,nbHits:products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
