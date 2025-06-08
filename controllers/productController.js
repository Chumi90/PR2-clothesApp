//Product Controllers

const Product = require('../models/Product.js');
const BaseHtml=require('../helpers/baseHtml.js');
const {showProductCreated,getProductCards,
  getProductCard,formEditProduct,getProductCardClient,
  getProductCardsClient,navigationBarUser,oneProductObject,
  navigationBarDashboard}=require('../helpers/template.js')

let productCreate='';
let unicProducts='';//Create to Nav Bar
const ProductCreate = {

/*______________________________________________Dash Board__________________________________________________________________________*/
  //Create a route to create a form to create a new product
  async newProduct(req,res){
     try {
        res.status(201).send(BaseHtml.baseHTML+BaseHtml.formNewProduct+BaseHtml.finalHTML);
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
        const product =await Product.create({...req.body});
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
      res.send(BaseHtml.baseHTML+BaseHtml.viewCreatedProduct+showProductCreated(productCreate)+BaseHtml.buttonBackCreate+BaseHtml.finalHTML);
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
        let ProductCategory=[...new Set(recibedProducts.map(objeto => objeto.category))]
        unicProducts="";
        unicProducts=recibedProducts;
        let oneProduct = oneProductObject(ProductCategory,recibedProducts);
        res.send(BaseHtml.baseHTML+navigationBarDashboard(unicProducts)+BaseHtml.buttonBack+getProductCards(oneProduct)+BaseHtml.finalHTML);
      }catch(error){
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to create a Product" });
      }
    },

//Show one product
  async product(req,res){
        try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          res.send(BaseHtml.baseHTML+navigationBarDashboard(unicProducts)+getProductCard(recibedProduct)+BaseHtml.buttonBackhome+BaseHtml.finalHTML);
        }catch(error){
          console.error(error);
            res.status(500).send({ message: "There was a problem trying to create a Product" });
        }
      },
//Modify a product
  async productModify(req,res){
      try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          res.send(BaseHtml.baseHTML+formEditProduct(recibedProduct)+BaseHtml.finalHTML);
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

//Show product by category
  async productsCategoryDashboard(req,res){
      try{
        const recibedProducts = await Product.find({category:`${req.params.category}`}).sort({"category":1});
        res.send(BaseHtml.baseHTMLProducts+navigationBarDashboard(unicProducts)+getProductCards(recibedProducts)+BaseHtml.finalHTML);
      }catch(error){
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to product by category" });
      }
    },
/*______________________________________________View Clients__________________________________________________________________________*/
  //Show all products to clients
  async productsClients(req,res){
      try{
        const recibedProducts = await Product.find().sort({"category":1}); //Require the product and Order by Category
        res.send(BaseHtml.baseHTMLProducts+navigationBarUser(recibedProducts)+getProductCardsClient(recibedProducts)+BaseHtml.finalHTML);
      }catch(error){
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to create a Product" });
      }
    },
//Show detail products to clients
  async productsDetailClients(req,res){
      try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          res.send(BaseHtml.baseHTMLProducts+navigationBarUser(unicProducts)+getProductCardClient(recibedProduct)+BaseHtml.finalHTML);
        }catch(error){
          console.error(error);
            res.status(500).send({ message: "There was a problem trying to create a Product of client" });
        }
    },
//Show product by category
  async productsCategoryClients(req,res){
      try{
        const recibedProducts = await Product.find({category:`${req.params.category}`}).sort({"category":1});
        res.send(BaseHtml.baseHTMLProducts+navigationBarUser(unicProducts)+getProductCardsClient(recibedProducts)+BaseHtml.finalHTML);
      }catch(error){
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to product by category" });
      }
    },


/*______________________________________________Initial__________________________________________________________________________*/
async initial(req,res){
      try{
          const recibedProducts = await Product.find().sort({"category":1});
          let ProductCategory=[...new Set(recibedProducts.map(objeto => objeto.category))]
          unicProducts="";
          unicProducts=recibedProducts;
          let oneProduct = oneProductObject(ProductCategory,recibedProducts);
          res.send(BaseHtml.baseHTMLProducts+navigationBarUser(recibedProducts)+getProductCardsClient(oneProduct)+BaseHtml.finalHTML);
        }catch(error){
          console.error(error);
            res.status(500).send({ message: "There was a problem trying to create a Product" });
        }
    },

/*______________________________________________API-JSON__________________________________________________________________________*/


async createProductAPI(req,res){
     try {
        const product =await Product.create(req.body);
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


async productsAPI(req,res){
      try{
        const recibedProducts = await Product.find().sort({"category":1}); //Require the product and Order by Category
         res.json(recibedProducts)
      }catch(error){
        console.error(error);
          res.status(500).send({ message: "There was a problem trying to create a Product" });
      }
    },

async productAPI(req,res){
        try{
          const recibedProduct = await Product.findById(`${req.params._id}`);
          res.json(recibedProduct)
        }catch(error){
          console.error(error);
            res.status(500).send({ message: "There was a problem trying to create a Product" });
        }
      },

async productChangedAPI(req,res){
      try{
          const product = await Product.findByIdAndUpdate(req.body._id,{...req.body},{ new: true });
      }catch (error){
        console.error(error);
              res.status(500).send({ message: "There was a problem trying to create a Product Modify" });
      }
  },

async deleteProductAPI(req,res){
      try{
          const product = await Product.findByIdAndDelete(req.body);
      }catch (error){
        console.error(error);
              res.status(500).send({ message: "There was a problem trying to create a Product Modify" });
      }
  },

}
module.exports = ProductCreate;

