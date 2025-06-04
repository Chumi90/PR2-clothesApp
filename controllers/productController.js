//Product Controllers

const Product = require('../models/Product.js')
const {baseHTML,finalHTML,formNewProduct,viewCreatedProduct,buttonBackCreate,buttonBack,buttonBackhome}=require('../helpers/baseHtml.js')
const {NewProductShow,getProductCards,getProductCard,formEditProduct,getProductCardClient,getProductCardsClient}=require('../helpers/template.js')

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
  
  //Create a route to create a new product and upload the product in Mongo db Atlass
  async createProduct(req,res){
     try {
        await Product.create({...req.body});
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
    }catch(error){
      console.error(error);
        res.status(500).send({ message: "There was a problem trying to create a Show new product created" });
    }
  },
  //Show all products
  async products(req,res){
      try{
        const recibedProducts = await Product.find().sort({"category":1}); //Require the product and Order by Category 
        res.send(baseHTML+buttonBack+getProductCards(recibedProducts)+finalHTML);
      }catch(error){
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to create a Product" });
      }
    },

//Show one product
  async product(req,res){
        try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          res.send(baseHTML+getProductCard(recibedProduct)+buttonBackhome+finalHTML);
        }catch(error){
          console.error(error);
            res.status(500).send({ message: "There was a problem trying to create a Product" });
        }
      },
//Modify a product
  async productModify(req,res){
      try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          res.send(baseHTML+formEditProduct(recibedProduct)+finalHTML);
      }catch (error){
        console.error(error);
              res.status(500).send({ message: "There was a problem trying to create a Product Modify" });
      }
  },
  
//Update one product
  async productChanged(req,res){
      try{
          const product = await Product.findByIdAndUpdate(req.params._id,{...req.body},{ new: true });
          productCreate=req.body;
          res.redirect('/dashboard/created');
      }catch (error){
        console.error(error);
              res.status(500).send({ message: "There was a problem trying to create a Product Modify" });
      }
  },
//Delete a product
  async deleteProduct(req,res){
      try{
          const product = await Product.findByIdAndDelete(req.params._id);
          res.redirect('/dashboard');
      }catch (error){
        console.error(error);
              res.status(500).send({ message: "There was a problem trying to create a Product Modify" });
      }
  },
  //Show all products to de user
  async productsClients(req,res){
      try{
        const recibedProducts = await Product.find().sort({"category":1}); //Require the product and Order by Category 
        res.send(baseHTML+getProductCardsClient(recibedProducts)+finalHTML);
      }catch(error){
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to create a Product" });
      }
    },
//Show detail products to de user
  async productsDetailClients(req,res){
      try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          res.send(baseHTML+getProductCardClient(recibedProduct)+finalHTML);
        }catch(error){
          console.error(error);
            res.status(500).send({ message: "There was a problem trying to create a Product" });
        }
    },
}


module.exports = ProductCreate;