module.exports.categoriesConversion = function (dbResult1) {
  const newFormatXX = {categories:[]};
  const newFormat = newFormatXX.categories;
  // console.log(JSON.stringify(dbResult,null,2));
  // console.log('+++++++++++transformation BEGINS');
  dbResult1.forEach((element, idx) => {
  // console.log('ffffuck');
    newFormat.push({});
    // console.log(element.title);
    // console.log('current idx =', idx);
    newFormat[idx].title = element.title;
    newFormat[idx].id = element._id;
    // console.log(element.subcategories[0]);
    newFormat[idx].subcategories = [];
    element.subcategories.forEach((element1, idx1) => {
    // console.log('fffuusk');
      newFormat[idx].subcategories.push({});
      newFormat[idx].subcategories[idx1].title = element1.title;
      newFormat[idx].subcategories[idx1].id = element1._id;
      });
  });
  // console.log('+++++++++++transformation ENDS');
  // console.log(JSON.stringify(newFormat,null,2));
  return newFormatXX;
};
/*
module.exports.categoriesConversion1 = function (dbResult1) {
  const newFormat = {categories: []};
  // console.log(JSON.stringify(dbResult,null,2));
  // console.log('+++++++++++transformation BEGINS');
  dbResult1.forEach((element, idx) => {
  // console.log('ffffuck');
    newFormat.push({});
    // console.log(element.title);
    // console.log('current idx =', idx);
    newFormat[idx].title = element.title;
    newFormat[idx].id = element._id;
    // console.log(element.subcategories[0]);
    newFormat[idx].subcategories = [];
    element.subcategories.forEach((element1, idx1) => {
    // console.log('fffuusk');
      newFormat[idx].subcategories.push({});
      newFormat[idx].subcategories[idx1].title = element1.title;
      newFormat[idx].subcategories[idx1].id = element1._id;
      });
  });
  // console.log('+++++++++++transformation ENDS');
  // console.log(JSON.stringify(newFormat,null,2));
  return newFormat;
};*/
//module.exports.categoriesConvertFormat = categoriesConvertFormat;


/*
{
  products: [
    {
      id: '5d20cf5bba02bff789f8e29f',
      title: 'Product1',
      images: ['image1', 'image2'],
      category: '5d20cf5bba02bff789f8e29d',
      subcategory: '5d20cf5bba02bff789f8e29e',
      price: 10,
      description: 'Description1'
    }
  ]
}

[
  {
    "_id": "62b1a8b92e9aad52b9d85110",
    "title": "Product1",
    "description": "Description1",
    "price": 10,
    "category": "62b1a8b92e9aad52b9d8510d",
    "subcategory": "62b1a8b92e9aad52b9d8510e",
    "images": [
      "image1"
    ],
    "__v": 0
  }
]
*/
module.exports.productListWithSubcategoryIdConversion = function (dbResult1) {
  //console.log(JSON.stringify(dbResult1,null,2));
  const newProductFormat = {products: []};
  const newProductFormatTmp = newProductFormat.products;
  dbResult1.forEach((element, idx) => {
    
    newProductFormatTmp.push({});
    newProductFormatTmp[idx].id = element._id;
    newProductFormatTmp[idx].title = element.title;
    newProductFormatTmp[idx].images = [].concat(element.images);
    newProductFormatTmp[idx].category = element.category;
    newProductFormatTmp[idx].subcategory = element.subcategory;
    newProductFormatTmp[idx].price = element.price;
    newProductFormatTmp[idx].description = element.description;
  });
  return newProductFormat;

};
/*
Пример ответа сервера:
```js
{
  product: {
    id: '5d20d32d3a0676032a9a3174',
    title: 'Product1',
    images: [ 'image1' ],
    category: '5d20d32d3a0676032a9a3172',
    subcategory: '5d20d32d3a0676032a9a3173',
    price: 10,
    description: 'Description1'
  }
}
*/

module.exports.productWithId = function (dbResult1) {
  //console.log(JSON.stringify(dbResult1,null,2));
  const newProductFormat = {product: {}};
  const newProductFormatTmp = newProductFormat.product;

    newProductFormatTmp.id = dbResult1[0]._id;
    newProductFormatTmp.title = dbResult1[0].title;
    newProductFormatTmp.images = [].concat(dbResult1[0].images);
    newProductFormatTmp.category = dbResult1[0].category;
    newProductFormatTmp.subcategory = dbResult1[0].subcategory;
    newProductFormatTmp.price = dbResult1[0].price;
    newProductFormatTmp.description = dbResult1[0].description;

    return newProductFormat;

};