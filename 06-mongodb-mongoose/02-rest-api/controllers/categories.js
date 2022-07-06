const userConvertFormat = require('../controllers/userConvertFormat');

/*
module.exports.categoryList = async function categoryList(ctx, next) {
  ctx.body = {categories: []};
};
*/

// const CategoryModel = require('./LS0/06-mongodb-mongoose/02-rest-api/models/Category.js'); 
// const CategoryModel = require('./02-rest-api/models/Category.js');
// 06-mongodb-mongoose\02-rest-api\models\Category.js
// const {productsBySubcategory, productList, productById} = require('./controllers/products');
// const {categoryList} = require('./controllers/categories');
const CategoryModel = require('../models/Category.js');
//../../app/config

module.exports.categoryList = async function categoryList(ctx, next) {
  const categories = await CategoryModel.find();
  // console.log('zz =', userConvertFormat);
  const obj = userConvertFormat.categoriesConversion(categories);
  console.log(JSON.stringify(obj,null,2));
 
  //ctx.body = {categories: []};

  ctx.body = obj;//{arrayCategories: []};
};

