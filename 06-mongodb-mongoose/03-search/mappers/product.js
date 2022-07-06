function mapProduct(product) {
  return {
    id: product.id,
    title: product.title,
    images: product.images,
    category: product.category,
    subcategory: product.subcategory,
    price: product.price,
    description: product.description,
  };
};

module.exports = function mapResults(productList) {
  newFormatList = {products:[]};
  productList.forEach((element, idx) => {
  newFormatList.products.push(mapProduct(element));
 });
 return newFormatList;
};
