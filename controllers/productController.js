//Product Controllers

const Product = require('../models/Product.js')
const {baseHTML,finalHTML,formNewProduct,viewCreatedProduct,buttonBackCreate,buttonBack,buttonBackhome}=require('../helpers/baseHtml.js')
const {NewProductShow,getProductCards,getProductCard}=require('../helpers/template.js')

let productCreate="";

const ProductCreate = {
  //Create a route to create a form to create a new product
  async newProduct(req,res){
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
        const product = await Product.create({...req.body}); // sustituir ...req.body por los datos obtenidos del HTML
        productCreate=req.body;
        res.redirect('/dashboard/created');
    } catch (error) {
        if((req.body.price).indexOf(",") !== (-1)){
          res
            .status(200)
            .send({ message: "There was a problem with the price must use ‘.’, to decimals and could not contain characters"});
        }else{
          console.error(error);
          res
              .status(500)
              .send({ message: "There was a problem trying to create a the product" });
        }
    }
  },

  //Create a route to show the product created
  async showProductCreated(req,res){
    try{
      res.send(baseHTML+viewCreatedProduct+NewProductShow(productCreate)+buttonBackCreate+finalHTML);
      productCreate="";
    }catch{
      console.error(error);
        res.status(500).send({ message: "There was a problem trying to create a task" });
    }
  },
  //Show all products
  async products(req,res){
      try{
        const recibedProducts = await Product.find().sort({"category":1}); //Require the product and Order by Category 
        res.send(baseHTML+buttonBack+getProductCards(recibedProducts)+finalHTML);
      }catch{
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to create a task" });
      }
    },

//Show one product
  async product(req,res){
        try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          //error aquí
          res.send(baseHTML+getProductCard(recibedProduct)+buttonBackhome+finalHTML);//comentada la linea anterior funciona
        }catch{
          console.error(error);
            res.status(500).send({ message: "There was a problem trying to create a task" });
        }
      },
}

module.exports = ProductCreate;