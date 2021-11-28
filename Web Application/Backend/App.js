

const express=require("express");
const bodyparser=require("body-parser");
var cors = require('cors')
const { MongoClient } = require('mongodb');
const { AssertionError } = require("assert");

const app=express();
app.use(cors());

var finalreccomonadtion={
    '45674': [ 45682, 45690 ] ,
     '45682': [ 45674, 45690 ] ,
    '45690': [ 45674, 45682 ] ,
     '45674,45690': [ 45682 ] ,
     '45682,45690': [ 45674 ] 
};


const stripe = require("stripe")(
    "sk_test_51JGG5XSIYtYHGEyE8T3VDjdho1EqImgcx7nQ5E7aCy7rcEF4Wt6rtTg5gy4u5KlhrGxzPWTcPf97oTNTJ4R1THls00idaRfh2m"
  );
  

app.use(bodyparser.json());

app.get("/",async function(req,res){

 
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

   
    const client = new MongoClient(uri);
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        //await createListings(client,products);
        const cursor = await client.db("dn1").collection("Products").find();
        const arr= await cursor.toArray();
        const cursor2 = await client.db("dn1").collection("Orders").find();
            const arr2= await cursor2.toArray();
        var obj={"Products":arr,"Orders":arr2};
        res.send(obj);
    
    
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }



});


app.get("/cartpage",async function(req,res){

 
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

   
    const client = new MongoClient(uri);
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        //await createListings(client,products);
        const docs=await findcart(client);
        
        res.send(docs);
    
    
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }



});




app.post("/products",async function(req,res){
    
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        //await createListings(client,products);
        const docs=await Findone(client,req.body.id);
        const cursor = await client.db("dn1").collection("Allproducts").findOne({"_id":req.body.id});

        res.send(cursor);
    
    
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }
    
});
app.post("/qr",async function(req,res){
    
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        //await createListings(client,products);
        //const result = await client.db("dn1").collection("Cartproducts").insertOne(document);
        console.log("hi",req.body.prod);
         const result = await client.db("dn1").collection("Products").insertOne(req.body.prod);
    
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }
    
});

app.post("/cart",async function(req,res){
    console.log("hi cart");
    console.log(req.body);
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        //await createListings(client,products);
        const docs=await createListings(client,req.body);
      
    
    
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }
    
});
app.get("/completeorder",async function(req,res){
    console.log("hi cart");
    console.log(req.body);
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        //await createListings(client,products);
        // const docs=await createListings(client,req.body);
        const cursor = await client.db("dn1").collection("Cartproducts").find();
        const arr= await cursor.toArray();
        console.log(arr);
          console.log("hi");
        await client.db("dn1").collection("Cartproducts").deleteMany({});
        const result = await client.db("dn1").collection("Orders").insertMany(arr);
        console.log(res);
    
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }
    
});

app.get("/cartlength",async function(req,res){
    
  
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
       
        const cursor = await client.db("dn1").collection("Cartproducts").find().count();
        const cursor2 = await client.db("dn1").collection("Allproducts").find();
        
        const arr= await cursor2.toArray();
      
     
       var final={"count":cursor,"arr":arr};
        res.send(final);
        
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }
    
});

app.get("/store",async function(req,res){
    
  
    finalq();
  
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
       
        const cursor = await client.db("dn1").collection("Allproducts").find();
        const arr= await cursor.toArray();
        const j=JSON.stringify(arr);
     
        res.send(j);
        
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    
    }
    
});

app.post("/deleteproduct",async function(req,res){
    
   
    const uri = "mongodb+srv://Suriyaa:mthaniga@cluster0.rsh4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        //await createListings(client,products);
       // const docs=await createListings(client,req.body);
       console.log(req.body._id);
       var id=req.body._id;
       const res=await client.db("dn1").collection("CartProducts").deleteOne({"_id":id},function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      
      });
    
    
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
      
    }
    
    
});

app.post('/create-checkout-session', async (req, res) => {
    await console.log(req.body.total);
    
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Amount to be Paid',
            },
            unit_amount: req.body.total,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/Success',
      cancel_url: 'http://localhst:3000/Failure',
    });
  
    var obj={"url":session.url};
    res.send(obj);
  });
  

app.listen(7000,async function(){
console.log("listening");
});

async function Find(client){
    const cursor = await client.db("dn1").collection("Products").find();
   const arr= await cursor.toArray();
   const j=JSON.stringify(arr);
  return j;
}
async function findcart(client)
{
    const cursor = await client.db("dn1").collection("Cartproducts").find();
    const arr= await cursor.toArray();
    const j=JSON.stringify(arr);
   return j;
}


async function Findone(client,id){
    const cursor = await client.db("dn1").collection("Allproducts").findOne({"_id":id});
 
   const j=JSON.stringify(cursor);
  
  return j;
}
async function createListings(client, document){
    const result = await client.db("dn1").collection("Cartproducts").insertOne(document);
   console.log(result);

}


