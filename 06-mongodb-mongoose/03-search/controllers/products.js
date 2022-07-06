const ProductModel = require('../models/Product.js');
const productNewFormat = require('../mappers/product.js');
// const { schema } = require('../models/Category');
// if(Object.keys(productWithId).length === 0) {

module.exports.productsByQuery = async function productsByQuery(ctx, next) {
  
  const productSchema = ProductModel.schema;

  console.log('productTextSearch1');
  console.log(ctx.request.query.query);
/*
  productSchema.index({title: 'text', description: 'text'},
      {name: 'TextSearchIndex', weights: {title: 10, description: 5}},
  );

  console.log('productTextSearch2');
  await ProductModel.cleanIndexes(); //delete all indexes which are not in schema
  await ProductModel.createIndexes(); // create indexes which are in schema
  */
  console.log('productTextSearch3');
  const txtSearchResult = await ProductModel.find({$text: {$search: String(ctx.request.query.query)}});
  console.log(Object.keys(txtSearchResult));
  console.log('TextSearch result');
  console.log(JSON.stringify(txtSearchResult,null,2));
  const ProductFormatted = productNewFormat(txtSearchResult);
  console.log('formatted product');
  console.log(JSON.stringify(ProductFormatted,null,2));
  console.log('productTextSearch4');
  //console.log(ctx.request.query.query);
  // console.log(JSON.stringify(txtSearchResult, null, 2));
  // return (JSON.stringify(txtSearchResult, null, 2));;


  //ctx.body = {products: []};
  ctx.body = ProductFormatted;
};
