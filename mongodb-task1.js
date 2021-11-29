//QUERIES
use products;
//Find all the information about each products----------------------

db.products.find({}, { _id: 0 }).pretty();



//Find the product price which are between 400 to 800----------------------

db.products.find({ product_price: { $gte: 400, $lte: 800 } }).pretty();





//Find the product price which are not between 400 to 600-------------------------

db.products.find({ product_price: { $not: { $gte: 400, $lte: 600 } } }).pretty();




//List the four product which are greater than 500 in price----------------------

db.products.find({ product_price: { $gte: 500 } }).limit(4);




//Find the product name and product material of each products-----------------------

db.products.find({},{_id:0,product_name:1,product_material:1});




//Find the product with a row id of 10-----------------------

db.products.find({ id: "10" })



//Find only the product name and product material-------------------

db.products.find({ id: "10" }, { product_name: 1, product_material: 1, _id: 0 });




//Find all products which contain the value of soft in product material---------------------

db.products.find({product_material:"Soft"})




//Find products which contain product color indigo  and product price 492.00-----------------------------------

db.products.find({ product_price: 492, product_color: "indigo" })




//Delete the products which product price value are same---------------------------------------

db.products.aggregate([{ $group: { _id: "$product_price", count: { $count: {} } } }, { $match: { count: { $gt: 1 } } }]).forEach(document => db.products.deleteMany({product_price:document._id}));
