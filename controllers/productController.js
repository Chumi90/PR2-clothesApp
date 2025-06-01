//Product Controllers

const Product = require('../models/Product.js')
const {baseHTML,finalHTML}=require('../helpers/baseHtml.js')
const {formNewProduct}=require('../helpers/template.js')

const ProductCreate = {
  //Create a route to create a form to create a new product
  async showNewProduct(req,res){
     try {
        res.status(201).send(baseHTML+formNewProduct+finalHTML);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to showEditProduct" });
    }
  },
  //Create a route to reate a new product and upload the product in Mongo db Atlass
  async createProduct(req,res){
     try {
        const product = await Product.create({...req.body, completed: false }); // sustituir ...req.body por los datos obtenidos del HTML
        res.redirect('/showNewProduct');
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
  },
  //Create a route to show a product by his ID
  async showProductById(req,res){
    try{

    }catch{
      console.error(error);
        res.status(500).send({ message: "There was a problem trying to create a task" });
    }
  },
}


module.exports = ProductCreate;