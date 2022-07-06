const userConvertFormat = require('../controllers/userConvertFormat');
const ProductModel = require('../models/Product.js');

module.exports.productsBySubcategory = async function productsBySubcategory(ctx, next) {
  const {subcategory} = ctx.query;
  subcatId = ctx.request.query.subcategory;
  console.log('function productsBySubcategory');
  console.log('ctx.query =', ctx.query);
  console.log('ctx.request.query.subcategory =', ctx.request.query.subcategory);
  console.log('subcategory =', subcategory);
  if (!subcategory) return next();
  console.log('subcategory defined');
  const productListWithSubcategoryId = await ProductModel.find({subcategory: String(subcatId)});
  console.log('db find result');
  console.log(JSON.stringify(productListWithSubcategoryId,null,2));
  const newProductFormat = userConvertFormat.productListWithSubcategoryIdConversion(productListWithSubcategoryId);
  //const productListWithSubcategoryId = await ProductModel.find(subcategory);
  console.log('conversion result');
  console.log(JSON.stringify(newProductFormat, null, 2));
  

  //productWithSubcategoryId = ProductModel.find

  //ctx.body = {};
  //console.log('ctx.request.url =', ctx.request.url);
  // console.log(JSON.stringify(newProductFormat,null,2));
  //ctx.body = newProductFormat;
  ctx.body = newProductFormat;

};

module.exports.productList = async function productList(ctx, next) {
  console.log('productList');
  console.log('ctx.request.url =', ctx.request.url);
  const productList = await ProductModel.find({});
  console.log('db find result');
  console.log(JSON.stringify(productList,null,2));
  const newProductFormat = userConvertFormat.productListWithSubcategoryIdConversion(productList);
  //const productListWithSubcategoryId = await ProductModel.find(subcategory);
  console.log('conversion result');
  console.log(JSON.stringify(newProductFormat, null, 2));

  ctx.body = newProductFormat;
  //ctx.body = {};
};

module.exports.productById = async function productById(ctx, next) {
  console.log('productById');
  let currentId = ctx.request.params.id;
  if (!isValidObjectID(String(currentId))) {
    ctx.status = 400;
    ctx.body = 'invalid Id'; 
  } else {
    console.log('db find result');
    const productWithId = await ProductModel.find({_id: String(currentId)});
    if(Object.keys(productWithId).length === 0) {
      ctx.status = 404;
      ctx.body = 'product with this ID does not exist'; 
    } else {
      console.log(JSON.stringify(productWithId,null,2));
      console.log('conversion result');
      const newProductFormat = userConvertFormat.productWithId(productWithId);
      console.log(JSON.stringify(newProductFormat, null, 2));
      ctx.body = newProductFormat;
    }
  }
  
  //productWithId

  

  //ctx.body = {};
};

function isValidObjectID(str) {
  str = str + '';
  var len = str.length, valid = false;
  if (len == 12 || len == 24) {
    valid = /^[0-9a-fA-F]+$/.test(str);
  }
  return valid;
};